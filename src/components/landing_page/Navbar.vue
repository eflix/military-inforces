<template>
<!-- <div class="container">
        <nav class="navbar navbar-expand-lg navbar-none">
            <a class="navbar-brand" href="#">Kulineran</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Foods</router-link>
                </li>
                </ul>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/keranjang">
                    Keranjang 
                    <b-icon-bag></b-icon-bag>
                    <span class="badge badge-success ml-2">0</span>
                    </router-link>
                    
                </li>
                </ul>
            </div>
        </nav>
</div> -->

  <div class="container text-white">
    <b-navbar type="none" variant="none">
        <img src="../../assets/images/logo.png" alt="logo" width="10%" class="position-absolute" style="margin-top:70px;">
        <b-navbar-nav class="ml-auto">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active mr-2">
                    <router-link class="nav-link" to="/">BERANDA</router-link>
                </li>
                <li class="nav-item mr-2">
                    <router-link class="nav-link" to="/sekolah_kedinasan">SEKOLAH KEDINASAN</router-link>
                </li>
                </ul>
                <b-nav-item-dropdown text="PROFIL" right class="mr-2">
                        <li class="nav-item">
                        <router-link class="nav-link" to="/tentang_kami">FOTO KEGIATAN</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/gabung_sekarang">PROSES KEGIATAN</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/tentang_kami">DAFTAR TENTOR</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/gabung_sekarang">SUSUNAN ORGANISASI</router-link>
                    </li>
                </b-nav-item-dropdown>
                <li class="nav-item mr-2">
                    <router-link class="nav-link" to="/tentang_kami">TENTANG KAMI</router-link>
                </li>
                <li class="nav-item mr-2 shadow ">
                    <router-link class="nav-link gabung_sekarang" to="/register">GABUNG SEKARANG</router-link>
                </li>
            </div>

        </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name : 'Navbar'
}
</script>

<style>

</style>