
# Deep Fried Meme Maker

### Elevator Pitch

Have you ever seen memes like these online & wanted to make your own? Now you can in your browser! No need to be a photoshop guru or advanced technical knowledge. It's so easy your cat could do it!

<img src="https://i.pinimg.com/564x/7d/55/6f/7d556f8abca7eaa2caec121deb1dc347.jpg" alt="Side of Beef" width="300"/>



>😎 Even more memes like this here ➡️ [Deep Fried Surreal Memes Subreddit](https://www.reddit.com/r/deepfriedsurrealmemes/)



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


[notes](notes.md)
