const quoteContainer = document.getElementById("quote-list")

fetch("http://localhost:3000/quotes?_embed=likes")
.then(response => response.json())
.then(data => data.forEach(quote => createQuoteCard(quote)))

function createQuoteCard(quote){
    
}