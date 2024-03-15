@extends('Templates.Client.portfolio')

@section('photos')
<div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/PompMob/1.jpg') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/PompMob/2.jpg') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/PompMob/3.jpg') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/PompMob/4.jpg') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/PompMob/5.jpg') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/PompMob/6.jpg') }}" alt="">
    </div>
@endsection

@section('categorie')
Web Application
@endsection

@section('client')
ETS MSSZ
@endsection

@section('date_deb')
March 15, 2022
@endsection

@section('date_fin')
June 5, 2022
@endsection

@section('lien')
# 
@endsection

@section('message')
Private Domain
@endsection

@section('description')
The project aims to address a fuel management issue within the company. This constitutes the mobile module for the gas station attendant to serve the customer. The attendant can perform a service and obtain a report of services rendered. Additionally, the project consists of multiple modules, including one web module and two mobile modules.
@endsection