<?php

namespace App\Providers;

use App\View\Composers\Projects as ProjectsComposer;
use Illuminate\Support\Facades\View;
use Roots\Acorn\Sage\SageServiceProvider;

class ThemeServiceProvider extends SageServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        parent::register();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        View::composer('sections.projects', ProjectsComposer::class);
    }
}
