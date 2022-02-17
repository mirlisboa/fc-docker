CREATE DATABASE IF NOT EXISTS appdb;
USE appdb;
CREATE TABLE people (id int not null auto_increment, name varchar(100), primary key(id));