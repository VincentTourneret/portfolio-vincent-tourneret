@php
  $timeline_events = [
    [
      'start_date' => ['year' => '2024', 'month' => '1'],
      'end_date' => ['year' => '2025'],
      'text' => [
        'headline' => __('Développeur full stack', 'sage'),
        'text' => __('Freelance / Projets variés', 'sage'),
      ],
    ],
    [
      'start_date' => ['year' => '2020', 'month' => '1'],
      'end_date' => ['year' => '2024', 'month' => '12'],
      'text' => [
        'headline' => __('Intégrateur / Développeur front', 'sage'),
        'text' => __('Agence ou studio', 'sage'),
      ],
    ],
    [
      'start_date' => ['year' => '2016', 'month' => '9'],
      'end_date' => ['year' => '2020', 'month' => '6'],
      'text' => [
        'headline' => __('Formation & études', 'sage'),
        'text' => __('Web & développement', 'sage'),
      ],
    ],
  ];

  $formatDateRange = function ($start, $end) {
    $s = isset($start['month']) ? $start['month'] . '/' : '';
    $s .= $start['year'];
    $e = isset($end['month']) ? $end['month'] . '/' : '';
    $e .= $end['year'];
    return $s . ' – ' . $e;
  };
@endphp
<section id="experiences" class="experiences experiences--with-bg w-full py-16 sm:py-20 lg:py-24" aria-labelledby="experiences-heading" style="background-image: url('{{ get_template_directory_uri() }}/public/image/bg-3.png');">
  <div class="site-container relative z-10">
    <h2 id="experiences-heading" class="animate-on-scroll mb-12 text-center text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
      {{ __('Mon expérience', 'sage') }}
    </h2>
    <div id="experiences-timeline" class="experiences-timeline relative mx-auto max-w-5xl">
      {{-- Ligne verticale animée par GSAP --}}
      <div class="js-timeline-line timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 origin-top bg-brand-accent/30 lg:left-1/2" aria-hidden="true"></div>

      @foreach ($timeline_events as $i => $event)
        @php
          $isRight = $i % 2 === 1;
          $dateRange = $formatDateRange($event['start_date'], $event['end_date']);
        @endphp
        <div class="js-timeline-item timeline-item grid grid-cols-1 gap-y-4 py-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8 {{ $isRight ? 'timeline-item--right' : 'timeline-item--left' }}">
          @if ($isRight)
            <div class="hidden lg:col-start-1 lg:order-1 lg:block"></div>
          @endif
          <div class="js-timeline-content timeline-content timeline-card timeline-card--{{ $i }} order-first w-full max-w-md rounded-2xl border px-5 py-4 shadow-xl backdrop-blur sm:px-6 sm:py-5 mx-auto text-center {{ $isRight ? 'lg:order-3 lg:col-start-3 lg:justify-self-start lg:mx-0 lg:text-right' : 'lg:order-1 lg:col-start-1 lg:justify-self-end lg:mx-0 lg:text-left' }}">
            <p class="mb-1 text-sm font-medium timeline-card__date">{{ $dateRange }}</p>
            <h3 class="font-serif text-xl font-semibold italic text-brand-light sm:text-2xl">
              {{ $event['text']['headline'] }}
            </h3>
            <p class="mt-2 text-brand-light/85">{{ $event['text']['text'] }}</p>
          </div>
          <div class="js-timeline-dot timeline-dot timeline-dot--{{ $i }} order-2 relative z-10 mx-auto flex h-4 w-4 shrink-0 items-center justify-center self-center rounded-full border-2 bg-brand-dark shadow-[0_0_0_4px_var(--section-bg-d)] lg:col-start-2 lg:order-2 lg:mx-0" aria-hidden="true"></div>
          @if (!$isRight)
            <div class="hidden lg:col-start-3 lg:order-3 lg:block"></div>
          @endif
        </div>
      @endforeach
    </div>
  </div>
</section>
