# MERN_Tinder_Clone (GitHub Created Blank)

Tutorial Follow Along: How to build a Tinder Clone
Description: This application is a react-clone of Tinder using Materialize-Ui for the user experience. It uses a MongodDB database to store data (i.e. name & image) and uses Express and Node deployed to Heroku to handle the back-end. The front-end is handled by React and deployed to Firebase.

Credit to: Clever Programmer (https://www.youtube.com/watch?v=ktjafK4SgWM&t=8614s) for the instructional video.

#1 Created Header.js Component and Header.css file

#2 Installed Material-Ui

3# Created TinderCards.js Component and TinderCards.css file

#4 Imported various icons from Material-Ui

#5 Created SwipeButtons.js Component and SwipeButtons.css file

#6 Imported various buttons from Material-Ui

#7 Up to this point, all the development has been front-end ... now switching to back-end

#8 Did npm init to create the package.json file in tinder-backend file

#9 Indicated "entry point" to be server.js on npm init install

#10 Include "type": "module" (for ES6 notation for Express) and "start": "node server.js" in the package.json file

#11 Install Express and Mongoose

#12 Created Mongod Atlas database

#13 Installed Axios on the front-end

#14 Axios call now retrieves data from the database and renders it on the front end

#15 The front-end (tinder-clone) is started in VS Code with 'npm start' while the back-end (tinder-backend) is started in VS code with 'node server.js'. Both have to be started in the terminal window(s) in order for the application to work

#16 Deployed the back-end (tinder-backend) on Heroku. First created a new app on the Heroku Dashboard. Then deployed using Heroku Git option. (NOT Github integration option).

#17 Updated the axios call to call from the Heroku server

#18 Installed Firebase Tools on the front-end (tinder-clone folder)

#19 Deployed front-end to Firebase