### MongoDB basics

- Database with collections. eg: contacts for the database we create
- Collections have documents or objects. eg: contacts themselves. Everybody's contacts will be in different documents.
- Document look like JSON objects. eg: data for each contact like address, phone number
- Inside each document you have the data with key-value pairs or arrays of items
- So our DB has contacts, which are in collection, and each contact is a document.

robomongo.org - Download Robo 3T Only.

**To begin using MongoDB, connect a mongo.exe shell to the running MongoDB instance. Either:**

From Windows Explorer/File Explorer, go to C:\Program Files\MongoDB\Server\4.4\bin\ directory and double-click on mongo.exe.

Or, open a Command Interpreter with Administrative privileges and run:

`"C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"`

## NodeJs dependencies
### Mongoose 
Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
Mongoose basically is a library to help us with modeling our database and bring several built-in tools to help us with validation, business logic hooks, etc.

### body-parser
Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

Before we start adding operations to our database and the corresponding end points we need to create a Schema. The Schema is what dictates what types of data and the structure of your data your database takes. In other words if you define the first name key to take only strings as data the database will not accept anything else. Therefore the Schema defines the rules related to what your database can accept.

So now, open Robo T and make sure you are connected. And, when you're connected, if you don't see the CRM DB, if you've actually connected before we created the connection to Mongoose and Mongo, you can refresh it and you're going to see the CRM DB. So now what we could do is look into the database, so basically Robo T is connected to the database. It's not connected to the API. It's inside of Mongo.

So what Robo T allows you to do is make changes directly into the database or take a look at what the database looks like and the actual data inside of it. So that is a really cool tool that allows you to take a look at what you have in your database, make changes, and then actually play with the database as opposed to the API. So now we've got a full API with the proper endpoints to create, update, and delete items in the database.

With an Express based server it is possible to serve static files such as images, or any other files you would like to have available from your backend.
So now any files that are in the declared static folder will be available to any front end that needs it.

Explore koajs.com, swagger.io, loopback.io

Look into jwt.io and look into the node.js section