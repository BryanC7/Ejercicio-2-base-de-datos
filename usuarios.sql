-- Active: 1680180900307@@127.0.0.1@5432@softlife
CREATE DATABASE softlife;

CREATE TABLE usuarios (
    idUsuario SERIAL NOT NULL PRIMARY KEY,
    email VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL
);