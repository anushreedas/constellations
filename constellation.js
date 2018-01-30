var t1 = function( p ) {

  let constellation1= [];
   var glowTimer=0;
   var z=0;
   var expandContract=0;
   var zoom = 1.00;
  var col= {
  r:255,
  g:255,
  b:255,
};
  p.setup = function() {
    w=windowWidth; h=windowHeight;
    if(w>1500  || h>600){ zoom = 1.4;}
    if(w>1400 && w<1500){ zoom = 1.3;}
    if(w>1300 && w<1400){ zoom = 1.2;}
    if(w>1200 && w<1300){ zoom = 1.1;}
    if(w>1100 && w<1200){ zoom = 1.0;}
    if(w>1000 && w<1100){ zoom = 0.9;}
    if(w>900 && w<1000){ zoom = 0.8;}
    if(w>800 && w<900){ zoom = 0.75;}
    if(w>700 && w<800){ zoom = 0.7;}
    if(w>600 && w<700){ zoom = 0.65;}
    if(w>500 && w<600 ){ zoom = 0.6;}
    if(w>350 && w<500 ){ zoom = 0.4;}
    if(w<350 || h<500){ zoom = 0.3;}
    p.createCanvas(w/2, w/2);
    p.textSize(15);
    p.fill(200, 202, 253);
    p.text('URSA MINOR', 5, 20);

    dim2 = 15;
    //console.log(zoom);
    constellation1[0]=new constelStar(160,95,174,164);
    constellation1[1]=new constelStar(174,164,216,254);
    constellation1[2]=new constelStar(216,254,302,291);
    constellation1[3]=new constelStar(302,291,396,304);
    constellation1[4]=new constelStar(396,304,396,368);
    constellation1[5]=new constelStar(396,368,290,353);
    constellation1[6]=new constelStar(290,353,302,291);
  };

  p.draw = function() {
    if(window.onresize)  p.setup();//console.log("resized")};
    p.background(0,1,15,0.5 * 255);

    glowTimer++;
   if(parseInt(glowTimer)%2==0){
     if(expandContract==0){dim2-=1.0;z++;if(z==10) expandContract=1;}
    else if(expandContract==1){dim2+=1.0;z--; if(z==0) expandContract=0;}
    }

    p.scale(zoom);
    for(var i=0;i<7;i++)
    {
      drawGradient(constellation1[i]);
    }


  };
  
  class constelStar{
    constructor(X1,Y1,X2,Y2){this.x1=X1;this.y1=Y1;this.x2=X2;this.y2=Y2;}



      }
     function drawGradient(constelS) {
       var radius = dim2/2;
        var from = p.color(255, 255, 255,  255);
        var to = p.color(0, 0, 255,  255);
       col=p.lerpColor(from, to, .33);
        for (var r = radius; r > 0; r-=5) {
        p.fill(col, 90, 90);
        p.ellipse(constelS.x1,constelS.y1, r, r);//console.log(r);
        p.ellipse(constelS.x2,constelS.y2, r, r);
        p.stroke(255);
        p.line(constelS.x1,constelS.y1,constelS.x2,constelS.y2);
       }
  }


};
var t2 = function( p ) {

  let constellation1= [];
  let constellation2= [];
   var glowTimer=0;
   var z=0;
   var expandContract=0;
   var zoom = 1.00;
  var col= {
  r:255,
  g:255,
  b:255,
};
  p.setup = function() {
    w=windowWidth; h=windowHeight;
    if(w>1500  || h>600){ zoom = 1.2;}
    if(w>1400 && w<1500){ zoom = 1.1;}
    if(w>1300 && w<1400){ zoom = 1.0;}
    if(w>1200 && w<1300){ zoom = 0.9;}
    if(w>1100 && w<1200){ zoom = 0.8;}
    if(w>1000 && w<1100){ zoom = 0.7;}
    if(w>900 && w<1000){ zoom = 0.65;}
    if(w>800 && w<900){ zoom = 0.6;}
    if(w>700 && w<800){ zoom = 0.55;}
    if(w>600 && w<700){ zoom = 0.5;}
    if(w>500 && w<600 ){ zoom = 0.45;}
    if(w>350 && w<500 ){ zoom = 0.4;}
    if(w<350 || h<500){ zoom = 0.3;}
    p.createCanvas((w/2), (w/2));
    p.textSize(15);
    p.fill(200, 202, 253);
    p.text('URSA MAJOR', 5, 20);

    dim2 = 15;
    //console.log(zoom);
    constellation1[0]=new constelStar(13,310,90,259);
    constellation1[1]=new constelStar(90,259,152,267);
    constellation1[2]=new constelStar(152,267,226,269);
    constellation1[3]=new constelStar(226,269,342,191);
    constellation1[4]=new constelStar(342,191,462,113);
    constellation1[5]=new constelStar(462,113,556,61);
    constellation1[6]=new constelStar(226,269,268,309);
    constellation1[7]=new constelStar(268,309,290,385);
    constellation1[8]=new constelStar(290,385,392,563);
    constellation1[9]=new constelStar(392,563,396,583);
    constellation1[10]=new constelStar(290,385,387,408);
    constellation1[11]=new constelStar(387,408,522,384);
    constellation1[12]=new constelStar(522,384,519,408);
    constellation1[13]=new constelStar(462,113,468,192);
    constellation1[14]=new constelStar(468,192,501,227);
    constellation1[15]=new constelStar(501,227,552,230);
    constellation1[16]=new constelStar(552,230,644,214);
    constellation1[17]=new constelStar(644,214,641,233);
    constellation1[18]=new constelStar(268,309,367,257);
    constellation1[19]=new constelStar(367,257,342,191);
  };

  p.draw = function() {
    if(window.onresize)  p.setup();//console.log("resized")};
    p.background(0,1,15,0.5 * 255);

    glowTimer++;
   if(parseInt(glowTimer)%2==0){
     if(expandContract==0){dim2-=1.0;z++;if(z==10) expandContract=1;}
    else if(expandContract==1){dim2+=1.0;z--; if(z==0) expandContract=0;}
    }

    p.scale(zoom);
    for(var i=0;i<20;i++)
    {
      drawGradient(constellation1[i]);
    }


  };
  
  class constelStar{
    constructor(X1,Y1,X2,Y2){this.x1=X1;this.y1=Y1;this.x2=X2;this.y2=Y2;}



      }
     function drawGradient(constelS) {
       var radius = dim2/2;
        var from = p.color(255, 255, 255,  255);
        var to = p.color(0, 0, 255,  255);
       col=p.lerpColor(from, to, .33);
        for (var r = radius; r > 0; r-=5) {
        p.fill(col, 90, 90);
        p.ellipse(constelS.x1,constelS.y1, r, r);//console.log(r);
        p.ellipse(constelS.x2,constelS.y2, r, r);
        p.stroke(255);
        p.line(constelS.x1,constelS.y1,constelS.x2,constelS.y2);
       }
  }


};

