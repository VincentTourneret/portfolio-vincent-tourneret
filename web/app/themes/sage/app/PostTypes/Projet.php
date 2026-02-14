<?php

namespace App\PostTypes;

/**
 * Custom Post Type "Projet" : image, titre, description, lien, galerie technologies.
 */
class Projet
{
    public const POST_TYPE = 'projet';

    public const META_LINK = '_projet_link';

    public const META_TECH_GALLERY = '_projet_technologies_gallery';

    public const NONCE_ACTION = 'projet_meta';

    public const NONCE_FIELD = 'projet_meta_nonce';

    /**
     * Enregistre le CPT et les hooks.
     */
    public static function register(): void
    {
        add_action('add_meta_boxes', [__CLASS__, 'addMetaBoxes']);
        add_action('save_post_'.self::POST_TYPE, [__CLASS__, 'saveMeta'], 10, 2);
        add_action('admin_enqueue_scripts', [__CLASS__, 'enqueueAdminAssets']);
    }

    /**
     * Enregistre le Custom Post Type "projet".
     */
    public static function registerPostType(): void
    {
        register_post_type(self::POST_TYPE, [
            'labels' => [
                'name' => __('Projets', 'sage'),
                'singular_name' => __('Projet', 'sage'),
                'add_new' => __('Ajouter un projet', 'sage'),
                'add_new_item' => __('Ajouter un projet', 'sage'),
                'edit_item' => __('Modifier le projet', 'sage'),
                'new_item' => __('Nouveau projet', 'sage'),
                'view_item' => __('Voir le projet', 'sage'),
                'view_items' => __('Voir les projets', 'sage'),
                'search_items' => __('Rechercher des projets', 'sage'),
                'not_found' => __('Aucun projet trouvé', 'sage'),
                'not_found_in_trash' => __('Aucun projet dans la corbeille', 'sage'),
                'item_updated' => __('Projet mis à jour', 'sage'),
            ],
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_rest' => true,
            'menu_icon' => 'dashicons-portfolio',
            'supports' => ['title', 'editor', 'thumbnail'],
            'has_archive' => false,
            'rewrite' => ['slug' => 'projet'],
        ]);
    }

    /**
     * Ajoute les meta boxes (lien, galerie technologies).
     */
    public static function addMetaBoxes(): void
    {
        add_meta_box(
            'projet_link',
            __('Lien du projet', 'sage'),
            [__CLASS__, 'renderLinkMetaBox'],
            self::POST_TYPE,
            'normal'
        );

        add_meta_box(
            'projet_technologies_gallery',
            __('Galerie des technologies utilisées', 'sage'),
            [__CLASS__, 'renderGalleryMetaBox'],
            self::POST_TYPE,
            'normal'
        );
    }

    /**
     * Affiche la meta box "Lien du projet".
     *
     * @param \WP_Post $post
     */
    public static function renderLinkMetaBox(\WP_Post $post): void
    {
        wp_nonce_field(self::NONCE_ACTION, self::NONCE_FIELD);
        $link = get_post_meta($post->ID, self::META_LINK, true);
        ?>
        <p>
            <label for="projet_link"><?php esc_html_e('URL du projet (site, démo, repo…)', 'sage'); ?></label><br>
            <input type="url" id="projet_link" name="projet_link" value="<?php echo esc_url($link); ?>"
                   class="large-text" placeholder="https://…">
        </p>
        <?php
    }

    /**
     * Affiche la meta box "Galerie technologies" (images pour les technologies).
     *
     * @param \WP_Post $post
     */
    public static function renderGalleryMetaBox(\WP_Post $post): void
    {
        $ids = get_post_meta($post->ID, self::META_TECH_GALLERY, true);
        if (! is_array($ids)) {
            $ids = array_filter(array_map('absint', explode(',', (string) $ids)));
        }
        $ids = array_values(array_filter($ids));
        ?>
        <p>
            <button type="button" class="button" id="projet-gallery-add"><?php esc_html_e('Ajouter des images (logos technologies)', 'sage'); ?></button>
        </p>
        <input type="hidden" name="projet_technologies_gallery" id="projet_technologies_gallery" value="<?php echo esc_attr(implode(',', $ids)); ?>">
        <ul id="projet-gallery-list" class="projet-gallery-list" style="list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:8px;">
            <?php
            foreach ($ids as $id) {
                $src = wp_get_attachment_image_url($id, 'thumbnail');
                if ($src) {
                    echo '<li data-id="'.esc_attr((string) $id).'" style="position:relative;"><img src="'.esc_url($src).'" alt="" style="width:100%;height:auto;display:block;border:1px solid #ccc;"><button type="button" class="projet-gallery-remove" style="position:absolute;top:2px;right:2px;cursor:pointer;">×</button></li>';
                }
            }
            ?>
        </ul>
        <?php
    }

