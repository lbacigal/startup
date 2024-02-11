
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
* I also did "the console" assignment. I'm pretty sure I understood what was going on. I made a txt file called 'test', & put a print thing in it. Then copied that file & made a new file from it called 'other'. put the contents of the 'test' file in the 'other' file, then deleted the 'test' file. then did a function that ran through the 'other' file to get an output. I'm wayy more used to Python, but it made sense coneceptually


# 2/3/24 -- HTML structure, input, media
* first of all, CodePen is awesome! I'd love it even more if it highlighted variables you select in the whole document, rather than just the 1 you click on. I love how it separates the HTML, CSS, & JS
* I think it's really cool how you can basically embed anything you want in HTML. The syntax for adding things tends to be a lot of writing though. It makes sense to do the header thing with <>, but I always forget to do the </> for most of it
* I tried putting music in it, but I couldn't find any mp3 files online (& I also didn't know what to look for), so I experimented putting a song on Spotify on it. It seemed to work well, but Spotify doesn't let you have song controls (maybe there is but I wasn't able to figure it out)
* I also realized I turned in th Media assignment, but I forgot to save it before submitting it. I went back & changed the color of the Canvas & SVG though.


# 2/5/24 -- CSS Practice
* turns out when you to /* */, anything you type betwwen there is not rendered but is meant to keep notes of things. kinda like # in python, or // in C++
* this website is gonna be super useful later https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web
* when doing things with @keyframes, the first 0% is where you want it to start. The next 100% is where you want it to end up when it's done with the animation. in the practice, you had to put where you want the 'fly-from-left' to start & end. the CSS doesn't know what you want by default, you have to tell it specifically.
* Here is the distinction for the padding, border, & margin. I was getting confuse & lost where in the element it is. Here's a few images I use to remember 

<img src="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png" alt="mozilla example" width="300"> <img src="https://github.com/webprogramming260/.github/raw/main/profile/css/introduction/cssBoxModel.jpg" alt="CS260 example" width="300">

* when typing the 'header, background-color' properties, it applies to the entire container, not the text heading itself
* typing 'h1 color: hsl( ####)' that applies to the text in the heading, not the entire heading container
* when making the structures in the HTML, you give it a class if you want to animate it or give it certain properties. Then you give it those properties in the CSS with like '.ugly {***whatever you wanted to put here***}'
* I'm unsure why for coloring the html containers you use stuff like **#777 or #111**. But in the header text itself you use **'hsl(##, #%, #%)'**. But in the 'table-data' you use **'#eee'**. idk what the difference is (if it's listed in the instructions, I totally missed it). I'll find out what it is at some point.
* turns out when things have '1em' or '1.5em', it means 'times the size of the original element', so '1.5em' means '1.5 times the size of the element'. (I'm pretty sure that's what it means, I'm not 100% ceratin though)
* when formatting data in a table, you do stuff with 'td', & 'th'. if you want to include the same formatting for both without typing it twice, just do 'th, td {***insert stuff here***}'
* you can use 'li' to change the style of the bullet points in a list
* after looking at more examples of CSS at the bottom of the assignment, I am very intimitated now hahaa....
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
* I was really confused initally because when I went to 'memefryer.click' it was still showing the CS260 default page. But then I remembered I need to put it as 'startup.memefryer.click' for it to show the new stuff. I'd like to get rid of the CS260 & the Simon stuff later.
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