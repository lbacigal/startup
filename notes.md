
# 1/12/24 -- GitHub Assignment -- I think I learned the difference between all the different 'git (insert word here)' things

* git add: adds changes to a list that is local
* git commit -m '(whatever text here)': applies the changes to both the local version of the repository
* git push: applies the changes to the online GitHub version of the repository as well
* I learned that using VS Code's "Source Control" is much easier than doing everything in the terminal with GitBash
* I did get help from my CS roommate, the internet, & from ChatGPT


# 1/22/24 -- Startup Assignment
* I changed my project idea. It was going to be a video editor, but now it's just a deep fried image maker
* I don't know how to write the code for all the different technologies, but I'll learn at some point


# 1/29/24 -- AWS-EC2
* idk what I did wrong but I followed all the steps to set it up. The server's status is "running" but I can't connect in my browser (I tried both Brave & Microsoft Edge bc those are the only 2 I have. I want to get rid of Edge though). I even rebooted the server, but it's still not working
* turns out in the instructions it said to make **Inbound & Outbound Rules** but it didn't show a picture of where to click for that, so I assumed it would do it itself. I messaged the discord to ge help & I fixed it. I also thought in the instructions in the **SSH into your server**, that it meant to use the console in the AWS website, but that didn't work so I used it in VSCode & it worked fine.
* the ip for the website is http://54.158.188.159//
* command I used in VSCode terminal to SSH into it "ssh -i CS260.pem ubuntu@54.158.188.159"


# 1/30/24 -- HTTPS, TLS, and certificates
* This may sound dumb, but I literally just learned that the Github schedule for this class is WAYY better than the Canvas schedule. I completely missed the steps to buy a domain name with the Route53 stuff. But now I know to ALWAYS look at the Github schedule.
* I learned that when I'm editing the Caddy file, that using "vi Caddyfile" is really hard. Apparently if you use "nano Caddyfile" it's a LOT more user friendly, while still being able to edit the file.
* When I buy a domain, it's better to use a ".click" rather than a ".com" or ".org" because they are always cheaper
* I also did "the console" assignment. I'm pretty sure I understood what was going on. I made a txt file called 'test', & put a print thing in it. Then copied that file & made a new file from it called 'other'. put the contents of the 'test' file in the 'other' file, then deleted the 'test' file. then did a function that ran through the 'other' file to get an output. I'm wayy more used to Python, but it made sense conceptually


# 2/3/24 -- HTML structure, input, media
* first of all, CodePen is awesome! I'd love it even more if it highlighted variables you select in the whole document, rather than just the 1 you click on. I love how it separates the HTML, CSS, & JS
* I think it's really cool how you can basically embed anything you want in HTML. The syntax for adding things tends to be a lot of writing though. It makes sense to do the header thing with <>, but I always forget to do the </> for most of it
* I tried putting music in it, but I couldn't find any mp3 files online (& I also didn't know what to look for), so I experimented putting a song on Spotify on it. It seemed to work well, but Spotify doesn't let you have song controls (maybe there is but I wasn't able to figure it out)
* I also realized I turned in th Media assignment, but I forgot to save it before submitting it. I went back & changed the color of the Canvas & SVG though.


# 2/5/24 -- CSS Practice
* turns out when you to /* */, anything you type between there is not rendered but is meant to keep notes of things. kinda like # in python, or // in C++
* this website is gonna be super useful later https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
* when doing things with @keyframes, the first 0% is where you want it to start. The next 100% is where you want it to end up when it's done with the animation. in the practice, you had to put where you want the 'fly-from-left' to start & end. the CSS doesn't know what you want by default, you have to tell it specifically.
* Here is the distinction for the padding, border, & margin. I was getting confuse & lost where in the element it is. Here's a few images I use to remember 

<img src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png" alt="mozilla example" width="300"> <img src="https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssBoxModel.jpg" alt="CS260 example" width="300">

