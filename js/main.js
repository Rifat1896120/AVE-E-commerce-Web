// dropdown start
let drop = document.querySelectorAll(".drop");
let dropdownlink = document.querySelectorAll(".dropdown");

dropdownlink.forEach((e) => {
  e.addEventListener("click", () => {
    let click = e.classList[1];

    drop.forEach((a) => {
      let p = a.classList[1];
      if (click === p) {
        document.querySelectorAll(`.${click}`)[0].classList.toggle("active");

        document.querySelectorAll(`.${click}`)[1].classList.toggle("hide");
        document.querySelectorAll(`.${click}`)[1].classList.toggle("show");
      }
      if (click !== p) {
        if (click == "book") {
          document.querySelectorAll(`.${click}`)[1].classList.toggle("hide");
          document.querySelectorAll(`.${p}`)[1].classList.remove("show");
        }
        if (click != "book") {
          document.querySelectorAll(`.${click}`)[1].classList.add("hide");
          document.querySelectorAll(`.${p}`)[1].classList.remove("show");
        }
        document.querySelectorAll(`.${p}`)[0].classList.remove("active");
      }
    });
  });
});
// dropdown end

AOS.init({
  once: true,
  duration: 1500,
  offset: 120,
});

let search_ic = document.querySelector(".search-ic>i");
let input = document.querySelector(".input");

search_ic.addEventListener("click", () => {
  input.classList.toggle("show");
});

let menu_ic = document.querySelector(".menu-ic");
let cross_ic = document.querySelector(".cross-ic");
let drop_item = document.querySelector(".drop-item");




  
document.querySelector(".menu-ic").addEventListener("click", () => {
  cross_ic.style.display = 'block'
  menu_ic.style.display = "none";
  drop_item.style.transform=  "translateY(-25px)";


  
});
cross_ic.addEventListener('click', () => {
  menu_ic.style.display = "block";
  cross_ic.style.display = "none";
  drop_item.style.transform = "translateY(-500px) ";
  
})





  
let nav_a = document.querySelector("#nav-a");

window.addEventListener('scroll',() => {
  let tops = window.scrollY
if (tops > 70) {
  nav_a.classList.add("nav-active");
  updown.style.display = 'block'
}
  if (tops < 70) {
    nav_a.classList.remove("nav-active");
     updown.style.display = "none";
}
  console.log(tops, 'jaf');
  
})

let updown = document.querySelector(".scroll-icon");

updown.addEventListener('click', () => {
  window.scroll(0 ,0)
})