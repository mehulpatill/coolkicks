function redirectToIndex() {
  window.location.href = "index.html";
}

const one = new SplitType ('.one')
const two = new SplitType ('.two')
const three = new SplitType ('.three')
const four = new SplitType ('.four')
const h1 = new SplitType('h1')
const navbartitle = new SplitType ('.navbar-title')

gsap.from(h1.chars,{
  duration: 2,
  opacity: 0,
  x: -500,
  stagger: 0.05,
  ease: "power2.out"});

gsap.from(one.chars,{
  duration: 2,
  opacity: 0,
  x: -500,
  stagger: 0.05,
  ease: "power2.out"});

gsap.from(two.chars,{
  duration: 2,
  opacity: 0,
  x: -500,
  stagger: 0.05,
  ease: "power2.out"
});
  
gsap.from(three.chars,{
  duration: 2,
  opacity: 0,
  x: -500,
  stagger: 0.05,
  ease: "power2.out"
});
    
gsap.from(four.chars,{
  duration: 2,
  opacity: 0,
  x: -500,
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
      

gsap.from('.img',{
  opacity: 0,
  duration: 2,
  ease : 'power2',
  x : -500,
  y : -500
})
gsap.from('.circle',{
  // opacity:0,
  x :1000,
  rotation : 360,
  duration : 1,
  ease: 'power2',
})


            



