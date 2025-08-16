#utf-8
#language: pt


Funcionalidade:Acessar o formulário de cadastro

Cenário: Redirecionamento correto para o formulário

Dado que estou na página Web Tables
Quando clico no botão Add
Então deve abrir um modal intitulado "Registration Form"
E evidencio todos os campos que  deve está visíveis e vazios conforme especificação:
      | Campo       | Placeholder        |
      | First Name  | First Name         |
      | Last Name   | Last Name          |
      | Email       | name@example.com   |
      | Age         | Age                |
      | Salary      | Salary             |
      | Department  | Department         |