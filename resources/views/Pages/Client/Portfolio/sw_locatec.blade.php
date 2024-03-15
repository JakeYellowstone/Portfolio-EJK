@extends('Templates.Client.portfolio')

@section('photos')
<div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/sw-locatec/1.png') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/sw-locatec/2.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/sw-locatec/3.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/sw-locatec/4.png') }}" alt="">
    </div>
@endsection

@section('categorie')
Website
@endsection

@section('client')
Locatec
@endsection

@section('date_deb')
February 20, 2023
@endsection

@section('date_fin')
June 16, 2023
@endsection

@section('lien')
http://www.locatec-ci.com/
@endsection

@section('message')
Site Link
@endsection

@section('description')
This is a showcase website designed for the company Locatec.
@endsection