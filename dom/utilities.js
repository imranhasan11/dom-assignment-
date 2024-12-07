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