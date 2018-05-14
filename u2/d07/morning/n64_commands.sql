--psql -d N64_Games -f n64_games_seeds.sql
-- -d is connect to db  -f iexecutes specified file
--psql -d N64_Games -f n64_commands.sql

--Select the title of all games
SELECT title FROM Games;
--Show all the years in the database.
SELECT DISTINCT year FROM Games ORDER BY year ASC;
--Show the title of each game made by 'Rare'.
SELECT title FROM games WHERE developers = 'Rare';
--Select all games that were made before 1998.
SELECT * FROM games WHERE year < 1998;
--Find the average release year of all games made by 'Nintendo EAD'
SELECT ROUND(AVG(year)) FROM games WHERE developers = 'Nintendo EAD';
--Show the developer names of each game, in alphabetical order.
SELECT DISTINCT developers FROM Games ORDER BY developers ASC;
--Show the titles of games not made by 'Nintendo EAD'.
SELECT title FROM games WHERE developers != 'Nintendo EAD';
--Add the the game 'F-Zero X', released in 1998, made by 'Nintendo EAD', and with the genre 'Racing'.
INSERT INTO Games(title, year, developers, genre) VALUES('F-Zero X' , 1998, 'Nintendo EAD', 'Racing');
--Show all the game titles ordered by their release year.
SELECT title FROM games ORDER BY year ASC;
--Remove all games not made by 'Hudson Soft'.
DELETE FROM games WHERE developers != 'Hudson Soft';




