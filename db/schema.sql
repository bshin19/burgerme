USE ifc1ub9hwqlxfggq;
-- Create a burgers table with these fields:

CREATE TABLE burgers
(
    -- id: an auto incrementing int that serves as the primary key.
    id INT AUTO_INCREMENT NOT NULL,

    -- burger_name: a string.
    burger_name VARCHAR(50) NOT NULL,

    -- devoured: a boolean.
    devoured BOOLEAN DEFAULT FALSE,
    
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY(id)

);