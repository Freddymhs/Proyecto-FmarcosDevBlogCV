---
title: "expresiones-regulares-js"
path: blog/expresiones-regulares-js
tags: [fmarcosdev]
cover: ./expreg.jpg
date: 2021-03-02
draw: true
excerpt: expresiones-regulares-js

---


# README

- forma1
var expresion1 = new RegExp("abc")
var expresion2 =  /abc/
var expresion3 = /[0123456789]/
var expresion4 = /[0-9a-zA-Z]/   
var expresion5 = /\d\d-\d\d-\d\d\d\d/ 
var expresion6 = /[^01]/              no tiene estos valores
var expresion6 = /\d+/                se repite una vez o mas
var expresion9 = /Hola mun?do/
var expresion10 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/
var expresion11 = /hola/i
var expresion12 = /Woo+(hoo+)/i
var expresion13 = /\d+/.exec("desde 1980")
var expresion14 = /\bffreddy\b/    
var expresion15 = /pollo|pescado|res|tacos|papas/    
var expresion16 = /^inicio final$/    
var expresion17 = /^inicio|final$/    



- validando coincidencias
  - expresion1.test("abcdef")   // true
  - expresion2.test("abcdef")   // true
  - expresion3.test("sucedio en 1993") // true
  - expresion4.test("sucedio en 1992") // true
  - expresion5.test("22-12-1992") //true
  - expresion5.test("1010101010101010101010110100101") //false
  - expresion5.test("") // false 
  - expresion9.test(/Hola muto/) // false
  - expresion10.test(27-01-2021 11:55) // true
  - expresion11.test("HoLA")
  - expresion11.test("wooHOO,123OhoohOhohohohHhooo,123") //true
  - expresion13.test("hola mundo desde el 1980")   // true
  - expresion14.test("freddy")   // false
  - expresion15.test("res")   // true
  - expresion16.test("inicio  a 1 b 2 c 3 final") // true 
  - expresion17.test("inommmm creo que final") // true
  - "feliz navidad".replace(/navidad/,'vanidad') // remplaza la palabra navidad
  - "feliz navidad y hoy sera noche de navidad".replace(/navidad/g,'vanidad') // remplaza de forma global ahora 2 palabras



   

# shortcuts

\d Cualquier numero
\w Cualquier letra o numero
\s Cualquier espacio en blanco [tabs,salto linea , similares]
\D Cualquier letra que no sea numero
\W Cualquier caracter que no sea alfanumerico
\S Cualquier caracter que no sea un espacio en blanco
.  Cualquier caracter exepto nuevas lineas
^  negacion
+  se repite <1
*  se repite <1 o ninguna vez
?  el resto sera opcional
{} algun rango del min al max o cantidad exacta
i  acepta mayuscula o minuscula
.exec regresa un array  y la coincidencia mietras mueve su index
\b  establece limites
|   establecer algunas opciones u alternativas
^ inicio de la cadena  ,   $ final de la cadena
g aplicacion global de alguna regla
.search busca el primero en el contenido
