const four={
    arrayOfFiveObjects: [
        {bookId: 1, bookname: 'Three musketeers', author:"Alexandre Dumas", cost:500},
        {bookId: 2, bookname: 'Madame Bovary', author:"Gustave Flaubert", cost:1200},
        {bookId: 3, bookname: 'Pride and Prejudice', author:"Jane Austen", cost:7600},
        {bookId: 4, bookname: 'The Red and the Black', author:"Stendhal", cost:5110},
        {bookId: 5, bookname: 'Wuthering Heights', author:"Emily Bronte", cost:1440}
    ],


    returnBookDataById: function(bookId){
        let bookData = null;
        this.arrayOfFiveObjects.forEach(function(book){
            if(book.bookId === bookId){
                bookData = book;
            }
        });
        return bookData;
    }
}

module.exports=four;