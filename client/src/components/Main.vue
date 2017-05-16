<template lang="html">
  <div class="ui segment" style="margin-bottom:20px">
    <div v-for="sell in sells" style="padding:5px">
      <div class="ui top attached header" style="text-align:left;height:100px;">
        <img id="image-detail" src="https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg" class="ui large circular image">
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
          <div class="ui button violet basic" id="">Edit</div>
          <div class="ui button violet basic" id="">show</div>
        </div>
      </div>
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
            <google-map v-on:childGoogle="fromGoogle"></google-map>
          <!-- </div> -->
        </div>
      </div>
      <div class="actions">
        <div class="ui red cancel inverted button" id="submit" @click="cancel">
          <i class="remove icon"></i>
          No
        </div>
        <div class="ui green ok inverted button" id="submit" @click="create">
          <i class="checkmark icon"></i>
          Yes
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import GoogleMap from './Google'
import axios from 'axios'

export default {
  components: {
    GoogleMap
  },
  data(){
    return {
      dataHouse : {
        owner : '',
        phone : '',
        address : '',
        price : '',
        image : '',
        location : ''
      }
    }
  },
  computed: {
    sells(){
      return this.$store.state.house
    }
  },
  methods : {
    cancel(){
      dataHouse.owner = '',
      dataHouse.phone = '',
      dataHouse.address = '',
      dataHouse.price = '',
      dataHouse.image = '',
      dataHouse.location = ''
    },
    create(){
      this.$store.dispatch('addHouse', this.dataHouse)
    },
    fromGoogle(data){
      this.dataHouse.location = data
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
