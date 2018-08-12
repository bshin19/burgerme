-- Create the burgers_db.
DROP DATABASE if exists burger_db;
CREATE DATABASE burger_db;
-- Switch to or use the burgers_db.
USE burger_db;
-- Create a burgers table with these fields:

CREATE TABLE burgers
(
    -- id: an auto incrementing int that serves as the primary key.
    id int NOT NULL auto_increment,

    -- burger_name: a string.
    burger_name varchar(50) NOT NULL,

    -- devoured: a boolean.
    devoured boolean default false,

    primary key (id)

);