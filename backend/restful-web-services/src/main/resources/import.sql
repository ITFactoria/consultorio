/*Populate tabla municipios*/
insert into municipios(id, nombre) values (1,'Sabaneta');
insert into municipios(id, nombre) values (2,'La Estrella');
insert into municipios(id, nombre) values (3,'Caldas');
insert into municipios(id, nombre) values (4,'Medellin');
insert into municipios(id, nombre) values (5,'Bello');


/*Populate tabla clientes*/
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('79514933','chikitina preciosa', 'negrito esclavo', 'avendida nore carrera sur', 1,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-13','dolor cabeza', '2019-05-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('12121234','eusebio maria', 'amazonas tumaco', 'avendida nore carrera sur', 2,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-13','dolor cabeza', '2019-05-14');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('678976379','gulupa tomate', 'papaya chontaduro', 'avendida nore carrera sur', 3,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-13','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('54545453','chonto perol1', 'papaya chontaduro', 'avendida nore carrera sur', 4,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-13','dolor cabeza', '2019-06-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('12312345','bocadillo santurron', 'papaya chontaduro', 'avendida nore carrera sur', 5,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-13','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('79514932','chikitina preciosa', 'negrito esclavo', 'avendida nore carrera sur', 1,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-13','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('12121299','eusebio maria', 'amazonas tumaco', 'avendida nore carrera sur', 2,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-02-13','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('678976354','gulupa maraciya', 'papaya chontaduro', 'avendida nore carrera sur', 3,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-12-13','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('545454','chonto perol2', 'papaya chontaduro', 'avendida nore carrera sur', 4,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-23','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('79514930','chikitina hemosa', 'negrito esclavo', 'avendida nore carrera sur', 5,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-10-28','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('12121211','eusebio tortuga', 'amazonas tumaco', 'avendida nore carrera sur', 1,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-30','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('678976384','gulupa guayaba', 'papaya chontaduro', 'avendida nore carrera sur', 2,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-01-30','dolor cabeza', '2019-01-13');
insert into clientes(id_cliente, nombres, apellidos, direccion,municipio_id,departamento,telefono,email,sexo,fecha_nacimiento,caracteristicas,fecha_Creacion) values ('54545445','chonto perol3', 'papaya chontaduro', 'avendida nore carrera sur', 3,'antioquia', '3102345678', 'chikis@gmail.com', 'F', '1979-03-30','dolor cabeza', '2019-01-13');

/*Populate tabla citas*/
insert into citas(id, fecha, hora, valor, fecha_Creacion, cliente_id) values (1,'1979-03-30','08:00:00',33000,'2020-01-13','79514933');
insert into citas(id, fecha, hora, valor, fecha_Creacion, cliente_id) values (2,'1979-03-30','08:30:00',66000,'2020-01-13','79514933');
insert into citas(id, fecha, hora, valor, fecha_Creacion, cliente_id) values (3,'1979-03-30','09:00:00',99000,'2020-01-13','79514933');
insert into citas(id, fecha, hora, valor, fecha_Creacion, cliente_id) values (4,'1979-03-30','08:00:00',33000,'2020-01-13','12312345');
insert into citas(id, fecha, hora, valor, fecha_Creacion, cliente_id) values (5,'1979-03-30','08:30:00',66000,'2020-01-13','12312345');
insert into citas(id, fecha, hora, valor, fecha_Creacion, cliente_id) values (6,'1979-03-30','09:00:00',99000,'2020-01-13','678976379');


