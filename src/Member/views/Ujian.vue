<template>
  <div class="container mt-3">
    <h3>Ujian Berlangsung</h3>
    <div class="text-right" id="plug">{{timerOutput}}</div>
    {{TempUjian.data[0]}}
    <!-- {{jmlSoal = parseInt(TempUjian.data[0]['total_number'])}}
    {{currentNo = parseInt(TempUjian.data[0]['last_number'])}} -->
    <b-row>
        <b-col sm="10" class="mb-9"><strong> No. {{parseInt(TempUjian.data[0]['last_number'])}}</strong></b-col>
        <b-col sm="">
          <button v-for="index in parseInt(TempUjian.data[0]['total_number'])" :key="index" class="btn btn-danger" v-on:click.prevent="getPertanyaanByNo(`${index}`)"> {{index}}</button>
        </b-col>
        <!-- <b-col sm="3" class="mb-3">jumlah</b-col><b-col sm="9">: </b-col>
        <b-col sm="3" class="mb-3">Waktu</b-col><b-col sm="9">: </b-col> -->
    </b-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ujian',
  data() {
    return {
      countDownToTime : new Date("July 05, 2023 10:50:00").getTime(),
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
      axios.get('http://localhost/api2/military_inforces/member/member/pertanyaanByNo', {
          headers: {
            "Content-type": "application/json",
            },
            params:{
              no : no
            }
        })
      .then( 
        (response) => console.log(response.data.message),
      window.location.reload(),
      )
      .catch((error) => console.log(error));
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
    console.log(response.data.data[0]['last_number'])
    // var last_number = response.data.data[0]['last_number']
    const no_urut = JSON.stringify({ no: 3});
    // let tokenStr = 'xxyyzz';
    axios.get('http://localhost/api2/military_inforces/member/member/pertanyaanByNo',{
      params: {
    no : 3
  },
  body : {
    raw : {
      no : 3
    }
  },
      no_urut,
          headers: {
            // "Access-Control-Allow-Origin": "*",
            // "Content-type": "application/x-www-form-urlencoded",
            "Content-type": "text/plain",
            // "Authorization" : `Bearer ${tokenStr}`,
            // "Content-type": "application/json",
            // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            //         "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
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
