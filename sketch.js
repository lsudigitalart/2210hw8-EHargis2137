var ears1, ears2, ears3;
var face1, face2, face3;
var head1, head2, head3;
var tail1, tail2, tail3;
var body1, body2, body3;
var arms1, arms2, arms3;
var legs1, legs2, legs3;

function preload(){
  imageMode(CENTER);

  //monster1
  ears1=loadImage('images/monster1/horns.png');
  face1=loadImage('images/monster1/face.png');
  head1=loadImage('images/monster1/head.png');
  tail1=loadImage('images/monster1/tail.png');
  body1=loadImage('images/monster1/body_fixed.png');
  arms1=loadImage('images/monster1/arms.png');
  legs1=loadImage('images/monster1/legs.png');

  //monster2
  ears2=loadImage('images/monster2/ears.png');
  face2=loadImage('images/monster2/face.png');
  head2=loadImage('images/monster2/head_fixed.png');
  tail2=loadImage('images/monster2/tail.png');
  body2=loadImage('images/monster2/body.png');
  arms2=loadImage('images/monster2/arms.png');
  legs2=loadImage('images/monster2/feet.png');

  //monster3
  ears3=loadImage('images/monster3/ears.png');
  face3=loadImage('images/monster3/face.png');
  head3=loadImage('images/monster3/head.png');
  tail3=loadImage('images/monster3/nothing.png');
  body3=loadImage('images/monster3/body.png');
  arms3=loadImage('images/monster3/arms.png');
  legs3=loadImage('images/monster3/feet.png');
}

function setup(){
  createCanvas(640, 550);
  background(40);
}

function draw(){}

function mouseReleased(){
  CharGen();
}

function CharGen(){
  background(40);
  a = random(0,3);
  b = random(0,3);
  c = random(0,3);
  d = random(0,3);
  e = random(0,3);
  f = random(0,3);
  g = random(0,3);

    //tail
    if(d > 0 && d < 1){
      image(tail1, 320, 240, 520, 520);
    }
    if(d > 1 && d < 2){
      image(tail2, 320, 240, 520, 520);
    }
    if(d > 2 && d < 3){
      image(tail3, 320, 240, 520, 520);
    }

    //body
    if(e > 0 && e < 1){
      image(body1, 320, 240, 520, 520);
    }
    if(e > 1 && e < 2){
      image(body2, 320, 240, 520, 520);
    }
    if(e > 2 && e < 3){
      image(body3, 320, 240, 520, 520);
    }

    //arms
    if(f > 0 && f < 1){
      image(arms1, 320, 240, 520, 520);
    }
    if(f > 1 && f < 2){
      image(arms2, 320, 240, 520, 520);
    }
    if(f > 2 && f < 3){
      image(arms3, 320, 240, 520, 520);
    }

    //legs
    if(g > 0 && g < 1){
      image(legs1, 320, 240, 520, 520);
    }
    if(g > 1 && g < 2){
      image(legs2, 320, 240, 520, 520);
    }
    if(g > 2 && g < 3){
      image(legs3, 320, 240, 520, 520);
    }

    //ears
    if(a > 0 && a < 1){
      image(ears1, 320, 240, 520, 520);
    }
    if(a > 1 && a < 2){
      image(ears2, 320, 240, 520, 520);
    }
    if(a > 2 && a < 3){
      image(ears3, 320, 240, 520, 520);
    }

    //head
    if(c > 0 && c < 1){
      image(head1, 320, 240, 520, 520);
    }
    if(c > 1 && c < 2){
      image(head2, 320, 240, 520, 520);
    }
    if(c > 2 && c < 3){
      image(head3, 320, 240, 520, 520);
    }

    //face
    if(b > 0 && b < 1){
      image(face1, 320, 240, 520, 520);
    }
    if(b > 1 && b < 2){
      image(face2, 320, 240, 520, 520);
    }
    if(b > 2 && b < 3){
      image(face3, 320, 240, 520, 520);
    }
}
