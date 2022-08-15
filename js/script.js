quotes = [
  {
    quote: `“We accept the love we think we deserve.”`,
    author: `― Stephen Chbosky`,
  },
  {
    quote: `“Always forgive your enemies; nothing annoys them so much.”`,
    author: `― Oscar Wilde
`,
  },
  {
    quote: `“Be the change that you wish to see in the world.”`,
    author: `― Mahatma Gandhi`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
    author: `― Mae West`,
  },
  {
    quote: `“So many books, so little time.”`,
    author: `― Frank Zappa`,
  },
  {
    quote: `“Be yourself; everyone else is already taken.”`,
    author: `― Oscar Wilde`,
  },
];

function getQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  document.querySelector("#quote").innerHTML = quotes[number].quote;
  document.querySelector("#author").innerHTML = quotes[number].author;
}