* when typing the 'header, background-color' properties, it applies to the entire container, not the text heading itself
* typing 'h1 color: hsl( ####)' that applies to the text in the heading, not the entire heading container
* when making the structures in the HTML, you give it a class if you want to animate it or give it certain properties. Then you give it those properties in the CSS with like '.ugly {***whatever you wanted to put here***}'
* I'm unsure why for coloring the html containers you use stuff like **#777 or #111**. But in the header text itself you use **'hsl(##, #%, #%)'**. But in the 'table-data' you use **'#eee'**. idk what the difference is (if it's listed in the instructions, I totally missed it). I'll find out what it is at some point.
* turns out when things have '1em' or '1.5em', it means 'times the size of the original element', so '1.5em' means '1.5 times the size of the element'. (I'm pretty sure that's what it means, I'm not 100% certain though)
* when formatting data in a table, you do stuff with 'td', & 'th'. if you want to include the same formatting for both without typing it twice, just do 'th, td {***insert stuff here***}'
* you can use 'li' to change the style of the bullet points in a list
* after looking at more examples of CSS at the bottom of the assignment, I am very intimidated now hahaa....
* 'vh' stand for view height when animating things
* I'm gonna need this for later https://github.com/public-apis/public-apis

# 2/5/24 -- HTML Startup
* I've realized I can't do a lot of customization because I'm not doing CSS right now.
* I've also noticed I probably want to add more tabs for the website. One being a profile tab so people can change it if they want
* I also want to eventually add a dark mode & view editor so people can view it however they want
* I put a spot for a Sorting thing in the Community tab, similar to reddit
* I'd like community posts to be able to be shared online, whether it's a link, or a download button, or an embed button, etc
* I ssh'd using "ssh -i ../CS260.pem ubuntu@54.158.188.159" to make sure it went through
* I also deployed it with "./deployFiles.sh -k ../CS260.pem -h memefryer.click -s startup"
* I was really confused initially because when I went to 'memefryer.click' it was still showing the CS260 default page. But then I remembered I need to put it as 'startup.memefryer.click' for it to show the new stuff. I'd like to get rid of the CS260 & the Simon stuff later.
* I'm gonna need this for later https://github.com/public-apis/public-apis

# 2/7/24 -- CSS Flex
* '1fr' stands for 'fractional unit'
* A fractional unit is dynamically computed by splitting up the parent element's width into equal parts.
* when doing things with 'flex: # #' the first # means how much of a 'fr' it will grow. if you put 'flex: 0 80px', it means the element won't grow, & will be fixed at 80px height
* when I specified in the '<body>' I said 'height: 100vh' & it took up the whole height. But when I changed it to 'height: 100%' it only fit to the height of the text. But when I put in the html css 'height: 100%' then the body went back to taking up the whole page. idk why, but that's what happened lol
* would it be easier to put 'display: flex;' in the * part of css? Since everything used it in the CSS Flex assignment?
* turns out there is a thing called '-webkit-text-stroke: #px color;'. This basically outlines text, which is cool
* I've been typing the colors out in words, not the hex or whatever values. I hope theres a tool or something I can use to get colors quickly, because there's no way I'm gonna memorize all the color hex values
* W3 schools is a life-saver fr

# 2/10/24 -- CSS Frameworks
* There are different ways of including CSS into HTML documents. some write it in the HTML itself, others don't
* to solve the problem in the Debugging CSS, I used 'justify-contents: center' or something like that. I did it without looking up anything to yeeet
* "For future reference, to include Bootstrap in your application using NPM you would run the following from your console. npm install bootstrap@5.2.3"
* This is gonna be my main resource for finding Bootstrap code ➡️ https://codepen.io/leesjensen/pen/JjZavjW?editors=1000
* I do like that Bootstrap includes all of it in the HTML, but I can already tell I'm going to get lost in the code because it's so much more to write for every element. As I use it more I'm sure it'll get better
* I like codepen, but if it had a thing to highlight which element you are clicking on that would be great, in the same way VSCode has highlighted brackets

# 2/15/24 -- Day 15-17 stuff
* I'm very glad you can do the '===' to not worry about the 'falsy' & 'truthy' values. Those would get mega confusing. Idk why you would want to use the 'falsy' & 'truthy' stuff anyway, I'm sure some big brain person knows how to use them
* use this site for looking at example JavaScript stuff https://htmlpreview.github.io/?https://github.com/webprogramming260/.github/blob/main/profile/javascript/introduction/jsDemo.html
* It looks like Arrow Functions in JavaScript work the same way as lambda functions in Python. I'm not used to writing code like that, so that'll be a challenge for me. 
* turns out in CodePen you can look at the console in the bottom left corner of the screen
* Idk why, but in this little function tester thing, if I have the array with integers in it, it's false. But if it's strings, it's true. https://codepen.io/lbacigal/pen/zYberdR

## Startup CSS, what I did/thoughts/whatever came to mind
* accidentally deployed Simon CSS to my startup.memefryer.click, but I fixed it
* began working on Startup CSS at 2:55pm, here I'll list what I did
    * decided I wanted bootstrap things in each html page (I think the fonts look better anyway)
    * added the fancy bootstrap login thing to the home page
    * created index.css
    * decided to move to my desktop, my 1 screen laptop wasn't cutting it
    * not gonna lie, I'm using a lot of ChatGPT to help me troubleshoot & design things when idk what to do
    * I've decided to make a custom image that stretches across the top of the website, similar to a subreddit. I'm gonna do that later though bc I know I'll take a while to do it.
    * adjusted the login size thingy
    * made a profile.html & added a profile button to the navigator bar thing
    * tried to put profile button on right side of screen, but I got lost & confused so I just have it sit in the nav bar. it looks better like that anyway
    * stopped working on this to go on a date at 5pm
    * resumed working on this on 2/16/24 at 6pm
    * made the footer always appear at the bottom
    * turns out opacity is an attribute you can put in the HTML itself. pretty epic. `<hr style="opacity:0" />`
    * added transparent horizontal rule
    * I'm now realizing it's good to do the styling within the HTML if it's not going to change a lot or if I don't want to make a class to make CSS code for that specific thing.
    * Aligned the welcome message on the home page
    * I want to add this type of design to the login thing, but I'll do that later bc I just need to get all of the pages formatted. https://codepen.io/lbacigal/pen/wvONRXa?editors=1100
    * put the same formatting in the editor.html & created editor.css
    * working on adding sliders to the editor tab. I got them in a vertical list, but I'm having a hard time putting it next to the sample image
    * I decided to try putting absolute positions for the sliders & image, hopefully it works lol
    * I realized it was working the whole time, but I was referencing a different css file the... rookie mistake
    * I think this is super cool, hopefully I can find a way to include it https://codepen.io/lbacigal/pen/ZEPwwWo
    * I kinda wanna use the sidebars too, idk how tho https://getbootstrap.com/docs/5.3/examples/sidebars/
    * I realized the footer is always stuck on the screen, but I want it to appear only if you scroll down to look for it. Troubleshooting that
        * I was only able to get it to cooperate on the index & profile. idk how to get it to work in the editor bc it's a bit weird with the image in it
    * created css file for the about & community
    * here's a bunch of icons I can use in the future if I want 
        * https://codepen.io/elishaterada/pen/yLvxWa
        * https://codepen.io/larsenwork/pen/admEZM
    * this doesn't have anything to do with the project, but it looks cool https://codepen.io/ksenia-k/pen/rNoBgbV
    * this also looks sick, maybe use this in the future? https://codepen.io/Gogh/pen/gOqVqBx
    * in the loooooong future, what if I make the sliders look like this? https://codepen.io/alvaromontoro/pen/BabJQqx
    * I found this & I like how it looks so I'm gonna use it & change it for the community tab https://codepen.io/ramenhog/pen/MpORPa
    * I decided to make the footer static on every page
    * Community Tab is basically set up how I'd want it to look. I'm not sure how do embed public apis tho. Or how these images would come from people making them.
    * I redid the whole layout for the editor page, whatever I was doing before wasn't working. I make a flex-container with one side being the image, the other with all the controls. 
    * I worked on changing the background color, text color, & glowing menu border
    * worked on applying the CSS to the rest of the tabs. I have no idea why the community creations tab isn't working. I'm pretty sure it has to do with the image grid I found from codepen
    * I added the current tab highlight, that way people know which tab they are on. I got the font stuff fixed on the community tab. The only thing idk how to fix is the footer on the community tab.
    * Idk why, but when I changed the 'index.html' to 'home.html' I got this error after I deployed it. "Error: ENOENT: no such file or directory, stat '/home/ubuntu/services/startup/public/index.html' ". So I changed it back to 'index.html'
    * I submitted it. I want to change the icon the website tab has. but idk how to do that yet

# 2/22/24
* I got this on my startup assignment "Looks good, but can't be graded until you complete all the Prerequisites of the assignment". I'm pretty sure it's because you can't see my Github link on the first page. I had the view height set high enough so you had to scroll down. Idk if that was the actual prerequisite I didn't meet, but we'll see.

### Startup CSS Prerequisites
* Simon CSS was deployed to my VSCode in a separate folder when I started working on the Startup CSS
* Here is the TLDR of what I modified and added with this deliverable
    * changed color scheme to grey with an orange glow
    * added more HTML & CSS tabs for each page. Now there are 5 pages total: Home, Editor, Community, About, Profile
    * added sliders on the editor tab to control image effects
    * added buttons in the editor tab
    * added example memes in the community tab

# 2/26/24 - Ideas I had to add in the future
* I want to add a dark/light mode setting. for now it's dark mode by default
* I want to add a 'forgot password' button to the login box
* eventually I will add a background image as the title theme (basically look like a subreddit banner) 
* add future like/comment buttons to community tab images
* What if I did a thing where it links to their reddit account, & whenever they post something on Memefryer, it auto-posts to the Memefryer subreddit? (assuming I make a subreddit)
* add presets to the editor in case people don't want to tinker with it
* I discovered that this is where I can find all emojis https://emojipedia.org/
* put a spellchecker extension in VSCode & fixed all my misspellings lol

## 2/26/24 Javascript Notes
* Here is a site that has tons of example functions in JS https://htmlpreview.github.io/?https://github.com/webprogramming260/.github/blob/main/profile/javascript/introduction/jsDemo.html

##### Exceptions
* if the `try` gets an exception, then it calls `catch`. `finally` can be put after, it always runs regardless if there was an exception
* only throw exceptions if it's "exceptional"
* "To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block."
```js
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

##### Destructuring
```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```

```js
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```

```js
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```

```js
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1
```

##### Javascript Scope
4 types of JavaScript scope:
1. **Global** - Visible to all code
1. **Module** - Visible to all code running in a module
1. **Function** - Visible within a function
1. **Block** - Visible within a block of code delimited by curly braces

* `var` lets itself be changed & overwritten, whereas `let` & `const` can't be changed. If you call `let` or `const` again with the same name, it makes a new variable with the same name, rather than overwriting the old one.
```js
var x = 10;
console.log('start', x);

for (var x = 0; x < 1; x++) {
  console.log('middle', x);
}

console.log('end', x);

// OUTPUT: start 10
//         middle 0
//         end 1
```
* TLDR: just use `let` & `const`


3 different contexts that `this` can refer to
1. **Global** - When `this` is referenced outside a function or object it refers to the `globalThis` object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
1. **Function** - When `this` is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
1. **Object** - When `this` is referenced in an object it refers to the object.

```js
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
```

Running the above code in a browser results in the following.

```
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
```

Example of a **Closure** function
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
```
* Arrow functions inherit the `this` pointer of their creation context
Example of arrow function
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```

* if we have a function **return** an arrow function, the `this` pointer will be in the object
```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```


# Midterm Review Questions

* Which of the following is NOT a valid way to include JS in HTML?
  * ```<script>1+1</script>```
  * ```<script src='main.js' />```
  * ```<div onclick='1+1' />```
  * ```<javascript>1+1</javascript>``` ⬅️

---
* You can use this CSS to load fonts from Google: @import url('https://fonts.googleapis.com/css?family=Quicksand');
  * True ⬅️
  * False

---
* Executing the following will output:
  ```js
  const f = y => ++y;
  console.log(f(3));
  ```

  * 4 ⬅️
  * 3
  * undefined
  * 2

---
* What is the order of the CSS box model, starting from the outside going in?
  * margin, border, padding, content ⬅️
  * content, margin, border , padding
  * padding, margin, border, content
  * border, padding, margin, content

---
* The CSS property padding:
  ```css
  p {
    padding: 1em;
  }
  ```

  * Puts space around the content of selected elements ⬅️
  * Puts space around the border of selected elements
  * Puts space around the margin of selected elements
  * Puts space around the HTML document

---
* What does the following code output?
  ```js
  let a = [1, 2, 3];
  let e = a.map(number => {
    return ('a' + number)
  });
  console.log(e);
  ```

  * [1,2,3]
  * ['1','2','3']
  * [66,67,68]
  * ['a1','a2',a3'] ⬅️

---
* How will the "hello world" text be oriented?
  ```html
  <html>
  <head>
    <style>
      div {
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
        }
    </style>
  </head>
  <body>
    <div>
      <p>Hello</p>
      <p>World</p>
    </div>
  </body>
  </html>
  ```

  * One line saying Hello World
  * One line saying World Hello
  * Two lines, with the first line saying World & the second saying Hello ⬅️
  * Two lines, with the first line saying Hello & the second saying World

---
* What is the HTML tag for an unordered list?
  * ```<ul>``` ⬅️
  * ```<li>``` 
  * ```<dt>```
  * ```<ol>```

---
* The following console command makes a script executable:
  * ssh deploy.sh
  * ls -la deploy.sh
  * chmod +x deploy.sh ⬅️
  * sudo deploy.sh

---
* What does the following code output?
  ```js
  let a = ['cow', 'rat', 'fish'];
  let b = a.reduce((a,v) => [a,v].join(':'));
  console.log(b);
  ```

  * cow,rat,fish
  * cowratfish
  * cow:rat:fish ⬅️
  * ['cow', 'rat', 'fish']

---
* Which of the following is a DNS subdomain?
  * byu.edu
  * byu
  * c260.cs.byu.edu ⬅️
  * edu

---
* What will the following output?
  ```js
  const a = async function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {console.log('D'); resolve(true)}, 10000);
    })
  }

  try {
      console.log('A');
      await a();
      console.log('B');
  } catch(e) {
      console.log('C');
  }
  ```

  * A B D C
  * A D B ⬅️
  * A D B C
  * A B D

---
* What does the following code output?
  ```js
  let a = ['cow', 'rat', 'fish'];
  let b = a.filter(v => v.match(/A|f/i));
  console.log(b);
  ```

  * ['rat', 'fish'] ⬅️ *this basically checks if the word has an 'a' or 'f'. The i on the end means it's not case-sensitive*
  * ['cow', 'rat', 'fish']
  * ['fish']
  * ['cow', 'fish']

---
* What does the following code do?
  ```js
  document.querySelector('p').addEventListener('mouseover', console.log);
  ```

  * Adds p.mouseover to console.log event
  * Adds a mouseover event listener to a p element ⬅️ *because it was querySelector, it finds the first one. if it was allSelector then it would be all p elements*
  * Adds a mouseover event listener to console.log events on a p element
  * Adds a mouseover event listener to all p elements

---
* In HTML, what does ```<div>``` do?
  * Creates a division element ⬅️
  * creates a dividend element
  * creates a divider element
  * creates a divinity element

---
* What does the DOM textContent property do?
  * Sets the text content for the entire DOM
  * Sets the Child HTML for an element
  * Sets the content spacing for the element
  * Sets the child text for the an element ⬅️

---
* Which of the following is a valid JavaScript object?
  * {"n"=1}
  * {"n"="1"}
  * {n=1}
  * {n:1} ⬅️

---
* Which HTML will create a valid hyperlink?
  * ```<a href='https://c.com'>x</a>``` ⬅️
  * ```<link src='https://c.com'>x</link>```
  * ```<a arc='https://c.com'>x</a>```
  * ```<link href='https://c.com'>x</link>```

---
* Which of the following is valid JSON?
  * {"x":undefined}
  * {x:3}
  * {"x":3} ⬅️
  * {'x':3}

---
* To point to another DNS record, you should use the following DNS record type:
  * SOA
  * A
  * CNAME ⬅️
  * TXT

---
* Which of the following is NOT a valid JavaScript function?
  * const f = (x) => {}
  * const f = function(x) {}
  * function f(x) {}
  * function f(x) = {} ⬅️

---
* Using CSS, how would you turn only the BYU text blue?
  ```html
  <div>other</div>
  <div class="header">BYU</div>
  ```
  * div.header{color:blue;} ⬅️ *this means you only want the 'header' class to be inside a div*
  * div {color:blue;}
  * div#header {color:blue;}
  * header {color:blue;}

---
* What will the following output?
  ```js
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('taco');
      resolve(true);
    }, 10000);
  });
  console.log('burger');

  p
  .then((result) => console.log('shake))
  .catch((e) => console.log('salad'))
  .finally(() => console.log('noodles'))

  console.log('fries');
  ```

  * burger fries taco shake salad noodles
  * taco burger shake salad noodles fries
  * taco burger shake salad noodles salad fries
  * burger fries taco shake noodles ⬅️

#### 2/26/24 -- Just after taking the midterm
* I read some questions too fast so I missed a handful of Qs
* There were some things I legit had 0 idea what they meant
* I'm gonna go through what I missed later & make notes of it in here

* I want to make these notes collapsible, so I found this https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/markdown/collapsible-items.html


# 2/27/24 -- NOTES: JS Modules, DOM, async/wait, promises. Local Storage

**Modules**
* modules let you partition & share code
* Node.js is a server-side JS execution application that helps support the importing of JS from 3rd party packages
* ES modules are 'now almost universal'
* Node.js modules are called CommonJS modules
* JavaScript modules are called ES modules
* you need to `export` objects & `import` them to another file
```js
// alert.js
export function alertDisplay(msg) {
  alert(msg);
}
```
```js
// main.js
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```
* modules can only be called from other modules
* You can't access JS contained in a module from the global scope that you non-module JS is executing in
* in HTML, you write that you're using an ES module by doing this
```js
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```
* if we want to use a module in the global scope, we need to put it in there (duh)
```html
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
<!-- Now, if the button is pushed or a key is pressed our ES module function will be called. -->
```
* fortunately you usually don't have to worry about differentiating between global scope & ES module scope. This is bc most browsers 'expose the ES module directly'


**DOM**

* The browser provides access to the DOM through a global variable name document that points to the root element of the DOM.
```html
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```
```css
p {
  color: red;
}
```
* everything in an HTML document has a node in the DOM, this includes: elements, attributes, text, comments, & whitespace.
<img src='https://github.com/webprogramming260/.github/blob/main/profile/javascript/dom/dom.jpg'>

* __DOM Element Interface__ lets you iterate child elements, access parent elements, & manipulate those element's attributes
* From your JavaScript code, you can start with the `document` variable and walk through the every element in the tree.
```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```
* "You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent property` contains all of the element's text. You can even access a textual representation of an element's HTML content with the `innerHTML` property."
```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

* DOM lets you: insert, modify, or delete elements in the DOM

  * to create a new element, you first create it on the DOM document
  * then you insert the new element into the DOM tree by appending it to an existing element in the tree
        ```js
        function insertChild(parentSelector, text) {
        const newChild = document.createElement('div');
        newChild.textContent = text;

        const parentElement = document.querySelector(parentSelector);
        parentElement.appendChild(newChild);
      }

      insertChild('#courses', 'new course');
      ```

  * To delete elements, use `removeChild` on the parent element
      ```js
        function deleteElement(elementSelector) {
          const el = document.querySelector(elementSelector);
          el.parentElement.removeChild(el);
        }

        deleteElement('#courses div');
      ```
  
  * DOM lets you insert entire blocks of HTML into an element
    * The following code finds the first `div` element in the DOM and replaces all the HTML it contains.
      ```js
        const el = document.querySelector('div');
        el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';   
      ```

  * directly injecting HTML as a block of text is a common way for attackers. They can inject JS anywhere & then the JS can make requests to steal info & do bad things. Here is an example
  ```html
    <img src="bogus.png" onerror="console.log('All your base are belong to us')" />
  ```

  * If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.

  * All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called __event listeners__. Here is an example of an event listener that gets called when an element gets clicked.
  ```js
    const submitDataEl = document.querySelector('#submitData');
    submitDataEl.addEventListener('click', function (event) {
    console.log(event.type);
  });
  ```

  * Here are common event listeners
    | Event Category | Description           |
    | -------------- | --------------------- |
    | Clipboard      | Cut, copied, pasted   |
    | Focus          | An element gets focus |
    | Keyboard       | Keys are pressed      |
    | Mouse          | Click events          |
    | Text selection | When text is selected |

    * The full list is here [MDN](https://developer.mozilla.org/en-US/docs/Web/Events)

  * you can put event listeners in HTML too. Here's an example using `onclick`
    ```html
      <button onclick='alert("clicked")'>click me</button>
    ```

  **Local Storage**
  * the `localStorage` API lets you persistently store & retrieve data on a user's browser across user sessions & HTML page renderings
    * example: store a user's name on one HTML page, it could retrieve it on a different HTML page
  
  * `localStorage` can also be used as a cache for when data cannot be obtained form the server

  * There are four main functions that can be used with localStorage.

    | Function             | Meaning                                      |
    | -------------------- | -------------------------------------------- |
    | setItem(name, value) | Sets a named item's value into local storage |
    | getItem(name)        | Gets a named item's value from local storage |
    | removeItem(name)     | Removes a named item from local storage      |
    | clear()              | Clears all items in local storage            |
  
  * A local storage value must be of type `string`, `number`, or `boolean`. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with `JSON.stringify()` on insertion, and parse it back to JavaScript with `JSON.parse()` when retrieved.

  **Promises, async/await**
  * Browser rendering in normally single threaded
  * Things should be asynchronous
    * Asynchronous basically means not blocking, i.e. not having to wait for an operation to complete.

  * Example
    ```js
      function demo() {
        console.log('Before timeout');

        setTimeout(() => {
          console.log('In timeout');
        }, 5000);

        console.log('After timeout');
        }

      demo();
      console.log('Done');
    ```

  | Call Stack | Web API |
  |------------|---------|
  | 'before timeout' <div> demo | |
  | setTimeout <div> demo | 'in timeout' |
  | 'after timeout' <div> demo | 'in timeout |
  | 'done' | 'in timeout' |
  | 'in timeout' | |

  **Promise**
  * __Pending__ - Currently running asynchronously
  * __Fulfilled__ - Completed successfully
  * __Rejected__ - Failed to complete

  * Here is a link to slides that help explain this https://docs.google.com/presentation/d/1_RKk91Px_UJdgroZPNqFkJI_MA_Xsul1ocp66qljET4/edit?usp=sharing

<img src='https://miro.medium.com/v2/resize:fit:1024/1*yAFctUA8useVWRbC-nWhBA.png>' >
<img src='https://i.stack.imgur.com/UX8JM.png'>

**Async/await**
  * `await` wraps the execution of a promise & removes the need to chain functions
  * `async` will not auto-generate a promise if not explicitly returned
  * `await` blocks until the promise moves to `fulfilled`, or throws an exception if the state moves to `rejected`

    Example Function
    ```js
          const coinToss = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) {
            resolve(Math.random() > 0.5 ? 'heads' : 'tails');
          } else {
            reject('fell off table');
          }
        }, 1000);
      });
    };
    ```

    then/catch chain version
    ```js
    coinToss()
      .then((result) => console.log(`Toss result ${result}`))
      .catch((err) => console.error(`Error: ${err}`))
      .finally(() => console.log(`Toss completed`));
    ```

    async, try/catch version
    ```js
      try {
        const result = await coinToss();
        console.log(`Toss result ${result}`);
      } catch (err) {
        console.error(`Error: ${err}`);
      } finally {
        console.log(`Toss completed`);
      }
    ```

**Async**
  * you cannot call `await` unless it is called at the top level of the JavaScript, or is in a function that is defined with the `async` keyword
  * using `async` transforms the function that it returns a promise that will resolve to the value that was previously returned by the function.
  * TLDR: `async` makes a function an asynchronous function, so it can make asynchronous requests

  * This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.

    ```js
    function cow() {
      return 'moo';
    }
    console.log(cow());
    // OUTPUT: moo
    ```

  * If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.

    ```js
    async function cow() {
      return 'moo';
    }
    console.log(cow());
    // OUTPUT: Promise {<fulfilled>: 'moo'}
    ```

* We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.

    ```js
      async function cow() {
        return new Promise((resolve) => {
          resolve('moo');
        });
      }
      console.log(cow());
      // OUTPUT: Promise {<pending>}
    ```

**Await**
  * `async` keyword declares that a function returns a promise
  * `await` wraps a call to the `async` function, blocks executing until the promise has resolves, & then returns the result of the promise.
  * We can demonstrate `await` in action with the cow promise from above. If we log the output from invoking `cow` then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

```js
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```

* By combining `async`, to define functions that return promises, with `await`, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

* `async/await` is useful when multiple promises are required.
* For example, when calling the `fetch` web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.

  ```js
  const httpPromise = fetch('https://simon.cs260.click/api/user/me');
  const jsonPromise = httpPromise.then((r) => r.json());
  jsonPromise.then((j) => console.log(j));
  console.log('done');

  // OUTPUT: done
  // OUTPUT: {email: 'bud@mail.com', authenticated: true}
  ```

* With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

  ```js
  const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
  const jsonResponse = await httpResponse.json();
  console.log(jsonResponse);
  console.log('done');

  // OUTPUT: {email: 'bud@mail.com', authenticated: true}
  // OUTPUT: done
  ```

# Startup JavaScript
* created 5 .js files for each page. I might not need all of them but I made it anyway. I put placeholder/things I need for each one.
* tried adding eventlistener to the index.js file
* got the login stuff to work! but every time I use it in the LiveServer, it resets itself unless I type in random crap that isn't an email address
* Turns out CamanJS is a library that is meant to edit photos, so I'll most likely be using that

# Fetch
* This is super cool!
* `fetch` is the preferred way to make HTTP requests
* it's built into the browsers Javascript runtime (you can run it in JS)
* `fetch` takes a url & returns a promise
* If the returned content is of type `application/json` you can use the `json` function on the response object to convert it to a JavaScript object.

# Startup JavaScript continued 3/4/24
* I want to add an upvote & downvote button for the images in the community tab
* Potential codepens I can use to help make the upvote/downvote buttons work
  * https://codepen.io/bennettfeely/pen/bGEpVv
  * https://codepen.io/ozzie/pen/xbZrRM
* I realized I need to put a canvas in the editor tab in order for me to use any JS to change it
* I'm gonna use this article to help me do things in the editor tab
  * https://code.tutsplus.com/creating-an-image-editor-using-camanjs-applying-basic-filters--cms-30251t

# Startup JavaScript continued 3/6/24
  * I found this from a guy on YT & it doesn't require me to use the CamanJS library to do it
    * https://codepen.io/dcode-software/pen/qBxJdJQ

# Express 3/6/24
* Provides support for
  * Routing requests for service endpoints
  * Manipulating HTTP requests with JSON body content
  * Generating HTTP responses
  * Using `middleware` functionality
  ```js
  const express = require('express');
  const app = express();

  app.listen(8080);
  ```
* The Express `app` object supports all of the HTTP verbs as functions on the object.
  ```js
    app.get('/store/provo', (req, res, next) => {
    res.send({name: 'provo'});
  });
  ```
* `get` takes 2 parameters: 1. a URL path matching pattern; 2. a callback function that is invoked when the pattern matches
  * The callback function has 3 parameters: `req`, `res`, & `next`
    * `next` is for if the routing function wants another function to generate a response
  * The Express `app` compares the routing function patterns in the order that they are added to the Express `app` object. So if you have two routing functions with patterns that both match, the first one that was added will be called and given the next matching function in the `next` parameter.
* Express supports path parameters by using the prefix `:`
  * you can then reference those parameters using the `req.params` object
```js
  app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```
* If you wanted an endpoint that used the POST or DELETE HTTP verb then you just use the `post` or `delete` function on the Express `app` object.
* The route path can also include a limited wildcard syntax or even full regular expressions in path pattern. Here are a couple route functions using different pattern syntax.
```js
  // Wildcard - matches /store/x and /star/y
  app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

  // Pure regular expression
  app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));
