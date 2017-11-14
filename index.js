const app = "I don't do much."


function destructivelyAppendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield", "Mike"]
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.pop();
  return kittens
}

function destructivelyRemoveFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  kittens.shift();
  return kittens
}

function appendKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newArray = new Array();
  newArray = [...kittens, name]

  return newArray
}

function prependKitten(name){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newArray = new Array();

  newArray = [name, ...kittens]

  return newArray
}


function removeLastKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newArray = new Array();
  newArray = kittens.slice(0, kittens.length - 1)

  return newArray
}

function removeFirstKitten(){
  var kittens = ["Milo", "Otis", "Garfield"]
  var newArray = new Array();
  newArray = kittens.slice(1, kittens.length)

  return newArray
}
