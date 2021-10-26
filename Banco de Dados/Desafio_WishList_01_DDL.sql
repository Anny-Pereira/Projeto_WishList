CREATE DATABASE Desafio_WishList
GO

USE Desafio_Wishlist
GO

CREATE TABLE Usuarios (
	iDUsuario tinyint primary key identity(1,1),
	email text,
	senha text
)	
GO