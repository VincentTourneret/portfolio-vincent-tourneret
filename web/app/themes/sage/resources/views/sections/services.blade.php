<section id="services" class="services w-full py-16 sm:py-20 lg:py-24" aria-labelledby="services-heading">
  <div class="site-container">
    <h2 id="services-heading" class="animate-on-scroll mb-12 text-center text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
      {{ __('Mes services', 'sage') }}
    </h2>
    <ul class="animate-on-scroll-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      @foreach ([
        [
          'title' => __('Site vitrine', 'sage'),
          'desc' => __('Présentation de votre activité, de vos produits ou de votre entreprise avec un design soigné et une mise en avant de votre image.', 'sage'),
          'variant' => 'accent',
        ],
        [
          'title' => __('Site e-commerce', 'sage'),
          'desc' => __('Boutique en ligne clé en main : catalogue, panier, paiement et gestion des commandes pour vendre sur le web.', 'sage'),
          'variant' => 'surface',
        ],
        [
          'title' => __('Applications web et mobile', 'sage'),
          'desc' => __('Applications sur mesure pour le web et mobile (iOS / Android), de l’idée au déploiement.', 'sage'),
          'variant' => 'muted',
        ],
      ] as $service)
        <li class="service-card-glow">
          <div class="service-card-inner service-card-inner--{{ $service['variant'] }}">
            <h3 class="mb-3 text-xl font-semibold text-brand-light">{{ $service['title'] }}</h3>
            <p class="text-brand-light/80">{{ $service['desc'] }}</p>
          </div>
        </li>
      @endforeach
    </ul>
  </div>
</section>
