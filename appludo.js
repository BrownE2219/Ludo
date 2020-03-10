var activePlayer, dice, pos, but;
var dicerolled;
var i = 1;
init();
/* player 0,1,2,3 dice 0,1,2,3 */
document.querySelector('.playroll'+activePlayer).addEventListener('click',rolled);
function rolled(){
  roll();
  dicerolled = true;
  document.querySelector('.playroll'+activePlayer).removeEventListener('click',rolled);
  document.querySelector('.PlayerB'+activePlayer+'0').addEventListener('click',function(){pawn('0');});
  document.querySelector('.PlayerB'+activePlayer+'1').addEventListener('click',function(){pawn('1');});
  document.querySelector('.PlayerB'+activePlayer+'2').addEventListener('click',function(){pawn('2');});
  document.querySelector('.PlayerB'+activePlayer+'3').addEventListener('click',function(){pawn('3');});
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
  pos = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
  defaultDice();
}
function pawn(k){

  var b = document.querySelector('.PlayerB'+activePlayer+k).style;
  if(dicerolled)
  {
    if(activePlayer === 0)
    {
      b.left = document.querySelector('.g'+(1+dice)).style.left;
      b.top = document.querySelector('.g'+(1+dice)).style.top;
    }
    if(activePlayer === 1)
    {
      b.left = document.querySelector('.r'+(1+dice)).style.left;
      b.top = document.querySelector('.r'+(1+dice)).style.top;
    }
    if(activePlayer === 2)
    {
      b.left = document.querySelector('.b'+(1+dice)).style.left;
      b.top = document.querySelector('.b'+(1+dice)).style.top;
    }
    if(activePlayer === 3)
    {
      b.left = document.querySelector('.y'+(1+dice)).style.left;
      b.top = document.querySelector('.y'+(1+dice)).style.top;
    }
    dicerolled = false;
    waitingDice();
    nextplayer();
    defaultDice();
  }
  document.querySelector('.playroll'+activePlayer).addEventListener('click',rolled);

}
function nextplayer(){
  if(activePlayer === 3)
  {
    activePlayer = 0;
  }
  else {
    activePlayer += 1;
  }
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
