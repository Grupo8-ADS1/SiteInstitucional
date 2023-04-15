CREATE DATABASE mercurio;
USE mercurio;

CREATE TABLE empresa
(
	idEmpresa INT AUTO_INCREMENT PRIMARY KEY,
    razaoSocial VARCHAR(50),
    cnpjEmpresa VARCHAR(14),
    porteEmpresa VARCHAR(20)
);

CREATE TABLE setor
(
	idSetor INT AUTO_INCREMENT PRIMARY KEY,
	setor VARCHAR(50),
    fkEmpresa INT,
    CONSTRAINT FOREIGN KEY(fkEmpresa) REFERENCES empresa(idEmpresa)
);

CREATE TABLE usuario
(
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
	nomeUsuario VARCHAR(50),
    senhaUsuario VARCHAR(20),
    emailUsuario VARCHAR(30),
    nivelUsuario VARCHAR(20),
    cpfusuario VARCHAR(11),
    dtNascUsuario DATE,
    fkEmpresa INT,
    CONSTRAINT FOREIGN KEY(fkEmpresa) REFERENCES empresa(idEmpresa)
);

insert into usuario (nomeUsuario, senhaUsuario, emailUsuario) values
('João Vitor Cordeiro','Joao@2003','joao@mercurio.com');

select * from usuario;

CREATE TABLE sensor
(
	idSensor INT AUTO_INCREMENT PRIMARY KEY,
    fkSetor INT,
    CONSTRAINT FOREIGN KEY(fkSetor) REFERENCES setor(idSetor)
);

CREATE TABLE captacao
(
	idCaptacao INT AUTO_INCREMENT PRIMARY KEY,
    dthCaptacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fkSensor INT,
    CONSTRAINT FOREIGN KEY(fkSensor) REFERENCES sensor(idSensor)
);

