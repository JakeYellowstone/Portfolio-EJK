@extends('Templates.Client.portfolio')

@section('photos')
    <div class="swiper-slide">
    <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/depenses/1.jpg') }}" alt="">
  </div>

  <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/depenses/2.jpg') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/depenses/3.jpg') }}" alt="">
    </div>

    <div class="swiper-slide">
      <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/portfolio/depenses/4.jpg') }}" alt="">
    </div>
@endsection

@section('categorie')
Mobile Application
@endsection

@section('client')
Personal Training
@endsection

@section('date_deb')
February 21, 2022
@endsection

@section('date_fin')
March 7, 2022
@endsection

@section('lien')
#
@endsection

@section('message')
Hosted locally
@endsection

@section('description')
A personal project designed to manage expenses incurred during the week. It allows for adding, deleting, and viewing an expense distribution diagram according to the days of the week.
@endsection