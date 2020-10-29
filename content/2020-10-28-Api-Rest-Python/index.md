---
title: "Comprendiendo lo basico de test unitarios en python 🔥"
path: blog/Api-Rest-Python
tags: [python, apirest]
cover: ./KZ.jpg
date: 2020-10-28
excerpt: Bloguear y escribir sobre pilas de tecnología siempre ha sido lo mío. Me gusta experimentar con diferentes tecnologías y escribir mis puntos de vista sobre ellas. Las tecnologías web siempre han sido mi pasión. Consulte mi blog para ver los códigos de bits de varias tecnologías web.
---

doctest (no es necesario instalarlo)
se puede usar DOCSTRING //seria hacer pruebas con DocTest dentro de la funciones en un archivo .py

la suma de 2 mas 2 debe ser igual a 4 (DocTest)

> > > 2 + 2
> > > 4

el numero fibonacci 12 debe ser 144 (DocTest)

> > > from funciones import fibonacci
> > > fubonacci(12)
> > > 144

el resultado de la clase recursivo debe ser 120 ya que es el factorial de 5 (DocString)
"""

> > > recursivo = Recursivo()
> > > recursivo.factorial(5)
> > > 120
> > > """

libreria pytest + assert (para hacer testing muy faciles)

> > > assert 3==3 (permite crear pruebas en solo 1 linea de codigo :O )

mostrara error si falla y no mostrara nada si pasa la prueba :)

---

LIBRERIA UNITEST framework
unittest.TestCase permite hacer testing con este framework

Metodos de unittest.Case
assetEqual // metood iguales Compara valores
assertNotEqual // metodo no iguales Compara valores
setUp // metodo antes de la prueba(leer variables de entorno , consume api , conectar a BD , escribir sobre un archivo.)
tearDown // metood despues de la prueba
assertTrue // regreso true?
assertFalse // regreso false?
assertIs // el resultado es el que indicamos? Compara Objetos
assertIsNot // el resultado NO es el que indicamos? Compara Objetos
assertRaises// la excepcion obtenida es la excepcion esperada?
assertGreat // se obtiene valor sobre
assertLess // se obtiene valor menor que
asserEqual // se obtiene mismo valor
assertRegex // revisa que el resultado conteniga lo que se esperaba , como un nombre especifico
extras
metodo FAIL // una forma de hacer testing de forma manual especificando el mensaje error.
metodo skip // con @unitest.skip('no sabemos como usar esta prueba y la quiero saltar')
metodo skipIf// con @unitest.skipIf(true , "se saltara esta prueba ya que lo pasado entrego true")
Reportes de cobertura del codigo al hacer testing con unittest?
coverage report -m archivotesteado.py (entrega total de lineas testeadas y sus resultados)

Como revisar este reporte por browser?
pythonX -m http.server y probablemente lo levante en port 8000 :)
