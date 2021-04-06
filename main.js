
function publishResult(){
	const html = document.getElementById("html").value;
	const es5 = document.getElementById("es5").value;
	const es6 = document.getElementById("es6").value;
	const php = document.getElementById("php").value;
	const java = document.getElementById("java").value;
	const Rnative = document.getElementById("Rnative").value;

let total = parseInt(html) + parseInt(es5) + parseInt(es6) + parseInt(php) + parseInt(java) + parseInt(Rnative);
document.getElementById("sum").innerHTML = "The sum is: " + total;

let score = parseInt((total * 100) / 600);  
document.getElementById("score").innerHTML = "score is: " + score;

let designation;
document.getElementById("designation").innerHTML;

if (score >=90) {
		// do this
		//designation = ' Excellent';
		document.getElementById("designation").innerHTML = "Excellent";
	}
	else if (score >= 80) {
		//designation = ' Proficient';
		document.getElementById("designation").innerHTML = "Proficient";
	}
	else if (score >= 70) {
		//do this
		//designation = ' Satisfactory';
		document.getElementById("designation").innerHTML = "Satisfactory";
	}
	else {
		//otherwise, do this
		//designation = ' Unsatisfactory';
		document.getElementById("designation").innerHTML = "Unsatisfactory";
	}

}