let pl='z';
let box=[];

function rest(){
for(let j=0;j<11;j++){box[j]=0;}	
}
//chg/test of pull request to testbranch;
function board(){
//testing pull request to gh-pages
 stroke(250,0,0);strokeWeight(6);
 line(50,height/3,width-50,height/3);
 line(50,height*2/3,width-50,height*2/3);
 line(width/3,50,width/3,height-50);
 line(width*2/3,50,width*2/3,height-50);
  }
  

function playGame(){

 if(key=='x'){pl='x';}
 if(key=='7'&&pl=='x'){img[7].class('picbdd');img[7].position(xpos+width/6,ypos+height/6);pl='z';key='z';box[7]=1;} 
 if(key=='8'&&pl=='x'){img[8].class('picbdd');img[8].position(xpos+width/2-50,ypos+height/6);pl='z';key='z';box[8]=1;} 
 if(key=='9'&&pl=='x'){img[9].class('picbdd');img[9].position(xpos+width*5/6-50,ypos+height/6);pl='z';key='z';box[9]=1;} 
 if(key=='4'&&pl=='x'){img[4].class('picbdd');img[4].position(xpos+width/6,ypos+height/2-30);pl='z';key='z';box[4]=1;} 
 if(key=='5'&&pl=='x'){img[5].class('picbdd');img[5].position(xpos+width/2-50,ypos+height/2-30);pl='z';key='z';box[5]=1;} 
 if(key=='6'&&pl=='x'){img[6].class('picbdd');img[6].position(xpos+width*5/6-50,ypos+height/2-30);pl='z';key='z';box[6]=1;} 
 if(key=='1'&&pl=='x'){img[1].class('picbdd');img[1].position(xpos+width/6,ypos+height*5/6-50);pl='z';key='z';box[1]=1;} 
 if(key=='2'&&pl=='x'){img[2].class('picbdd');img[2].position(xpos+width/2-50,ypos+height*5/6-50);pl='z';key='z';box[2]=1;} 
 if(key=='3'&&pl=='x'){img[3].class('picbdd');img[3].position(xpos+width*5/6-50,ypos+height*5/6-50);pl='z';key='z';box[3]=1;} 
  
 if(key=='y'){pl='y';}
 if(key=='7'&&pl=='y'){img2[7].class('picbdd');img2[7].position(xpos+width/6,ypos+height/6);pl='z';key='z';box[7]=2;} 
 if(key=='8'&&pl=='y'){img2[8].class('picbdd');img2[8].position(xpos+width/2-50,ypos+height/6);pl='z';key='z';box[8]=2;} 
 if(key=='9'&&pl=='y'){img2[9].class('picbdd');img2[9].position(xpos+width*5/6-50,ypos+height/6);pl='z';key='z';box[9]=2;} 
 if(key=='4'&&pl=='y'){img2[4].class('picbdd');img2[4].position(xpos+width/6,ypos+height/2-30);pl='z';key='z';box[4]=2;} 
 if(key=='5'&&pl=='y'){img2[5].class('picbdd');img2[5].position(xpos+width/2-50,ypos+height/2-30);pl='z';key='z';box[5]=2;} 
 if(key=='6'&&pl=='y'){img2[6].class('picbdd');img2[6].position(xpos+width*5/6-50,ypos+height/2-30);pl='z';key='z';box[6]=2;} 
 if(key=='1'&&pl=='y'){img2[1].class('picbdd');img2[1].position(xpos+width/6,ypos+height*5/6-50);pl='z';key='z';box[1]=2;} 
 if(key=='2'&&pl=='y'){img2[2].class('picbdd');img2[2].position(xpos+width/2-50,ypos+height*5/6-50);pl='z';key='z';box[2]=2;} 
 if(key=='3'&&pl=='y'){img2[3].class('picbdd');img2[3].position(xpos+width*5/6-50,ypos+height*5/6-50);pl='z';key='z';box[3]=2;} 
 }
 
 function chWinner(){
 if(box[7]==1&&box[8]==1&&box[9]==1){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[7]==1&&box[5]==1&&box[3]==1){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[9]==1&&box[5]==1&&box[1]==1){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[4]==1&&box[5]==1&&box[6]==1){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[1]==1&&box[2]==1&&box[3]==1){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[7]==1&&box[4]==1&&box[1]==1){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[8]==1&&box[5]==1&&box[2]==1){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[9]==1&&box[6]==1&&box[3]==1){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
  //coment
 if(box[7]==2&&box[8]==2&&box[9]==2){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[7]==2&&box[5]==2&&box[3]==2){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[9]==2&&box[5]==2&&box[1]==2){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[4]==2&&box[5]==2&&box[6]==2){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[1]==2&&box[2]==2&&box[3]==2){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[7]==2&&box[4]==2&&box[1]==2){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[8]==2&&box[5]==2&&box[2]==2){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
 if(box[9]==2&&box[6]==2&&box[3]==2){textSize(48);fill(0,250,0);text("winner",width/2-100,height/2-50);} 
  }
