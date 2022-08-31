// use shell
mongosh
// select DB
use sample; // you don't have to create a database, no problem with brand new db name
// add a documents
db.tests.insertOne(
    {
        name:"Tamaroh",
        cohort_id: 1
    }
);

// select * from table
db.tests.find();

db.cohorts.insertMany([
    {
        name:"cct1"
    },
    {
        name: "cc27"
    }
]);