var honey = False;
var tigger = {
    character: 'Tigger',
    north: pooh,
    south: console.log('move not allowed'),
    east: console.log('move not allowed'),
    west: console.log('move not allowed'),
    greet: function(){
        console.log('The wonderful thing about Tiggers is that Tiggers are a wonderful thing');
    }
}
var pooh = {
    character: 'Pooh',
    north: cr,
    south: tigger,
    east: bees,
    west: piglet,
}
var piglet = {
    character: 'Piglet',
    north: owl,
    south: console.log('move not allowed'),
    east: pooh,
    west: console.log('move not allowed'),
}
var bees = {
    character: 'Bees',
    north: rabbit,
    south: console.log('move not allowed'),
    east: console.log('move not allowed'),
    west: pooh,
}
var cr = {
    character: 'Christopher_Robin',
    north: kanga,
    south: pooh,
    east: rabbit,
    west: owl,
}
var owl = {
    character: 'Owl',
    north: console.log('move not allowed'),
    south: piglet,
    east: cr,
    west: console.log('move not allowed'),
}
var rabbit = {
    character: 'Rabbit',
    north: console.log('move not allowed'),
    south: bees,
    east: gopher,
    west: cr,
}
var gopher = {
    character: 'Gopher',
    north: console.log('move not allowed'),
    south: console.log('move not allowed'),
    east: console.log('move not allowed'),
    west: rabbit,
}
var kanga = {
    character: 'Kanga',
    north: eeyore,
    south: cr,
    east: console.log('move not allowed'),
    west: console.log('move not allowed'),
}
var eeyore = {
    character: 'Eeyore',
    north: console.log('move not allowed'),
    south: kanga,
    east: heffalumps,
    west: console.log('move not allowed'),
}
var heffalumps = {
    character: 'Heffalumps',
    north: console.log('move not allowed'),
    south: console.log('move not allowed'),
    east: console.log('move not allowed'),
    west: eeyore,
}
function move(go){
    this.go;
}
var player = {
    location: tigger
}
function pickUp(){
    if(location == bees);
        honey = True;
}