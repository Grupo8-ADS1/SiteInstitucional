use mercurio;

create table sensor (
idSensor int primary key auto_increment,
fkEspaco int not null
-- fkHistorico int not null
);


create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(50)  not null unique,
senhaUsuario varchar(20) not null,
emailUsuario varchar(30) not null unique,
nivelUsuario varchar(20) not null, constraint chkNivel check (nivelUsuario in ('GerenteRegional','GerenteLocal'))
);


create table espaco (
idEspaco int primary key auto_increment,
setor varchar(50) not null,
);


create table historico (
idHistorico int primary key auto_increment,
dhHistorico datetime default current_timestamp,
);

insert into usuario values 
(null,'João Vitor Cordeiro','123456789','joao.cordeiro@sptech.school','GerenteRegional'),
(null,'Felipe Andrade','123456789','felipe.andrade@sptech.school','GerenteLocal'),
(null,'Evelyn Farias','123456789','evelyn.farias@sptech.school','GerenteRegional');