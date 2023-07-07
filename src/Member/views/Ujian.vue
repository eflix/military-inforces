<template>
  <div class="container mt-3">
    <h3>Ujian Berlangsung</h3>
    <div class="text-right" id="plug">{{timerOutput}}</div>
    <!-- {{Pertanyaan.data[0]}} -->
    <!-- {{jmlSoal = parseInt(TempUjian.data[0]['total_number'])}}
    {{currentNo = parseInt(TempUjian.data[0]['last_number'])}} -->
    <b-row>
        <b-col sm="10" class="mb-9">
          <strong> No. {{parseInt(Pertanyaan.data[0]['no_urut'])}}</strong>
          <div class="pertanyaan">
            <h5>{{Pertanyaan.data[0]['text_pertanyaan']}}</h5>

            <input type="radio" id="a" value="a" v-model="answer" />
            <label for="a"> <span>A. {{Pertanyaan.data[0]['a']}}</span></label> <br />

            <input type="radio" id="b" value="b" v-model="answer" />
            <label for="b"><span>B. {{Pertanyaan.data[0]['b']}}</span></label> <br />

            <input type="radio" id="c" value="c" v-model="answer" />
            <label for="c"><span>C. {{Pertanyaan.data[0]['c']}}</span></label> <br />

            <input type="radio" id="d" value="d" v-model="answer" />
            <label for="d"><span>D. {{Pertanyaan.data[0]['d']}}</span></label> <br />

            <input type="radio" id="e" value="e" v-model="answer" />
            <label for="e"><span>E. {{Pertanyaan.data[0]['e']}}</span></label> <br />

          </div>
          <div class="tombol">
            <button class="btn btn-warning" v-if="parseInt(Pertanyaan.data[0]['no_urut'])>1" v-on:click.prevent="getPertanyaanByNo(parseInt(Pertanyaan.data[0]['no_urut'])-1)">Sebelumnya</button>
            <button class="btn btn-success" v-if="parseInt(Pertanyaan.data[0]['no_urut'])<parseInt(TempUjian.data[0]['total_number'])" v-on:click.prevent="getPertanyaanByNo(parseInt(Pertanyaan.data[0]['no_urut'])+1)">Selanjutnya</button>
            <button class="btn btn-success" v-if="answer && parseInt(Pertanyaan.data[0]['no_urut'])<parseInt(TempUjian.data[0]['total_number'])" v-on:click.prevent="saveNext(parseInt(TempUjian.data[0]['id']),parseInt(Pertanyaan.data[0]['id']),answer)">Simpan & Selanjutnya</button>
            <button class="btn btn-success" v-if="answer && parseInt(Pertanyaan.data[0]['no_urut'])>=parseInt(TempUjian.data[0]['total_number'])">Simpan & Selesai</button>
          </div>
          <!-- {{answer}} -->
        </b-col>
        <b-col sm="2" class="no-soal">
          <button v-for="index in parseInt(TempUjian.data[0]['total_number'])" :key="index" class="btn btn-danger" v-on:click.prevent="getPertanyaanByNo(`${index}`)"> {{index}}</button>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ujian',
  data() {
    return {
      countDownToTime : new Date("July 06, 2023 23:50:00").getTime(),
      timerOutput:  null
    }
},
methods: {
    startTimer: function() {
      const timeNow = new Date().getTime();
      const timeDifference = this.countDownToTime - timeNow;
      const millisecondsInOneSecond = 1000;
      const millisecondsInOneMinute = millisecondsInOneSecond * 60;
      const millisecondsInOneHour = millisecondsInOneMinute * 60;
      const millisecondsInOneDay = millisecondsInOneHour * 24;
      // const differenceInDays = timeDifference / millisecondsInOneDay;
      const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
      const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
      const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
      // const remainingDays = Math.floor(differenceInDays);
      const remainingHours = Math.floor(remainderDifferenceInHours);
      const remainingMinutes = Math.floor(remainderDifferenceInMinutes)+(remainingHours*60);
      const remainingSeconds =Math.floor(remainderDifferenceInSeconds);
      this.timerOutput = "Sisa Waktu : " + remainingMinutes + " Menit " + "" + remainingSeconds + " Detik";
    },
    setTempUjian(data){
      this.TempUjian = data
    },
    setPertanyaan(data){
      this.Pertanyaan = data
    },
    getPertanyaanByNo(no){
      console.log(no);
      axios.post('http://localhost/api2/military_inforces/member/member/pertanyaanByNo', {
              no : no
            }, {
          headers: {
            "Content-type": "text/plain",
            },
        })
      .then( 
        (response) => this.setPertanyaan(response.data),
      // window.location.reload(),
      )
      .catch((error) => console.log(error));
    },
    saveNext(id_ujian,no,answer){
      console.log(no);
      console.log(answer);
    }
  },
  mounted() {
       setInterval(() => { this.startTimer() }, 1000);
       axios.get('http://localhost/api2/military_inforces/member/member/temp_detail_ujian', {
      headers: {
        "Content-type": "application/json",
        }
    })
  .then((response) => {
    this.setTempUjian(response.data)
    var last_number = response.data.data[0]['last_number']
    axios.post('http://localhost/api2/military_inforces/member/member/pertanyaanByNo', {no : last_number},{
          headers: {
            "Content-type": "text/plain",
            },
        },
        
        )
      .then( 
        (response) => {
          this.setPertanyaan(response.data)
          console.log(response.data);
          }
      )
      .catch((error) => console.log(error));
  }
  )
  .catch((error) => console.log(error));
    }

}
</script>

<style>
.tombol .btn {
  margin-left: 10px;
}
.no-soal .btn {
  width: 40px;
}
</style>