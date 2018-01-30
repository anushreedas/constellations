 let tree= [];
 let fireflies=[];
 let star=[];
 var pathTime=0;
 var glowTimer=0;
 var direction=3;
 var angle=0;
 var z=0;
 var expandContract=0;
  var direction2=3;
  var pathTime2=0;
  var starCount=500;
  var col= {
  r:255,
  g:255,
  b:255,
};
 var img;
 var pos;
 var maxTrees=80;
 var maxFlies=50;

function preload() {
  img = loadImage('assets/treeSilhouette.png');
}

 function setup() {
 	createCanvas(windowWidth, windowHeight);
        maxFlies=windowWidth/20;
        c1 = color(0, 10, 80);
        c2 = color(0);
        for(var i=0;i<maxTrees;i++)
         tree[i]=new Tree();
        for(var k=0;k<starCount;k++)
          star[k]=new Stars();
 	 dim = 15;
         ellipseMode(RADIUS);
         frameRate(100);
         //document.getElementById("myCanvas");
         for(var j=0;j<maxFlies;j++)
            fireflies[j]=new firefly(random(0,windowWidth),random(0,windowHeight));
 }
function draw() {
  window.onresize = function(){setup();}; 
   background(0);
   for (var i = 0; i <= windowHeight; i++) {
      var inter = map(i, 0, 0+windowHeight, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, i, windowWidth, i);
    }
    noStroke();
   //var pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  var x = floor(random(windowWidth));
  var y = floor(random(windowHeight));

  for(var k=0;k<starCount;k++)
          drawGradient(star[k].x,star[k].y,star[k].d);
   fill(0);
   arc(windowWidth/2, windowHeight, windowWidth/2, 50, PI,TWO_PI, OPEN);

   for(var i=0;i<maxTrees;i++)
         tree[i].drawTree();
   for(var j=0;j<maxFlies;j++)
           drawGradient2(fireflies[j].x,fireflies[j].y);

   glowTimer++;
   if(parseInt(glowTimer)%2==0){
     if(expandContract==0){dim-=0.5;z++;if(z==3) expandContract=1;}
    else if(expandContract==1){dim+=0.5;z--; if(z==0) expandContract=0;}
    }

   for(var j=0;j<maxFlies;j++)
       fireflies[j].changeDir();
   for(var j=0;j<maxFlies;j++)
         fireflies[j].Move( fireflies[j].dir);
}

class Stars
{
  constructor (){
     this.x=random(-20,windowWidth);
     this.y=random(0,windowHeight);
     this.d=random(0,1);
  }
}

 class Tree
  {
    constructor (){
      this.x=random(-20,windowWidth);
      this.y=random(3*windowHeight/4,(3*windowHeight/4)+50);
      this.w=random(60,100);
      this.h=random(200,250);
    }

     drawTree()
    {
       image(img,this.x,this.y,this.w,250);
    }
   }
   

class firefly
{

  constructor(X,Y){
    this.x=X;
    this.y=Y;
    this.dir=parseInt(random(0,5));
    this.pathTime=0;
    this.up=random(100,1000);
  }
  changeDir()
  {
    this.pathTime++;

    if(this.pathTime>this.up)
    {
      console.log("move");
      this.dir=parseInt(random(0,5));
      this.up=random(100,1000);
      this.pathTime=0;
    }
  }

   Move(i)
   {  angle=random(-0.5,0.5);
      if(this.x<0 && this.x>windowWidth && this.y<0 && this.y>windowHeight)
        this.changeDir();
      else{
      if(i==1)
       {this.x+=0.5;
       this.y+=angle;
       }
       else  if(i==2)
       {this.x-=0.5;
        this.y+=angle;
       }
       else if(i==3)
       {this.y+=0.5;
       this.x+=angle;
       }

       else  if(i==4)
       {this.y-=0.5;
       this.x+=angle;
       }
       }
    }
}

function   drawGradient(X, Y,D) {
   var radius = D+(dim/10);
    var from = color(255, 255, 255, 0.2 * 255);
    var to = color(200, 150, 255, 0.2 * 255);
   col=lerpColor(from, to, .33);
    for (var r = radius; r > 0; r-=1) {
    fill(col, 90, 90);
    ellipse(X,Y, r, r);//console.log(r);
   }
  }

function   drawGradient2(X, Y) {
   var radius = dim/2;
    var from = color(255, 255, 0, 0.2 * 255);
    var to = color(0, 255, 255, 0.2 * 255);
   col=lerpColor(from, to, .33);
    for (var r = radius; r > 0; r-=1) {
    fill(col, 90, 90);
    ellipse(X,Y, r, r);//console.log(r);
   }
  }
