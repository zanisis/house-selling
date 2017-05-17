export default{
  mutate(state, houseSelling){
    state.house = houseSelling
    // console.log(state);
  },
  pushHouse(state, response){
    // console.log(response);
    state.house.push(response)
  },
  editHouse(state, idHouse){
    let filter = state.house.filter((house)=>{
      return idHouse == house._id
    })
    state.onehouse = filter[0]
    console.log('mutations -- ', filter);
  }
}