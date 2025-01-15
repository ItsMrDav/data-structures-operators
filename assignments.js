// *************************************************************************
// *************** DESTRUCTIRING ARRAYS ************************************
// *************************************************************************
// const books = [`A`, `B`, `C`];
// const [firstBook, secondBook] = books;
// const [, , thirdBook] = books;
// console.log(firstBook, secondBook, thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];
// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);
// *************************************************************************
// *************** DESTRUCTIRING OBJECTS ************************************
// *************************************************************************
// const { title, author, ISBN } = books[0];

// const { keywords: tags } = books[0];

// const { language, programmingLanguage = `unknown` } = books[6];

// let bookTitle = `unknown`;
// let bookAuthor = `unknown`;
// ({ title: bookTitle, author: bookAuthor } = books[0]);

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// const printBookInfo = function ({ title, author, year = `year unknown` }) {
//   console.log(`${title} by ${author}, ${year}`);
// };
// *************************************************************************
// *************** SPREAD OPERATOR ************************************
// *************************************************************************
// const bookAuthors = [...books[0].author, ...books[1].author];
// const spellWord = function (str) {
//   console.log(...str);
// };
// spellWord(`JavaScript`);
// *************************************************************************
// *************** REST OPERATOR AND PARAMETERS ************************************
// *************************************************************************
// const [mainKeyword, ...rest] = books[0].keywords;

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];

const printBookAuthorsCount = function (title, ...authors) {
  console.log(title);
  console.log(...authors);
  console.log(`The book "${title}" has ${authors.length} authors.`);
};

printBookAuthorsCount(`Algorithms`, `Robert Sedgewick`, `Kewin Wayne`, `Dav`);
