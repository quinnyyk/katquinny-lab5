# katquinny-lab5
I dont know how but I broke the first one, copying most of what I had onto here
Clone repo
git clone https://github.com/MaristGormanly/katquinny-lab5.git

dev notes:
I think I got a little overwhelmed going between all the different files. I found that I would get errors in different places and have to back track a few times to get there. I also had to entirely reclone the project because it got deleted off of my laptop somehow so I'm not sure if that messed anything up. I set up a database and added tables. 

Improvments:
I could change around a lot of CSS and try to make it look a lot nicer. I think I got so caught up in functionality that the CSS was the least of my worries.

change to the project directory
cd Desktop/projects/CMPT221/

Install dependencies
npm i
npm install pg

Run the database script (assume you have a working PostgreSQL service on your machine)
psql -U postgres -f server/db/create-db.sql (Mac users may not need the -U: psql postgres -f server/db/create-db.sql If asked for the kquinn user password, the default is 'kquinn' (see contents of create-db.sql for details)

Start the application server
npm start

Open in your browser
localhost:1337

You can create an account and login at the login in page. Once logged in, you will se a display of your username and a form to add a title of the game you are reviewing and a rating. Next to it there will be another form where you can type out your review of the game. Then you can submit using the submit button
