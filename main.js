const countEl = document.getElementById("count");

function updateVisitorCount() {
    fetch('https://api.countapi.xyz/update/documentaryworld.net/eiri1234/?amount=1')
      
       .then(res => res.json())
       .then(res => {
           countEl.innerHTML = res.value;
       });
}


