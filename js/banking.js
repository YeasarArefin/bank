document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';

});


document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInputText = withdrawInput.value;
    const newWithdrawInputAmount = parseFloat(newWithdrawInputText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const newWithdrawTotalText = withdrawTotal.innerText;
    const newWithdrawTotalAmount = parseFloat(newWithdrawTotalText);

    const newWithdrawAmount = newWithdrawInputAmount + newWithdrawTotalAmount;

    withdrawTotal.innerText = newWithdrawAmount;


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawInputAmount;

    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';

});