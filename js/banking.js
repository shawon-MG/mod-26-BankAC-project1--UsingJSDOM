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
    /* const depositInputField = document.getElementById('deposit-amount');
    const newDepositAmountText = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */
    const newDepositAmount = getInputValue('deposit-amount');

    /* const depositTextAmount = document.getElementById('deposit-amount-text');
    const previousDepositAmountText = depositTextAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const currentDepositAmount = newDepositAmount;

    const totalDepositAmount = previousDepositAmount + newDepositAmount; */
    textField('deposit-amount-text', newDepositAmount);
    // depositTextAmount.innerText = totalDepositAmount;
    // clearing deposit input field :
    // depositInputField.value = '';   
    
    
/* 
--------balance update -------------:
 */

    /* const balanceUpdate = document.getElementById('balance-updating');
    const previousBalanceText = balanceUpdate.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const totalBalance = previousBalance + newDepositAmount;
    balanceUpdate.innerText = totalBalance; */
    balanceField(newDepositAmount, true);
});


/* 
-------update withdraw------
*/
    
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // const withdrawInputField = document.getElementById('withdraw-amount');
    // const newWithdrawAmountText = withdrawInputField.value;
    // const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    const newWithdrawAmount = getInputValue('withdraw-amount');

   /* const withdrawTextAmount = document.getElementById('withdraw-amount-text');
    const previousWithdrawAmountText = withdrawTextAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    const currentWithdrawAmount = newWithdrawAmount;

    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawTextAmount.innerText = totalWithdrawAmount;  */
    textField('withdraw-amount-text', newWithdrawAmount);

    // clearing deposit input field :
    // withdrawInputField.value = '';  


    /* 
--------balance update -------------:
 */

   /*  const balanceUpdate = document.getElementById('balance-updating');
    const previousBalanceText = balanceUpdate.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    const totalBalance = previousBalance - newWithdrawAmount;
    balanceUpdate.innerText = totalBalance; */
    balanceField(newWithdrawAmount, false);
});