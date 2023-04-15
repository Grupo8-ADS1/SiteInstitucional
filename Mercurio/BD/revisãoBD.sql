-- aula 9 e 10 - revisão e reforço

create database revisao;
use revisao;

create table treinador (
idTreinador int primary key auto_increment,
nome varchar(45),
sobrenome varchar (45), -- nome + sobrenome = atributo composto
telFixo char(11),
telMovel char(12), -- + telFixo = atributo multivalorado
fkExperiente int, constraint fkNovatoExperiente foreign key (fkExperiente)
references treinador(idTreinador)
);

insert into treinador values
(null,'Azul','Marinho','11-99999999',null,null),
(null,'Rosa','Pink',null,'11-777777777',null);

insert into treinador values 
(null,'Verde','Musgo',null,null,1),
(null,'Laranja',null,null,null,1),
(null,'Laranja',null,null,null,2);

update treinador set nome = 'Amarelo' where idTreinador = 5;

select * from treinador;

update treinador set fkExperiente = 2 
where idTreinador = 1;

select novato.nome as NomeNovato,
experiente.nome as NomeExperiente
	from treinador as novato join treinador as experiente
		on novato.fkExperiente = experiente.IdTreinador;
        
-- tem duas questões dessa na prova 
-- tem uma questão de escrever comandos (vale dois pontos)
-- vai ter modelagem mas n vai precisar fazer

create table nadador (
idNadador int primary key auto_increment,
nome varchar(45),
dtNasc date,
fkTreinador int,
constraint fkNadadorTreinador foreign key (fkTreinador)
references treinador(idTreinador)
) auto_increment = 100;


insert into nadador values 
(null,'Vermelho','2013-10-10',1),
(null,'Preto','2005-10-10',3),
(null,'Branco','2003-10-10',2),
(null,'Cinza','2000-10-10',2);

select * from nadador;

select * from nadador join treinador
	on fkTReinador = idTreinador;
    
select nadador.nome as NadadorNome, 
treinador.nome as TreinadorNome
from nadador join treinador
on fkTreinador = idTreinador;

select * from nadador right join treinador
	on fkTReinador = idTreinador;
    
select concat(treinador.nome, ' ' ,
ifnull( treinador.sobrenome, 'Silva')) 
as NomeCompleto from treinador;

-- tem uma questão dessa na prova

create table convidado (
idConvidado int, 
nome varchar(45),
fkQuemConvidou int, constraint fkQuemConvidou foreign key (fkQuemConvidou)
references nadador(idNadador),
constraint pkComposta primary key (idConvidado,FkQuemConvidou)
);

insert into  convidado values 
(1,'Shitzu',100),
(2,'Poodle', 100),
(1,'Vira Lata', 101),
(1,'Pinscher',102);

select * from convidado;
select * from convidado order by fkQuemConvidou;

select * from treinador as novato join treinador as experiente 
on novato.fkExperiente = experiente.IdTreinador 
join nadador on nadador.fkTreinador = novato.idTreinador
join convidado on convidado.fkQuemConvidou = nadador.idNadador;



