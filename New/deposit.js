document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositfield = document.getElementById("deposit-field");
  const newdepositInputstring = depositfield.value;
  const newdepositInput = parseFloat(newdepositInputstring);

  // console.log(newdepositInput);
  console.log(typeof newdepositInput);

  const depositTotalElement = document.getElementById("deposit-total");

  const previousdepositallstring = depositTotalElement.innerText;

  const previousdepositall = parseFloat(previousdepositallstring);

  const currentDeposittotal = previousdepositall + newdepositInput;

  depositTotalElement.innerText = currentDeposittotal;
  //

  const balance = document.getElementById("balance-total");

  const previousbalancestring = balance.innerText;

  const previousbalancetotal = parseFloat(previousbalancestring);

  const currentbalancetotal = newdepositInput + previousbalancetotal;

  balance.innerText = currentbalancetotal;

  //

  depositfield.value = "";
});
