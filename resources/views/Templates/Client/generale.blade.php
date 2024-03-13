<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Portfolio JEK</title>
  <meta content="" name="description">
  <meta content="" name="keywords"> {{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets') }}

  <!-- Favicons -->
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/favicon.png') }}" rel="icon">
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/img/apple-touch-icon.png') }}" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/aos/aos.css') }}" rel="stylesheet">
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/css/style.css') }}" rel="stylesheet">

  <!-- =======================================================
  * Template Name: iPortfolio - v3.7.0
  * Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Mobile nav toggle button ======= -->
  <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>

  <!-- ======= Header ======= -->
  <header id="header">
    <div class="d-flex flex-column">

      <div class="profile">
        <img src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets') }}/img/profile-img.jpg" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.php">Esdras Kouamé</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="https://www.facebook.com/esdras.kouame.148/" class="facebook" target="blank"><i class="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/p/CU-Sl4fNj1X/?igshid=YmMyMTA2M2Y=" class="instagram" target="blank"><i class="bx bxl-instagram"></i></a>
          <a href="https://www.linkedin.com/in/esdras-jonathan-kouam%C3%A9-70332b27a/" class="linkedin" target="blank"><i class="bx bxl-linkedin"></i></a>
          <a href="mailto:esdraskj@gmail.com" class="gmail"><i class="bi bi-envelope"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><a href="index.php#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="index.php#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About me</span></a></li>
          <li><a href="index.php#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="index.php#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="index.php#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav><!-- .nav-menu -->
    </div>
  </header><!-- End Header -->

  @if (Route::currentNameRoute() == 'accueil')
        <!-- ======= Hero Section ======= -->
        <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
            <div class="hero-container" data-aos="fade-in">
                <h1>Esdras Kouamé</h1>
                <p> I'm in <span class="typed" data-typed-items="Development, Computer Science, Software Engineering"></span></p>
            </div>
        </section><!-- End Hero -->

  @endif

  <main id="main">

    @if (Route::currentNameRoute() != 'accueil')
        <!-- ======= Breadcrumbs ======= -->
        <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
  
          <div class="d-flex justify-content-between align-items-center">
            <h2>Détail Portfolio</h2>
            <ol>
              <li><a href="index.php">Home</a></li>
              <li>Détail Portfolio</li>
            </ol>
          </div>
  
        </div>
      </section><!-- End Breadcrumbs -->
    @endif

    @yield('corps')

  </main>


  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- Vendor JS Files -->
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/purecounter/purecounter.js') }}"></script>
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/aos/aos.js') }}"></script>
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/glightbox/js/glightbox.min.js') }}"></script>
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/isotope-layout/isotope.pkgd.min.js') }}"></script>
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/swiper/swiper-bundle.min.js') }}"></script>
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/typed.js/typed.min.js') }}"></script>
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/waypoints/noframework.waypoints.js') }}"></script>
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/vendor/php-email-form/validate.js') }}"></script>

<!-- Template Main JS File -->
<script src="{{ asset('https://www.sokocorp.com/Portfolio-EJK/ClientAssets/js/main.js') }}"></script>

</body>

</html>