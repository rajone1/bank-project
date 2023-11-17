document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawfield = document.getElementById("withdraw-field");
  const withdrawmoneystring = withdrawfield.value;
  const newwithdrawmoney = parseFloat(withdrawmoneystring);

  // console.log(typeof withdrawmoney);
  //

  const withdrowetotal = document.getElementById("withdraw-total");

  const prerviouswithdrawstring = withdrowetotal.innerText;

  const prerviouswithdraw = parseFloat(prerviouswithdrawstring);

  //
  const currentwithdrawTotal = prerviouswithdraw + newwithdrawmoney;

  // withdrowetotal.innerText = withdrawmoney;
  withdrowetotal.innerText = currentwithdrawTotal;

  //

  const balanceTotal = document.getElementById("balance-total");

  const previousbalanceTotalstring = balanceTotal.innerText;

  const previousbalanceTotal = parseFloat(previousbalanceTotalstring);
  //
  const newbalanceTotal = previousbalanceTotal - newwithdrawmoney;
  balanceTotal.innerText = newbalanceTotal;

  // last clrar input element
  withdrawfield.value = "";
});
