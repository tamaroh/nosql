create database sample;
CREATE TABLE cohorts (
	id serial NOT NULL primary key,
	name text NOT NULL
);
CREATE TABLE students (
	id serial NOT NULL,
	name text NOT NULL,
	cohort_id int NOT NULL, FOREIGN KEY (cohort_id) REFERENCES cohorts(id)
);


insert into cohorts (name) values ('cct1'), ('cc27');
insert into students (name, cohort_id) values 
    ('Tamaroh', 1),
    ('Kiki', 1),
    ('Kotaro', 1),
    ('Riko', 1),
    ('Arisa', 1),
    ('Ayumi', 1),
    ('Yuriko', 1),
    ('Ai', 1),
    ('Kakeru', 1),
    ('zach', 2),
    ('Tomomi', 2),
    ('Marie', 2)
;

select students.id, students.name, cohorts.name as cohort_name 
from students 
join cohorts on students.cohort_id = cohorts.id;

