<template>
    <div class="container add-page">
        <a href="/admin/add_soal" class="btn-add-image-soal">Masukan Soal Kalimat</a>
        <form>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Masukan Nama Kategori Soal</label>
                <div class="col-sm-9">
                    <select name="id_category" v-model="input.id_category" class="form-control" required>
                        <option v-for="(item, index) in category.data" :key="index" :value="item.id">{{item.nama_category}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Masukan Soal</label>
                <div class="col-sm-9">
                    <input type="file" id="soal" name="soal" multiple required>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban A</label>
                <div class="col-sm-9">
                    <input type="file" id="a" name="a" multiple required>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban B</label>
                <div class="col-sm-9">
                    <input type="file" id="b" name="b" multiple required>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban C</label>
                <div class="col-sm-9">
                    <input type="file" id="c" name="c" multiple required>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban D</label>
                <div class="col-sm-9">
                    <input type="file" id="d" name="d" multiple required>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban yang benar</label>
                <div class="col-sm-9">
                    <select class="form-control" v-model="input.kunci_jawaban" name="kunci_jawaban" id="kunci_jawaban" required>
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="d">D</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jumlah Score</label>
                <div class="col-sm-9">
                    <input type="number" v-model="input.score" class="form-control" id="score" placeholder="score" required>
                </div>
            </div>
            <div class="text-right mt-5">
                <button class="btn-save" v-on:click.prevent = "add()">Simpan</button>
                <a class="btn-kembali" href="/admin/input_soal">Kembali</a>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
      data(){
        return{
          username: this.$session.get("username")?this.$session.get("username"):"",
          category:[],
          input:{
            id_category: "",
            text_pertanyaan: "",
            a: "",
            b: "",
            c: "",
            d: "",
            e: "",
            kunci_jawaban: "",
            penjelasan: "",
            score: 0,
          },
          formData  : ''
        }
      },
      methods:{
        setCategory(data){
          this.category = data
        },
        add(){
            if (this.input.id_category != '') {
                var formData = new FormData();
                var soal = document.querySelector('#soal');
                var a = document.querySelector('#a');
                var b = document.querySelector('#b');
                var c = document.querySelector('#c');
                var d = document.querySelector('#d');

                formData.append("id_category", this.input.id_category);
                formData.append("soal", soal.files[0]);
                formData.append("a", a.files[0]);
                formData.append("b", b.files[0]);
                formData.append("c", c.files[0]);
                formData.append("d", d.files[0]);
                formData.append("kunci_jawaban", this.input.kunci_jawaban);
                formData.append("score", this.input.score);

                axios.post('https://bimbel-militaryinforces.com/api/admin/soal/add_soal_gambar', 
                    formData
                    , {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        // "Content-type": "text/plain",
                        // "Access-Control-Allow-Origin": "*",
                        },
                    })
                .then( 
                    (response) => {
                        // console.log(response.data)
                        const status = response.data.status
                        const message = response.data.message
                        
                        alert(message)
            
                        if (status == 1) {
                            this.$router
                            .push({ path: '/admin/input_soal' })
                        } 
                    }
                )
                .catch((error) => console.log(error));
                } else {
                    alert('Data Tidak Lengkap')
                }
        },
      },
      mounted(){
        axios.get('https://bimbel-militaryinforces.com/api/admin/landing_page/all_category', {
          headers: {
            "Content-type": "application/json",
            }
        })
      .then( (response) => {
        console.log(response.data)
        this.setCategory(response.data)
      })
      .catch((error) => console.log(error));
      }
    }
</script>
