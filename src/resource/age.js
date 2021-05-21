let birthday = "1929-06-17"
console.log(birthday+"   =>   "+calcAge(birthday))




function calcAge(birthday) {
		var today = new Date();
		var birthDate = new Date(birthday);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if(m < 0 || (m == 0 && today.getDate() < birthDate.getDate()))
			age--;
		return age;
	}
