document.addEventListener('DOMContentLoaded', function() {
    const mensSneakerGrid = document.getElementById('mens-sneaker-grid');
  
    async function fetchSneakerData(url, gridElement) {
        try {
            const response = await fetch(url);
            const sneakers = await response.json();
  
            sneakers.forEach(sneaker => {
                const sneakerItem = document.createElement('div');
                sneakerItem.className = 'sneaker-item';
                sneakerItem.innerHTML = `
                    <img class="sneaker-img" src="${sneaker.imgpng}" alt="${sneaker.Name}">
                    <h2 class="sneaker-name">${sneaker.Name}</h2>
                    
                `;
  
                sneakerItem.addEventListener('click', function() {
                    // Navigate to the detail page when the sneaker item is clicked
                    const encodedName = encodeURIComponent(sneaker.Name);
                    const encodedPrice = encodeURIComponent(sneaker.Price);
                    const encodedImg = encodeURIComponent(sneaker.Img);
                    const encodedBg = encodeURIComponent(sneaker.bg);
                    window.location.href = `/frontend/html/shoe-detail.html?name=${encodedName}&price=${encodedPrice}&img=${encodedImg}&bg=${encodedBg}`;
                });
  
                gridElement.appendChild(sneakerItem);
            });
  
            // Apply SplitType and GSAP animations to all h2 elements after they are added to the DOM
            const sneakerNames = document.querySelectorAll('.sneaker-name');
            sneakerNames.forEach(name => {
                const splitName = new SplitType(name, { types: 'chars' });
                gsap.from(splitName.chars, {
                    duration: 1.5,
                    opacity: 0,
                    delay:1.3,
                    stagger: 0.1,
                    ease: "power2"
                });
            });

            const sneakerImg = document.querySelectorAll('.sneaker-img');
            sneakerImg.forEach(img => {
                gsap.from(img,{
                    opacity: 0,
                    duration: 1.5,
                    ease: 'sine.out'
                })
            });


        } catch (error) {
            console.error('Error fetching the sneaker data:', error);
        }
    }
  
    fetchSneakerData('/assests/Shoe_file.json', mensSneakerGrid);
  
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
        if (scrollTop > lastScrollTop) {
            // Scroll down
            navbar.classList.add('hide-navbar');
        } else {
            // Scroll up
            navbar.classList.remove('hide-navbar');
        }
  
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    });
  
    const one = new SplitType('.one');
    const two = new SplitType('.two');
    const three = new SplitType('.three');
    const four = new SplitType('.four');
    const h1 = new SplitType('h1');
    const navbartitle = new SplitType ('.navbar-title')
    
  
    gsap.from(h1.chars, {
        duration: 2,
        opacity: 0,
        x: -500,
        stagger: 0.05,
        ease: "power2.out"
    });
  
    gsap.from(one.chars, {
        duration: 2,
        opacity: 0,
        x: -200,
        stagger: 0.05,
        ease: "power2.out"
    });
  
    gsap.from(two.chars, {
        duration: 2,
        opacity: 0,
        x: -200,
        stagger: 0.05,
        ease: "power2.out"
    });
  
    gsap.from(three.chars, {
        duration: 2,
        opacity: 0,
        x: -200,
        stagger: 0.05,
        ease: "power2.out"
    });
  
    gsap.from(four.chars, {
        duration: 2,
        opacity: 0,
        x: -200,
        stagger: 0.05,
        ease: "power2.out"
    });
    gsap.from(navbartitle.chars,{
        duration: 2,
        opacity: 0,
        x: -500,
        stagger: 0.1,
        ease: "power2.out"
      });


     
  });
  
  function showSidebar() {
    var sidebar = document.getElementById("mobNavbarLinks");
    sidebar.style.display = "flex";
  }
  
  function closeSidebar() {
    var sidebar = document.getElementById("mobNavbarLinks");
    sidebar.style.display = "none";
  }