var t3 = function( p ) {

  let constellation1= [];
  let constellation2= [];
   var glowTimer=0;
   var z=0;
   var expandContract=0;
   var zoom = 1.00;
  var col= {
  r:255,
  g:255,
  b:255,
};
  p.setup = function() {
    w=windowWidth; h=windowHeight;
    if(w>1500  || h>600){ zoom = 1.2;}
    if(w>1400 && w<1500){ zoom = 1.1;}
    if(w>1300 && w<1400){ zoom = 1.0;}
    if(w>1200 && w<1300){ zoom = 0.9;}
    if(w>1100 && w<1200){ zoom = 0.8;}
    if(w>1000 && w<1100){ zoom = 0.7;}
    if(w>900 && w<1000){ zoom = 0.65;}
    if(w>800 && w<900){ zoom = 0.6;}
    if(w>700 && w<800){ zoom = 0.55;}
    if(w>600 && w<700){ zoom = 0.5;}
    if(w>500 && w<600 ){ zoom = 0.45;}
    if(w>350 && w<500 ){ zoom = 0.4;}
    if(w<350 || h<500){ zoom = 0.3;}
    p.createCanvas((w/2), (w/2));
    p.textSize(15);
    p.fill(200, 202, 253);
    p.text('HERCULES', 5, 20);

    dim2 = 15;
    //console.log(zoom);
    constellation1[0]=new constelStar(77,288,157,307);
    constellation1[1]=new constelStar(157,307,222,312);
    constellation1[2]=new constelStar(222,312,290,408);
    constellation1[3]=new constelStar(290,408,306,548);
    constellation1[4]=new constelStar(290,408,372,330);
    constellation1[5]=new constelStar(372,330,342,266);
    constellation1[6]=new constelStar(222,312,342,266);
    constellation1[7]=new constelStar(372,330,485,359);
    constellation1[8]=new constelStar(485,359,462,486);
    constellation1[9]=new constelStar(462,486,442,530);
    constellation1[10]=new constelStar(442,530,455,567);
    constellation1[11]=new constelStar(342,266,492,174);
    constellation1[12]=new constelStar(492,174,522,129);
  };

  p.draw = function() {
    if(window.onresize)  p.setup();//console.log("resized")};
    p.background(0,1,15,0.5 * 255);

    glowTimer++;
   if(parseInt(glowTimer)%2==0){
     if(expandContract==0){dim2-=1.0;z++;if(z==10) expandContract=1;}
    else if(expandContract==1){dim2+=1.0;z--; if(z==0) expandContract=0;}
    }

    p.scale(zoom);
    for(var i=0;i<13;i++)
    {
      drawGradient(constellation1[i]);
    }


  };
  
  class constelStar{
    constructor(X1,Y1,X2,Y2){this.x1=X1;this.y1=Y1;this.x2=X2;this.y2=Y2;}



      }
     function drawGradient(constelS) {
       var radius = dim2/2;
        var from = p.color(255, 255, 255,  255);
        var to = p.color(0, 0, 255,  255);
       col=p.lerpColor(from, to, .33);
        for (var r = radius; r > 0; r-=5) {
        p.fill(col, 90, 90);
        p.ellipse(constelS.x1,constelS.y1, r, r);//console.log(r);
        p.ellipse(constelS.x2,constelS.y2, r, r);
        p.stroke(255);
        p.line(constelS.x1,constelS.y1,constelS.x2,constelS.y2);
       }
  }


};

