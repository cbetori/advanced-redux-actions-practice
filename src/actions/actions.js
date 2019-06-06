export const INCREASE_COUNTER = "INCREASE_COUNTER"

export function increaseCounter(){
  return {
    type:"INCREASE_COUNTER"
  }
}

export function decreaseCounter(){
  return {
    type:"DECREASE_COUNTER"
  }
}

export function setTemp(int){
  return {
    type:"SET_TEMP",
    value: int
  }
}

export function setSpecialText(txt){
  return {
    type:"SET_SPECIAL_TEXT",
    value:txt
  }
}

export function addUser(user){
  return {
    type:"ADD_USER",
    value:user
  }
}

export function removeUser(){
  return {
    type:"REMOVE_USER"
  }
}

export function setSearchText(txt){
  return {
    type:"SET_SEARCH_TEXT",
    value: txt
  }
}


export function setCity(txt){
  return {
    type:"SET_CURRENT_CITY",
    value:txt
  }
}

export function setCurrentUserSort(sort){
  return {
    type: "SET_CURRENT_USER_SORT",
    value: sort
  }
}