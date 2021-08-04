const authorsList = document.querySelectorAll('.author-btn');
const quotesList = document.querySelectorAll('.quote');

function handleClick(event) {
  const selectedQuote = parseInt(event.currentTarget.dataset.index, 10);
  showQuote(selectedQuote);
}

