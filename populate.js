require('dotenv').config();
const mockData = require('./mock_data.json');
const connectDb = require('./db/connect');
const Job = require('./models/Job');

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await Job.create(mockData);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
