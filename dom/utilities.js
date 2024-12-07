function donateAndHistory(id) {
    document.getElementById ('all-cards').classList.add ('hidden');
    document.getElementById ('all-history').classList.add ('hidden');
    document.getElementById (id).classList.remove ('hidden');
}

function donateAndHistoryColor(id) {
    document.getElementById ('history-tab').classList.add('bg-transparent');
    document.getElementById ('donation-tab').classList.add('bg-transparent');
    document.getElementById (id).classList.remove('bg-transparent');
    document.getElementById (id).classList.add('bg-lime-400');
}

function getValueFromInnerText (id) {
    return parseFloat(document.getElementById(id).innerText);
}

function getStringFromInnerText (id) {
    return document.getElementById(id).innerText;
}
function setValueToInnerText (id, value) {
    return parseFloat(document.getElementById (id).innerText = value);
}
function getValueFromInputField (id) {
    const x = document.getElementById(id).value;
    if (!(isNaN(x))) {
        return parseFloat(document.getElementById(id).value);
    }
}

function donationBtnAction (id, accountBalance, amount, title) {
    let regionalBalance = getValueFromInnerText (id);
    
    if (isNaN(amount)) {
        alert ('Invalid: Please enter a valid amount');
    }

    else if (amount<0) {
        alert ('Invalid: Negative Amount Detected!');
    }
    else if (amount===0) {
        alert ('Invalid: No Amount Found! Minimum Donation is 1 BDT');
    }
    else if (accountBalance>0 && amount<=accountBalance) {
        accountBalance = accountBalance - amount;
        regionalBalance = regionalBalance + amount;

        setValueToInnerText('account-balance', accountBalance);
        setValueToInnerText(id, regionalBalance);
        my_modal_1.showModal();

        const currentTime = new Date();
        
        // Create Transactions:
        const divEntry = document.createElement ('div');
        divEntry.innerHTML = 
        `<div class="card bg-base-100 border-2">
                    <div class="card-body">
                      <h2 class="card-title">${amount} Taka is Donated for ${title}</h2>
                      <p>Date : ${currentTime}</p>
                    </div>
                </div>`

        document.getElementById('empty-donation').classList.add('hidden');
        document.getElementById('all-history').appendChild(divEntry);
    }


    else {        alert ('Insufficient Balance');
    }
}