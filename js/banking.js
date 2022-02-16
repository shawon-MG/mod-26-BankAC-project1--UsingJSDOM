function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const amountText = inputField.value;
    const newDepositAmount = parseFloat(amountText);
    // clearing deposit input field :
    inputField.value = '';   
    return newDepositAmount;
}
function textField (amountText,newAmount){ 
    const textAmount = document.getElementById    (amountText);
    const previousAmountText = textAmount.innerText;
    const previousAmount = parseFloat(previousAmountText);
    textAmount.innerText = previousAmount + newAmount;
}
function balanceField (newDepositAmount, inAdd){
    const balanceUpdate = document.getElementById('balance-updating');
    const previousBalanceText = balanceUpdate.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    if (inAdd == true){
        balanceUpdate.innerText = previousBalance + newDepositAmount;
    }
    else{
        balanceUpdate.innerText = previousBalance - newDepositAmount;
    }
}
document.getElementById('deposit-btn').addEventListener('click', function(){
   
    const newDepositAmount = getInputValue('deposit-amount');
    if (newDepositAmount > 0){
        textField('deposit-amount-text', newDepositAmount);
        balanceField(newDepositAmount, true);
    }
});
// -------update withdraw------
document.getElementById('withdraw-btn').addEventListener('click', function(){
    
    const newWithdrawAmount = getInputValue('withdraw-amount');
    if (newWithdrawAmount > 0){
        textField('withdraw-amount-text', newWithdrawAmount);
        balanceField(newWithdrawAmount, false);
    }
});