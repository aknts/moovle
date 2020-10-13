1) Import the moviesdb.sql to maria sql server and make the corresponding changes to connections.js to accomodate the new installation
2) After installing node and npm, these packages are needed from the app to run, mysql/cors/express. Execute the following command

npm install express mysql cors

3) To execute the app as a service and survive the tear down of the ssh session please install globally forever with the following command

npm install forever -g

4) Execute the following command to start app, if you are outside the app folder use the path to index.js to start the app

forever start index.js

5) To stop execution just run

forever stopall

or find the pid of your script by running

ps aux | grep forever

and then

forever stop <pid> 