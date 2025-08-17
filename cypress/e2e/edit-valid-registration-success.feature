#utf-8
#language: pt

Funcionalidade:Editar cadastro e validar alteração

Cenário: Edição e valido cadastro na tabela


Dado que estou na página Web Tables
E clico no botão Add
E deve abrir um modal intitulado "Registration Form"
E que o modal Registration Form está aberto
E preencho todos os campos com dados válidos gerados por um gerador:
| First Name | Valor gerado automaticamente |
| Last Name  | Valor gerado automaticamente |
| Email      | Valor gerado automaticamente |
| Age        | Valor gerado automaticamente |
| Salary     | Valor gerado automaticamente |
| Department | Valor gerado automaticamente |
E clico no botão Submit
E o novo registro deve ser exibido na tabela
Quando seleciono o icone de edição para último registro
E o modal "Registration Form" é exibido
E altero os seguintes campos:
| Fist Name | Novo valor gerado automaticamente |
| Age       | Novo valor gerado automaticamente |
E evidêncio os dados atualizados devem ser refletidos na tabela