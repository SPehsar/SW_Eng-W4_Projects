Practice What You Learned

Links to an external site.DOM "Menu" Lab - Part 1
Links to an external site.Intro
In the Intro to the DOM we selected, manipulated, and created DOM elements - this lab provides practice doing the same.

This is the first of a two-part lab that builds a menu bar with a slide-down submenu.

Note: Several of the tasks in this lab would be better done upfront in the markup or CSS instead of using JS, however the goal of this lab is to provide practice modifying the DOM using JS. In your projects, if the HTML or CSS is known in advance and/or static (unchanging), code it in HTML and CSS!

Links to an external site.This lab, combined with Part 2, is a deliverable.
Links to an external site.Setup
Create a new HTML/CSS/JS Repl and name it "DOM Lab".
Update the <body>element in the index.html to this:

<body>
  <header>
    <nav id="top-menu"></nav>
  </header>
  <main></main>

  <script src="script.js"></script>
</body>
Note: The markup is complete - DO NOT modify it in any way - do not add any classes or ids.

Add the following CSS within style.css:

* {
  box-sizing: border-box;
}

/* CSS Custom Properties */
:root {
  --main-bg: #4a4e4d;
  --top-menu-bg: #0e9aa7;
  --sub-menu-bg: #3da4ab;
}

body {
  font-family: Tahoma, Geneva, sans-serif;
  height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: 3rem auto;
  color: white;
}

.flex-ctr {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-around {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

nav a {
  line-height: 3rem;
  padding: 0 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
}

#top-menu a:hover {
  background-color: var(--sub-menu-bg);
}
Note: The CSS is complete - DO NOT modify it in any way.

Take five minutes to familiarize yourself with CSS Custom Properties (variables)Links to an external site. - they are an amazing new addition to CSS. If you're familiar with using variables with SASS/LESS pre-processors, CSS Custom Properties are similar, but far more powerful because they are dynamic (their values can be changed during runtime) - and they are built into the CSS language!

Links to an external site.Tasks
Links to an external site.Task 1.0
Select and cache the <main> element in a variable named mainEl.

Links to an external site.Task 1.1
Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

Hint: Assign a string that uses the CSS var() function like this:
'var(--main-bg)'

Links to an external site.Task 1.2
Set the content of mainEl to <h1>SEI Rocks!</h1>.

Links to an external site.Task 1.3
Add a class of flex-ctr to mainEl.

Hint: Element.classList APILinks to an external site.

Links to an external site.Progress Check:

Links to an external site.Task 2.0
Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

Links to an external site.Task 2.1
Set the height topMenuEl element to be 100%.

Links to an external site.Task 2.2
Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

Links to an external site.Task 2.3
Add a class of flex-around to topMenuEl.

Links to an external site.Progress Check:

Links to an external site.Task 3.0
Copy the following data structure to the top of script.js:

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];
Links to an external site.Task 3.1
Iterate over the entire menuLinks array and for each "link" object:

Create an <a> element.
On the new element, add an href attribute with its value set to the href property of the "link" object.
Set the new element's content to the value of the text property of the "link" object.
Append the new element to the topMenuEl element.
Links to an external site.Congrats!

                                               =====================================================================================================================
Practice What You Learned

Links to an external site.DOM "Menu" Lab - Part 2
Links to an external site.Intro
In the DOM Events lesson we saw how to run a function, i.e., an event listener, when an event, such as a click, was dispatched.

This lab continues where Part 1 left off and provides practice defining event listeners used to manipulate the DOM in response to user interaction. It also provides additional practice styling DOM elements dynamically using JavaScript.

Links to an external site.This lab is a deliverable.
Links to an external site.Setup
Continue to use the "DOM Lab" HTML/CSS/JS Repl you created in Part 1. This is what you should have thus far:

Insert an additional <nav>element within the <header>element in index.html:

<header>
  <nav id="top-menu"></nav>
  <!-- Add the <nav> element below -->
  <nav id="sub-menu"></nav>
</header>
Note: Other than the above changes, DO NOT modify index.html in any way.

Add the following CSS to the bottom of style.css:

header, #top-menu {
  position: relative;
}

#top-menu {
  z-index: 20;
}

#sub-menu {
  width: 100%;
  z-index: 10;
  transition: top 0.5s ease-out;
}

#sub-menu a:hover {
  background-color: var(--top-menu-bg);
}

nav a.active {
  background-color: var(--sub-menu-bg);
  color: var(--main-bg);
}
Note: Other than the above changes, DO NOT modify style.css in any way.

Links to an external site.Tasks
Tasks 1.0 thru 3.1 were completed in Part 1.

Links to an external site.Task 4.0
Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

Links to an external site.Task 4.1
Set the height subMenuElelement to be 100%.

Links to an external site.Task 4.2
Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.

Links to an external site.Task 4.3
Add the class of flex-aroundto the subMenuElelement.

Links to an external site.Progress Check:

Links to an external site.Task 4.4
Set the CSS positionproperty of subMenuElto the value of absolute.

Links to an external site.Task 4.5
Set the CSS topproperty of subMenuElto the value of 0.

Links to an external site.Task 5.0
Update the menuLinksarray in script.js to this:

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
Links to an external site.Task 5.1
Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.

Declare a global showingSubMenuvariable and initialize it to false;

Links to an external site.Task 5.2
Attach a delegated 'click' event listener to topMenuEl.

The first line of code of the event listener function should call the event object's preventDefault()method.

The second line of code function should immediately return if the element clicked was not an <a>element.

console.logthe content of the <a>to verify the handler is working.

Links to an external site.Progress Check
Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.

Clicking anywhere other than on a link should do nothing.

Links to an external site.Task 5.3
Next in the event listener, if the clicked <a>link has a class of active:

Remove the activeclass from the clicked <a>element.
Set the showingSubMenuto false.
Set the CSS topproperty of subMenuElto 0.
returnto exit the handler.
Links to an external site.Task 5.4
Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

Links to an external site.Task 5.5
Next, the event listener should add a class name of activeto the <a>element that was clicked.

Links to an external site.Task 5.6
Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.

Hint: Saving the "link" object in a variable will come in handy for passing its subLinksarray in Task 5.7

Links to an external site.Progress Check
Clicking any of the links should make that link "active" and clear the others:


Clicking an "active" link should clear that link.

Links to an external site.Task 5.7
Next in the event listener...

If showingSubMenuis true:

Call a buildSubMenufunction passing to it the subLinksarray for the clicked <a>element.
Set the CSS topproperty of subMenuElto 100%.
Otherwise (showingSubMenuis false):

Set the CSS topproperty of subMenuElto 0.
Links to an external site.Task 5.8
Code the buildSubMenufunction so that it:

Clears the contents of subMenuEl.
Iterates over the subLinksarray passed as an argument; and for each "link" object:

Create an <a>element.
On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
Set the new element's content to the value of the textproperty of the "link" object.
Append the new element to the subMenuElelement.
Links to an external site.Progress Check
Take the menu for a test drive!


Links to an external site.Task 6.0
Attach a delegated 'click' event listener to subMenuEl.

The first line of code of the event listener function should call the event object's preventDefault()method.

The second line of code function should immediately return if the element clicked was not an <a>element.

console.logthe content of the <a>to verify the handler is working.

Links to an external site.Task 6.1
Next, the event listener should:

Set showingSubMenuto false.
Set the CSS topproperty of subMenuElto 0.
Links to an external site.Task 6.2
Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

Links to an external site.Task 6.3
Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.

Links to an external site.Task 6.4
If the ABOUT link is clicked, an <h1>about</h1>should be displayed.

Links to an external site.Congrats!
