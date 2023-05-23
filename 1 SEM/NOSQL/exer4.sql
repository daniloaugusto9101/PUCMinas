-- srv-pucminas-01.database.windows.net
-- bdpucminas
-- aluno207
-- QWEasd#207


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


    -- Questão 2 (5 pts.):

    INSERT INTO mae
    VALUES
    (1,'Maria Isabel de Souza','Rua Mantiqueia','10',NULL,'32.475-190',
    '(32)99856-5712','1988-01-05')
    ,(2,'Juliana Freitas','Avenida Meriodional','1560','Apt 101','31.560-300',
    '(31)98825-4620','2001-06-14')
    ,(3,'Esther Souza','Alameda Gonçalves Dias','235B','Fundos','31.220-010',
    '(31)99974-1010','1985-12-22')
    ,(4,'Laura Cardoso','Rua Alta','760',NULL,'34.800-000',
    '(34)98133-3388','2002-10-07')
    ,(5,'Mariana Gonçalves','Travessa Sarandí','S/N',NULL,'32.450-000',
    '(32)99632-3296','2005-04-20')
    ,(6,'Milena Cunha','Avenida Pirapora','2100','Bloco B Apt 301',
    '31.980-605','(31)98778-4000','1989-07-26')
    ,(7,'Stella Costa','Rua Vilarinho','810','Apt 203','33.100-500',
    '(33)98556-1010','2002-05-25')
    ,(8,'Giovanna Caldeira','Rua Dr. Renê Magalhães','290',NULL,'34.710-200',
    '(34)99211-4554','1987-08-01')
    ,(9,'Sabrina Silva','Rua Engenheiro Hélio Ramos','378','Apt 404','31.980-600',
    '(31)95564-3440','2005-02-04')
    ,(10,'Yasmin da Costa','Rua Seis','25',NULL,'33.285-520',
    '(33)98799-7880','1989-11-11')
    ,(12,'Carolina Aragão',NULL,NULL,NULL,NULL,NULL,'1995-05-25')
    ,(13,'Valentina Nogueira',NULL,NULL,NULL,'31.550-600',
    '(31)99991-4664','1998-03-03');

    INSERT INTO bebe
    VALUES
    (1,4,3,'Olívia Souza',50,3500,'2017-01-02')
    ,(2,1,1,'Isabel de Souza',52,3120,'2018-02-15')
    ,(3,4,2,'Nicolas Freitas',49,2980,'2019-04-22')
    ,(4,3,8,'Letícia Caldeira',48,2905,'2020-02-01')
    ,(5,5,3,'João Souza',55,3890,'2021-03-30')
    ,(6,4,4,'Isabella Cardoso',51,3470,'2022-07-03')
    ,(7,5,6,'Davi Cunha',52,36150,'2022-08-20')
    ,(8,5,10,'Samuel da Costa',50,3745,'2022-08-22')
    ,(9,4,9,'Diego Silva',49,3125,'2022-10-01')
    ,(10,5,8,'Amanda Caldeira',45,2790,'2023-01-02')
    ,(12,1,3,'Lucas Souza',51,3480,'2023-01-03')
    ,(13,4,2,'Gabriel Freitas',52,3860,'2023-01-04')
    ,(14,3,7,'Fábio Costa',49,3125,'2023-01-05')
    ,(15,4,1,'Maria de Souza',48,3060,'2023-01-06');

    INSERT INTO especialidade
    VALUES
    (1,'Pediatria')
    ,(2,'Obstetrícia')
    ,(3,'Ginecologia');

    INSERT INTO especialista
    VALUES
    (1,1,'2012-01-02')
    ,(1,2,'2012-01-02')
    ,(2,1,'2013-01-02')
    ,(3,1,'2014-01-02')
    ,(3,2,'2014-01-02')
    ,(4,2,'2015-01-02')
    ,(5,1,'2016-01-02')
    ,(6,1,'2017-01-02');

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

-- h) O identificador (id) da mãe exibido de forma ordenada e com a respectiva
-- quantidade de filhos cadastrados na base.
select  mae.id_mae, count(bebe.id_bebe) as tot_bebe
FROM mae
JOIN bebe ON mae.id_mae = bebe.id_mae
GROUP BY mae.id_mae;

-- i) Repetir a listagem anterior, mas exibindo apenas os identificadores (id) de
-- mães que tenham mais de 1 filho.
select mae.id_mae, count(bebe.id_bebe) as tot_bebe
from mae
join bebe on mae.id_mae = bebe.id_mae
group by mae.id_mae
having count(bebe.id_bebe) > 1
order by mae.id_mae

-- j) O identificador (id) do médico com a respectiva quantidade de partos
-- realizados sendo exibido dos que mais aturam para os que menos atuaram
select id_medico, count(id_bebe) as tot_bebe
from bebe
group by id_medico
order by tot_bebe

-- k) O nome somente das mães que tenham filhos já cadastrados.
select mae.nome_mae, count(bebe.id_bebe) as tot_bebe
from mae
join bebe on mae.id_mae = bebe.id_mae
group by mae.nome_mae
having count(bebe.id_bebe) >= 1

-- l) O nome de todas as mães incluindo, quando existir, o nome de cada um de
seus filhos.
select mae.id_mae, mae.nome_mae, bebe.nome_bebe
from mae
left join bebe on mae.id_mae = bebe.id_mae
order by mae.id_mae


-- m) A lista contendo o nome ordenado de todos os bebês com os respectivos
-- nomes de médicos responsáveis.
select bebe.nome_bebe, medico.nome_medico
from bebe
join medico on bebe.id_medico = medico.id_medico
order by bebe.nome_bebe

-- n) O nome do médico e a descrição de suas especialidades, mas somente
-- para aquelas cadastradas a partir de 01/01/2013.
select medico.nome_medico, especialidade.nome_especialidade, especialista.data_cadastro_especialidade
from especialista
join medico on medico.id_medico = especialista.id_medico
join especialidade on especialidade.id_especialidade = especialista.id_especialidade
where especialista.data_cadastro_especialidade >=  '2013/01/01'


-- o) Listagem contendo o nome, CRM e especialidade de cada um dos médicos
-- cadastrados
select medico.nome_medico, medico.crm, especialidade.nome_especialidade
from especialista
join medico on medico.id_medico = especialista.id_medico
join especialidade on especialidade.id_especialidade = especialista.id_especialidade
