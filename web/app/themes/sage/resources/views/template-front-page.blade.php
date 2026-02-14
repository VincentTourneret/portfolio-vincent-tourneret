{{--
  Template Name: Page d'accueil
--}}

@extends('layouts.app')

@section('content')
  @include('sections.hero')
  @include('sections.about')
  @include('sections.services')
  @include('sections.experiences')
  @include('sections.projects')
  @include('sections.expertise')
@endsection
