<section id="projets" class="projects w-full py-16 sm:py-20 lg:py-24" aria-labelledby="projects-heading">
  <div class="site-container">
    <h2 id="projects-heading" class="animate-on-scroll mb-12 text-center text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
      {{ __('Mes projets', 'sage') }}
    </h2>
    <ul class="animate-on-scroll-stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      @foreach ($projects ?? [] as $project)
        <li class="group">
          <article class="glass-panel h-full rounded-2xl border border-brand-light/10 overflow-hidden transition-shadow hover:shadow-lg">
            @if (!empty($project['image_url']))
              <a href="{{ !empty($project['url']) ? esc_url($project['url']) : '#' }}" class="block aspect-video w-full overflow-hidden bg-brand-light/5" @if(!empty($project['url'])) target="_blank" rel="noopener noreferrer" @endif>
                <img src="{{ esc_url($project['image_url']) }}" alt="" class="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" width="400" height="225">
              </a>
            @endif
            <div class="p-6 sm:p-8">
              <h3 class="mb-2 text-xl font-semibold text-brand-light transition-colors group-hover:text-brand-accent">{{ $project['title'] }}</h3>
              <p class="mb-4 text-brand-light/80">{{ $project['desc'] }}</p>
              @if (!empty($project['technologies']))
                <ul class="flex flex-wrap gap-2" aria-label="{{ __('Technologies utilisées', 'sage') }}">
                  @foreach ($project['technologies'] as $tech)
                    <li>
                      <img src="{{ esc_url($tech['url']) }}" alt="" class="h-8 w-8 rounded-lg object-contain bg-brand-light/10 p-0.5" width="32" height="32" loading="lazy">
                    </li>
                  @endforeach
                </ul>
              @endif
              @if (!empty($project['url']))
                <p class="mt-4">
                  <a href="{{ esc_url($project['url']) }}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 rounded text-sm font-medium text-brand-accent hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark">
                    {{ __('Voir le site', 'sage') }}
                    <span aria-hidden="true">→</span>
                  </a>
                </p>
              @endif
            </div>
          </article>
        </li>
      @endforeach
    </ul>
  </div>
</section>
