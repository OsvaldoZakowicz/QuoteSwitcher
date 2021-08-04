/* indice sobre las citas */
let indexSelectedQuote = 0;
/* lista de autores */
const authorsList = document.querySelectorAll('.author-btn');
/* lista de citas */
const quotesList = document.querySelectorAll('.quote');

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
    quotesList[indexSelectedQuote].classList.toggle('quote-hidden');
    quotesList[indexSelectedAuthor].classList.toggle('quote-hidden');
    //actualizar el index
    indexSelectedQuote = indexSelectedAuthor; 
  }
}

