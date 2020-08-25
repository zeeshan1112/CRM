# CRM Backend

This is a mini project to demonstrate how we can use Node.js and express.js to buid RESTful API's. Here we use mongoDB as our database.

## How to run the project?

1. Make sure you have Node installed in your computer.
2. Clone the repository.
3. Install MongoDB. Download and install from [here](https://www.mongodb.com/try/download/community)
4. Now, start your MongoDB database server.
    - From Windows Explorer/File Explorer, go to **C:\Program Files\MongoDB\Server\4.4\bin** directory and double-click on **mongo.exe**.
    - Or, open a Command Interpreter with Administrative privileges and run:
    `"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"`
    - We're building an API that will connect to MongoDB and will use mongoose to connect to MongoDB, and then use postman to test our API.
3. Go to the source directory and execute the following command `npm install`. This will install all the dependencies and dev dependencies in our project's package.json file.
6. We will now install a tool that we'll use to test our Mongo database and make sure the data we have in our database matches the calls we make to the imports. Download Robo 3T from [here](https://robomongo.org/download)
    - Make sure your mongoDB server is running before opening Robo 3T 
4. Run `npm start` to start your sever.

Your server will be started at port 4000. You can browse the following url 'http://localhost:4000`
You should get the message that **Node and express running on port 4000**

Please find the Postman Collection to add to database and fire http requests to add, get, update and delete.

The four endpoints are

1. **GET /contact** - To get contact Details
2. **POST /contact** - To create the contact
3. **GET /contact/:contactID** - To get a contact of a specific ID
4. **PUT /contact/:contactID** - To update the contact of a specific ID.
5. **DELETE /contact/:contactID** - To delete a specific contact

You can validate the database in Robot 3T. By refereshing new connection. The database name is CRMdb. You can even change the values of the contact direcctly from the database.