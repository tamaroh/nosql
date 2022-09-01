// use shell
// mongosh
// select DB
// use sample;
// you don't have to create a database, no problem with brand new db name
// add a documents
const db = connect("mongodb://localhost/tests");

db.students.insertOne({
  name: "Tamaroh",
  cohort_id: 1,
});

// select * from table
db.tests.find();

db.cohorts.insertMany([
  {
    name: "cct1",
    id: 1,
  },
  {
    name: "cc27",
    id: 2,
  },
]);

db.students.insertMany([
  { name: "Kiki", cohort_id: 1 },
  { name: "Kotaro", cohort_id: 1 },
  { name: "Riko", cohort_id: 1 },
  { name: "Arisa", cohort_id: 1 },
  { name: "Ayumi", cohort_id: 1 },
  { name: "Yuriko", cohort_id: 1 },
  { name: "Ai", cohort_id: 1 },
  { name: "Kakeru", cohort_id: 1 },
  { name: "Zach", cohort_id: 2 },
  { name: "Tomomi", cohort_id: 2 },
  { name: "Marie", cohort_id: 2 },
]);

db.students.find({ cohort_id: 2 });
db.students.find({cohort_id: 1}, { _id: 0 });
db.students.find({cohort_id: 1}, { _id: 0 }).map((element) => element.name);

db.students.aggregate([
  {
    $lookup: {
      from: "cohorts",
      localField: "cohort_id",
      foreignField: "id",
      as: "cohortid",
    }
  }
]);

db.students.aggregate([
    {$match: {name: "Tamaroh"}},
    {$lookup: {
        from: "cohorts",
        localField: "cohort_id",
        foreignField: "id",
        as: "cohortid",
      },
    },
  ]);
  