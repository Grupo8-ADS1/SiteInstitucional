create database sistemaMercurio;

use sistemaMercurio;

create table produto(
idProduto int primary key auto_increment,
nomeProduto varchar(30) not null,
fkPrateleira int  
);


create table prateleira (
idPrateleira int primary key auto_increment,
descricao varchar(50),
fkSensor int, constraint chkSensor check (fkSensor in ('100%' , '50%', '0%','ERRO'))
);

create table sensor(
idSensor int primary key auto_increment,
statusSensor varchar(15)  
);

create table empresa(
idEmpresa int primary key auto_increment,
razaoSocial varchar(50) not null,
cnpj char(14) not null,
porte varchar(15) not null, constraint  chkporte check (porte in ('pequena','media','grande')),
email varchar(50) not null,
senha varchar(20) not null 
);

create table reposicao(
idReposicao int primary key auto_increment,
setor varchar(15)
);
 
create table corredor(
idCorredor int primary key auto_increment,
descricao varchar(50),
fkPrateleira int  
); 

create table historicoReposicao(

);


create table alerta (
idAlerta int primary key auto_increment,
fkProduto int,
fkCorredor int,
fkReposicao int,
dhAlerta datetime default current_timestamp
);