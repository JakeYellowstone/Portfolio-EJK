@extends('Templates.Client.portfolio')

@section('photos') {{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/') }}
<div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/img/portfolio/demande/1.jpg') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/img/portfolio/demande/2.jpg') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/img/portfolio/demande/3.jpg') }}" alt="">
    </div>
@endsection

@section('categorie')
Mobile Application
@endsection

@section('client')
Etablissement Multi Services Soro Zié (ETS MSSZ)
@endsection

@section('date_deb')
March 15, 2022
@endsection

@section('date_fin')
June 15, 2022
@endsection

@section('lien')
    #
@endsection

@section('message')
Private Domain
@endsection

@section('description')
The project aims to address a fuel management issue within the company, which constitutes the requesting module. It enables employees to submit a fuel request and receive the service after validation by authorized personnel. Indeed, the project comprises several modules, one web-based and two mobile applications.
@endsection