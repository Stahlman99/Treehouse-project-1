/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// A timing function to continually resfresh the quote every 15 seconds.
let timer = setInterval('printQuote();', 15000);

// An array of quote objects, all containing at least a quote and a source.
const quotes = [
  {
    quote: `I think that inside every adult is the heart of a child.
    We just gradually convince ourselves that we have to act more like adults.`,
    source: 'Shigeru Miyamoto',
    tags: [' [video games', ' age', ' mindset]']
  },
  {
    quote: `Great minds discuss ideas, average minds discuss events, small minds discuss people.`,
    source: 'Anonymous',
    citation: 'New York Times',
    year: 1931,
    tags: [' [morals', ' gossip', ' intellect', ' ideas]']
  },
  {
    quote: `...every man has had countless thousands of ancestors and progenitors, among
    whom have been in any instance rich and poor, kings and slaves, barbarians and Greeks.`,
    source: 'Socrates',
    citation: 'A dialogue recorded in Plato Volume VII, translated by Harold N. Fowler',
    year: 1921,
    tags: [' [knowledge', ' ancestry', ' status]']
  },
  {
    quote: `If our love has no home... let us spend our lives looking together.`,
    source: 'Blumiere',
    citation: 'Super Paper Mario',
    year: 2007,
    tags: [' [love', ' searching', ' meaning]']
  },
  {
    quote: `Wise men speak because they have something to say; Fools because they have to say something.`,
    source: 'Plato',
    tags: [' [wisdom', ' knowledge', ' speech]']
  },
  {
    quote: `Well, that's serendipitous.`,
    source: 'Phineas Flynn',
    citation: 'Phineas and Ferb, S:1E:5',
    year: 2008,
    tags: [' [humor', ' cartoons', ' luck', ' sarcasm]']
  },
  {
    quote: `Men in general are quick to believe that which they wish to be true.`,
    source: 'Julius Caesar',
    tags: [' [beliefs', ' truth', ' mindset', ' intellect]']
  }
];


/***
 * `getRandomQuote` function
***/

// Revisited Math.random concetps: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// A function that accepts an array argument and returns a random item from the array.
function getRandomQuote(quoteList) {
  let randomNum = Math.floor(Math.random() * quoteList.length);
  return quoteList[randomNum];
}

/***
 * `printQuote` function
***/

// A function that assembles a quote object's properties as one string and returns that string.
function printQuote() {
  let chosenQuote = getRandomQuote(quotes);
  let htmlString = '';

  htmlString += `
    <p class="quote">${chosenQuote.quote}</p>
    <p class="source">${chosenQuote.source}`;

  if ( chosenQuote.citation !== undefined ) {
    htmlString += `<span class="citation">${chosenQuote.citation}</span>`;
  }
  if ( chosenQuote.year !== undefined ) {
    htmlString += `<span class="year">${chosenQuote.year}</span>`;
  }
  if ( chosenQuote.tags !== undefined ) {
    htmlString += `<span class="tags">, ${chosenQuote.tags}</span>`;
  }

  htmlString += '</p>';
  randomColor();
  return document.getElementById('quote-box').innerHTML = htmlString;
}

/***
 * `refreshColor` function
***/

// I learned how to get the random hexadecimal value from https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj 
// It randomly sets the background color every time it is called.
function randomColor() {
  let color = '#'+Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = color;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);