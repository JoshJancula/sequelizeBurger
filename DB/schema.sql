

-- Create the database 

USE dwuqqwyxi8vt31id;
DROP TABLE IF EXISTS burgers;
-- Create table for burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false, 
date TIMESTAMP, 
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger) VALUES ('baconAtor');
INSERT INTO burgers (burger) VALUES ('jr bacon');
INSERT INTO burgers (burger) VALUES ('veggie');
