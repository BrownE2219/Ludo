var activePlayer = Math.floor(Math.random()*4) + 1;
document.querySelector('.p'+activePlayer+'1').style.display = "none";
document.querySelector('.p'+activePlayer+'2').style.display = "block";
document.querySelector('.p'+activePlayer+'3').style.display = "block";
document.querySelector('.p'+activePlayer+'4').style.display = "block";
document.querySelector('.p'+activePlayer+'5').style.display = "block";
document.querySelector('.p'+activePlayer+'6').style.display = "block";
document.querySelector('.p'+activePlayer+'7').style.display = "block";
document.querySelector('.playroll'+activePlayer).addEventListener('click',roll);
function roll(){
  var dice;
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
