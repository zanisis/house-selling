<template lang="html">
  <div>
    <h1>Tara</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBukNuwlwS7no38eVsMgJy8N5h7tgYZ0Sc',
      v: 'OPTIONAL VERSION NUMBER',
      // v: '3.26',
      // libraries: 'places', //// If you need to use place input
    }
  });
export default {
  data(){
    return{
      center: {
        lat: -6.2607134,
        lng: 106.7794275
      },
      markers: [{
        position: {lat: -6.2607134, lng: 106.7794275}
      }]
    }
  }
}
</script>

<style lang="css">
</style>
