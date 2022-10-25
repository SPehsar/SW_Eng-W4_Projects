// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let subLinksArray = menuLinks;
for (let i = 0; i < menuLinks.length; i++) {
  if ("subLinks" in menuLinks[i]) {
  } else {
    subLinksArray = subLinksArray.filter(function (obj) {
      return obj.text !== "about";
    });
  }
}

// *** Extra: This two are globally accesible for 5.6 and after
let abc = [];
let text1;
// const subLinksArray = [];
let arrayOfHasLinkIndex = [];
let ddd = ["man"];
let fff = [];

// 1 **************
let mainEl = document.querySelector(`main`);

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add(`flex-ctr`);

// 2 **************
const topMenuEl = document.querySelector(`#top-menu`);
// console.log(topMenuEl)

topMenuEl.style.height = `100%`;

topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

topMenuEl.classList.add(`flex-around`);

// 3 **************
let i = 0;
for (let link of menuLinks) {
  let href = menuLinks[i].href;
  let text = menuLinks[i].text;
  link = document.createElement(`a`);
  link.setAttribute(`href`, href);
  link.textContent = text;
  topMenuEl.append(link);
  // console.log(link)
  i++;
}

// 4 **************
let subMenuEl = document.querySelector(`#sub-menu`); // check it
// let subMenuEl = document.getElementById("sub-menu")

subMenuEl.style.height = `100%`;

subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

subMenuEl.classList.add(`flex-around`);

//  4.4 ************
subMenuEl.style.position = `absolute`;

//  4.5 ************
subMenuEl.style.top = `0`;

//  5.1 ************
const topMenuLinks = topMenuEl.querySelectorAll(`a`);

let showingSubMenu = false;

// 5.2  ******************
topMenuEl.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  if (evt.target.tagName !== `A`) {
    return;
  } else {
    // console.log(evt) // check
  }
  mainEl.innerHTML = `<h1>${evt.target.textContent.toUpperCase()}</h1>`;
  // ******* 5.4
  topMenuLinks.forEach((arg) => {
    arg.classList.remove("active");
    // console.log(arg);
  });

  topMenuEl.classList.remove(`active`);

  // ******* 5.5
  evt.target.classList.add(`active`);
// ********** 5.6
  for (let i = 0; i < menuLinks.length; i++) {
    if ("subLinks" in menuLinks[i]) {
      abc.push(menuLinks[i].text);
      // console.log(menuLinks[1]);
      // subLinksArray.push(menuLinks[i]); // may use this for 5.8
      // console.log(subLinksArray);
      // arrayOfHasLinkIndex.push(i);
    } else {
      // fff.push(evt.target.textContent);
      // console.log(fff[0]);
      // console.log(evt.target.textContent);
    }
  }

  text1 = evt.target.innerHTML;
  showingSubMenu = false;
  for (let i = 0; i < abc.length; i++) {
    if (text1 === abc[i]) {
      showingSubMenu = true;
      showNoShowSubMenu(); // 5.7 is called here
    } else {
      showNoShowSubMenu(); // 5.7 is called here
    }
  }

  // ********* Task 5.7

  function showNoShowSubMenu() {
    if (showingSubMenu === true) {
      subMenuEl.style.top = "100%";
      // console.log(subMenuEl);
    } else {
      subMenuEl.style.top = "0%";
      // console.log(subMenuEl);
    }
  }

  // 5.8  ******************

  function buildSubMenu(linkedObjectParam) {
    subMenuEl.innerHTML = "";

    // let m = 0;
    // for (let subLinkObjectParam of linkedObjectParam) {
    // let zLink = document.createElement(`a`);
    // zLink.setAttribute(`href`, subLinkObjectParam.href);
    // zLink.textContent = subLinkObjectParam.text;
    // subMenuEl.append(link);
    // console.log(link)
    // m++;
    // }  better approache follows.

    linkedObjectParam.subLinks.forEach(function (subLinkObjectParam) {
      let link = document.createElement("a");
      link.setAttribute("href", subLinkObjectParam.href);
      link.textContent = subLinkObjectParam.text;
      subMenuEl.append(link);
    });
  }

  let linkObjectEl = menuLinks.find(function (linkedObject) { // to find/loop through a key-value
    return linkedObject.text === evt.target.textContent; // and put the text content of it 
    // equal to what has been cicked on
  });

  buildSubMenu(linkObjectEl);

  // ***************** 6
  subMenuEl.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return;
    } else {
    }

    subMenuEl.style.top = "0%";

    showingSubMenu = false;

    topMenuLinks.forEach(function (aVariableObject) {
      aVariableObject.classList.remove("active");

      // chang the tesxt of object you click, it is evt.target.textContent, and should be h1
      mainEl.innerHTML = `<h1>${evt.target.textContent.toUpperCase()}</h1>`;
    });
  });
});
