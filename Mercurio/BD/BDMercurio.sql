create database mercurio;
use mercurio;

create table sensor (
idSensor int primary key auto_increment,
-- fkHistorico int not null,
fkEspaco varchar(20) not null, -- constraint fkEsp foreign key (fkEspaco) references Espaco (idEspaco)   
constraint chktipo check (fkEspaco in ('Entrada','Saida'))
);


create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(50)  not null unique,
senhaUsuario varchar(20) not null,
emailUsuario varchar(30) not null unique,
nivelUsuario varchar(20) not null, constraint chkNivel check (nivelUsuario in ('GerenteRegional','GerenteLocal'))
-- fkEmpresa
);


create table espaco (
idEspaco int primary key auto_increment,
setor varchar(50) not null,
fkSensor int not null, constraint fkSenE foreign key (fkSensor) references Sensor (idSensor) 
);



create table empresa (
idEmpresa int primary key auto_increment,
razaoSocial varchar(50) not null,
emailEmpresa varchar(50) not null,
senhaEmpresa varchar(50) not null
);

create table captacao(
fkSensor int not null,constraint fkSenC foreign key (fkSensor) references sensor (idSensor),
dtCaptacao datetime default current_timestamp, 
fkEmpresa int, constraint fkEmp foreign key (fkEmpresa) references empresa (idEmpresa)
);



/*

insert into usuario values 
(null,'João Vitor Cordeiro','123456789','joao.cordeiro@sptech.school','GerenteRegional'),
(null,'Felipe Andrade','123456789','felipe.andrade@sptech.school','GerenteLocal'),
(null,'Evelyn Farias','123456789','evelyn.farias@sptech.school','GerenteRegional');

*/ 