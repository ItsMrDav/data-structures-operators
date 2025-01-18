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
// for (const [i, scorer] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${scorer}`);
// }
// // 2
// const odds = Object.values(game.odds);
// let oddAvg = 0;
// for (const odd of odds) {
//   oddAvg += odd;
// }
// oddAvg /= odds.length;
// console.log(oddAvg);
// // 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStrs = team === `` ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStrs} ${odd}`);
// }
// // 4
// const scorers = {};

// for (player of game.scored) {
//   scorers[player] = (scorers[player] || 0) + 1;
// }

// console.log(scorers);
// *************************************************************************
// *************** SETS ************************************
// *************************************************************************
// // 1
// const allKeywords = [];
// for (const book of books) {
//   allKeywords.push(...book.keywords);
// }
// console.log(allKeywords);
// // 2
// const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);
// // 3
// uniqueKeywords.add(`coding`);
// uniqueKeywords.add(`science`);
// console.log(uniqueKeywords);
// // 4
// uniqueKeywords.delete(`business`);
// console.log(uniqueKeywords);
// // 5
// const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);
// //6
// uniqueKeywords.clear();
// console.log(uniqueKeywords);
// *************************************************************************
// *************** MAPS ************************************
// *************************************************************************
// // 1
// const bookMap = new Map([
//   [`title`, `Clean Code`],
//   [`author`, `Robert C. Martin`],
// ]);
// // 2
// bookMap.set(`pages`, 464);
// // 3
// console.log(`${bookMap.get(`title`)} by ${bookMap.get(`author`)}`);
// // 4
// console.log(bookMap.size);
// // 5
// bookMap.has(`author`) && console.log(`The author of the book is known`);
// *************************************************************************
// *************** MAPS ITERATION ************************************
// *************************************************************************
// const firstBook = new Map(Object.entries(books[0]));
// console.log(firstBook);
// for (const [key, value] of firstBook) {
//   //   typeof key === `number` && console.log(`${key}: ${value}`);
//   typeof key === `string` && console.log(`${key}: ${value}`);
// }
// *************************************************************************
// *************** CODING CHALLENGE #3 ************************************
// *************************************************************************
// const gameEvents = new Map([
//   [17, `⚽️ GOAL`],
//   [36, `🔁 Substitution`],
//   [47, `⚽️ GOAL`],
//   [61, `🔁 Substitution`],
//   [64, `♦️ Yellow card`],
//   [70, `🔁 Substitution`],
//   [72, `🔁 Substitution`],
//   [76, `⚽️ GOAL`],
//   [80, `⚽️ GOAL`],
//   [92, `♦️ Yellow card`],
// ]);
// // 1
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2
// gameEvents.delete(64);
// console.log(gameEvents);
// // 3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes.`
// );
// // 4
// for (const [time, event] of gameEvents) {
//   console.log(
//     `${time <= 45 ? `[FIRST HALF]` : `[SECOND HALF]`} ${time}: ${event}`
//   );
// }
// *************************************************************************
// *************** STRINGS - 1 ************************************
// *************************************************************************
// // 1
// const x4 = books[0].ISBN[4];
// const x6 = books[0].ISBN[6];
// const x8 = books[0].ISBN[8];
// const x9 = books[0].ISBN[9];
// console.log(`${x4}${x6}${x8}${x9}`);

// // 2
// const quote =
//   'A computer once beat me at chess, but it was no match for me at kick boxing';
// console.log(quote.indexOf(`chess`));

// // 3
// console.log(quote.slice(quote.indexOf(`boxing`)));
// console.log(quote.slice(quote.lastIndexOf(` `) + 1));

// // 4
// const isContributor = function (author) {
//   return author.lastIndexOf(`(Contributor)`) !== -1;
// };
// console.log(isContributor('Julie Sussman (Contributor)'));
// *************************************************************************
// *************** STRINGS - 2 ************************************
// *************************************************************************
// // 1
// const normalizeAuthorName = author => {
//   author = author.trim();
//   const firstName = author.slice(0, author.indexOf(` `));

