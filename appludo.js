var activePlayer, dice, pos, but;
var dicerolled,validpawns;
var i = 1;
const max = 57;
var shouldnext = true;
init();
/* player 0,1,2,3 dice 0,1,2,3 */
document.querySelector('.playroll'+activePlayer).addEventListener('click',rolled);
function rolled(){
  roll();
  window.setTimeout(move,300);
  shouldnext = true;
  dicerolled = true;
}
function roll(){
  dice = Math.floor(Math.random()*6) + 1;
  switch(dice){
    case 1:
      document.querySelector('.p'+activePlayer+'1').style.display = "block";
      document.querySelector('.p'+activePlayer+'2').style.display = "none";
      document.querySelector('.p'+activePlayer+'3').style.display = "none";
      document.querySelector('.p'+activePlayer+'4').style.display = "none";
      document.querySelector('.p'+activePlayer+'5').style.display = "none";
      document.querySelector('.p'+activePlayer+'6').style.display = "none";
      document.querySelector('.p'+activePlayer+'7').style.display = "none";
      break;
    case 2:
    document.querySelector('.p'+activePlayer+'1').style.display = "none";
    document.querySelector('.p'+activePlayer+'2').style.display = "none";
    document.querySelector('.p'+activePlayer+'3').style.display = "block";
    document.querySelector('.p'+activePlayer+'4').style.display = "none";
    document.querySelector('.p'+activePlayer+'5').style.display = "block";
    document.querySelector('.p'+activePlayer+'6').style.display = "none";
    document.querySelector('.p'+activePlayer+'7').style.display = "none";
      break;
    case 3:
    document.querySelector('.p'+activePlayer+'1').style.display = "block";
    document.querySelector('.p'+activePlayer+'2').style.display = "block";
    document.querySelector('.p'+activePlayer+'3').style.display = "none";
    document.querySelector('.p'+activePlayer+'4').style.display = "none";
    document.querySelector('.p'+activePlayer+'5').style.display = "none";
    document.querySelector('.p'+activePlayer+'6').style.display = "block";
    document.querySelector('.p'+activePlayer+'7').style.display = "none";
      break;
    case 4:
    document.querySelector('.p'+activePlayer+'1').style.display = "none";
    document.querySelector('.p'+activePlayer+'2').style.display = "block";
    document.querySelector('.p'+activePlayer+'3').style.display = "block";
    document.querySelector('.p'+activePlayer+'4').style.display = "none";
    document.querySelector('.p'+activePlayer+'5').style.display = "block";
    document.querySelector('.p'+activePlayer+'6').style.display = "block";
    document.querySelector('.p'+activePlayer+'7').style.display = "none";
      break;
    case 5:
    document.querySelector('.p'+activePlayer+'1').style.display = "block";
    document.querySelector('.p'+activePlayer+'2').style.display = "block";
    document.querySelector('.p'+activePlayer+'3').style.display = "block";
    document.querySelector('.p'+activePlayer+'4').style.display = "none";
    document.querySelector('.p'+activePlayer+'5').style.display = "block";
    document.querySelector('.p'+activePlayer+'6').style.display = "block";
    document.querySelector('.p'+activePlayer+'7').style.display = "none";
      break;
    case 6:
      document.querySelector('.p'+activePlayer+'1').style.display = "none";
      document.querySelector('.p'+activePlayer+'2').style.display = "block";
      document.querySelector('.p'+activePlayer+'3').style.display = "block";
      document.querySelector('.p'+activePlayer+'4').style.display = "block";
      document.querySelector('.p'+activePlayer+'5').style.display = "block";
      document.querySelector('.p'+activePlayer+'6').style.display = "block";
      document.querySelector('.p'+activePlayer+'7').style.display = "block";
      break;
  }
}
function init(){
  activePlayer = 0
  dicerolled = false;
  players = [0,1,2,3,0];
  pos = [[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1]];
  defaultDice();
}
function pawn(k){
  document.querySelector('.PlayerB'+activePlayer+'0').removeAttribute("onclick","pawn(0)");
  document.querySelector('.PlayerB'+activePlayer+'1').removeAttribute("onclick","pawn(1)");
  document.querySelector('.PlayerB'+activePlayer+'2').removeAttribute("onclick","pawn(2)");
  document.querySelector('.PlayerB'+activePlayer+'3').removeAttribute("onclick","pawn(3)");


  var b = document.querySelector('.PlayerB'+activePlayer+k).style;
  if(dicerolled){
    if(pos[activePlayer][k] === -1)
    {
      pos[activePlayer][k] = 1;
    }
    else{
      pos[activePlayer][k] += dice;
    }
    if(activePlayer === 0){
      b.left = document.querySelector('.g'+(pos[activePlayer][k])).style.left;
      b.top = document.querySelector('.g'+(pos[activePlayer][k])).style.top;
    }
    if(activePlayer === 1){
      b.left = document.querySelector('.r'+(pos[activePlayer][k])).style.left;
      b.top = document.querySelector('.r'+(pos[activePlayer][k])).style.top;
    }
    if(activePlayer === 2){
      b.left = document.querySelector('.b'+(pos[activePlayer][k])).style.left;
      b.top = document.querySelector('.b'+(pos[activePlayer][k])).style.top;
    }
    if(activePlayer === 3){
      b.left = document.querySelector('.y'+(pos[activePlayer][k])).style.left;
      b.top = document.querySelector('.y'+(pos[activePlayer][k])).style.top;
    }
    dicerolled = false;
    waitingDice();
    nextplayer();
    defaultDice();
  }

}
function nextplayer(){
  if(activePlayer === 3 && dice !== 6)
  {
    activePlayer = 0;
  }
  else if(dice !== 6) {
    activePlayer += 1;
  }
    document.querySelector('.playroll'+activePlayer).addEventListener('click',rolled);
}
function defaultDice(){
  document.querySelector('.p'+activePlayer+'1').style.display = "none";
  document.querySelector('.p'+activePlayer+'2').style.display = "block";
  document.querySelector('.p'+activePlayer+'3').style.display = "block";
  document.querySelector('.p'+activePlayer+'4').style.display = "block";
  document.querySelector('.p'+activePlayer+'5').style.display = "block";
  document.querySelector('.p'+activePlayer+'6').style.display = "block";
  document.querySelector('.p'+activePlayer+'7').style.display = "block";
}
function waitingDice(){
  document.querySelector('.p'+activePlayer+'1').style.display = "none";
  document.querySelector('.p'+activePlayer+'2').style.display = "none";
  document.querySelector('.p'+activePlayer+'3').style.display = "none";
  document.querySelector('.p'+activePlayer+'4').style.display = "none";
  document.querySelector('.p'+activePlayer+'5').style.display = "none";
  document.querySelector('.p'+activePlayer+'6').style.display = "none";
  document.querySelector('.p'+activePlayer+'7').style.display = "none";
}
function move(){
  document.querySelector('.playroll'+activePlayer).removeEventListener('click',rolled);
  if(pos[activePlayer][0] !== -1 || dice === 6 )
  {
    shouldnext = false;
    document.querySelector('.PlayerB'+activePlayer+'0').setAttribute("onclick","pawn(0)");
  }
  if(pos[activePlayer][1] !== -1 || dice === 6 )
  {
    shouldnext = false;
    document.querySelector('.PlayerB'+activePlayer+'1').setAttribute("onclick","pawn(1)");
  }
  if(pos[activePlayer][2] !== -1 || dice === 6 )
  {
    shouldnext = false;
    document.querySelector('.PlayerB'+activePlayer+'2').setAttribute("onclick","pawn(2)");
  }
  if(pos[activePlayer][3] !== -1 || dice === 6 )
  {
    shouldnext = false;
    document.querySelector('.PlayerB'+activePlayer+'3').setAttribute("onclick","pawn(3)");
  }
  if(shouldnext)
  {
    dicerolled = false;
    waitingDice();
    nextplayer();
    defaultDice();
  }
}
