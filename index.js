const app = "I don't do much."

const var kittens = ["Milo","Otis", "Garfield"]

function destructivelyAppendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  var kittens = ["Milo", "Otis", "Garfied"]
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens.shift()
}

function appendKitten(name){

  var newArray = new Array();
  newArray = [name, ...kittens]

  return newArray
}

function prependKitten(name){

  var newArray = new Array();

  newArray = [...kittens, name]

  return newArray
}


function removeLastKitten(){
  var newArray = new Array();
  newArray = kittens.slice(0, kittens.length - 1)
  
  return newArray
}

function removeFirstKitten(){
  var newArray = new Array();
  newArray = kittens.slice(1, kittens.length)

  return newArray
}
