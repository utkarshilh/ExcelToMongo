// var Express = require('express');

// var cors = require("cors");
// const multer = require("multer");


// var app = Express();
// app.use(cors());







// const { MongoClient, ServerApiVersion } = require('mongodb');
// const { request, response } = require('express');
// const uri = "mongodb+srv://bandassutkarsh030:mmpkQeZGB7XKjk5e@cluster0.xvu2ujx.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });


//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

// app.listen(5038, (req, res) => {

//     console.log('Server is running on port 5038');
// });

// app.get('/', (req, res) => {
//     res.send("hello hell");

// })


// app.get('/collectionDetails', async (req, res) => {
//     try {
//         await client.connect();
//         const database = client.db("todoapp"); // Replace with your actual database name
//         const collection = database.collection("todocollection");

//         const document = await collection.find({}).toArray();
//         console.log(document);

//         res.json({ document });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     } finally {
//         await client.close();
//     }
// });
// app.post('/api/todoapp/addnotes', multer().none(), (request, response) => {
//     database.collection("todoappcollection").count({}, function (error, noOfDocs) {
//         database.collection("todoapplication").insertone({
//             id: (numofDocs + 1).toString(),
//             description: request.body.newNotes

//         });
//         response.json("added successfully");

//     })
// })


// MongoClient.connect("/api/todoapp/addnotes", function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("todoapp");
//     var myobj = { name: "sara", email: "Highway@gmail.com" };
//     dbo.collection("customers").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document");
//         db.close();
//     });
// });





var Express = require('express');
var cors = require("cors");
const multer = require("multer");
const { MongoClient, ServerApiVersion } = require('mongodb');

var app = Express();
app.use(cors());

const uri = "mongodb+srv://bandassutkarsh030:mmpkQeZGB7XKjk5e@cluster0.xvu2ujx.mongodb.net/?retryWrites=true&w=majority";

// Your connection function
async function connectToDatabase() {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        return client;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}

app.listen(5038, (req, res) => {
    console.log('Server is running on port 5038');
});

app.get('/', (req, res) => {
    res.send("hello hell");
});

app.get('/collectionDetails', async (req, res) => {
    let client;
    try {
        client = await connectToDatabase();
        const database = client.db("todoapp");
        const collection = database.collection("todocollection");
        const document = await collection.find({}).toArray();
        console.log(document);
        res.json({ document });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        if (client) {
            await client.close();
        }
    }
});
