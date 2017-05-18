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
  },
  destroyStateHouse(state, idHouse){
    state.house.filter((data, index)=>{
      if(data._id == idHouse){
        state.house.splice(index,1)
      }
    })
  },
  afterEdit(state, dataHouse){
    console.log('',state);
    console.log('mutation update',dataHouse);
    // state.house.filter((data, index)=>{
    //   if(data._id == dataHouse._id){
    //     console.log(state.house[index]);
    //   }
    // })
  }
}