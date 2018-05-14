-- Put apartment schema here
-- -d realty_db -f apartment_schema.sql
DROP TABLE IF EXISTS buildings;

CREATE TABLE buildings (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  address VARCHAR(100),
  num_floors INTEGER
);


DROP TABLE IF EXISTS doormen;

CREATE TABLE doormen (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  experience INTEGER,
  shift VARCHAR(5),
  building_id INTEGER REFERENCES buildings(id)
);


DROP TABLE IF EXISTS apartments;

CREATE TABLE apartments (
  id SERIAL PRIMARY KEY,
  floor INTEGER,
  name VARCHAR(50),
  price INTEGER,
  sqft INTEGER,
  bedrooms INTEGER,
  bathrooms INTEGER,
  building_id INTEGER REFERENCES buildings(id)
);


DROP TABLE IF EXISTS tenants;

CREATE TABLE tenants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  age INTEGER,
  gender VARCHAR(6),
  apartment_id INTEGER REFERENCES apartments(id)
);
