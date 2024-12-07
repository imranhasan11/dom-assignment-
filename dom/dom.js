
document.getElementById('donation-tab').addEventListener('click',function(event){
    
    donateAndHistory('all-cards');
     donateAndHistoryColor(event.target.id);

})
document.getElementById('history-tab').addEventListener('click',function(event){
    donateAndHistory('all-history');
    donateAndHistoryColor(event.target.id);
})


document.getElementById('quota-donate-btn').addEventListener('click', function(){
    const amount= getValueFromInputField('quota-donation');
     let accountBalance= getValueFromInnerText('account-balance');
    const tittle =getStringFromInnerText('quota-title');
    donationBtnAction('current-quota-donation',accountBalance,amount,tittle)
})

document.getElementById('feni-donate-btn').addEventListener('click',function(){
    const amount=getValueFromInputField('feni-donation');
    let accountBalance=getValueFromInnerText('account-balance');
    const tittle=getStringFromInnerText('feni-title');
    donationBtnAction('current-feni-donation',accountBalance,amount,tittle)
})
document.getElementById('noakhali-donate-btn').addEventListener('click',function(){
    const amount=getValueFromInputField('noakhali-donation');
    let accountBalance=getValueFromInnerText('account-balance');
    const tittle=getStringFromInnerText('noakhali-title');
    donationBtnAction('current-noakhali-donation',accountBalance,amount,tittle)
})