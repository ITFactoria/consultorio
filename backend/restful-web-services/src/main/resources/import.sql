/*Populate tabla municipios*/
insert into municipios (id, nombre) values( 1,'Abejorral');


/*Populate tabla clientes*/
insert into clientes(id_cliente, nombres, apellidos, direccion,telefono,sexo,caracteristicas,fecha_Creacion) values ('1122334455','nombre prueba', 'apellido prueba', 'antioquia', '3102345678', 'F','dolor cabeza', '2019-05-13');


/*Populate tabla citas*/
insert into citas(id, fecha_asignacion, estado_cita, cliente_id_cliente) values (1,'2020-03-13',0,'1122334455');



