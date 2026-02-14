@php
  $projet_id = get_the_ID();
  $image_id = get_post_thumbnail_id($projet_id);
  $image_url = $image_id ? wp_get_attachment_image_url($image_id, 'large') : null;
  $link = \App\PostTypes\Projet::getLink($projet_id);
  $gallery_ids = \App\PostTypes\Projet::getTechnologiesGallery($projet_id);
@endphp
<article @php(post_class('projet-single e-content'))>
  <header class="mb-8">
    @if ($image_url)
      <figure class="mb-6 overflow-hidden rounded-2xl">
        <img src="{{ esc_url($image_url) }}" alt="" class="w-full object-cover" width="800" height="450" loading="eager">
      </figure>
    @endif
    <h1 class="p-name text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
      {!! get_the_title() !!}
    </h1>
    @if (!empty($link))
      <p class="mt-2">
        <a href="{{ esc_url($link) }}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-brand-accent hover:underline">
          {{ __('Voir le site', 'sage') }}
          <span aria-hidden="true">→</span>
        </a>
      </p>
    @endif
  </header>

  <div class="prose prose-invert max-w-none">
    @php(the_content())
  </div>

  @if (!empty($gallery_ids))
    <aside class="mt-10" aria-label="{{ __('Technologies utilisées', 'sage') }}">
      <h2 class="mb-4 text-lg font-semibold text-brand-light">{{ __('Technologies', 'sage') }}</h2>
      <ul class="flex flex-wrap gap-3">
        @foreach ($gallery_ids as $aid)
          @php($url = wp_get_attachment_image_url($aid, 'thumbnail'))
          @if ($url)
            <li>
              <img src="{{ esc_url($url) }}" alt="" class="h-10 w-10 rounded-lg object-contain bg-brand-light/10 p-1" width="40" height="40" loading="lazy">
            </li>
          @endif
        @endforeach
      </ul>
    </aside>
  @endif
</article>
