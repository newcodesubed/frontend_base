const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//destructuring

/*
const book = getBook();
const {title, author,pages ,genres, publicationDate, hasMovieAdaptation} = book;
console.log(title, author, genres);

const [primaryGenre, secondarygenre, ...otherGenres]= genres;

console.log(primaryGenre, secondarygenre, otherGenres);
//... write every thing again
const newGeners = [...genres, "epic fantasy"];
console.log(newGeners);

const updateBook ={  
  ...book, 
  //adding new property
  moviePublicationDate: "2002-12-24", 
  //overwriting existing property
  pages:800,
};
updateBook;

const getYear = str => str.split("-")[0];
console.log(getYear(publicationDate));

//template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(publicationDate)
}, the book has ${hasMovieAdaptation ? "": "not" }been adapted as movie`;
summary;

const pagesRange = pages > 1000 ? 'over a thousand' : "less than 1000";
pagesRange;
console.log(`the book has ${pagesRange} pages`);

// optional chaining
function getTotalReviewCount(book){
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book))
*/
//new data from old data
/*
const books = getBooks();

function getTotalReviewCount(book){
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  librarything;
  return goodreads + librarything;
}

const x = [1,2,3,4,5].map((el) => el * 2);
console.log(x);

const title = books.map((book) => book.title);
title;
//if book =>{} then element in side the bracket will be thought as function so book =>{return{x:2,}} object i screated in this manner
const essentialData = books.map((book) =>( {
    title: book.title,
    author: book.author,
    reviews: getTotalReviewCount(book)
}));
essentialData;

//filter shows new array when it is true.

const longBooksWithMOvies = books
  .filter((book)=> book.pages >500)
  .filter((book) => book.hasMovieAdaptation)
longBooksWithMOvies

const advenyureBooks = books.filter((book)=>
  book.genres.includes("adventure"))
  .map((book)=>book.title);
advenyureBooks;

//accumulator use for simple stuff but give one answer by reducing them

const pagesAllBooks = books.reduce((acc, book)=> acc + book.pages, 0);
pagesAllBooks;

//sorted mutate the data. we dont use 

const arr = [3,5,9,1,7];
const sorted = arr.slice().sort((a,b)=> a-b);
sorted;
arr;

const sortedByPages = books.slice().sort((a,b)=> b.pages - a.pages);
sortedByPages;

//1) Add book object to array 
const newBook ={
  id: 6,
  title: "The Great Subed",
  author: "s. a. shah",
  pages: 200,
}

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

//#3Update book object in the array

const booksAfterUpdated = booksAfterDelete.map(book => 
  book.id ==1 ? {...book, pages:1} : book);
booksAfterUpdated;
*/

//#####################################
/*
  first it takes time to execute the fetch when that data arive 
  then is used to chang response from json ----> javascript object which also take time and is a promises 
  then is used to wait and show the result
*/

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(res => res.json())
//   .then(data => console.log(data));

// console.log("subed");

//Async/wait

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();