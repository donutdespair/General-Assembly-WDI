--Part 1
-- empty out DB
DROP TABLE IF EXISTS players;

-- add create table here
-- -d nba_db -f nba_seeds.sql
CREATE TABLE players (
  id serial PRIMARY KEY,
  name varchar(50),
  age integer,
  team varchar(3),
  games integer,
  points integer
);

INSERT INTO players (name, age, team, games, points) VALUES
 ('Anderson Varejao', 29, 'CLE', 25, 271);
-- this needs to include YOUR PATH!! YOURS! NOT THE PATH LISTED BELOW!
-- q to skip down; -r to clear query
COPY players
  (name, age, team, games, points)
FROM '/Users/student_07/Desktop/WDI-xfiles-scully/u2/d05/homework/nba_season_2011_2012.csv'
    DELIMITER ',' CSV;


