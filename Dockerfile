# PHP 8.2 Apache pour Bedrock + Sage
FROM php:8.5-apache

# Document root = dossier "web" (Bedrock)
ENV APACHE_DOCUMENT_ROOT /var/www/html/web
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf \
    && sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Activer mod_rewrite (requis WordPress)
RUN a2enmod rewrite headers

# Extensions PHP requises par WordPress / Bedrock
# Note: opcache est déjà fourni et activé dans l'image php:8.5-apache, ne pas le réinstaller
RUN apt-get update && apt-get install -y --no-install-recommends \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    libcurl4-openssl-dev \
    libicu-dev \
    unzip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
    pdo_mysql \
    mysqli \
    zip \
    intl \
    gd \
    exif \
    bcmath \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Composer (pour Bedrock / Sage)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER=1

# Droits pour l'utilisateur www-data sur le répertoire
RUN chown -R www-data:www-data /var/www/html
