<template>
  <div class="container mt-3">
    <h3>Ujian Berlangsung</h3>
    <div class="text-right" id="plug">{{timerOutput}}</div>
    {{TempUjian.data}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Dashboard',
  data() {
    return {
      countDownToTime : new Date("July 05, 2023 01:50:00").getTime(),
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
    }
  },
  mounted() {
       setInterval(() => { this.startTimer() }, 1000);
       axios.get('http://localhost/api2/military_inforces/member/member/temp_detail_ujian', {
      headers: {
        "Content-type": "application/json",
        }
    })
  .then((response) =>this.setTempUjian(response.data))
  .catch((error) => console.log(error));
    }

}
</script>
