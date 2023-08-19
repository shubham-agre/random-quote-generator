const quotes = [
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    // Add more quotes here
  ];
  
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const btn = document.getElementById("btn");
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = randomQuote.author;
  }
  
  btn.addEventListener("click", getRandomQuote);
  
  