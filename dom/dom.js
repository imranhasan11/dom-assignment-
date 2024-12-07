document.getElementById('donate-btn').addEventListener('click', function(){
    const addDonate= parseFloat(document.getElementById('quota-donation').value);
    const currentDonate= parseFloat(document.getElementById('current-quota-donation').innerText);
    const accountBalance= parseFloat(document.getElementById('account-balance').innerText);
    
    
    if(isNaN(addDonate)){
        alert('Invalid Input')
    }
    else{
        const updateQuotaDonate=addDonate+currentDonate;
    document.getElementById('current-quota-donation').innerText= updateQuotaDonate;
    const remainingAccoutBalance= accountBalance-addDonate;
    document.getElementById('account-balance').innerText= remainingAccoutBalance;
    my_modal_1.showModal()
     const div= document.createElement('div')
    }

    
})