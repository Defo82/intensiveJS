function myFirstApp(name, age) {
	checkAge();
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = [
		"html",
		"css",
		"sass",
		"git",
		"gulp",
		"beer"
		];

		for (let i = 0; i < skills.length; i++) {
			console.log(skills[i]);
		}
	}

	console.log('Я владею :');
	showSkills();

	function checkAge() {
		if (age > 18) {
			alert("Проходите");
		} else {
			alert("Покиньте сайт");
		}
	}

	function calcPow(num) {
		console.log(num * num);
	}

	console.log(calcPow(4));

}

myFirstApp("Ivan", 32);