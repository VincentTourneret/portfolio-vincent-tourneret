<header id="site-header" class="banner banner--scroll fixed left-0 right-0 top-6 z-50 w-full" role="banner" aria-hidden="true">
  <div class="site-container">
  <div class="banner__inner relative flex w-full items-center justify-between gap-4 rounded-2xl border border-brand-light/10 bg-brand-surface/80 px-5 py-4 shadow-sm backdrop-blur-md sm:px-6 sm:py-4 lg:px-8 lg:py-4">
    <a
      class="brand flex items-center focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
      href="{{ home_url('/') }}"
      aria-label="{{ $siteName }}"
    >
      <img
        src="{{ get_template_directory_uri() }}/public/image/logo.png"
        alt="{{ $siteName }}"
        class="h-8 w-auto sm:h-9"
        width="120"
        height="36"
        fetchpriority="high"
      />
    </a>

    <button
      type="button"
      id="burger-toggle"
      class="burger-trigger flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-brand-light transition-colors hover:bg-brand-light/10 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-surface lg:hidden"
      aria-label="{{ __('Ouvrir le menu', 'sage') }}"
      aria-expanded="false"
      aria-controls="nav-menu"
      data-close-label="{{ __('Fermer le menu', 'sage') }}"
    >
      <span class="burger-icon" aria-hidden="true"></span>
    </button>

    <div id="nav-menu" class="nav-menu" role="navigation" aria-label="{{ __('Navigation principale', 'sage') }}">
    @if (has_nav_menu('primary_navigation'))
      <nav class="nav-primary flex items-center" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!!
          wp_nav_menu([
            'theme_location' => 'primary_navigation',
            'menu_class' => 'nav flex list-none flex-col gap-1 lg:flex-row lg:flex-wrap lg:gap-2',
            'container' => false,
            'echo' => false,
            'fallback_cb' => false,
            'link_before' => '',
            'link_after' => '',
          ])
        !!}
      </nav>
    @else
      <nav class="nav-primary flex items-center" aria-label="{{ __('Navigation principale', 'sage') }}">
        <ul class="nav flex list-none flex-col gap-1 lg:flex-row lg:flex-wrap lg:gap-2">
          <li><a href="#a-propos">{{ __('À propos', 'sage') }}</a></li>
          <li><a href="#services">{{ __('Services', 'sage') }}</a></li>
          <li><a href="#experiences">{{ __('Expérience', 'sage') }}</a></li>
          <li><a href="#projets">{{ __('Projets', 'sage') }}</a></li>
          <li><a href="#expertise">{{ __('Expertise', 'sage') }}</a></li>
          <li><a href="#contact">{{ __('Contact', 'sage') }}</a></li>
        </ul>
      </nav>
    @endif
    </div>
  </div>
  </div>
</header>
