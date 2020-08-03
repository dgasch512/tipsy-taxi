CREATE TABLE login (
  id serial PRIMARY KEY,
  hash VARCHAR(100) NOT NULL,
  email text UNIQUE NOT NULL
);

CREATE TABLE drivers (
  id serial PRIMARY KEY,
  name VARCHAR(100),
  email text UNIQUE NOT NULL,
  ridestot BIGINT DEFAULT 0,
  registered TIMESTAMP NOT NULL
);

CREATE TABLE rides (
  id serial PRIMARY KEY,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  phone text NOT NULL,
  pickuplocation text NOT NULL,
  dropofflocation text NOT NULL,
  comments VARCHAR(200),
  ridetime TIMESTAMP NOT NULL
);

CREATE TABLE stories (
  id serial PRIMARY KEY,
  name text NOT NULL,
  image text NOT NULL,
  article text NOT NULL,
  artpost TIMESTAMP NOT NULL
);

