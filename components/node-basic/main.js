console.log("npm start");
console.log('Hello World!')

// Typ Zmiennych

// String
// Number
// Boolean
// Object
// null/undefined


// Jak zapisujemy zmienne (3 sposoby)

// Scope globalny
var name = "damian";

// Scope leksykalny (if, for)
let name2 = 'Damian2';

// const nie mozna nadpisac, ale mozna dopisac/usunac dane ze srodka (w przypadku array lub obiektow)

const name3 = 'Damian3';


// Typy zlozone

// Array

const names = ['Damian', 'Paweł', 'Dominik'];

// Metody

// push - dodawanie
// names.push('Marcin');
// pop - usuwanie z konca listy
// names.pop()
// slice - tworzenie tablicy z innej tablicy przez wyciecie kilku elementow zdefiniowanych indeksem
// names.slice(0, 2);
// splice - usuniecie lub dodanie elementu
// names.splice(0, 1, 'Daniel');
// shift - usuniecie 1 elemenetu
// names.shift()
// unshift
// names.unshift(1, 2)

// concat - dodawanie do tablicy

// names.concat('Paweł')

// join - tworzenie tablicy ze stringa
// split - tworzenie stringa z tablicy
// includes - sprawdzenie czy tablica zawiera element



// forEach
// np. do sumowania wartości lub do przechodzenia przez elementy

// names.forEach(name => {
//   console.log(name);
// })

// map

// const arrayOfLetters = [];

// names.forEach(name => {
//   arrayOfLetters.push(name.length)
// });

// console.log(arrayOfLetters)

// const arrayOfLetters = names.map(name => {
//   return name.length
// });

// console.log(arrayOfLetters)

// filter

// const shopping = [
// {
//     name: "banan",
//     price: 3.99
// },
// {
//     name: "Chleb",
//     price: 4.99
// },
// {
//     name: "Wiśnie",
//     price: 19.99
// }
// ]

// const calculateMostExpensiveProducts = (price) => {
//   return shopping.filter(product => {
//     return product.price > price
//   })
// }

// const expensiveProducts = shopping.filter(product => {
//   return product.price > 10
// })

// console.log(expensiveProducts)


// 1. Za pomoca funkcji forEach, policz sume produktow
// 2. Oblicz cenę produktów (shopping), które w swojej nazwie mają literę e

// let licznik = 0
// let firstValue = 0

// const sum = shopping.forEach(par => {

//     if(licznik = 0){
//         firstValue = par.price
//     }else{
//         firstValue = firstValue + par.price
//         licznik = licznik + 1
//     }
// })

// console.log(firstValue)

// let values = 0

// const letter = shopping.forEach(par => {

//     console.log(par.name, par.price)

//     if(par.name.includes("e")){  
//         console.log(par.price)
//         values = values + par.price
//     } 

// })

// console.log(Math.round(values), "or", values.toFixed(2))



// // sort
// // reduce


// // Properties

// // .length dlugosc

// const books = [
//     {
//     name: "Harry Potter",
//     category: "adventure"
//     },
//     {
//     name: 'Alice in Wonderland',
//     category: 'fantasy'
//     },
//     {
//     name: 'Lord of the Rings',
//     category: 'fantasy'
//     }
//   ]



// books.forEach(par => {

//     if(par.category === 'adventure') {

//         console.log(par.name);
//         console.log(par.category);

//     }

// })

// books.forEach(par => {

//     console.log(books.filter('adventure'))

// })

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


// 1. Przy uzyciu funkcji filter, wyswietl tablice ksiazek z kategorii adventure

// const adventureBooks = books.filter(book => {
//   return book.category === 'adventure'
// })

// console.log(adventureBooks)

// 2. Przy uzyciu funkcji filter, wyszukaj elementy, ktore maja w swojej nazwie ciag znakow 'er'

// const booksWithPhraseEr = books.filter(book => {
//   return book.name.includes('er');
// })

// console.log(booksWithPhraseEr)

// 3. Przy uzyciu funkcji map, stworz tablice zawierajaca ile jest liter w nazwie ksiazki

// const letterFromBooks = books.map(book => {
//   return book.name.length
// });

// console.log(letterFromBooks)



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

//1
myfunCalculations = (value1, value2) => {

    return value1 + value2

}

console.log(myfunCalculations(3, 3));

//2
myfunStringCountChar = (stringName) => {

    return stringName.length
}

console.log(myfunStringCountChar('Damian'))

//3,4
const books3 = [
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

const filterElements = (collection, phrase) => {
    let test = collection.filter(element => {
    return element.name.includes(phrase)
    })

    if(test.length === 0){
        return 'The request is not found. Please check the phrase and try again'
    }
}

console.log(filterElements(books3, 'adventure'));




