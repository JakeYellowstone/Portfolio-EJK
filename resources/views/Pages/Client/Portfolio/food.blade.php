@extends('Templates.Client.portfolio')

@section('photos')
    <div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/food/1.jpg') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/food/2.jpg') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/food/3.jpg') }}" alt="">
    </div>
@endsection

@section('categorie')
Mobile Application
@endsection

@section('client')
Personal Training
@endsection

@section('date_deb')
February 10, 2022
@endsection

@section('date_fin')
February 24, 2022
@endsection

@section('lien')
#
@endsection

@section('message')
Hosted locally
@endsection

@section('description')
This is a personal project designed to display various images of dishes categorized by type. It utilizes an internal database approach implemented in Flutter.
@endsection