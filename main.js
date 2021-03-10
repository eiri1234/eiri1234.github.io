const countEl = document.getElementById("counter");

updateVisitorCount();

function updateVisitorCount() {
    fetch("https://api.countapi.xyz/update/http://www.documentaryworld.net/eiri1234/?amount=1")
      
       .then(res => res.json())
       .then(res => {
           countEl.innerHTML = res.value;
       });
}


