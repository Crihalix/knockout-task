

function Book(nameBook) {
	this.nameBook = nameBook;
	this.buyBook = ko.observable(false);
}

	
function booksObj(){
	booksList = ko.observableArray([
			new Book('1. О компании QAP INT.'),
			new Book('2. Преймущества использования CLM- инструмента для Вашего бизнеса'),
			new Book('3. Преспективы сотрудничества с QAP INT.'),
			new Book('4. Описание решения для разработки HTML5- презентаций'),
			new Book('5. Описание разработтанного инструмента CLM2CRM и его интеграция с salesforse.com (русский).'),
			new Book('6. Описание разработтанного инструмента CLM2CRM и его интеграция с salesforse.com (english).')
		]),

	userEmail = ko.observable(),
	userTheme = ko.observable(),
	userText = ko.observable(),
	popupBlock = ko.observable(false)

};


var submitButton = document.getElementById("submitButton");
var popup = document.getElementById('popup');
var close_pp = document.getElementById('close-pp');

	submitButton.addEventListener("click", function(event) { 
		event.preventDefault();
		popup.style.display = 'block';
	});
	close_pp.addEventListener("click", function(event) {
		popup.style.display = 'none';
	});
	
ko.applyBindings(new booksObj());
