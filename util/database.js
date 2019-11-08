const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://myuser:153251Abc@mytestcluster-ialef.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log("can't connect to db");
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No DB found';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
