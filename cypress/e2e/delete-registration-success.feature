            #utf-8
            #language: pt

            Funcionalidade:Excluir cadastro e validar remoção

            Cenário: Excluir e valido remoção da tabela


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
Quando eu seleciono o ícone de Excluir para esse registro
Então evidêncio o registro deletado

