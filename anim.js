const input = document.querySelector("#search_input")
const searchBtn = document.querySelector('.search_btn')
const gifSection = document.querySelector('.gifs-section')







function animBlock(){
  gsap.to('.search-form', { duration: 2.5, ease: "power3.out", y: 0 });
  gsap.fromTo(".gifs-section_item",{opacity: 0, y: 150}, {duration: 1, opacity: 1, y: 0, stagger: .2})

  
}


