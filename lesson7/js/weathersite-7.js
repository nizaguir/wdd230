// TOGGLE MENU
const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// CURRENT DATE FIELD ON FOOTER
const datefield = document.querySelector("#currentdate");

const now = new Date();
const currentdate = new Intl.DateTimeFormat("en-US", {
  dateStyle: 'full'
}).format(now);
datefield.textContent = currentdate;

// GALLERY PAGE LAZY LOADING 

// get all data-src refs
const images = document.querySelectorAll("img[data-src]");

// Optional parameters for the IntersectionalObject
const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
}

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
      return;
  }
  img.src = src;
}

// creates new observer
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
      if (!entry.isIntersecting){
          return;
      } else {
          entry.target.classList.add('fadeIn');
          preloadImage(entry.target);
          imgObserver.unobserve(entry.target);
      }
  });
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
});




// Check if the IntersactionObserver is supported
// if('IntersectionObserver' in window) {
//   const imgObserver = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//           if(item.isIntersecting) {
//               loadImages(item.target);
//               observer.unobserve(item.target);
//           }
//       });
//   }, imgOptions);
//   imagesToLoad.forEach((img) => {
//       imgObserver.observe(img);
//   });
// } else { // justl load all images if not supported
//   imagesToLoad.forEach((img) => {
//       loadImages(img);
//   });
// };





// ----REVIEW AND CHECK IF ANY OF THIS CODE SNIPPETS ARE NECESSARY

// TOGGLE MENU

// function toggleMenu() {
//   document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
// }


//  RESPONSIVENESS
// To solve the mid resizing issue with responsive class on
// window.onresize = () => {
//   if (window.innerWidth > 760) mainnav.classList.remove("responsive");
// };