

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
		]);

	userEmail = ko.observable();
	userTheme = ko.observable();
	userText = ko.observable();
    booksList2 = ko.computed(function() {
        var arrayBooksList = [];
        booksList().forEach(function(checked){
            if(checked.buyBook()){
                arrayBooksList.push(checked);
            }
        });
        return arrayBooksList;
    });

    this.isVisiblePopup = ko.observable(true);
    this.showPopup = function(){
        this.isVisiblePopup(false)
    };
    this.hidePopup = function(){
        this.isVisiblePopup(true)
    };
};

ko.applyBindings(new booksObj());
