<template>
    <div class="container add-page mt-3">
        <form>
            <div class="form-group row">
                    <label for="nama" class="col-md-3 col-form-label">Nama Modul</label>
                    <div class="col-md-9">
                        <input type="text" class="form-control" id="nama_modul" placeholder="Masukan nama Modul" value="" v-model="input.nama_modul">
                    </div>
                </div>
                    <div class="form-group">
                    <label for="exampleFormControlFile1">Upload Foto diri Anda</label>
                    <input type="file" class="form-control-file" id="file" name="file" v-on:change="onChangeFileUpload()">
                    </div>
            <div class="text-right mt-5">
                <button class="btn-save" v-on:click.prevent = "add()" >Simpan</button>
                <a class="btn-kembali" href="/admin/input_kategori">Kembali</a>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
        input:{
            nama_modul: "",
        },
        formData  : ''
    }
  },
  methods:{
    add(){
        // console.log(this.formData)
        // if (this.input.category != '') {
             var formData = new FormData();
            var imagefile = document.querySelector('#file');
        // imagefile.files[0]['cek'] = 'cek';
            formData.append("file", imagefile.files[0]);
            formData.append("nama_modul", this.input.nama_modul);

            // axios.post('https://bimbel-militaryinforces.com/api/admin/landing_page/add_category', {
            axios.post('http://localhost/api2/military_inforces/admin/member/add_modul',
            formData
                , {
              headers: {
                'Content-Type': 'multipart/form-data',
                },

            })
          .then( 
            (response) => {
                console.log(response.data)
                // const status = response.data.status
                // const message = response.data.message
                
                // alert(message)
    
                // if (status == 1) {
                //     this.$router
                //     .push({ path: '/admin/input_kategori' })
                // } 
            }
          )
          .catch((error) => console.log(error));
        // } else {
        //     alert('Data Tidak Lengkap')
        // }
    },
    onChangeFileUpload(){
        this.formData = new FormData();
        var imagefile = document.querySelector('#file');
        this.formData.append("file", imagefile.files[0]);

        // this.input.path_foto = imagefile.files[0]['name']
        
        // axios.post('http://localhost/api2/military_inforces/admin/member/add_modul',
        //     formData,
        //     {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        //     }
        //     ).then(function(data){
        //         console.log(data);
        //         alert('Upload file berhasil')
        //     })
        //     .catch(function(){
        //         console.log('FAILURE!!');
        //     });
      }
  }
}
</script>


