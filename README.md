# ExcelToMongo
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

### Install frontend dependencies

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

### Usage
- Upload an Excel file using the provided input field.
- Click the "Upload" button to store the data into the MongoDB database.
- Check the response for success or error messages.

### Backend API
The backend API provides the following endpoints:
- `GET /collectionDetails: Fetch all entries stored in the database.
- `POST /uploadData: Upload JSON data to store in the database.

### Screenshots
![Project Image](/public/mainPage.png)


### Contributing
  Contributions are welcome! Please follow these steps:

- Fork the repository
- Create your feature branch (git checkout -b feature/YourFeature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin feature/YourFeature)
- Create a new Pull Request





