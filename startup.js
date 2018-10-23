let par;let rad;
let par2;
function startup(){
par=createP('Click screen to play again.');
par.position(100,15);par.class("parbdd");
par2=createP('Choose a Surface to play on');
par2.position(450,15);par2.class("parbdd");

rad=createRadio('Choose a surface to play on');
rad.option('flat',1);
rad.option('cylinder',2);
rad.option('mobius',3);
rad.option('klein bottle',4);
rad.option('sphere',5);
rad.class("parbdd");rad.position(450,75);
}