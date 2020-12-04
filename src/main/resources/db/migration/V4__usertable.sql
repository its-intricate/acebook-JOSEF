DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id bigserial PRIMARY KEY,
    firstname VARCHAR(15),
    lastname VARCHAR(15),
    email VARCHAR(60),
    password VARCHAR(60)
);

ALTER TABLE posts ADD COLUMN user_id INTEGER REFERENCES users (id);