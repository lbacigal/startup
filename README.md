
# Deep Fried Meme Maker

### Elevator Pitch

Have you ever seen memes like these online & wanted to make your own? Now you can in your browser! No need to be a photoshop guru or advanced technical knowledge. It's so easy your cat could do it!

<img src="https://i.pinimg.com/564x/7d/55/6f/7d556f8abca7eaa2caec121deb1dc347.jpg" alt="Side of Beef" width="300"/>



>😎 Even more memes like this here ➡️ [r/deepfriedsurrealmemes](https://www.reddit.com/r/deepfriedsurrealmemes/)
>[r/DeepFried](https://www.reddit.com/r/DeepFried/)


[WIP MemeFryer Website](https://startup.memefryer.click/)

### Mock Design

<img src="CS-260-Page1v2.png" alt="Mock" width="800"/>



### Key Features

- Ability to upload custom images
- Image editor to make memes
- Make an account to share your creations in community tab
- Export created images
- Stickers to add to images
- Text to add to images


### Technologies

- HTML - Uses correct HTML structure for application. Three HTML pages. 1 for the image editor, 1 for the community tab, 1 for a profile tab.
- CSS - simple look, play a little animation when posting an image to community tab & when downloading image.
- JavaScript - Provides login, choice display, applying likes/comments to posts, display other users votes, backend endpoint calls.
- Service - Backend service with endpoints for:
    - login
    - upload image
    - edit image
    - download iamge
    - post image
    - delete image
    - community like/comment
    - post in community tab
- DB/Login - Store users, images, likes, & comments in database. Register and login users. Credentials securely stored in database. Can make images without having an account, but images aren't posted to the community tab
- WebSocket - As people publish images, others can view it in the community tab
- React - Application ported to use the React web framework.


### Planned Features for the Future

- add more beautiful image effects
- image likes/comments in community tab
- eventual video editor sequel
- image library for people to use when starting a new image
- messages between users
- notifications tab when people like/comment on community posts

# HTML Deliverable
Here is the general HTML structure for Memefryer
- **5 HTML Pages** - Home (called index in the files), Editor, Community, About, & Profile
- **Links** - every page has a navigation bar at the top that links to all 5 tabs
- **Text** - each page has text under the navigation bar explaining what to do or what each page will do. Some are placeholders for future sorting buttons or cross-posting buttons
- **Images** - example images in both the About & Community tab. Community tab images are currently examples, & will be removed later
- **DB/Login** - email address & password login box. There is a remember me button, to speed up logging in. Will add a "forgot password" option later. Logging in lets users post their memes in the community tab. (might change this later)
- **Bootstrap** - included in each HTML file, but used only a little bit. Still learning how to use this

# CSS Deliverable
Here is the general CSS style for Memefryer
- **Header, footer, and main content body** - All tabs have an orange/grey theme. Background is always grey, text/elements are orange.
- **Navigation elements** - Navigation bar has an orange glow outline. Color changes hovering over each option. Current page is displayed in navigation bar in a darker orange
- **Responsive to window resizing** - My app works on all window sizes and devices
- **Application text content** - Consistent sans-serif font on all pages. All text is orange to ensure readability with grey background theme.
- **Application images** - community tab images/text float a little bit when hovered over.

# JavaScript Deliverable
Currently each of these technologies are placeholders, which will be modified & implemented later
- **Login** - placeholder array for login information
- **Community post Database** - placeholder array for posts the community has made & uploaded
- **Post Reaction** - placeholders for people to upvote / downvote posts they see
- **Editor Tab Controls** - placeholders for the editor tab so the different image values can change

[Notes/things I learned along the way](notes.md)
