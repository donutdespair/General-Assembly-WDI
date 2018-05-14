DROP TABLE IF EXISTS monsters;
DROP TABLE IF EXISTS students;

CREATE TABLE monsters(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  strength VARCHAR (50) NOT NULL,
  weakness VARCHAR (50)
);

CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR (50) NOT NULL,
  familiar VARCHAR (50)
);


COPY monsters
  (name, strength, weakness)
FROM '/Users/student_07/Desktop/WDI-xfiles-scully/u2/d08/joins/monsters.csv'
    DELIMITER ',' CSV;

COPY students
  (name, familiar)
FROM '//Users/student_07/Desktop/WDI-xfiles-scully/u2/d08/joins/students.csv'
    DELIMITER ',' CSV;
-- psql -d joins_db -f wdi_seeds.sql


-- SELECT * FROM students, monsters WHERE students.familiar = monsters.name;
-- combines tables, logs all info, but has issue where id is duplicated/ambiguous; don't use

-- SELECT students.name, familiar, strength, weakness FROM students, monsters WHERE
-- (students.familiar=monsters.name);
-- this leaves out any students without familiars

-- SELECT students.name, familiar, strength, weakness FROM students LEFT OUTER JOIN monsters
-- ON (students.familiar=monsters.name);
-- joins tables

--SELECT *(columns) FROM tables WHERE criteria
--SELECT * FROM table 1 LEFT OUTER JOINS table 2 ON criteria;
--returns all rows on left; like student without monster

-- inner join will only return rows where both sides have values

-- name of student, strength of monster


--SELECT students.name , strength FROM students JOIN monsters ON (students.familiar = monsters.name);
-- will return all students with familiars and their strengths

--SELECT students.name , monsters.strength FROM students LEFT OUTER JOIN monsters ON (students.familiar = monsters.name);
-- will return all students with/without familiars and their strengths

