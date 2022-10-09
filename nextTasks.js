const books = [
    {
      name: "Harry Potter",
      category: "adventure"
    },
    {
      name: 'Alice in Wonderland',
      category: 'fantasy'
    },
    {
      name: 'Lord of the Rings',
      category: 'fantasy'
    }
  ]


books.forEach(par => {

    if(par.category === 'adventure') {

        console.log(par.name);
        console.log(par.category);

    }

})

books.forEach(par => {

    console.log(books.filter('adventure'))

})

books.forEach(par => {

    if(par.category.includes('er')) {

        console.log(par.name);
        console.log(par.category);

    }

})

const ArrayCharactersLength = [];

for(let v of books){

    ArrayCharactersLength.push(v.name.length)

}

console.log(ArrayCharactersLength)

books.map(characters => {

    console.log(characters.length)

})
