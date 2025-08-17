#utf-8
#language: pt

Funcionalidade:Editar cadastro com dados inválidos

Contexto:
Dado que estou na página Web Tables
E clico no botão Add
E deve abrir um modal intitulado "Registration Form"
E que o modal Registration Form está aberto


Cenário: Editar idade com valor negativo
Quando edito um registro e insiro no campo Age negativa
E o modal apresenta um alert no campo Age
Então as alterações não devem ser salvas no campo Age

Cenário: Editar email com texto
Quando edito um registro e insiro no campo Email sem @
E o modal apresenta um alert no campo Email
Então as alterações não devem ser salvas no campo Email


Cenário: Editar Salary com caracteres
Quando edito um registro e insiro no campo Salary
E o modal apresenta um alert no campo Salary
Então as alterações não devem ser salvas no campo Salary
