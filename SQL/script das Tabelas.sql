Use ROM

Create Table _tblGTipoUsuario
(
	intIdTipoUsuario int primary key identity,
	vchDescTipoUsuario varchar(350) not null,
	dtmDataInclusao datetime not null,
	intIdUsuarioInclusao int not null,
	dtmDataAtualizacao datetime not null,
	intIdUsuarioAtualizacao int not null,
	bitAtivo bit not null
);

Create Table _tblGUsuario
(
	intIdUsuario int primary key identity,
	intIdTipoUsuario int,
	vchCodUsuario varchar(8000) not null,
	vchNome varchar(350) not null,
	vchDDTelefone varchar(2) null,
	vchTelefone varchar(20)  null,
	vchCelulalr varchar(2) null,
	vchCep varchar(30) null,
	vchLogradouro varchar(650) null,
	vchNumero varchar(6) null,
	vchComplemento varchar(350) null,
	vchBairro varchar(350) null,
	vchCidade varchar(350) null,
	vchUF varchar(2),
	dtmDataInclusao datetime not null,
	intIdUsuarioInclusao int not null,
	dtmDataAtualizacao datetime not null,
	intIdUsuarioAtualizacao int not null,
	bitAtivo bit not null


);

Create Table _tblGSessaoUsuario
(
	intIdSessaoUsuario int primary key identity,
	vchToken varchar(max) not null,
	dtmExpiracaoTOKEN datetime not null,
	intIdUsuario int not null, 
	bitAtivo bit not null
);


Create Table _tblGMarca
(
	intIdMarca int primary key identity,
	vchDescMarca  varchar(8000) not null,
	dtmDataInclusao datetime not null,
	intIdUsuarioInclusao int not null,
	dtmDataAtualizacao datetime not null,
	intIdUsuarioAtualizacao int not null,
	bitAtivo bit not null
);



Create Table _tblGTipoCombustivel
(
	intIdTipoCombustivel int primary key identity,
	vchDescTipoCombustivel  varchar(8000) not null,
	dtmDataInclusao datetime not null,
	intIdUsuarioInclusao int not null,
	dtmDataAtualizacao datetime not null,
	intIdUsuarioAtualizacao int not null,
	bitAtivo bit not null
);

Create Table _tblGTipoCarroceria
(
	intIdTipoCarroceria int primary key identity,
	vchDescTipoCarroceria  varchar(8000) not null,
	dtmDataInclusao datetime not null,
	intIdUsuarioInclusao int not null,
	dtmDataAtualizacao datetime not null,
	intIdUsuarioAtualizacao int not null,
	bitAtivo bit not null
);


Create Table _tblGCliente
(
	intIdCliente int primary key identity,
	intIdUsuario int not null,
	vchNome varchar(350) not null,
	vchDDTelefone varchar(2) null,
	vchTelefone varchar(20)  null,
	vchCelulalr varchar(2) null,
	vchCep varchar(30) null,
	vchLogradouro varchar(650) null,
	vchNumero varchar(6) null,
	vchComplemento varchar(350) null,
	vchBairro varchar(350) null,
	vchCidade varchar(350) null,
	vchUF varchar(2),
	dtmDataInclusao datetime not null,
	intIdUsuarioInclusao int not null,
	dtmDataAtualizacao datetime not null,
	intIdUsuarioAtualizacao int not null,
	bitAtivo bit not null
);


Create Table _tblGVeiculo
(
	intIdTipoUsuario int primary key identity,
	vchRenavam varchar(20) not null,
	vchPlaca varchar(20) not null,
	intIdMarca int not null,
	vchModelo varchar(8000) not null,
	vchAno varchar(8) not null,
    intIdTipoCombustivel int not null,
	vchMunicipio varchar(650) not null,
	intIdTipoCarroceria int not null,
	intIdCliente int not null,
	dtmDataInclusao datetime not null,
	intIdUsuarioInclusao int not null,
	dtmDataAtualizacao datetime not null,
	intIdUsuarioAtualizacao int not null,
	bitAtivo bit not null
);




