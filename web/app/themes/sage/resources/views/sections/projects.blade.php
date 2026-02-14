<section id="projets" class="projects w-full py-16 sm:py-20 lg:py-24" aria-labelledby="projects-heading">
  <div class="site-container">
    <h2 id="projects-heading" class="animate-on-scroll mb-12 text-center text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
      {{ __('Mes projets', 'sage') }}
    </h2>
    <ul class="animate-on-scroll-stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      @foreach ([
        ['title' => 'Fabien Électricien', 'desc' => __('Site vitrine pour un électricien à Besançon : dépannage d’urgence, installation électrique neuve, rénovation et mise aux normes. Membre de Baticoop.', 'sage'), 'tags' => ['WordPress', 'Tailwind', 'Sage'], 'url' => 'https://www.fabienelectricien.fr/'],
        ['title' => __('Projet B', 'sage'), 'desc' => __('E-commerce ou outil métier – description courte.', 'sage'), 'tags' => ['Next.js', 'React']],
        ['title' => __('Projet C', 'sage'), 'desc' => __('Refonte ou MVP – technologies et livrables.', 'sage'), 'tags' => ['Sage', 'PHP']],
      ] as $project)
        <li class="group">
          <article class="glass-panel h-full rounded-2xl border border-brand-light/10 p-6 transition-shadow hover:shadow-lg sm:p-8">
            <h3 class="mb-2 text-xl font-semibold text-brand-light group-hover:text-brand-accent transition-colors">{{ $project['title'] }}</h3>
            <p class="mb-4 text-brand-light/80">{{ $project['desc'] }}</p>
            <ul class="flex flex-wrap gap-2" aria-label="{{ __('Technologies', 'sage') }}">
              @foreach ($project['tags'] as $tag)
                <li><span class="rounded-lg bg-brand-accent/20 px-3 py-1 text-sm text-brand-accent">{{ $tag }}</span></li>
              @endforeach
            </ul>
            @if (!empty($project['url']))
              <p class="mt-4">
                <a href="{{ esc_url($project['url']) }}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark rounded">
                  {{ __('Voir le site', 'sage') }}
                  <span aria-hidden="true">→</span>
                </a>
              </p>
            @endif
          </article>
        </li>
      @endforeach
    </ul>
  </div>
</section>
