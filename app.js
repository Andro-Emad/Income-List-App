function Ok() {
  /* 1+2 =3
    4+5+6=7 
    7+3 =8
  */
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let number3 = document.getElementById("number3").value;
  let number4 = (document.getElementById("number4").value =
    +number2 + +number1 + +number3);
  let number5 = document.getElementById("number5").value;
  let number6 = document.getElementById("number6").value;
  let number7 = document.getElementById("number7").value;
  let number8 = document.getElementById("number8").value;
  let number9 = (document.getElementById("number9").value =
    +number5 + +number6 + +number7 + +number8);

  document.getElementById("number10").value = +number4 - +number9;
}
