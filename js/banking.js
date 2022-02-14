/*  
-----update deposit--------
 */
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposit-amount');
    const newDepositAmountText = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    const depositTextAmount = document.getElementById('deposit-amount-text');
    const previousDepositAmountText = depositTextAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const currentDepositAmount = newDepositAmount;

    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    depositTextAmount.innerText = totalDepositAmount;
    // clearing deposit input field :
    depositInputField.value = '';   
    
    
/* 
--------balance update -------------:
 */

    const balanceUpdate = document.getElementById('balance-updating');
    const previousBalanceText = balanceUpdate.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const totalBalance = previousBalance + newDepositAmount;
    balanceUpdate.innerText = totalBalance;
});


/* 
-------update withdraw------
*/
    
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-amount');
    const newWithdrawAmountText = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    const withdrawTextAmount = document.getElementById('withdraw-amount-text');
    const previousWithdrawAmountText = withdrawTextAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    const currentWithdrawAmount = newWithdrawAmount;

    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawTextAmount.innerText = totalWithdrawAmount;
    // clearing deposit input field :
    withdrawInputField.value = '';  


    /* 
--------balance update -------------:
 */

    const balanceUpdate = document.getElementById('balance-updating');
    const previousBalanceText = balanceUpdate.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const totalBalance = previousBalance - newWithdrawAmount;
    balanceUpdate.innerText = totalBalance;
});