```
* Notice that in these examples the `next` parameter was omitted. Since we are not calling `next` we do not need to include it as a parameter. However, if you do not call `next` then no following middleware functions will be invoked for the request.
<img src='https://raw.githubusercontent.com/webprogramming260/.github/main/profile/webServices/express/webServicesMiddleware.jpg'>
<img src='https://raw.githubusercontent.com/webprogramming260/.github/main/profile/webServices/express/httpRequestSequenceDiagram.jpg'>
<img src='https://miro.medium.com/v2/resize:fit:638/1*bqTWyL7IFU4Z4xL0y4Su6A.jpeg'>
<img src='https://miro.medium.com/v2/resize:fit:1080/1*aH2D8bYfhSZd3xp9OtJBVQ.jpeg'>
<img src='https://www.testkarts.com/img/blog/HTTP-Reuest-Method-by-testkarts.jpg'>
<img src='https://softuni.org/wp-content/uploads/2022/07/HTTP-Request-Methods-e1657276635747.png;>

# Startup JavaScript continued on 3/7/24
* This website is going to help a ton too http://fabricjs.com/image-filters

# Startup JavaScript continued on 3/8/24
* Began adding more controls to the editor toolbar, I was running out of space at the bottom so I made the body really tall. I'll adjust it later

# Startup JavaScript continued on 3/11/24
- ok, it's checklist time bc I've gotten lost in the sauce
- I am going to redo the js using fabric.js (I tried mashing things together but it wasn't working)

**TODO list for Startup JavaScript**
* [x] get the sliders to display current value next to it
* [x] fix import image button
* [] allow the import of multiple images
* [] add a text box input
* [] check that each button/slider works
* [] fix footer on editor page
* [] get reset button to work
* [] change the width of toolbar sliders
* [] fix the editor display values when an input is changed
* [] (optional) get canvas to resize if desired
* [] (optional) add a 'lock' button to sliders
* [] (optional) alphabetize the filters in the js file *(they're messy)*


**Startup Service Criteria**
* [] Create an HTTP service using Node.js and Express
* [] This criterion is linked to a Learning OutcomeFrontend served up using Express static middleware
* [] Your frontend calls third party service endpoints
* [] Your backend provides service endpoints
* [] Your frontend calls your service endpoints

# Startup JavaScript continued on 3/13/24
* redoing the editor js. I tried to frankenstein it together but it didn't work
* began using the documentation for Fabric.js at http://fabricjs.com/docs


# COP & CORS 3/18/24
* __Same Origin Policy (SOP)__: only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing
* __Cross Origin Resource Sharing (CORS)__: allows the client (e.g. browser) to specify the origin of a request & them let the server respond with what origins are allowed.
* __Access-Control-Allow-Origin__: a header that the server returns if the CORS doesn't block it

# Service Design 3/18/24
* make a sequence diagram that shows the interaction of objects
* **Here is the sequence diagram I made for MemeFryer**
<img src="https://sequencediagram.org/index.html?presentationMode=readOnly#initialData=C4S2BsFMAIFlILaQGICcCelXQMqQI4CukAdgMYwAiIAhgOao0IBQzNZwA9tgKIBuWdJxKQAtD3ABnSGw7doAIgA8ZTuG4AuAMQAlSABMAfAEFwICkoD0q9akMLoNSdFPmZ7LtmU3NWgELgxIZ+nABGVj52Dk7QIaGsAA40qKBkIEkkwNCUNCQA1qKwNOiFxcxJKebpuVnear4MkKSGeKgCqBH1UY7Ore3lyanVmYoqXdrcuXSQhgDCnAgIhCRg6NAAKjTh1l32PdDzi8urG1usZgBmkGYiksDoULFh0FqhgZAaAEwakmog+sxLtcQLd7o9XBQXnp9F8fn8AUCbpA7g8YH0sC8AOKoJokL6AkBXJEox6HJYre6nUIvADyjBI03xzBInGAME47Wg-EEwjEEmkGgSkE4CUeAHcABacaASmgCEgAciy6jo0300AAOisSNAxWAJY4dexVMtgMw4qJXu8NABGFpYdoaHFEZFZLjQFXQEHu42cU3msJKLSNUhfUSidGoH4OjHGyAJYDOFUg6DO4h3ZgQsRaHEwu2Rp0EdNu6We73S33+rNBkN4z7hgvSNqxsgUBNJzh0FNp12ZswUS2521zBbkk6bUKFl13ZzuvggSBig6j46Uid9txByYMj710Rk1drCcaLaPOcLpeqI4UtbAM4Wq3EYcAKhy+VKJSK6A0ZBxNDZzg0NASBINAhCSCCdDQAYYDyHe8RvgUX4fpabxPvmMZRj2dzQO6khyjAWqIShX64RWrZ+pkzCRko4bBjioafIYxHIV+GhxAqzjwKB+ECOqPoUf6D5oR8GHNlGcTQNIJD6IBqZFq6ZHQAknA4URuRIcUH5ejqV5jpS8HUZhdG1l89ridG4lSQRzgsVppFau6EogIBglUZGJkMXWI7XuOWyWZyKkztkGkkcUjnSnph64fegb0biYYRphGh2Z+xTKapbLqimUU3pqmRbNAABkHognkBhKRxrkmlR1Z0dujJMQeeXHql2kuY4fA0CA4CnjAFxwRKMBZkp0gyNyGC8uIUiQLRloNbuPn6Ue-ltaRHVyt1vVvP1g0wAkhBvOYo1NMyrLspyE1CCI00CldU38jAZC5PlY0he+rFlFmg4GEt0XHthJaKAAMiA5UOGtZTNX5oTzfSjXMaFn3foDSkKKD4PvZpaXoMwkMlKIf0tf56Ng5A0T6PoFXuvjzDQ2uWxzVoC1mVmGik+VkgOMIWNhWsIK-pATgwCVI3PTqb2SENnGleV2VmvdN2PUzLNNSuxOThzyLczq+M6YLwvFdB7TXTA1zSNA4tSU0XoKybD0zYT9MrZOqN4TbztUswit8jNW7w7u4ae8eCCZWBCSiFwoj6P+T3CGyIwXKgCyW+rJzwV6zg4sAhCoCI+hAA">
