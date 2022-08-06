// function risk() {
//     var accValue = document.getElementById("AccValue").value;
//     var risk = document.getElementById("risk-value").innerHTML;
//     var entry = document.getElementById("Entry").value;
//     var sl = document.getElementById("SL").value;
//     var leverage = document.getElementById("Leverage").value;
    
//     var riskValue = accValue * risk/100;

//     var positionSize = riskValue / (entry - sl);

//     document.getElementById('result').innerHTML = positionSize * entry / leverage;

// }




// Range selector


function riskSlider() {
    let mySlider = Number.parseFloat(document.getElementById("risk-slider").value).toFixed(1) + "%";
    document.getElementById("risk-percent").innerHTML = mySlider;
}

function leverageSlider() {
    let mySlider = document.getElementById("leverage-slider").value + 'x';
    document.getElementById("leverage-value").innerHTML = mySlider;
}



// Mathematics

function risk() {
    let riskValue = document.getElementById("AccValue").value * (parseFloat(document.getElementById("risk-percent").innerHTML)/100);
    
    let leverage = parseFloat(document.getElementById("leverage-value").innerHTML);

    let positionSize = riskValue / (document.getElementById("Entry").value - document.getElementById("SL").value);
    
    let tradeValue = positionSize * document.getElementById("Entry").value / leverage;

    document.getElementById("tradeValue").innerHTML = Number.parseFloat(tradeValue).toFixed(2);

    document.getElementById("position-qty").innerHTML = Number.parseFloat(positionSize).toFixed(2);

    document.getElementById("risked-cap").innerHTML = Number.parseFloat(riskValue).toFixed(2);

    console.log("Postion size " + positionSize);
    console.log("Risk Value " + riskValue);
    console.log("Total trade Value " + tradeValue);
}

// riskValue = How much I am willing to loose in a trade. 
// positionSize = number of stocks/coins without leverage 