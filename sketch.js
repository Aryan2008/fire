var canvas, database;
var backGroundImg;
var gameState=0;
var playerCount;
var form,player,game;


function setup(){
  database = firebase.database();
  console.log(database);
  Canvas=createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  
}

