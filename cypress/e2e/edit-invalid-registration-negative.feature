#utf-8
#language: pt

Funcionalidade:Editar cadastro com dados inválidos

Contexto:
Dado que estou na página Web Tables
E clico no botão Add
E deve abrir um modal intitulado "Registration Form"
E que o modal Registration Form está aberto

Cenário: Editar First Name com campo vazio
Quando edito um registro e deixo o campo First Name vazio
E o modal apresenta um alert no campo First Name
Então as alterações não devem ser salvas no campo First Name

Cenário: Editar Last Name com campo vazio
Quando edito um registro e deixo o campo Last Name vazio
E o modal apresenta um alert no campo Last Name
Então as alterações não devem ser salvas no campo Last Name

Cenário: Editar email com texto
Quando edito um registro e insiro no campo Email sem @
E o modal apresenta um alert no campo Email
Então as alterações não devem ser salvas no campo Email

Cenário: Editar Age com valor caracteres
Quando edito um registro e insiro no campo Age negativa
E o modal apresenta um alert no campo Age
Então as alterações não devem ser salvas no campo Age

Cenário: Editar Salary com caracteres
Quando edito um registro e insiro no campo Salary
E o modal apresenta um alert no campo Salary
Então as alterações não devem ser salvas no campo Salary

Cenário: Editar Departament com campo vazio
Quando edito um registro e deixo o campo Departament vazio
E o modal apresenta um alert no campo Departament
Então as alterações não devem ser salvas no campo Departament