<?php

namespace App\View\Composers;

use App\PostTypes\Projet;
use Roots\Acorn\View\Composer;

class Projects extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array<string>
     */
    protected static $views = [
        'sections.projects',
    ];

    /**
     * Données des projets (CPT Projet) pour la section.
     *
     * @return array<int, array{title: string, desc: string, url: string, image_id: int|null, image_url: string|null, technologies: array<int, array{id: int, url: string}>>}
     */
    public function projects(): array
    {
        $query = new \WP_Query([
            'post_type' => Projet::POST_TYPE,
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'menu_order title',
            'order' => 'ASC',
        ]);

        $items = [];
        foreach ($query->posts as $post) {
            $imageId = (int) get_post_thumbnail_id($post);
            $imageUrl = $imageId ? wp_get_attachment_image_url($imageId, 'medium') : null;
            $galleryIds = Projet::getTechnologiesGallery($post->ID);
            $technologies = [];
            foreach ($galleryIds as $id) {
                $url = wp_get_attachment_image_url($id, 'thumbnail');
                if ($url) {
                    $technologies[] = ['id' => $id, 'url' => $url];
                }
            }

            $items[] = [
                'title' => get_the_title($post),
                'desc' => get_the_excerpt($post) ?: wp_trim_words(get_post_field('post_content', $post), 25),
                'url' => Projet::getLink($post->ID),
                'image_id' => $imageId ?: null,
                'image_url' => $imageUrl,
                'technologies' => $technologies,
            ];
        }

        wp_reset_postdata();

        return $items;
    }
}
