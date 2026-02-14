---
name: wordpress-sage-bedrock
description: Guide l’intégration et le développement WordPress avec Bedrock et le thème Sage (Blade, Acorn, Vite, Tailwind). À utiliser quand on travaille sur le thème Sage, les templates Blade, la config Bedrock, les View Composers, les assets Vite ou l’ajout de plugins/thèmes via Composer.
---

# WordPress + Sage + Bedrock

## Contexte du projet

- **Bedrock** : WordPress géré par Composer. Racine du projet = racine Bedrock ; WordPress core dans `web/wp`, plugins/thèmes dans `web/app/plugins/` et `web/app/themes/`. Config dans `.env` et `config/`.
- **Sage** : thème dans `web/app/themes/sage/`. PHP dans `app/` (setup, filters, providers, View Composers), vues Blade dans `resources/views/`, assets dans `resources/css/`, `resources/js/`. Build avec Vite ; sortie dans `public/build/`. Tailwind v4 + `@roots/vite-plugin` (theme.json, entrées app/editor).

## Workflows courants

### Ajouter une page ou un template Blade

1. Créer ou modifier une vue dans `resources/views/` (ex. `page.blade.php`, `partials/content-*.blade.php`, ou un component dans `components/`).
2. Étendre le layout : `@extends('layouts.app')`, `@section('content')` … `@endsection`.
3. Utiliser `@include`, `@includeFirst` pour les partials ; `<x-nom>` pour les components.
4. Pour les boucles WordPress : `@while(have_posts()) @php(the_post())` … `@endwhile`. Traductions avec `__('Texte', 'sage')`.

### Ajouter ou modifier des assets (CSS/JS)

1. Fichiers sources dans `resources/css/` et `resources/js/`. Entrées déclarées dans `vite.config.js` (input du plugin laravel).
2. Dans le layout Blade : `@vite(['resources/css/app.css', 'resources/js/app.js'])`. En éditeur : géré dans `app/setup.php` (Vite pour editor.css / editor.js).
3. Build : `npm run dev` (thème) ou `npm run build`. Ne pas enqueue manuellement les mêmes entrées Vite avec `wp_enqueue_*`.

### Enregistrer des données pour les vues (View Composer)

1. Créer une classe dans `app/View/Composers/` (ex. `App.php`) qui reçoit la vue et appelle `$view->with('key', $value)`.
2. Enregistrer dans `ThemeServiceProvider::boot()` : `View::composer('layouts.app', AppComposer::class)` (ou la vue ciblée).
3. Utiliser les variables dans Blade comme d’habitude (`$key`).

### Config et environnement

- Variables sensibles uniquement dans `.env` (DB_*, WP_HOME, WP_SITEURL, AUTH_KEY, etc.). Ne pas les mettre en dur dans le code.
- Plugins/thèmes WordPress : les ajouter via Composer (`require wpackagist-theme/…` ou `wpackagist-plugin/…`) puis `composer install`. Fichiers dans `web/app/themes/` ou `web/app/plugins/`.

## Rappels

- **Échappement** : `{{ $var }}` en Blade ; `{!! !!}` seulement pour du HTML intentionnel et sûr.
- **Text domain** : toujours `'sage'` pour les chaînes du thème.
- **Chemins** : utiliser les helpers (Acorn, `public_path()`, `Vite::asset()`, `@vite()`) plutôt que des chemins en dur.
