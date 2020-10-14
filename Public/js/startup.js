$(document).ready(function() {

    let fromInput = $("#from");
    let toInput = $("#to");
    let exchangeBtn = $(".invert");

    exchangeBtn.on('click', (e) => {
        e.preventDefault();
        InputExchange(fromInput, toInput);
    })


    const requestoptions = {
        mode: 'no-cors'
    }

    $('.search-button').on('click', () => {
        fetch(`https://dbms-flights-project.herokuapp.com/flights?from=asd`, requestoptions)
        .then(function(response) {response.json()})
        .then(function(res) { console.log(res) });
    });
})

function InputExchange(fromInput, toInput) {
    currentFromInputVal = fromInput.val();
    currenttoInputVal = toInput.val();
    fromInput.val(currenttoInputVal);
    toInput.val(currentFromInputVal);
    fromInput.addClass('blinkOnce');
    toInput.addClass('blinkOnce');
}
