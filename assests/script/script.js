const projectPortfolios = [
  {
    id: 1,
    image: "assests/images/planet.jpg",
    title: "Frondend Development Project",
    text: "Quiz App!",
    link: "https://github.com/jas-sin82/milestone-project-2",
  },
  {
    id: 2,
    image: "assests/images/Screenshot-2.png",
    title: "Frondend Development Project",
    text: "To Guess a secret number!",
    link: "https://github.com/jas-sin82/Guess_my_Secret_number",
  },
  {
    id: 3,
    image: "assests/images/Screenshot-3.png",
    title: "Frondend Development Project",
    text: "Learn math calculation project!",
    link: "https://github.com/jas-sin82/learn_math_calculation_project",
  },
  {
    id: 4,
    image: "assests/images/Screenshot-5.png",
    title: "Frondend Development Project",
    text: "A Game for Two Players! Roll a Dice 🎲",
    link: "https://github.com/jas-sin82/roll_a_dice_game",
  },
  {
    id: 5,
    image: "assests/images/Screenshot-6.png",
    title: "Frondend Development Project",
    text: "Drum kit project!",
    link: "https://github.com/jas-sin82/drum_kit_project",
  },
  {
    id: 6,
    image: "assests/images/Screenshot-7.png",
    title: "Frondend Development Project",
    text: "Bankist app project javascript!",
    link: "https://github.com/jas-sin82/bankist-app-project-javascript",
  },
  {
    id: 7,
    image: "assests/images/Screenshot-8.png",
    title: "Frondend Development Project",
    text: "Guess a Random Number Game!",
    link: "https://github.com/jas-sin82/number_guess",
  },
  {
    id: 8,
    image: "assests/images/Screenshot-9.png",
    title: "Frondend Development Project",
    text: "Expense Tracker!",
    link: "https://github.com/jas-sin82/expense-tracker",
  },
  {
    id: 9,
    image: "assests/images/Screenshot-10.png",
    title: "Frondend Development Project",
    text: "To-Do-list App React!",
    link: "https://github.com/jas-sin82/to-do-app-react",
  },
  {
    id: 10,
    image: "assests/images/Screenshot-11.png",
    title: "Frondend Development Project",
    text: "Meal-app-project! App to order meal!",
    link: "https://github.com/jas-sin82/meal-app-project",
  },
  {
    id: 11,
    image: "assests/images/Screenshot-12.png",
    title: "Frontend & Backend Project",
    text: "React Basic App! Keep your resource at one place!",
    link: "https://github.com/jas-sin82/react-basic-app",
  },
  {
    id: 12,
    image: "assests/images/Screenshot-13.png",
    title: "Frontend & Backend Project",
    text: "Newsletter subscription App!",
    link: "https://github.com/jas-sin82/newsletter-signup",
  },
  {
    id: 13,
    image: "assests/images/Screenshot-14.png",
    title: "Frontend & Backend Project",
    text: "Online Fashion Boutique!",
    link: "https://github.com/jas-sin82/d-y-collection-milestone-4",
  },
  {
    id: 14,
    image: "assests/images/responsive-snapshot.png",
    title: "Frontend & Backend Project",
    text: "Next Destination Club Holiday App!",
    link: "https://github.com/jas-sin82/next-destination-club-milestone-3",
  },
];

// global variables
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const btn = document.querySelector(".btn");
const header = document.querySelector(".header-container");
const cardItems = document.querySelector(".card-portfolio");
const contactButton = document.querySelector(".contact-button");
const contactFormHeader = document.querySelector(".contact-form-header");
const Overlay = document.querySelector(".overlay");
const closeMenuForm = document.querySelector(".close-menu-form");

// contact button on heading
contactButton.addEventListener("click", function () {
  contactFormHeader.style.display = "block";
  Overlay.style.display = "block";
});

// iterate over each card
projectPortfolios.forEach((project) => {
  // console.log(project);
  // console.log(project.image);
  // console.log(project.title);
  // console.log(project.text);
  // console.log(project.link);
  cardItems.innerHTML += `<div class="card" style="width: 18rem">
<img
  class="card-img-top"
  src=${project.image}
/>
<div class="card-body">
  <h5 class="card-title">${project.title}</h5>
  <p class="card-text">${project.text}</p>
  <a
    href=${project.link}
    target="_blank"
    class="button-card"
    ><i class="fa-solid fa-right-to-bracket"></i
    ><span>To see Repositorie</span></a
  >
</div>
</div>`;
});

// mobile menu open
const openModal = function (e) {
  e.preventDefault();
  mobileMenu.style.display = "block";
  $(".mobile-list li").addClass("border");
};

// mobile menu close
const closeModal = function (e) {
  e.preventDefault();
  mobileMenu.style.display = "none";
  $(".mobile-list li").removeClass("active");
};

// close form
const closeForm = function (e) {
  e.preventDefault();
  contactFormHeader.style.display = "none";
  Overlay.style.display = "none";
};

// add event on open menu bar and close menu bar
openMenu.addEventListener("click", openModal);
closeMenu.addEventListener("click", closeModal);
document.addEventListener("keydown", closeModal);
closeMenuForm.addEventListener("click", closeForm);

// add active class on mobile menu
$(".mobile-list li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  mobileMenu.style.display = "none";
});

// scroll  to top btn display
document.addEventListener("scroll", (event) => {
  mobileMenu.style.display = "none";
  btn.style.display = "block";
});

// scroll back to top
$("document").ready(function () {
  $(".btn").click(() => {
    $(window).scrollTop(0);
  });
});

// reveal section intersecting observer
const allSections = document.querySelectorAll(".sections");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
