(function() {
    var checkbox = document.querySelector('#checkbox');
    var anual = document.querySelectorAll('.anual');
    var mensual = document.querySelectorAll('.mensual');
    /*var prices = document.querySelectorAll('.prices');*/

    checkbox.addEventListener('input', function() {
        for (let i = 0, length1 = anual.length; i < length1; i++) {
            if (checkbox.checked) {
                // statement
                anual[i].className = 'show';
                mensual[i].className = 'hide';
            } else {
                // statement
                anual[i].className = 'hide';
                mensual[i].className = 'show';
            }
        }
        /*prices.forEach( function(price) {
        // statements
        if (checkbox.checked) {
        // statement
        price.firstChild.className = 'show';
        price.lastChild.className = 'hide';
        } else {
        // statement
        price.firstChild.className = 'hide';
        price.lastChild.className = 'show';
        }
        });*/

    }, false)
}());
