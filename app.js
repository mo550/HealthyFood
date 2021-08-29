// Start NavBar
const openMenu = document.querySelector('.open-menu');
const navBar = document.querySelector('.navbar');

openMenu.addEventListener('click', function(){
  navBar.classList.toggle('open');
  openMenu.classList.toggle('close');
});

// window.addEventListener('scroll', function(){
//   navBar.style.display = 'none';
// });
// End NavBar



// Start ScrollToTop Button
const ScrollToTop = document.querySelector('#scrollToTop');

window.addEventListener('scroll', function() {
  if (window.pageYOffset >= 850) {
      ScrollToTop.classList.add('active');
    } else {
      ScrollToTop.classList.remove('active');
    }
  });

ScrollToTop.addEventListener('click', function() {
  window.scrollTo ({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
});
// End ScrollToTop Button
