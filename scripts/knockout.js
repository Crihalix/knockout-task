
function Book(nameBook) {
	this.nameBook = nameBook;
	this.buyBook = ko.observable(false);

}

var booksObj = {
	booksList: ko.observableArray([
			new Book('1. О компании QAP INT.'),
			new Book('2. Преймущества использования CLM- инструмента для Вашего бизнеса'),
			new Book('3. Преспективы сотрудничества с QAP INT.'),
			new Book('4. Описание решения для разработки HTML5- презентаций'),
			new Book('5. Описание разработтанного инструмента CLM2CRM и его интеграция с salesforse.com (русский).'),
			new Book('6. Описание разработтанного инструмента CLM2CRM и его интеграция с salesforse.com (english).')
		]),

	userEmail: ko.observable(),
	userTheme: ko.observable(),
	userText: ko.observable(),
	popupBlock: ko.observable(false)

};

	booksObj.addUserinfo = function(){
		booksObj.popupBlock = true;
	}


ko.applyBindings(booksObj);

/*
function AppViewModel() {
	this.userEmail = ko.observable();
	this.userTheme = ko.observable();
	this.userText = ko.observable();

	this.addUserinfo = function() {

        var currentVal = this.userEmail();        // Read the current value
        this.userEmail(currentVal.toUpperCase()); // Write back a modified value
    };


    
}

ko.applyBindings(new AppViewModel());
*/