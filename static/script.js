document.addEventListener('DOMContentLoaded', function() { 
    // Inicialicé la variable score con un valor por defecto 
    let score = 0; 
    const buttons = document.querySelectorAll('.score-button'); 
    const feedbackForm = document.getElementById('feedbackForm'); 
    const thankYouPage = document.getElementById('thankYouPage'); 
    buttons.forEach(button => { 
      button.addEventListener('click', function() { 
        score = this.value; 
        // Agregar o quitar la clase "active" al botón clicado 
        this.classList.toggle("active"); 
        // Quitar la clase "active" a los demás botones 
        buttons.forEach(otherButton => { 
          if (otherButton !== this) { 
            otherButton.classList.remove("active"); 
          } 
        }); 
      }); 
    }); 
    // Eliminé el evento submit y solo usé el evento click en el botón con id="button"
    document.getElementById('button').addEventListener('click', function() { 
      // Validé que el usuario haya seleccionado un puntaje antes de mostrar el contenido oculto
      if (score) {
        showParagraph(this, score); 
      } else {
        alert("Plis select score after send");
      }
    }); 
  }); 
  function showParagraph(button, score) { 
    // Obtener el párrafo que está dentro de la sección oculta 
    let paragraph = button.parentNode.nextElementSibling.querySelector("p"); 
    // Reemplazar el comentario con el puntaje 
    paragraph.innerHTML = paragraph.innerHTML.replace("<!-- Add rating here -->", score); 
    // Mostrar la sección oculta 
    button.parentNode.nextElementSibling.style.display = "block"; 
    // Ocultar el resto del contenido 
    button.parentNode.style.display = "none"; 
  }