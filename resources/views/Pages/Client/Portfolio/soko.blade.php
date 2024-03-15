@extends('Templates.Client.portfolio')

@section('photos')
<div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/sw-soko/1.png') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/sw-soko/2.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/sw-soko/3.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/sw-soko/4.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/sw-soko/5.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/sw-soko/6.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/sw-soko/7.png') }}" alt="">
    </div>
@endsection

@section('categorie')
Website
@endsection

@section('client')
Soko Corporation
@endsection

@section('date_deb')
May 2023
@endsection

@section('date_fin')
June 2023
@endsection

@section('lien')
https://www.sokocorp.com/Web/
@endsection

@section('message')
Site Link
@endsection

@section('description')
This is a showcase website designed for the company Soko Corporation.
@endsection