CREATE DATABASE Desafio_WishList
GO

USE Desafio_Wishlist
GO

CREATE TABLE Usuarios (
	idUsuario tinyint primary key identity(1,1),
	email text,
	senha text
)	
GO

CREATE TABLE Desejos (
	idDesejo tinyint primary key identity(1,1),
	idUsuario tinyint foreign key references Usuarios(idUsuario),
	desc_desejo text,
)
GO