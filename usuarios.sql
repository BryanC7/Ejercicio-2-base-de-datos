CREATE DATABASE softlife;

CREATE TABLE usuarios (
    idUsuario SERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL
);