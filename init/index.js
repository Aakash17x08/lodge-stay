const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("database connection established");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => 
    ({ ...obj, owner: "67c5a41867d1e075d35acf83" })
  );
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

// initDB();