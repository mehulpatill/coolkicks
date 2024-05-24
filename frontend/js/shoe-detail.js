document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event fired');
    const urlParams = new URLSearchParams(window.location.search);
    
    // Retrieve the sneaker name, price, and background from the URL parameters
    const sneakerName = urlParams.get('name');
    const sneakerPrice = urlParams.get('price');
    const sneakerBg = urlParams.get('bg');
    
    const nameElement = document.querySelector('.detail .name');
    const priceElement = document.querySelector('.detail .price');
    const sneakerImageElement = document.getElementById('sneaker-image');
    const nikeNameElement = document.getElementsByClassName('.bg');
    const bodyElement = document.body;
    
    fetch('/assests/Shoe_file.json')
        .then(response => response.json())
        .then(data => {
            console.log('Fetched sneaker data:', data);
            const sneakers = data;
            let currentIndex = sneakers.findIndex(sneaker => sneaker.Name === sneakerName);

            const initialSneaker = sneakers[currentIndex];

            if (initialSneaker) {
                // Set the initial image source and background before animation
                sneakerImageElement.src = initialSneaker.imgpng;
                bodyElement.style.backgroundImage = initialSneaker.bg;
                gsap.from(nikeNameElement,{scale :0, duration:1,})

                gsap.from(sneakerImageElement, { duration: 0.5, x: 5000, opacity: 1, ease: "power2.out" });

                gsap.to(nameElement, { y: 500, opacity: 0, duration: 0.4, ease: "power2.out", onComplete: function() {
                    nameElement.textContent = initialSneaker.Name;
                    gsap.fromTo(nameElement, { y: -500, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "back" });
                }});

                gsap.to(priceElement, { y: 500, opacity: 0, duration: 0.4, ease: "power2.out", onComplete: function() {
                    priceElement.textContent = initialSneaker.Price;
                    gsap.fromTo(priceElement, { y: 500, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "back" });
                }});

                
            }
            gsap.from(".bg",{
                scale: 0,
                opacity: 0,
                duration: 1.5,
            })

            const one = new SplitType('.one');
            const two = new SplitType('.two');
            const three = new SplitType('.three');
            const four = new SplitType('.four');
            const h1 = new SplitType('h1');
            const navbartitle = new SplitType ('.navbar-title')

            gsap.from(navbartitle.chars,{
                duration: 2,
                opacity: 0,
                x: -500,
                stagger: 0.1,
                ease: "power2.out"
              });
          
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

            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + sneakers.length) % sneakers.length;
                const prevSneaker = sneakers[currentIndex];
                updateSneakerDetails(prevSneaker);
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % sneakers.length;
                const nextSneaker = sneakers[currentIndex];
                updateSneakerDetails(nextSneaker);
            });

            function updateSneakerDetails(sneaker) {
                gsap.to(".name", { y: 500, opacity: 0, duration: 1, ease: "power2.out", onComplete: function() {
                    bodyElement.style.backgroundImage = sneaker.bg;
                    nameElement.textContent = sneaker.Name;
                    gsap.fromTo(".name", { y: -500, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, duration: 1, ease: "back" });
                }});
                gsap.to(".price", { y: 500, opacity: 0, duration: 1, ease: "power2.out", onComplete: function() {
                    bodyElement.style.backgroundImage = sneaker.bg;
                    priceElement.textContent = sneaker.Price;
                    gsap.fromTo(".price", { y: 500, opacity: 0 }, { y: 0, opacity: 1, delay: 0.5, duration: 1, ease: "back" });
                }});

                gsap.to(sneakerImageElement, { x: -500, duration: 1, opacity: 0, ease: "power2.out", onComplete: function() {
                    sneakerImageElement.src = sneaker.imgpng;
                    gsap.to(sneakerImageElement, { x: 0, opacity: 1, delay: 0.5, duration: 1, ease: "power2.out" });
                }});
            }
            
        });
});
