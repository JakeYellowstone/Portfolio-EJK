@extends('Templates.Client.portfolio')

@section('photos')
<div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/sw-ses/1.png') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/sw-ses/2.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/sw-ses/3.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/sw-ses/4.png') }}" alt="">
    </div>
@endsection

@section('categorie')
Website
@endsection

@section('client')
Schiba Energies et Services
@endsection

@section('date_deb')
June 2023
@endsection

@section('date_fin')
July 2023
@endsection

@section('lien')
https://www.schiba-energies.com/
@endsection

@section('message')
Site Link
@endsection

@section('description')
This is a showcase website designed for the company Schiba Energies et Services, an entity of the Schiba group.
@endsection