    /**
     * Sauvegarde les meta (lien, galerie) avec nonce et sanitization.
     *
     * @param int      $postId
     * @param \WP_Post $post
     */
    public static function saveMeta(int $postId, \WP_Post $post): void
    {
        if (! isset($_POST[self::NONCE_FIELD]) || ! wp_verify_nonce(sanitize_text_field(wp_unslash($_POST[self::NONCE_FIELD])), self::NONCE_ACTION)) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (! current_user_can('edit_post', $postId)) {
            return;
        }

        if (isset($_POST['projet_link'])) {
            update_post_meta($postId, self::META_LINK, esc_url_raw(wp_unslash($_POST['projet_link'])));
        }

        if (isset($_POST['projet_technologies_gallery'])) {
            $raw = sanitize_text_field(wp_unslash($_POST['projet_technologies_gallery']));
            $galleryIds = array_values(array_filter(array_map('absint', explode(',', $raw))));
            update_post_meta($postId, self::META_TECH_GALLERY, $galleryIds);
        }
    }

    /**
     * Enqueue scripts pour la galerie (media modal) sur l’écran d’édition projet.
     *
     * @param string $hook
     */
    public static function enqueueAdminAssets(string $hook): void
    {
        $screen = get_current_screen();
        if (! $screen || $screen->post_type !== self::POST_TYPE || $screen->base !== 'post') {
            return;
        }

        wp_enqueue_media();
        wp_add_inline_script('jquery', self::getGalleryInlineScript());
    }

    /**
     * Script inline pour ouvrir la médiathèque et gérer la galerie.
     */
    private static function getGalleryInlineScript(): string
    {
        return <<<'JS'
(function($){
  function updateHidden(){
    var ids = [];
    $('#projet-gallery-list li').each(function(){ ids.push($(this).data('id')); });
    $('#projet_technologies_gallery').val(ids.join(','));
  }
  $('#projet-gallery-add').on('click', function(){
    var frame = wp.media({
      library: { type: 'image' },
      multiple: true
    });
    frame.on('select', function(){
      var atts = frame.state().get('selection').toJSON();
      atts.forEach(function(att){
        if (att.id && $('#projet-gallery-list li[data-id="'+att.id+'"]').length === 0) {
          var src = att.sizes && att.sizes.thumbnail ? att.sizes.thumbnail.url : (att.url || '');
          $('#projet-gallery-list').append(
            '<li data-id="'+att.id+'" style="position:relative;">'+
            '<img src="'+src+'" alt="" style="width:100%;height:auto;display:block;border:1px solid #ccc;">'+
            '<button type="button" class="projet-gallery-remove" style="position:absolute;top:2px;right:2px;cursor:pointer;">×</button>'+
            '</li>'
          );
        }
      });
      updateHidden();
    });
    frame.open();
  });
  $(document).on('click', '.projet-gallery-remove', function(){
    $(this).closest('li').remove();
    updateHidden();
  });
})(jQuery);
JS;
    }

    /**
     * Récupère le lien du projet.
     *
     * @param int|null $postId
     * @return string
     */
    public static function getLink(?int $postId = null): string
    {
        $postId = $postId ?? get_the_ID();
        $link = get_post_meta($postId, self::META_LINK, true);

        return is_string($link) ? $link : '';
    }

    /**
     * Récupère les IDs de la galerie technologies.
     *
     * @param int|null $postId
     * @return int[]
     */
    public static function getTechnologiesGallery(?int $postId = null): array
    {
        $postId = $postId ?? get_the_ID();
        $ids = get_post_meta($postId, self::META_TECH_GALLERY, true);
        if (! is_array($ids)) {
            $ids = array_filter(array_map('absint', explode(',', (string) $ids)));
        }

        return array_values(array_filter($ids));
    }
}
