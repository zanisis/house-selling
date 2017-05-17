<template lang="html">
  <div class="field">
    <label>Location</label>
    <div class="fields">
        <input type="text" placeholder="Your Image URL" v-model="dataLocation">
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
      key: 'AIzaSyBukNuwlwS7no38eVsMgJy8N5h7tgYZ0Sc',
      v: 'OPTIONAL VERSION NUMBER',
      v: '3.26',
      // libraries: 'places', //// If you need to use place input
    }
  });
export default {
  props: ['location', 'centerParent'],
  data () {
     return {
       markers: [{
         position: this.centerParent
       }]
     }
   },
   computed: {
     dataLocation(){
       return this.location
     },
     center(){
       return {lat: -6.2607134, lng: 106.7794275}
     }
   },
   methods:{
     mapClick(mouseArgs){
      //  console.log(mouseArgs.latLng.lat(), mouseArgs.latLng.lng());
       let infoMap = `${mouseArgs.latLng.lat()} ${mouseArgs.latLng.lng()}`
      console.log(this.markers[0].position);
      this.markers[0].position = {
        lat : mouseArgs.latLng.lat(),
        lng : mouseArgs.latLng.lng()
      }
       this.$emit('childGoogle', infoMap)
     }
   }
}
</script>

<style lang="css">
</style>
