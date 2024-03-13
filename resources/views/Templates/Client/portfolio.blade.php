@extends('Templates.Client.generale')

@section('corps')
    
<!-- ======= Portfolio Details Section ======= -->
<section id="portfolio-details" class="portfolio-details">
    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-8">
          <div class="portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">

              @yield('photos')

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="portfolio-info">
              <h3>Project Information</h3>
              <ul>
                <li><strong>Category</strong>: @yield('categorie')</li>
                <li><strong>Client</strong>: @yield('client')</li>
                <li><strong>Start Date</strong>: @yield('date_deb')</li>
                <li><strong>End Date</strong>: @yield('date_fin')</li>
                <li><strong>Project URL</strong>: <a href="@yield('lien')">@yield('message')</a></li>
              </ul>
            </div>
            <div class="portfolio-description">
              <h2>Project Description</h2>
              <p>
                @yield('descritpion')
              </p>
          </div>
        </div>

      </div>

    </div>
  </section><!-- End Portfolio Details Section -->

@endsection