            #utf-8
            #language: pt

            Funcionalidade: Adicionar novo registro válido na tabela

            Cenário: Adicionar um novo registro com sucesso


            Dado que estou na página Web Tables
            E clico no botão Add
            E deve abrir um modal intitulado "Registration Form"
            E que o modal Registration Form está aberto
            Quando preencho todos os campos com dados válidos gerados por um gerador:
            | Campo      | Valor                        |
            | First Name | Valor gerado automaticamente |
            | Last Name  | Valor gerado automaticamente |
            | Email      | Valor gerado automaticamente |
            | Age        | Valor gerado automaticamente |
            | Salary     | Valor gerado automaticamente |
            | Department | Valor gerado automaticamente |
E clico no botão Submit
Então o novo registro deve ser exibido na tabela
E realizo a evidência do registro criado