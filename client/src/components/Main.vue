<template lang="html">
  <div class="ui segment" style="margin-bottom:20px">
    <div v-for="(sell, index) in sells" style="padding:5px">
      <div class="ui top attached header" style="text-align:left;height:100px;">
        <img id="image-detail" :src="sell.image" class="ui large circular image">
      </div>
      <div style="text-align:left" class="ui attached segment left">
        <div class="">
          <Label>Owner : </Label> {{sell.owner}}
          <br>
          <Label>address : </Label> {{sell.address}}
          <br>
          <Label>price : </Label> {{sell.price}}
          <br>
          <Label>phone : </Label> {{sell.phone}}
        </div>
        <div class="item" style="text-align:right">
          <div class="ui button red basic icon" @click="deleteIdHouse(sell._id)"><i class="trash icon"></i></div>

          <div class="ui button violet basic" @click="getIdHouse(sell._id)">Edit</div>
          <!-- <router-link :to="{name: 'Showmap'}"> -->
          <div class="ui button olive" @click="showMap(sell._id, index)">show</div>
          <!-- </router-link> -->

        </div>
      </div>
      <detail-map v-if="index === mapId" :position="dataHouse.center"></detail-map>
      <!-- <router-view></router-view> -->
    </div>

    <div class="ui small modal">
      <div class="ui icon header">
        Sell Your House
      </div>
      <div class="content">
        <div class="ui form">
          <div class="field">
            <div class="two fields">
              <div class="field">
                <label>Name</label>
              </div>
              <div class="field">
                <label>Phone</label>
              </div>
            </div>
            <div class="two fields">
              <div class="field">
                <input type="text" v-model="dataHouse.owner" placeholder="Your Name">
              </div>
              <div class="field">
                <input type="text" v-model="dataHouse.phone" placeholder="Your Phone">
              </div>
            </div>
          </div>
          <div class="field">
            <label>Your Address</label>
            <div class="fields">
              <div class="twelve wide field">
                <input type="text" v-model="dataHouse.address" placeholder="Street Address">
              </div>
              <div class="four wide field">
                <input type="text" v-model="dataHouse.price" placeholder="Price">
              </div>
            </div>
          </div>
          <div class="field">
            <label>Image URL</label>
            <div class="fields">
                <input type="text" placeholder="Your Image URL" v-model="dataHouse.image">
            </div>
          </div>
          <!-- <div class="field"> -->
            <google-map v-on:childGoogle="fromGoogle" :location="dataHouse.location" :centerParent="dataHouse.center"></google-map>
          <!-- </div> -->
        </div>
      </div>
      <div class="actions">
        <div class="ui red cancel inverted button" @click="cancel">
          <i class="remove icon"></i>
          No
        </div>
        <div v-if="CreateOrUpdate" class="ui green ok inverted button" id="submit" @click="create">
          <i class="checkmark icon"></i>
          Yes
        </div>
        <div v-if="!CreateOrUpdate" class="ui green ok inverted button" id="submit" @click="update">
          <i class="checkmark icon"></i>
          Update
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import GoogleMap from './Google'
import DetailMap from './DetailMap'

import axios from 'axios'

export default {
  components: {
    GoogleMap,DetailMap
  },
  data(){
    return {
      CreateOrUpdate : true,
      mapId : '',
      dataHouse : {
        owner : '',
        phone : '',
        address : '',
        price : '',
        image : '',
        location : '',
        center : {
          lat: -6.2607134, lng: 106.7794275
        }
      }
    }
  },
  computed: {
    sells(){
      return this.$store.state.house
    },
    getOneHouse(){
      return this.$store.state.onehouse
    }
  },
  methods : {
    update(){
      this.CreateOrUpdate = true
      console.log(this.dataHouse);
      this.$store.dispatch('updateDbAfterEdit', this.dataHouse)
      this.dataHouse = {
        owner : '',
        phone : '',
        address : '',
        price : '',
        image : '',
        location : '',
        center : {
          lat: -6.2607134,
          lng: 106.7794275
        }
      }
    },
    deleteIdHouse(id){
      this.$store.dispatch('destroyHouse', id)
    },
    showMap(id, index){
      // console.log('idnya', id);
      this.$store.dispatch('getEditHouse', id)
      let separate = this.getOneHouse.location.split(' ')
      this.dataHouse = this.getOneHouse;
      this.dataHouse.center = {
        lat: Number(separate[0]),
        lng: Number(separate[1])
      }
      console.log('setelah proses -- ',this.getOneHouse)
      this.mapId = index
      console.log('index', this.mapId);

    },
    cancel(){
      this.dataHouse = {
        owner : '',
        phone : '',
        address : '',
        price : '',
        image : '',
        location : '',
        center : {
          lat: -6.2607134,
          lng: 106.7794275
        }
      }
      console.log(this);
    },
    create(){
      // console.log(this);
      this.$store.dispatch('addHouse', this.dataHouse)
    },
    fromGoogle(data){
      this.dataHouse.location = data
    },
    getIdHouse(id){
      // console.log('di edit ',this.dataHouse);
      this.CreateOrUpdate = false
      this.$store.dispatch('getEditHouse', id)
      // console.log(this.getOneHouse);
      let separate = this.getOneHouse.location.split(' ')
      this.dataHouse = this.getOneHouse;
      this.dataHouse.center = {
        lat: Number(separate[0]),
        lng: Number(separate[1])
      }
      console.log('setelah proses -- ',this.dataHouse)
      // this.$store.dispatch('updateDbAfterEdit', id)

    }
  }
}
</script>

<style lang="css">
#image-detail{
  width: 5.5rem;
  height: 5rem;
}
</style>
