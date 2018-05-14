-- -d crud_practice_db -f crud_seeds.sql
TRUNCATE TABLE users CASCADE;
INSERT INTO users (name, email, password) VALUES ('john', 'bell@ga.co', 'semicolons?');
INSERT INTO users (name, email, password) VALUES ('jared', 'jared.murphy@ga.co', 'rush4life!');
INSERT INTO users (name, email, password) VALUES ('bryan', 'bryan.mytko@ga.co', 'notfromjapan');
INSERT INTO users (name, email, password) VALUES ('tims', 'tims.gardner@ga.co', 'clojure>all');

