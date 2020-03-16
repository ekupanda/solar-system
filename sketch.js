var mercury;
var venus;
var mars;
var earth;
var jupiter;
var saturn;
var uranus;
var neptune;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;


function setup() {
  createCanvas(800,400);
  sun = createSprite(0, 0);
  sun.scale = 0.3;
  sun.setCollider("circle", -85, -60, 140);

  mercury = createSprite(70, 50);
  mercury.scale = 0.1;

  venus = createSprite(210, 60);
  venus.scale = 0.15;

  earth = createSprite(150, -18);
  earth.scale = 0.22;

  mars = createSprite(30, 220);
  mars.scale = 0.2;

  jupiter = createSprite(-180, 210);
  jupiter.scale = 0.3;

  saturn = createSprite(340, -30);
  saturn.scale = 0.3;

  uranus = createSprite(220, 350);
  uranus.scale = 0.2;

  neptune = createSprite(-340, -320);
  neptune.scale = 0.1;
}

function draw() {
  background(800,800);  
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(angle);

  if (sun.collide(mercury)||sun.collide(venus)|| sun.collide(earth)|| sun.collide(mars)) {
      mercury.destroy();
      venus.destroy();
      earth.destroy();
      mars.destroy();
      

  }
  angle = angle + anglespeed;

  if(World.frameCount%10===0){
   sun.scale=sun.scale+0.05;
  }
  drawSprites();
}