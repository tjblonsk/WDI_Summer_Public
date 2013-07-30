var checkingBalance = 0;
var savingsBalance = 0;

$(function(){


});



  $('checking-deposit').click(function getChecking(event){
    var amount = $('checking-amount').val();
    amount = parseInt(amount);
    checkingBalance = amount + checkingBalance;
    updateDisplay();
  });

  $('savings-deposit').click(function(event){
    var amount = $('savings-amount').val();
    amount = parseInt(amount);
    savingsBalance = amount + savingsBalance;
    updateDisplay();
  });

  $('checking-withdraw').click(function(event){
    var amount = $('checking-amount').val();
    amount = parseInt(amount);
    balances = withdrawFunds(amount, checkingBalance, savingsBalance);
    checkingBalance = balances[0];
    savingsBalance = balances[1];
    updateDisplay();
  });

  $('savings-withdraw').click(function(event){
    var amount = $('savings-amount').val();
    amount = parseInt(amount);
    balances = withdrawFunds(amount, savingsBalance, checkingBalance);
    savingsBalance = balances[0];
    checkingBalance = balances[1];
    updateDisplay();
  });

  updateDisplay();

};

function withdrawFunds(amount, primary, secondary) {
  if (amount <= primary) {
    primary = primary - amount;
  } else if ((amount > primary) && (amount <= (secondary + primary))) {
    secondary = (primary + secondary) - amount;
    primary = 0;
  }
  return [primary, secondary];
}

function updateDisplay() {

  var element = $('checking-balance');

  if (checkingBalance <= 0) {
    element.text('zero');
  } else {
    element.classList.remove('zero');
  }

  var element2 = $('savings-balance');

  if (savingsBalance <= 0) {
    element2.classList.add('zero');
  } else {
    element2.classList.remove('zero');
  }
  $('checking-balance').text('$' + checkingBalance);
  $('savings-balance').text('$' + savingsBalance);
  $('checking-amount').val('');
  $('savings-amount').val('');
}