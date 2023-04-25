var groupmates = [
	{
		"name": "Александр",
		"surname": "Иванов",
		"group": "БВТ1702",
		"marks": [4, 3, 5]
	},
	{
		"name": "Иван",
		"surname": "Петров",
		"group": "БСТ1702",
		"marks": [4, 4, 4]
	},
	{
		"name": "Кирилл",
		"surname": "Смирнов",
		"group": "БАП1801",
		"marks": [5, 5, 5]
	}
];

var rjust = function(str, length) {
	str = str.toString();
	while (str.length < length)
		str = str + ' ';
	return str;
};

var printStudents = function(students) {
	console.log(
		rjust("Имя", 15),
		rjust("Фамилия", 15),
		rjust("Группа", 8),
		rjust("Оценки", 20)
	);
	for (var i = 0; i != students.length; i++) {
		console.log(
			rjust(students[i]["name"], 15),
			rjust(students[i]["surname"], 15),
			rjust(students[i]["group"], 8),
			rjust(students[i]["marks"], 20),
		);
	}
	console.log('\n')
};

var filterStudents = function(students) {
	var group = prompt();
	return students.filter(
		student => student["group"] == group
	);
};

var filterStudentsMarks = function(students) {
	var average = parseInt(prompt());
	return students.filter(
		student => (student["marks"].reduce(
			(a, b) => a + b, 0
		) / student["marks"].length) >= average
	);
};