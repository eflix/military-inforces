<template>
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
                        <router-link class="nav-link" to="/foto_kegiatan">FOTO KEGIATAN</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/gabung_sekarang">PROSES KEGIATAN</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/daftar_tentor">DAFTAR TENTOR</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/susunan_organisasi">SUSUNAN ORGANISASI</router-link>
                    </li>
                </b-nav-item-dropdown>
                <li class="nav-item mr-2">
                    <router-link class="nav-link" to="/tentang_kami">TENTANG KAMI</router-link>
                </li>
                <li class="nav-item mr-2 shadow ">
                    <!-- <router-link class="nav-link gabung_sekarang" to="/register">GABUNG SEKARANG</router-link> -->
                    <a class="btn btn-orange gabung_sekarang text-white" href="/logintest">GABUNG SEKARANG</a>
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