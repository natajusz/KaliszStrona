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
  
//Ten event zapewnia że kod javascript nie uruchomi się przed utworzeniem zawartości strony (wtedy scrollButton jest jeszcze null)
document.addEventListener('DOMContentLoaded', () => {
    /* Przycisk powrotu do góry strony */
    const scrollButton = document.getElementById('scrollButton');
    
    scrollButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      console.log('Button clicked!');
    });
  });