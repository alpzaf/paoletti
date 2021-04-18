var modal = document.getElementById('addAddress');
var modal2 = document.getElementById('updateAddress');
var btn = document.querySelector('.add-address');
const btnSecond = document.getElementsByClassName('button-submit');
var updateButtons = btnSecond[i].children;
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];

[...btnSecond].forEach(child => {
  child.onclick = function () {
    modal2.style.display = "block";
  }
});

function click(input,input2) {
    input.onclick = () => {
      input2.style.display = "none"
    }
}
click(span,modal);
click(span2,modal2);
btn.onclick = function() {
  modal.style.display = "block";
};

window.onclick = function(event) {
  if (event.target == modal || event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none"
  }
};
/////////////////////////////////////////////////////////
var stateObject = {
    "Istanbul":{
        "Sariyer": 
            ["Yenikoy", "istinye"],
        "Sisli": 
            ["Mecidiyekoy", "19 Mayis Mah"],
        "Besiktas": 
            ["Bebek", "Etiler"],
    },
    "Tekirdag": {
        "Corlu":
            ["Esentepe", "Cumhuriyet"],
        "Malkara": 
            ["Aksakal", "Alaybey"]
    }, 
    "Edirne": {
        "Kesan": 
            ["Ataturk", "Aydogan"],
        "Ipsala": 
            ["Gazi", "Bayrambey"]
    }
}
    window.onload = function () {
        var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel"),
        districtSel = document.getElementById("districtSel");
            for (var country in stateObject) {
            countySel.options[countySel.options.length] = new Option(country, country);
            }
        countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        districtSel.length = 1; // remove all options bar first
            if (this.selectedIndex < 1) return; // done 
            for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
            }
    }
    countySel.onchange(); // reset in case page is reloaded
    stateSel.onchange = function () {
    districtSel.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        var district = stateObject[countySel.value][this.value];
        for (var i = 0; i < district.length; i++) {
        districtSel.options[districtSel.options.length] = new Option(district[i], district[i]);
        }
    }
}