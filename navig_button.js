// Wyświetlanie przycisku powrotu do góry strony
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var distanceFromTop = 0.1 * window.innerHeight; // 10% wysokości ekranu
  
    var stickySection = document.querySelector('.sticky-button');
  
    if (scrollTop > distanceFromTop) {
      stickySection.style.display = 'block';
    } else {
      stickySection.style.display = 'none';
    }
  });
  
document.addEventListener('DOMContentLoaded', () => {  /* Upewniam się że strona jest poprawnie załadowana w przeglądarce */
    /* Przycisk powrotu do góry strony */
    const scrollButton = document.getElementById('scrollButton');
    
    scrollButton.addEventListener('click', () => { /* Dodawanie nasłuchwania z funkcja lambda */
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      console.log('Button clicked!');
    });
  });