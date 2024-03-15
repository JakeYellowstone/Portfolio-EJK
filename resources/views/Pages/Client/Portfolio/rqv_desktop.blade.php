@extends('Templates.Client.portfolio')

@section('photos')
<div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/rqvDesktop/1.png') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/rqvDesktop/2.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/public/ClientAssets/img/portfolio/rqvDesktop/3.png') }}" alt="">
    </div>
@endsection

@section('categorie')
Desktop Application
@endsection

@section('client')
School
@endsection

@section('date_deb')
November 5, 2021
@endsection

@section('date_fin')
December 12, 2021
@endsection

@section('lien')
#
@endsection

@section('message')
Private Domain
@endsection

@section('description')
This is a desktop application designed to manage daily reports of thefts by the police. It is the desktop module of the project requested by the school for personal training.
@endsection