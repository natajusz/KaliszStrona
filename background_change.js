document.addEventListener('DOMContentLoaded', () => { /* Upewniam się że strona jest poprawnie załadowana w przeglądarce */

    /* Zmiana tła w zależności od sekcji */
    function setActiveSection() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.pageYOffset;
      
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
      
          if (scrollPosition >= sectionTop - window.innerHeight / 2 && scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
            const sectionStyle = window.getComputedStyle(section);
            const backgroundImage = sectionStyle.getPropertyValue('--background-image');
      
            console.log('setActiveSection(): Changing background image to', backgroundImage);
      
            document.body.style.backgroundImage = backgroundImage;
          }
        });
      }
      
      window.addEventListener('scroll', setActiveSection); /* Dodawanie nasłuchwania z standardową funkcją */

  });