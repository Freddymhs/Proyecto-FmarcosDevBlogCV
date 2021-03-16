---
title: "Comandos-esenciales-Mysql"
path: blog/omandos-esenciales-Mysql
tags: [fmarcosdev,mysql]
cover: ./popular-commands-sql.jpg
date: 2021-01-12
draw: true
excerpt: Comandos-esenciales-Mysql

---
## comandos  
mysql -u * -p * -h * -D basededatos    ||   mysql -u root      
CREATE DATABASE basededatos;    
use basededatos;    
create table PRODUCTOS( nombre varchar(60) , precio int(10) , tipo varchar(40));    
describe PRODUCTOS;  
insert into PRODUCTOS(nombre,precio,tipo) values("Nintendo switch", 240000,"consola");  
alter table PRODUCTOS add empresa varchar(50);  
update PRODUCTOS  set  MARCA = 'NUEVAMARCA'   where    EMPLEADO_ID = 1056;  

## exportar base de datos
mysqldump -h hostdebasedadtos -u usuario -p password > /ruta/absoluta/db_backup_name.sql


