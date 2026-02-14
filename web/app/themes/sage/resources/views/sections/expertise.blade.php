@php
  $expertise_cards = [
    [
      'title' => __('Langage et framework', 'sage'),
      'description' => __('Applications web modernes avec React et Next.js : SSR, composants réutilisables et performances optimisées.', 'sage'),
      'techs' => [
        ['slug' => 'react', 'label' => 'React'],
        ['slug' => 'nextdotjs', 'label' => 'Next.js'],
      ],
    ],
    [
      'title' => __('CRM, WordPress et WooCommerce', 'sage'),
      'description' => __('Sites vitrines, e-commerce et outils métier : WordPress, WooCommerce et intégrations CRM sur mesure.', 'sage'),
      'techs' => [
        ['slug' => 'wordpress', 'label' => 'WordPress'],
        ['slug' => 'woocommerce', 'label' => 'WooCommerce'],
      ],
    ],
    [
      'title' => __('Base de données', 'sage'),
      'description' => __('Modélisation, requêtes et maintenance : PostgreSQL et MariaDB pour des données fiables et performantes.', 'sage'),
      'techs' => [
        ['slug' => 'postgresql', 'label' => 'PostgreSQL'],
        ['slug' => 'mariadb', 'label' => 'MariaDB'],
      ],
    ],
    [
      'title' => __('Déploiement', 'sage'),
      'description' => __('Mise en production et hébergement : conteneurisation Docker et déploiement automatisé avec CapRover.', 'sage'),
      'techs' => [
        ['slug' => 'docker', 'label' => 'Docker'],
      ],
    ],
  ];
  $icon_color = 'CF9D7B';
  $icon_base = 'https://cdn.simpleicons.org';
@endphp
<section id="expertise" class="expertise expertise--with-bg w-full py-16 sm:py-20 lg:py-24" aria-labelledby="expertise-heading" style="background-image: url('{{ get_template_directory_uri() }}/public/image/bg-1.png');">
  <div class="site-container relative z-10">
    <h2 id="expertise-heading" class="animate-on-scroll mb-12 text-center text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
      {{ __("Domaines d'expertise", 'sage') }}
    </h2>
    <ul class="animate-on-scroll-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
      @foreach ($expertise_cards as $card)
        <li>
          <article class="glass-panel expertise-card h-full rounded-2xl border border-brand-light/10 p-6 transition-shadow hover:shadow-lg sm:p-8">
            <div class="expertise-card__logos mb-4 flex flex-wrap justify-center gap-3">
              @foreach ($card['techs'] as $tech)
                <img
                  src="{{ $icon_base }}/{{ $tech['slug'] }}/{{ $icon_color }}"
                  alt="{{ $tech['label'] }}"
                  width="32"
                  height="32"
                  class="expertise-card__logo h-8 w-8 object-contain opacity-90 transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              @endforeach
            </div>
            <h3 class="mb-2 font-serif text-lg font-semibold italic text-brand-light sm:text-xl">
              {{ $card['title'] }}
            </h3>
            <p class="text-sm leading-relaxed text-brand-light/85">
              {{ $card['description'] }}
            </p>
          </article>
        </li>
      @endforeach
    </ul>
  </div>
</section>
