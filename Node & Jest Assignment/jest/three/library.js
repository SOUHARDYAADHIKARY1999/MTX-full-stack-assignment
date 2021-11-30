const three={
    arrayOfFiveObjects: [
        {bookId: 1, bookname: 'Three musketeers', author:"Alexandre Dumas", cost:500},
        {bookId: 2, bookname: 'Madame Bovary', author:"Gustave Flaubert", cost:1200},
        {bookId: 3, bookname: 'Pride and Prejudice', author:"Jane Austen", cost:7600},
        {bookId: 4, bookname: 'The Red and the Black', author:"Stendhal", cost:5110},
        {bookId: 5, bookname: 'Wuthering Heights', author:"Emily Bronte", cost:1440}
    ],

    returnBookDataById: function(id){
        for(var i=0; i<this.arrayOfFiveObjects.length; i++){
            if(this.arrayOfFiveObjects[i].bookId == id){
                return this.arrayOfFiveObjects[i];
            }
        }
    }
}

module.exports=three;