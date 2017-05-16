export default{
  mutate(state, houseSelling){
    state.house = houseSelling
    // console.log(state);
  },
  pushHouse(state, response){
    // console.log(response);
    state.house.push(response)
  }
}