//   let lastName = ``;
//   if (author.indexOf(` `) === author.lastIndexOf(` `)) {
//     lastName = author.slice(author.indexOf(` `) + 1, author.length);
//   } else {
//     lastName = author.slice(author.indexOf(` `) + 1, author.lastIndexOf(` `));
//   }

//   const capitalizedFirstName =
//     firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//   const capitalizedLastName =
//     lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

//   return `${capitalizedFirstName} ${capitalizedLastName}`;
// };
// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

// // 2
// const newBookTitle = books[1].title.replaceAll(`Programs`, `Software`);
// console.log(books[1].title);
// console.log(newBookTitle);

// // 3
// const logBookTheme = title => {
//   title = title.toLowerCase();
//   if (title.startsWith(`computer`)) {
//     console.log(`This book is about computers`);
//   } else if (title.includes(`algorithms`) && title.includes(`structures`)) {
//     console.log(`This book is about algorithms and data structures`);
//   } else if (title.endsWith(`system`) || title.endsWith(`systems`)) {
//     if (title.includes(`operating`)) {
//       console.log(
//         `This book is about some systems, but definitely not about operating systems`
//       );
//     }
//   }
// };

// console.log(`--------------------------------`);
// logBookTheme(books[0].title);
// logBookTheme(books[1].title);
// logBookTheme(books[2].title);
// logBookTheme(books[3].title);
// logBookTheme(books[4].title);
// logBookTheme(books[5].title);
// logBookTheme(books[6].title);
// logBookTheme(books[7].title);
// *************************************************************************
// *************** STRINGS - 3 ************************************
// *************************************************************************
// // 1
// const logBookCategories = string => {
//   const arr = string.split(`;`);
//   for (const c of arr) {
//     console.log(c);
//   }
// };
// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);
// // 2
// const getKeywordsAsString = books => {
//   const arr = [];
//   for (const book of books) {
//     arr.push(...book.keywords);
//   }
//   const arrUnique = [...new Set(arr)];
//   return arrUnique.join(`;`);
// };
// console.log(getKeywordsAsString(books));
// // 3
// const logBookChapters = arr => {
//   for (const [book, page] of arr) {
//     console.log(`${String(book).padEnd(20, `_`)} ${page}`);
//   }
// };

// const bookChapters = [
//   ['The Basics', 14],
//   ['Sorting', 254],
//   ['Searching', 372],
//   ['Graphs', 526],
//   ['Strings', 706],
// ];
// logBookChapters(bookChapters);
// *************************************************************************
// *************** CODING CHALLENGE #4 ************************************
// *************************************************************************
// document.body.append(document.createElement(`textarea`));
// document.body.append(document.createElement(`button`));
// const textarea = document.querySelector(`textarea`);

// const addText = function (text) {
//   textarea.value += (textarea.value ? `\n` : '') + text;
// };
// addText(`underscore_case`);
// addText(` first_name`);
// addText(`Some_Variable`);
// addText(`  calculate_AGE`);
// addText(`delayed_departure`);

// // Conversion
// document.querySelector(`button`).addEventListener(`click`, function () {
//   const arr = textarea.value.split(`\n`);
//   console.log(arr);
//   for (const [i, twoWord] of arr.entries()) {
//     const [first, second] = twoWord.trim().toLowerCase().split(`_`);
//     const str = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
//     const endStr = `${str.padEnd(20)}${`✅`.repeat(i + 1)}`;
//     console.log(endStr);
//   }
// });
// *************************************************************************
// *************** EXTRA EXERCISE ************************************
// *************************************************************************
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();
for (const [i, flight] of flights.split(`+`).entries()) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `🛑` : ``}${type.replaceAll(
    `_`,
    ` `
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    `:`,
    `h`
  )})`.padStart(45);
  console.log(output);
}
