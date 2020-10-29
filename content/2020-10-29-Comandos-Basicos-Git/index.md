---
title: "git 🔥"
path: blog/Comandos-Basicos-Git
tags: [fmarcosdev]
cover: ./KZ.png
date: 2020-28-10
excerpt: Bloguear y escribir sobre pilas de tecnología siempre ha sido lo mío. Me gusta experimentar con diferentes tecnologías y escribir mis puntos de vista sobre ellas. Las tecnologías web siempre han sido mi pasión. Consulte mi blog para ver los códigos de bits de varias tecnologías web.
---

las ramas|||||||||||||||||||
master rama = por defecto
crear rama = git checkout -b version3
git checkout master = ir a rama principal
git push origin version3 = habilita y pushea a una rama

sobre escribir desde el REPO a mi carpeta LOCAL?|||||||||||||||||||||
por protocolo git no permite sobre 'escribir'
git lo reusara
si el directorio esta vacio lo deberia llenar (borrar .git)

inidicar a github que ESTE repo Local es el mismo que el repo Remoto=======
git remote add origin 'elotrorepo'

CLONAR repo ========================
git clone ruta.git destino

subir CAMBIOS=======================
git add .
git commit -m "agrege comandos git"
git push origin master

subir cambios a REPO existente y VACIO===========
git init
git add .
git commit -m "sda"
git remote add origin "https"
git push -u origin master

actualizarme a la ultima version=============
git pull

como debo hacer merge/rebase?============================
en rama master :
en rama freddy:
en rama erik :

git checkout master
git rebase erik
git rebase freddy

merge o rebase???? ambas combinana N a 1
merge no muestra el codigo y sus cambios a detalle
rebase se muestra el codigo editado a detalle / subir archivo editado al final , subir archivo recien editado
rebase insertar su contenido al final de la linea del master.

comandos generales//
git log /ver historial
git log -p /ver historial
git brach / para ver ramas
git checkout -b / crear y cambiar rama
git status / ver ultimos cambiso de archivo inlcuso en local
git branch -d 'rama' / borra esa rama
git remote -v /ver a que repo esta contectado mi repo local
git remote remove -v /remueve el Vinculo del Repo Remoto
git fork /copia el repo cuando no es de mi grupo ni mio , D:

extras//
git worflows en grupos

OMAR-------------------------sube
git add .
git commit -m "acabo de subir un header nuevo para el inicio'
git push origin master
usuario y contraseña

FILI------------------- actualiza
git remote add origin 'direccion del repo'
git fetch origin
git merge origin/master

si tenemos un manual merge------------------- arreglarlo manual
borrar o elegir un archivo
