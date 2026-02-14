/**
 * Liquid Glass effect – carte de déplacement SVG et filtre.
 * Inspiré de https://kube.io/blog/liquid-glass-css-svg/
 * Convex squircle : déplacement radial vers l'intérieur sur le bord (bezel).
 * Chrome uniquement pour backdrop-filter avec filtre SVG.
 */

const MAP_WIDTH = 256;
const MAP_HEIGHT = 128;
const BEZEL_WIDTH = 0.12; // largeur du bord en ratio 0..1
const REFRACTION_SCALE = 25; // scale du feDisplacementMap (pixels)

/**
 * Profil convex squircle (Apple) : transition douce bord → plat.
 * x dans [0, 1], retourne hauteur dans [0, 1].
 */
function squircleHeight(x) {
  if (x >= 1) return 0;
  const t = 1 - x;
  return Math.pow(1 - Math.pow(t, 4), 0.25);
}

/**
 * Distance normalisée au bord du rectangle (0 = bord, 1 = centre).
 * Pour un point (nx, ny) dans [0,1]², avec border radius r.
 */
function edgeDistance(nx, ny, r = 0.08) {
  const left = nx;
  const right = 1 - nx;
  const top = ny;
  const bottom = 1 - ny;
  if (left <= r && top <= r) {
    const dx = nx - r;
    const dy = ny - r;
    return Math.max(0, r - Math.sqrt(dx * dx + dy * dy)) / r;
  }
  if (right <= r && top <= r) {
    const dx = nx - (1 - r);
    const dy = ny - r;
    return Math.max(0, r - Math.sqrt(dx * dx + dy * dy)) / r;
  }
  if (left <= r && bottom <= r) {
    const dx = nx - r;
    const dy = ny - (1 - r);
    return Math.max(0, r - Math.sqrt(dx * dx + dy * dy)) / r;
  }
  if (right <= r && bottom <= r) {
    const dx = nx - (1 - r);
    const dy = ny - (1 - r);
    return Math.max(0, r - Math.sqrt(dx * dx + dy * dy)) / r;
  }
  return Math.min(left, right, top, bottom);
}

/**
 * Génère la carte de déplacement pour un rectangle arrondi (convex).
 * Chaque pixel : vecteur (dx, dy) normalisé, magnitude selon profil squircle.
 * R = 128 + dx*127, G = 128 + dy*127 (article kube.io).
 */
function generateDisplacementMap() {
  const canvas = document.createElement('canvas');
  canvas.width = MAP_WIDTH;
  canvas.height = MAP_HEIGHT;
  const ctx = canvas.getContext('2d');
  const imageData = ctx.createImageData(MAP_WIDTH, MAP_HEIGHT);
  const data = imageData.data;

  let maxMagnitude = 0;
  const vectors = [];

  for (let py = 0; py < MAP_HEIGHT; py++) {
    for (let px = 0; px < MAP_WIDTH; px++) {
      const nx = (px + 0.5) / MAP_WIDTH;
      const ny = (py + 0.5) / MAP_HEIGHT;
      const d = edgeDistance(nx, ny);
      if (d >= BEZEL_WIDTH) {
        vectors.push({ dx: 0, dy: 0, mag: 0 });
        continue;
      }
      const t = d / BEZEL_WIDTH;
      const magnitude = squircleHeight(1 - t);
      // Vecteur vers le centre : on échantillonne depuis l’extérieur (refraction inward)
      const dirX = nx - 0.5;
      const dirY = ny - 0.5;
      const len = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
      const dx = (dirX / len) * magnitude;
      const dy = (dirY / len) * magnitude;
      const mag = Math.sqrt(dx * dx + dy * dy);
      if (mag > maxMagnitude) maxMagnitude = mag;
      vectors.push({ dx, dy, mag });
    }
  }

  for (let i = 0; i < vectors.length; i++) {
    const { dx, dy, mag } = vectors[i];
    const scale = maxMagnitude > 0 ? 1 / maxMagnitude : 0;
    const rx = 128 + Math.round(Math.max(-1, Math.min(1, dx * scale)) * 127);
    const gy = 128 + Math.round(Math.max(-1, Math.min(1, dy * scale)) * 127);
    const idx = i * 4;
    data[idx] = rx;
    data[idx + 1] = gy;
    data[idx + 2] = 128;
    data[idx + 3] = 255;
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/png');
}

/**
 * Vérifie si le navigateur supporte backdrop-filter avec url() (Chrome / Chromium).
 * @see https://kube.io/blog/liquid-glass-css-svg/
 */
function supportsLiquidGlassBackdrop() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  try {
    return CSS.supports('backdrop-filter', 'url(#x)');
  } catch {
    return false;
  }
}

/**
 * Crée et injecte le filtre SVG Liquid Glass, puis l'applique au header.
 */
function initLiquidGlassHeader() {
  const panel = document.querySelector('.glass-panel-liquid');
  if (!panel) return;

  const supported = supportsLiquidGlassBackdrop();
  if (!supported) {
    panel.classList.add('liquid-glass-fallback');
    return;
  }

  const mapDataUrl = generateDisplacementMap();
  const svgNs = 'http://www.w3.org/2000/svg';
  const filter = document.createElementNS(svgNs, 'filter');
  filter.setAttribute('id', 'liquidGlassHeader');
  filter.setAttribute('x', '-20%');
  filter.setAttribute('y', '-20%');
  filter.setAttribute('width', '140%');
  filter.setAttribute('height', '140%');
  filter.setAttribute('color-interpolation-filters', 'sRGB');

  const feImage = document.createElementNS(svgNs, 'feImage');
  feImage.setAttribute('href', mapDataUrl);
  feImage.setAttribute('x', '0');
  feImage.setAttribute('y', '0');
  feImage.setAttribute('width', String(MAP_WIDTH));
  feImage.setAttribute('height', String(MAP_HEIGHT));
  feImage.setAttribute('result', 'displacementMap');
  filter.appendChild(feImage);

  const feDisplacementMap = document.createElementNS(svgNs, 'feDisplacementMap');
  feDisplacementMap.setAttribute('in', 'SourceGraphic');
  feDisplacementMap.setAttribute('in2', 'displacementMap');
  feDisplacementMap.setAttribute('scale', String(REFRACTION_SCALE));
  feDisplacementMap.setAttribute('xChannelSelector', 'R');
  feDisplacementMap.setAttribute('yChannelSelector', 'G');
  feDisplacementMap.setAttribute('result', 'refracted');
  filter.appendChild(feDisplacementMap);

  const defs = document.createElementNS(svgNs, 'defs');
  defs.appendChild(filter);
  const svg = document.createElementNS(svgNs, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('style', 'position:absolute;width:0;height:0;pointer-events:none');
  svg.appendChild(defs);

  document.body.appendChild(svg);
  panel.classList.add('liquid-glass-ready');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLiquidGlassHeader);
} else {
  initLiquidGlassHeader();
}
