<template lang="html">
  <div class="field">
    <label>Location</label>
    <div class="fields">
        <input type="text" placeholder="Your Image URL" v-model="dataHouse.location">
    </div>
    <gmap-map
    :center="center"
    :zoom="14"
    style="width: 500px; height: 300px"
    v-on:click="mapClick"
    >

    <gmap-marker
    v-for="m in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB0ZA9TkEkijtEHESuhI4JtMZQxSgFtj4I',
      // v: 'OPTIONAL VERSION NUMBER',
      v: '3.26',
      // libraries: 'places', //// If you need to use place input
    }
  });
export default {
  data () {
     return {
       center: {lat: -6.2607134, lng: 106.7794275},
       markers: [{
         position: {lat: -6.2607134, lng: 106.7794275}
       }],
       dataHouse: {
         location : ''
       }
     }
   },
   methods:{
     mapClick(mouseArgs){
      //  console.log(this);
      //  console.log(mouseArgs.latLng.lat(), mouseArgs.latLng.lng());
       this.dataHouse.location = `${mouseArgs.latLng.lat()} ${mouseArgs.latLng.lng()}`
       this.markers[0].position.lat = mouseArgs.latLng.lat()
       this.markers[0].position.lng = mouseArgs.latLng.lng()
       this.$emit('childGoogle', this.dataHouse.location)
     }
   }
}
</script>

<style lang="css">
</style>
