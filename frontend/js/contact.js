document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-content');
    const submitBtn = document.getElementById('btn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Simulate successful submission
        displaySuccessMessage();
        clearForm();
    });

    function displaySuccessMessage() {
        // Display success message
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Your request has been sent.';
        successMessage.classList.add('success-message');
        form.appendChild(successMessage);

        // Remove success message after a delay
        setTimeout(function() {
            successMessage.remove();
        }, 3000); // Remove message after 3 seconds (adjust as needed)
    }

    function clearForm() {
        // Clear form inputs
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => input.value = '');
    }

    setTimeout(function() {
        document.querySelector('.address').classList.add('reveal');
      }, 2000);

    
const one = new SplitType('.one');
const two = new SplitType('.two');
const three = new SplitType('.three');
const four = new SplitType('.four');
const h1 = new SplitType('h1');
const navbartitle = new SplitType ('.navbar-title')
const text = new SplitType ('.text')
const span = new SplitType ('span')


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
  gsap.from(text.chars,{
    duration: 2,
    opacity: 0,
    y: 500,
    stagger: 0.1,
    ease: "power2.out"
  });
  gsap.from(span.chars,{
    opacity:0,
    stagger:0.1,
    duration:2,
    ease:"power2.out"

  });
  

    
});



