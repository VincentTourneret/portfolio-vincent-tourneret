# Référence WordPress + Sage + Bedrock

## Structure des dossiers (résumé)

```
[racine Bedrock]
├── .env                    # Config sensible (ne pas commiter les secrets)
├── config/                 # Config PHP (application, database, etc.)
├── web/
│   ├── wp/                 # WordPress core (Composer)
│   ├── app/
│   │   ├── plugins/
│   │   ├── themes/
│   │   │   └── sage/
│   │   │       ├── app/           # PHP du thème
│   │   │       │   ├── setup.php
│   │   │       │   ├── filters.php
│   │   │       │   ├── Providers/
│   │   │       │   └── View/Composers/
│   │   │       ├── resources/
│   │   │       │   ├── views/    # Blade
│   │   │       │   ├── css/
│   │   │       │   └── js/
│   │   │       ├── public/build/ # Sortie Vite
│   │   │       └── vite.config.js
```

## Commandes utiles

- **Thème** : `cd web/app/themes/sage && npm run dev` ou `npm run build`
- **Bedrock** : `composer install`, `composer require wpackagist-theme/…` (à la racine)
- **Traductions Sage** : `npm run translate` (pot, update, compile) dans le thème

## Documentation

- [Bedrock](https://roots.io/bedrock/)
- [Sage](https://roots.io/sage/)
- [Acorn](https://github.com/roots/acorn) (Laravel pour Sage)
