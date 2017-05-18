<template lang="html">
  <div style="padding: 5px 175px">
    <gmap-map
    :center="center"
    :zoom="14"
    style="width: 300px; height: 200px"
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
      // v: '3.26',
      // libraries: 'places', //// If you need to use place input
    }
  });
export default {
  props : ['position'],
  data(){
    return{
      center: this.position,
      markers: [{
        position: this.position
      }]
    }
  }
}
</script>

<style lang="css">
</style>
