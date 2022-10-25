let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

// alert("I am connected")  // to test js conctivity

// 1 **********
let mainTitleElement = document.getElementById('main-title');  
mainTitleElement.textContent = "Welcome to the DOOM!";  




// 2 ****************
let bodyElement = document.querySelector('body');  
bodyElement.style.backgroundColor = 'pink'; 



// 3 *********************** ...remove the last list item...
let myFavElement = document.getElementById('favorite-things');  
myFavElement.lastElementChild.remove() ; 



// 4 *****************************
let SpecialTitleElement = document.querySelectorAll('.special-title'); 
for (const element of SpecialTitleElement) {
  element.style.fontSize = '2rem';
};



// 5 ******************************
// let pastRacesListElement = document.querySelectorAll('.side-bar #past-races');
let pastRacesListElement = document.querySelectorAll('#past-races > li');// that's how after class office hours
// helps to get more effective code.  This removed two looping process.
for (let element of pastRacesListElement) {
  if(element.textContent === 'Chicago') {
    element.remove();
  }
}


// 6 *********************************                                               
let liNode = document.createElement('li'); 
 liNode.textContent = 'Gotham City'; 

 let pastRacesULElement = document.getElementById('past-races');
pastRacesULElement.append(liNode); 



// 7 ***************************
// from tp down then the final text then, after having all elements, 
// adding them in proper order.

// // add a div
// let addBlogPostDiv = document.createElement('div');
// addBlogPostDiv.classList.add('blog-post', '#89CFF0');
// // Next create a H2 wraps around text while it is anchored to main tag.
// let mainElement = document.querySelector('.main');
// let addBlogPostH2 = document.createElement('h2');
// addBlogPostH2.textContent = mainElement.textContent;
// // now the P tag needs to be added
// let addBlogPostPTag = document.createElement('p');
// addBlogPostPTag.textContent = "blah blah";
// // final steps add this to DIV that was created.
// addBlogPostDiv.append(addBlogPostH2,addBlogPostPTag);
// // we need to add DIV to the main
// mainElement.append(addBlogPostDiv);

// from tp down then the final text
let addBlogPostDiv = document.createElement('div');
addBlogPostDiv.classList.add('blog-post', 'purple');
// Now the P tag needs to be added
let addBlogPostPTag = document.createElement('p');
addBlogPostPTag.textContent = "Blah blah, nah nah again!";
// Next create a H2 wraps around text while it is anchored to main tag.
let addBlogPostH2 = document.createElement('h2');
addBlogPostH2.textContent = liNode.textContent;
addBlogPostH2.style.color = "#fff";
// Need to create the anchor for all
let mainElement = document.querySelector('.main');       
// Add this to DIV that was created.
addBlogPostDiv.append(addBlogPostH2,addBlogPostPTag);
// Final step, add DIV to main
mainElement.append(addBlogPostDiv);



// 8 *********************
const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};

let quoteTitleElement = document.querySelector('#quote-title');
quoteTitleElement.addEventListener(`click`, (evt) => {
  randomQuote()}); 



// 9 *********************
let blogPostElementList = document.querySelectorAll('.blog-post'); 
// The classList. toggle() method supports adding and 
// removing CSS classes whether they exist or not in your array 
// with shorter lines of code.
for (let element of blogPostElementList) {
  element.addEventListener(`mouseout`, () => {
    element.classList.toggle('red', false);
    element.classList.toggle('purple', true);
   });
   element.addEventListener('mouseenter', () => {
    element.classList.toggle('purple', false);
    element.classList.toggle('red', true);
// 'mouseenter' is not enough to keep color change while mouse is within the object
    element.addEventListener('mouseover', () => {
        element.classList.toggle('purple', false);
        element.classList.toggle('red', true);
      }); 
  });  
};



