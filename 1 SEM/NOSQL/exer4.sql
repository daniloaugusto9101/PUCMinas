/*Questão 1 (10 pts.): 
Utilizando o banco de dados SQL Server já disponibilizado anteriormente, desenvolva e execute comandos SQL capazes de criar todos os objetos necessáriospara a correta implementação desse DER.*/
create table mae(
    id_mae int primary key not null, 
	nome_mae varchar(100),
    endereco_logadouro varchar(100),
    endereco_numero varchar(100),
    endereco_complemento varchar(100),
    endereco_cep varchar(100),
    numero_contato varchar(100),
    data_nascimento date,	
);

create table bebe(
    id_bebe int primary key not null, 
    id_medico int not null, 
    id_mae int not null, 
	nome_bebe varchar(100),
	altura_cm int,
	peso_gr int,
	data_nascimento date,
);

create table medico(
    id_medico int primary key not null, 
    nome_medico varchar(100),
    crm varchar(10),
    numero_contato varchar(20),
);

create table especialista(
    id_medico int not null,
    id_especialidade int not null,
    data_cadastro_especialidade date,
);

create table especialidade(
    id_especialidade int primary key not null, 
    nome_especialidade varchar(100),
);


alter table bebe
    add constraint fk_medico foreign key (id_medico) references medico (id_medico); 
alter table bebe
    add constraint fk_mae foreign key (id_mae) references mae (id_mae); 
alter table especialista
    add constraint fk_medicoEsp foreign key (id_medico) references medico (id_medico); 
alter table especialista
    add constraint fk_especialidade foreign key (id_especialidade) references especialidade (id_especialidade); 


/*Questão 3 (10 pts., sendo 2 pts. cada item): 
Crie e execute comandos SQL capazes de realizar as seguintes alterações no banco de dados:*/

--a) Insira mais cinco mães com atributos escolhidos a seu critério.
insert into mae
(id_mae, nome_mae, endereco_logadouro , endereco_numero ,endereco_complemento ,endereco_cep ,numero_contato, data_nascimento)
values 
(14, 'Maria Silva', 'Rua dos Girassóis', '123', 'Apto. 101', '01234-567', '(11) 91234-5678', '1980-05-15'),
(15, 'Ana Santos', 'Avenida das Rosas', '456', 'Casa 2', '12345-678', '(21) 99876-5432', '1975-08-10'),
(16, 'Carla Oliveira', 'Rua dos Ipês', '789', 'Bloco C', '89012-345', '(47) 98765-4321', '1992-03-25'),
(17, 'Juliana Sousa', 'Alameda das Orquídeas', '321', 'Casa 1', '76543-210', '(31) 95555-4444', '1987-12-01'),
(18, 'Renata Costa', 'Rua das Acácias', '555', '123', '45678-901', '(85) 91111-2222', '1999-07-07');

--b) Registre o nascimento de um bebê para duas dessas mães atribuindo o parto ao Dr. Davi Ribeiro com data de 10/01/2023.
insert into bebe
(id_bebe, id_medico, id_mae, nome_bebe, altura_cm, peso_gr, data_nascimento)
values
(16, 4, 1, 'Arthur do Val', 50, 3000, '2023-05-10'),
(17, 4, 2, 'Kim Kataguiri', 50, 3100, '2023-05-09');

--c) Insira a especialidade “Neonatologia” e faça com que a Dra. Brenda Carvalho seja considerada especialista nessa área.
insert into especialidade
(id_especialidade, nome_especialidade)
values
(4, 'Neonatologia');


update especialista
set id_especialidade = 4
where id_medico = 5;

--d) Remova a especialidade “Ginecologia”.
delete from especialidade 
where id_especialidade = 4;


--e) O bebê Davi Cunha teve seu peso ao nascimento registrado como 36.150 gramas. O que, obviamente, trata-se de um erro. Atualize esse dado corrigindo para 3.615.
update bebe
set peso_gr = 3615
where id_bebe = 7;

/*Questão 4 (30 pts., sendo 2 pts. cada item):
Crie e execute comandos SQL capazes de listar as seguintes informações no banco
de dados:*/
--a) Todo o conteúdo do cadastro de médicos ordenado pelo CRM de forma decrescente.
select *
from medico
order by crm asc;

--b) O peso mínimo, médio e máximo de todos os bebês registrados.
select min(peso_gr) as peso_minimo, max(peso_gr) as peso_maximo, avg(peso_gr) as peso_medio  
from bebe;

--c) A quantidade de bebês nascidos entre 01/01/2021 e 31/12/2022.
select count(id_bebe) as tot_bebes
from bebe
where data_nascimento >= '2021/01/01' and  data_nascimento <= '2022/12/12';

--d) O nome de todas a mães que não tem o logradouro cadastrado.
select nome_mae
from mae
where endereco_logadouro is null;

--e) O nome das mães que não tem o logradouro e o CEP cadastrados.
select nome_mae, endereco_logadouro, endereco_cep
from mae
where endereco_logadouro is null and endereco_cep is null;

--f) O nome dos bebês que tem altura abaixo de 48 cm ou acima de 52 cm.
select nome_bebe, altura_cm
from bebe
where altura_cm <= 48 or altura_cm >= 52;

--g) O identificador (id) de todos os bebês que tenham “Souza” no nome.
select id_bebe
from bebe
where nome_bebe like '%souza%';

--h) O identificador (id) da mãe exibido de forma ordenada e com a respectiva quantidade de filhos cadastrados na base.


--i) Repetir a listagem anterior, mas exibindo apenas os identificadores (id) de mães que tenham mais de 1 filho.
--j) O identificador (id) do médico com a respectiva quantidade de partos realizados sendo exibido dos que mais aturam para os que menos atuaram
--k) O nome somente das mães que tenham filhos já cadastrados.
--l) O nome de todas as mães incluindo, quando existir, o nome de cada um de seus filhos.
--m) A lista contendo o nome ordenado de todos os bebês com os respectivos nomes de médicos responsáveis.
--n) O nome do médico e a descrição de suas especialidades, mas somente para aquelas cadastradas a partir de 01/01/2013.
--o) Listagem contendo o nome, CRM e especialidade de cada um dos médicos cadastrados