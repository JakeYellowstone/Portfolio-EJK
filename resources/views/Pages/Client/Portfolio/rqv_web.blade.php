@extends('Templates.Client.portfolio')

@section('photos')
<div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/rqvWeb/1.png') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/rqvWeb/2.png') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/rqvWeb/3.png') }}" alt="">
    </div>
@endsection

@section('categorie')
Web Application
@endsection

@section('client')
My School (Training)
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
This is a web application designed to manage daily reports of thefts by the police. It is the web module of the project requested by the school for personal training.
@endsection