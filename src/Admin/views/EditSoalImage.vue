<template>
    <div class="container add-page">
        <form>
            <div class="form-group row mt-3">
                <label for="" class="col-sm-3 col-form-label">Masukan Nama Kategori Soal</label>
                <div class="col-sm-9">
                    <select class="form-control">
                        <select name="id_category" v-model="input.id_category" class="form-control">
                            <option v-for="(item, index) in category.data" :key="index" :value="item.id" :selected="item.id == 4">{{item.nama_category}}</option>
                        </select>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Masukan Soal</label>
                <div class="col-sm-9">
                    <input type="file" id="text_pertanyaan" name="text_pertanyaan">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban A</label>
                <div class="col-sm-9">
                    <input type="file" id="a" name="a">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban B</label>
                <div class="col-sm-9">
                    <input type="file" id="b" name="b">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban C</label>
                <div class="col-sm-9">
                    <input type="file" id="c" name="c">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban D</label>
                <div class="col-sm-9">
                    <input type="file" id="d" name="d">
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jawaban yang benar</label>
                <div class="col-sm-9" >
                    <select class="form-control" v-model="input.kunci_jawaban">
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label for="" class="col-sm-3 col-form-label">Jumlah Score</label>
                <div class="col-sm-9">
                    <input type="number" class="form-control" id="" placeholder="score">
                </div>
            </div>
            <div class="text-right mt-5">
                <button class="btn-save">Simpan</button>
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
          formData  : '',
          id : this.$route.params.id_soal
        }
      },
      methods:{
        setCategory(data){
          this.category = data
        },
        setPertanyaan(data){
          this.pertanyaan = data
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
        console.log(this.id);
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
      axios.post('https://bimbel-militaryinforces.com/api/admin/soal/soal_by_id', 
      {
            id : this.id,
        },
        {
          headers: {
            "Content-type": "text/plain",
            }
        })
      .then( (response1) => {
        console.log(response1.data)
        this.setPertanyaan(response1.data.data[0])
        this.input.id_category = response1.data.data[0].id_category
        this.input.text_pertanyaan = response1.data.data[0].text_pertanyaan
        this.input.a = response1.data.data[0].a
        this.input.b = response1.data.data[0].b
        this.input.c = response1.data.data[0].c
        this.input.d = response1.data.data[0].d
        this.input.kunci_jawaban = response1.data.data[0].kunci_jawaban
        this.input.penjelasan = response1.data.data[0].penjelasan
        this.input.score = response1.data.data[0].score
        console.log(response1.data.data[0].text_pertanyaan);
      })
      .catch((error) => console.log(error));
      }
    }
</script>