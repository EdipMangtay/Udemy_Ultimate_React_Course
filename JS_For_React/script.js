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

//Desestructuring

// // const book = getBook(2);
// // const author = book.author;


// // const title = book.title;
// // title;
// // author;
// // console.log(author)

// const book = getBook(2);
// book;

// const {title,author, pages,publicationDate,genres,hasMovieAdaptation} = book;
// console.log(author,title,genres,hasMovieAdaptation,pages,publicationDate);


// const [primaryGenre,secondaryGenre,...otherGenres] = genres;
// console.log(primaryGenre,secondaryGenre,otherGenres);


// const newGenres = [...genres,"epic"];
// console.log(newGenres);


// const updatedBook = {...book,moviePublicationDate : ' 2022-01-01', pages :1220 };
// updatedBook;
// // ... Adding new proporities to the object

// const summary = `${title}, ${pages} pages  a book  ${author} was published on ${publicationDate} and belongs to the genres ${genres.join(",")}`;
// summary;

// const pagesRanges = pages >1000 ? console.log("Long book") : console.log("Short book");


// 2+2 === 4 ? console.log("Correct") : console.log("Incorrect");
// pagesRanges;
// console.log(`the Book ${pagesRanges} page`);

// // Arrow functions
// // function getYear(str){
// //    return str.split("-")[0];
// // }

// const getYear = (str) => {

//   return  str.split("-")[0];

// }

// function getTotalReviewCount(book){
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreads + librarything;
// }
// console.log(getTotalReviewCount(book)); 

// App map
// const books = getBooks(2);
// const x = [1,2,3,4,5].map(el=> el*3);
// console.log(x)

// const titles = books.map((books) => books.title);
// console.log(titles);

// const essentialData = books.map((books) => {
//   return {
//     title: books.title,
//     author: books.author
    
//   }
// });
// essentialData

// const longBooks = books.filter((books) => books.pages > 500).filter(book => book.hasMovieAdaptation);
// longBooks;

// const adventureBooks = books.filter((books) => books.genres.includes("adventure")).map((books) => books.title);

// adventureBooks;


// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(pagesAllBooks);


// const numbers = [1,223,3,41,53];
// const sorted = numbers.slice().sort((a,b) => b-a);
// console.log(sorted);
// numbers;


// const sortedByPages = books.slice().sort((x,y) => y.pages - x.pages);
// console.log(sortedByPages);
// sortedByPages;

// // Immutable Arrays 

// const newBooks = {
//   id: 6,
//   title: "Harray Potter and the Chamber of Secrets",
//   author: "J. K. Rowling",
//   // publicationDate: "1998-07-02",
// }
// const booksAfterAdd = [...books,newBooks];
// booksAfterAdd;

// // Delete a book

// const booksAfterDelete = booksAfterAdd.filter((book) => books.id !== 6);
// booksAfterDelete;

// // Update
// const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? {...book, title: "edip", author: "edip"} : book);
// booksAfterUpdate;


// Fetch api
console.log(fetch('https://jsonplaceholder.typicode.com/todos'));

fetch('https://jsonplaceholder.typicode.com/todos')
.then((res) => res.json())
.then((data) => console.log(data));


async function getTodos(){
   const res  = await fetch('https://jsonplaceholder.typicode.com/todos')
   const data = await res.json();
    console.log(data);
    return data;
}
const todos = getTodos();
console.log(todos);

