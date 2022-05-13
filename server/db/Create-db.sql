-- followed from class -- 
CREATE DATABASE kquinn;
CREATE USER kquinn WITH ENCRYPTED PASSWORD 'kquinn';
GRANT ALL PRIVILEGES ON DATABASE kquinn TO kquinn;
GRANT CONNECT ON DATABASE kquinn TO kquinn;
\c kquinn kquinn

CREATE TABLE feedback (id SERIAL PRIMARY KEY, title VARCHAR, description TEXT);

CREATE TABLE users (id SERIAL PRIMARY KEY, firstname VARCHAR, lastname VARCHAR, username VARCHAR, pasword VARCHAR, email VARCHAR, description TEXT);