var t4 = function( p ) {

  let constellation1= [];
  let constellation2= [];
   var glowTimer=0;
   var z=0;
   var expandContract=0;
   var zoom = 1.00;
  var col= {
  r:255,
  g:255,
  b:255,
};
  p.setup = function() {
    w=windowWidth; h=windowHeight;
    if(w>1500  || h>600){ zoom = 1.2;}
    if(w>1400 && w<1500){ zoom = 1.1;}
    if(w>1300 && w<1400){ zoom = 1.0;}
    if(w>1200 && w<1300){ zoom = 0.9;}
    if(w>1100 && w<1200){ zoom = 0.8;}
    if(w>1000 && w<1100){ zoom = 0.7;}
    if(w>900 && w<1000){ zoom = 0.65;}
    if(w>800 && w<900){ zoom = 0.6;}
    if(w>700 && w<800){ zoom = 0.55;}
    if(w>600 && w<700){ zoom = 0.5;}
    if(w>500 && w<600 ){ zoom = 0.45;}
    if(w>350 && w<500 ){ zoom = 0.4;}
    if(w<350 || h<500){ zoom = 0.3;}
    p.createCanvas((w/2), (w/2));
    p.textSize(15);
    p.fill(200, 202, 253);
    p.text('ORION', 5, 20);

    dim2 = 15;
    //console.log(zoom);
    constellation1[0]=new constelStar(138,66,150,166);
    constellation1[1]=new constelStar(150,166,174,150);
    constellation1[2]=new constelStar(174,150,193,65);
    constellation1[3]=new constelStar(193,65,192,48); //
    constellation1[4]=new constelStar(150,166,193,244);
    constellation1[5]=new constelStar(193,244,228,290);
    constellation1[6]=new constelStar(228,290,318,247);
    constellation1[7]=new constelStar(318,247,325,262);
    constellation1[8]=new constelStar(325,262,359,308);
    constellation1[9]=new constelStar(359,308,527,294);
    constellation1[10]=new constelStar(527,294,524,327);
    constellation1[11]=new constelStar(524,327,515,379);
    constellation1[12]=new constelStar(515,379,487,398);//
    constellation1[13]=new constelStar(527,294,524,260);
    constellation1[14]=new constelStar(524,260,508,238);//
    constellation1[15]=new constelStar(228,290,288,464);
    constellation1[16]=new constelStar(263,600,288,464);
    constellation1[17]=new constelStar(288,464,313,448);
    constellation1[18]=new constelStar(313,448,355,434);
    constellation1[19]=new constelStar(355,434,359,308);
    constellation1[20]=new constelStar(355,434,411,577);
    constellation1[21]=new constelStar(263,600,411,577);
  };

  p.draw = function() {
    if(window.onresize)  p.setup();//console.log("resized")};
    p.background(0,1,15,0.5 * 255);

    glowTimer++;
   if(parseInt(glowTimer)%2==0){
     if(expandContract==0){dim2-=1.0;z++;if(z==10) expandContract=1;}
    else if(expandContract==1){dim2+=1.0;z--; if(z==0) expandContract=0;}
    }

    p.scale(zoom);
    for(var i=0;i<22;i++)
    {
      drawGradient(constellation1[i]);
    }


  };

  class constelStar{
    constructor(X1,Y1,X2,Y2){this.x1=X1;this.y1=Y1;this.x2=X2;this.y2=Y2;}



      }
     function drawGradient(constelS) {
       var radius = dim2/2;
        var from = p.color(255, 255, 255,  255);
        var to = p.color(0, 0, 255,  255);
       col=p.lerpColor(from, to, .33);
        for (var r = radius; r > 0; r-=5) {
        p.fill(col, 90, 90);
        p.ellipse(constelS.x1,constelS.y1, r, r);//console.log(r);
        p.ellipse(constelS.x2,constelS.y2, r, r);
        p.stroke(255);
        p.line(constelS.x1,constelS.y1,constelS.x2,constelS.y2);
       }
  }


};

var myp5 = new p5(t1, 'ursaMinor');
var myp5 = new p5(t2, 'ursaMajor');
var myp5 = new p5(t3, 'hercules');
var myp5 = new p5(t4, 'orion');
