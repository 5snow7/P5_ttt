let can;let xpos,ypos;
let img=[];let img2=[];
//function preload() {img = loadImage('classpic.jpg'); } 
//img2 = loadImage('border.jpg');}


function setup() {
textSize(20);
xpos=120;ypos=120;startup();
can=createCanvas(500,400);
can.position(100,150);
can.class("bdd");
can.mousePressed(cl);
for(let j=1;j<10;j++){
img[j] = createImg("classpic.jpg");//img[j].class('picbdd');
img2[j] = createImg("border.jpg");//img2[j].class('picbdd');
}
board();
//rad.changed(chgame);
}

function draw() {
text("this project is not finished.",20,50);
playGame();
rad.changed(chGame);
chWinner();
}

function cl(){rest();setup();}

function chGame(){
	textSize(24);
	let val=rad.value();
	switch(val){
		case '1':text("u chose flat", 10,20);break;
		case '2':text("u chose cylinder", 10,20);break;
        case '3':text("u chose mobius", 10,20);break;
        case '4':text("u chose Klein Bottle", 10,20);break;
        case '5':text("u chose sphere", 10,20);break;
         default: text("u chose nothing", 10,20);

	}
	
}