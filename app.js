/* indice sobre las citas */
let indexSelectedQuote = 0;
/* lista de autores */
const authorsList = document.querySelectorAll('.author-btn');
/* lista de citas */
const quotesList = document.querySelectorAll('.quote');
/* lista de items */
const itemList = document.querySelectorAll('.item');

/* agregar eventos */
authorsList.forEach((author)=>{
  author.addEventListener('click', handleClick);
});

/**
 * manejador de evento click para obtener el data index del boton
 * @param {*} event 
 */
function handleClick(event) {
  const indexSelectedAuthor = parseInt(event.currentTarget.dataset.index, 10);
  showQuote(indexSelectedAuthor);
}

/**
 * mostrar cita asociada al autor
 * @param {*} indexSelectedAuthor 
 * @returns 
 */
function showQuote(indexSelectedAuthor) {
  if(indexSelectedQuote === indexSelectedAuthor) {
    //autor elegido === cita visible
    return;
  } else {
    //autor elegido !== cita visible => hacer visible la cita
    authorsList[indexSelectedQuote].classList.toggle('author-btn-dimmed');
    quotesList[indexSelectedQuote].classList.toggle('quote-hidden');
    itemList[indexSelectedQuote].classList.toggle('item-disable');
    authorsList[indexSelectedAuthor].classList.toggle('author-btn-dimmed');
    quotesList[indexSelectedAuthor].classList.toggle('quote-hidden');
    itemList[indexSelectedAuthor].classList.toggle('item-disable');
    //actualizar el index
    indexSelectedQuote = indexSelectedAuthor; 
  }
}

