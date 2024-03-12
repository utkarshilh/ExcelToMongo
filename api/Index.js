

// backend.js
var Express = require('express');

const app = Express();

var cors = require("cors");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const multer = require("multer");
const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config'); // Import the configuration


app.use(cors());

// Your connection function
async function connectToDatabase() {
    const client = new MongoClient(config.mongoURI, {
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
        console.log('Connected to the database');

        const database = client.db("todoapp");
        const collection = database.collection("todocollection");

        const documents = await collection.find({}).toArray();
        console.log('Retrieved documents:', documents);

        res.json({ documents });
    } catch (error) {
        console.error('Error in /collectionDetails:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        if (client) {
            await client.close();
            console.log('Closed database connection');
        }
    }
});

app.post('/uploadData', async (req, res) => {
    const jsonData = req.body;

    console.log(jsonData);

    let client;
    try {
        client = await connectToDatabase();
        const database = client.db("todoapp");
        const collection = database.collection("todocollection");

        await collection.insertMany(jsonData);

        res.json({ success: true });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    } finally {
        if (client) {
            await client.close();
        }
    }





})


