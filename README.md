# ExcelToMongo
![Project Image](images/project_image.png)
ExcelToMongo is a web application built with Node.js, React.js, and MongoDB that allows users to upload Excel files and store their data into a MongoDB database.

## Features
- Upload Excel files
- Convert Excel data to JSON
- Store JSON data in MongoDB
- Backend endpoint for fetching stored data

## Technologies Used

- Node.js
- React.js
- MongoDB

## Getting Started

  Follow the steps below to set up and run the project locally.


### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository to your local machine.

```bash
git clone https://github.com/utkarshilh/ExcelToMongo
```

2. Navigate to the project directory.

```bash
cd your-repository
```

3. Install dependencies for both frontend and backend.

# Install frontend dependencies

```bash
cd client
npm install
```

4. Install backend dependencies

```bash
cd ../server
npm install

```

5. Set up the MongoDB database.

Make sure MongoDB is running on your machine.
Create a .env file in the server directory and provide the MongoDB connection URL.

```bash

MONGODB_URI=your_mongodb_connection_url
```

5. Running the Application

```
npm start
```

