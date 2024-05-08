window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#0011ff';
    } else {
      navbar.style.backgroundColor = '#0076e5';
    }
  });
  
  var links = document.querySelectorAll('.navbar a');
  
  links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      this.style.color = '#FF0033'; 
    });
  
    link.addEventListener('mouseout', function() {
      this.style.color = 'white'; 
    });
  });
  