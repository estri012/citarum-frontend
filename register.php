<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>Buat Akun &mdash; Disdukcapil Kab. Bandung</title>

  <!-- General CSS Files -->
  <link rel="stylesheet" href="assets/modules/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/modules/fontawesome/css/all.min.css">
  <link href='https://fonts.googleapis.com/css?family=Source Sans Pro' rel='stylesheet'>

  <!-- CSS Libraries -->
  <link rel="stylesheet" href="assets/modules/jquery-selectric/selectric.css">

  <!-- Template CSS -->
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" href="assets/css/components.css">
</head>

<body style="background-image: url('assets/img/backdrop.png'); background-repeat: no-repeat; background-attachment: fixed; background-size: cover;">
  <div id="app">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <div class="login-brand">
              <img src="assets/img/logokab.png" alt="logo" width="100" class="shadow-light">
            </div>

            <div class="card card-primary">
              <div class="card-header"><h2 style="padding-left: 40%; color: #3D6C53;">Buat Akun</h2></div>
              
              <div class="card-body">
                <!--Form start-->
                <form method="POST" action="">
                  <div class="row">
                    <!--Nomor HP-->
                    <div class="form-group col-6">
                      <label for="nomorhp">Nomor Hp</label>
                      <input id="nomorhp" type="text" class="form-control" name="nomorhp" autofocus>
                    </div>
                  </div>
                  <!--Email-->
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" class="form-control" name="email">
                    <div class="invalid-feedback">
                    </div>
                  </div>
                  <!--Kata sandi-->
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="password" class="d-block">Kata Sandi</label>
                      <input id="password" type="password" class="form-control pwstrength" data-indicator="pwindicator" name="password">
                      <div id="pwindicator" class="pwindicator">
                        <div class="bar"></div>
                        <div class="label"></div>
                      </div>
                    </div>
                    <div class="form-group col-6">
                      <label for="password2" class="d-block">Ulangi Kata Sandi</label>
                      <input id="password2" type="password" class="form-control" name="password-confirm">
                    </div>
                  </div>

                  <!--Captcha PHP -->
                  <?php 
                  if (isset($_POST['register'])) {
                    session_start();
                    if($_SESSION['captcha'] == $_POST['kode']){
                      //isi dengan kode pendaftaran ke database mysql teman-teman
                      echo "Berhasil";
                    }else{
                      echo "Kode captcha salah!";
                    }
                  }
                  ?>

                  <div class="form-divider"></div>
                  <!--Bagian captcha-->
                  <div class="form-group">
                    <img src="captcha.php?date=<?php echo date('YmdHis');?>" alt="">
                  </div>
                  <div class="form-group">
                    <input type="text" name="kode" placeholder="kode captcha" required>
                  </div>
                  <!--Tombol Daftar-->
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block" name="register">
                      Daftar
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="simple-footer">
              Copyright &copy; Disdukcapil Kab. Bandung 2023
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- General JS Scripts -->
  <script src="assets/modules/jquery.min.js"></script>
  <script src="assets/modules/popper.js"></script>
  <script src="assets/modules/tooltip.js"></script>
  <script src="assets/modules/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/modules/nicescroll/jquery.nicescroll.min.js"></script>
  <script src="assets/modules/moment.min.js"></script>
  <script src="assets/js/stisla.js"></script>
  
  <!-- JS Libraies -->
  <script src="assets/modules/jquery-pwstrength/jquery.pwstrength.min.js"></script>
  <script src="assets/modules/jquery-selectric/jquery.selectric.min.js"></script>

  <!-- Page Specific JS File -->
  <script src="assets/js/page/auth-register.js"></script>
  
  <!-- Template JS File -->
  <script src="assets/js/scripts.js"></script>
  <script src="assets/js/custom.js"></script>
</body>
</html>