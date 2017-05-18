import axios from 'axios'

export default {
  houseSelling({commit}) {
    let url = 'http://localhost:3000/'
    axios.get(url).then((response)=>{
      // console.log(response.data);
      let data = response.data
      commit('mutate', data)
    }).catch((err)=>{
      console.log(err);
    })
  },
  addHouse(context, dataHouse){
    axios.post('http://localhost:3000/', {
      owner : dataHouse.owner,
      phone : dataHouse.phone,
      address : dataHouse.address,
      price : dataHouse.price,
      image : dataHouse.image,
      location : dataHouse.location
    }).then((response)=>{
      // console.log(response.data);
      context.commit('pushHouse', response.data)
      })
  },
  getEditHouse({commit}, idHouse){
    console.log('in actions--',idHouse);
    // let dataState = this.$sta
    // axios.put('http://localhost:3000/'+idHouse,{
    //
    // }).then((response)=>{
    //   console.log(response);
    // })
    commit('editHouse', idHouse)
  },
  updateDbAfterEdit({commit}, dataHouse){
    // console.log('afterEdit', dataHouse);
    axios.put('http://localhost:3000/'+dataHouse._id,{
      owner : dataHouse.owner,
      phone : dataHouse.phone,
      address : dataHouse.address,
      price : dataHouse.price,
      image : dataHouse.image,
      location : dataHouse.location
    }).then((response)=>{
      console.log('updateafter --', response);
    })
    // commit('afterEdit', dataHouse)
  },
  destroyHouse({commit}, idHouse){
    console.log('destroy', idHouse);
    axios.delete('http://localhost:3000/'+idHouse).then((response)=>{
      console.log(response);
    })

    commit('destroyStateHouse', idHouse)
  }
}