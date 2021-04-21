(function () {
	var checkbox = document.querySelector('#checkbox');
	var anual = document.querySelectorAll('.anual');
	var mensual = document.querySelector('#mensual');

	checkbox.addEventListener('input', function () {
		for(let i = 0, length1 = anual.length; i < length1; i++){
			if (checkbox.checked) {
			// statement
			anual[i].className = 'hide';
			mensual[i].className = 'show';
		} else {
			// statement
			anual[i].className = 'show';
			mensual[i].className = 'hide';
		}
		}
	}, false)
}());
