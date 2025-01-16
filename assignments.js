const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
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
// // const [mainKeyword, ...rest] = books[0].keywords;

// // const { publisher: bookPublisher, ...restOfTheBook } = books[1];

// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(title);
//   console.log(...authors);
//   console.log(`The book "${title}" has ${authors.length} authors.`);
// };

// printBookAuthorsCount(`Algorithms`, `Robert Sedgewick`, `Kewin Wayne`, `Dav`);

// *************************************************************************
// *************** SHORT CIRCUITING ************************************
// *************************************************************************

// const hasExamplesInJava = function (book) {
//   return book.programmingLanguage === `Java` || `no data available`;
// };

// console.log(hasExamplesInJava(books[0]));
// console.log(hasExamplesInJava(books[1]));

// for (let book of books) {
//   book.onlineContent && console.log(`${book.title} provides online content`);
// }

// *************************************************************************
// *************** NULLISH COALESCING OPERATOR ************************************
// *************************************************************************
// for (let book of books) {
//   book.onlineContent ??
//     console.log(`${book.title} provides no data about its online content.`);
// }

// *************************************************************************
// *************** LOGICAL ASSIGNMENT OPERATOR ************************************
// *************************************************************************
// for (let book of books) {
//   book.edition ||= 1;
//   console.log(book.edition);
// }

// for (let book of books) {
//   book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
//   console.log(book.highlighted);
// }
// *************************************************************************
// *************** CODING CHALLENGE #1 ************************************
// *************************************************************************
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1, fieldPlayers1);
// console.log(gk2, fieldPlayers2);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
// console.log(players1Final);

// // 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6
// const printGoals = function (...names) {
//   console.log(`Total goals: ${names.length}`);
//   for (let name of names) {
//     console.log(`Scored by: ${name}`);
//   }
// };
// printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log(`Team 1 wins...`);
// team2 < team1 && console.log(`Team 2 wins...`);
// team1 === team2 && console.log(`Draw...`);
// *************************************************************************
// *************** FOR OF LOOP ************************************
// *************************************************************************
// // 1
// let pageSum = 0;
// for (const book of books) {
//   pageSum += book.pages;
// }
// console.log(typeof pageSum, pageSum);
// // 2
// const allAuthors = [];
// for (const book of books) {
//   typeof book.author === `string` && allAuthors.push(book.author);
//   typeof book.author !== `string` && allAuthors.push(...book.author);
// }
// console.log(typeof allAuthors, allAuthors);
// // 3
// for (const [i, author] of allAuthors.entries()) {
//   console.log(`${i + 1}. ${author}`);
// }
// *************************************************************************
// *************** ENHANCED OBJECT LITERALS ************************************
// *************************************************************************
// // 1
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1],
//   [bookData[2][0]]: bookData[2][1],
// };
// console.log(newBook);
// // 2
// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };
// console.log(newBook2);
// *************************************************************************
// *************** OPTIONAL CHAINING ************************************
// *************************************************************************
// const getFirstKeyword = function (book) {
//   return book.keywords?.[0];
// };
// console.log(getFirstKeyword(books[0]));
// *************************************************************************
// *************** LOOPING OBJECTS: OBJECT KEYS,VALUES,ENTRIES ************************************
// *************************************************************************
// // 1
// const entries = [];
// for (const key of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([key]);
// }
// // console.log(entries);

// // 2
// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }
// // console.log(entries);

// // 2
// // const entries2 = [];
// // for (const [key, value] of Object.entries(books[0].thirdParty.goodreads)) {
// //   entries2.push([key, value]);
// // }
// // const entries2 = Object.entries(books[0].thirdParty.goodreads);
// // console.log(entries2);
// *************************************************************************
// *************** CODING CHALLENGE #2 ************************************
// *************************************************************************
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
for (const [i, scorer] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${scorer}`);
}
// 2
const odds = Object.values(game.odds);
let oddAvg = 0;
for (const odd of odds) {
  oddAvg += odd;
}
oddAvg /= odds.length;
console.log(oddAvg);
// 3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStrs = team === `` ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamStrs} ${odd}`);
}
// 4
const scorers = {};

for (player of game.scored) {
  scorers[player] = (scorers[player] || 0) + 1;
}

console.log(scorers);
