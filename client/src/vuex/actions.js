import axios from 'axios'

export default {
  houseSelling({commit}) {
    let url = 'http://localhost:3000/'
    axios.get(url).then((response)=>{
      console.log(response.data);
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
  }
}