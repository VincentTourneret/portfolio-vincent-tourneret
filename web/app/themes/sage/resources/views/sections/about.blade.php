@php
  $workspaceBgUrl = get_template_directory_uri() . '/public/image/workspace.png';
@endphp
<section
  id="a-propos"
  class="about relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
  aria-labelledby="about-heading"
>
  <div
    class="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[5px]"
    style="background-image: url('{{ $workspaceBgUrl }}');"
    aria-hidden="true"
  ></div>
  <div class="site-container relative z-10">
    <div class="animate-on-scroll mx-auto max-w-4xl rounded-2xl border border-brand-light/10 bg-brand-surface p-8 shadow-lg sm:p-10 lg:p-12">
      <h2 id="about-heading" class="mb-6 text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
        {{ __('À propos', 'sage') }}
      </h2>
      <div class="prose prose-invert max-w-none text-brand-light/90">
        <p class="text-lg leading-relaxed">
          {{ __('Passionné par le web et les technologies modernes, j’accompagne les entreprises et les porteurs de projets dans la conception et le déploiement de sites et d’applications performants et accessibles.', 'sage') }}
        </p>
        <p class="mt-4 text-lg leading-relaxed">
          {{ __('Mon approche allie rigueur technique, sens du design et écoute du besoin client pour livrer des solutions durables et évolutives.', 'sage') }}
        </p>
      </div>
    </div>
  </div>
</section>
