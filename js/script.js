
 function setHoursOnDisplay() {
		times.map((i) => {
			document.getElementById('hours').innerHTML +=
				'<div data-value=' + i + '>' + i + '</div>'
		})
 }
