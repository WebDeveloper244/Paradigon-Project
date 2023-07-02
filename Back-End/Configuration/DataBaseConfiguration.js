const mongoose = require('mongoose');
const Package = require('../package.json');

mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`\nMogoDb Connected Successfuly at MongoAtlas with Database Name HumanoidCrm\n`);
    console.log("Your App Has the Following Dependicies\n");
    for (dependencies in Package.dependencies) {
      console.log(dependencies);
    }
  })
  .catch(error => {
    console.log('Error: Not Connected to the MongoDb' + error);
  });

// mongodb+srv://lms1:lms1@clusterlms.1xyuk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority