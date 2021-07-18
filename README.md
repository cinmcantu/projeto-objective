# Projeto - Code Hero

O projeto consiste em criar uma aplicação responsiva que apresenta uma lista com os personagens da Marvel® e algumas informações sobre eles.

Para a realização do projeto foi utilizada a api disponibilizada pela Marvel®, podendo ser encontrada aqui <https://developer.marvel.com/>, além de um protótipo enviado pela empresa.

---

## Iniciando o projeto
Abra o terminal (Linux/Mac) ou o PowerShell (Windowns) e siga os passos abaixo.
* Clone o repositório em sua máquina

    `git clone https://github.com/cinmcantu/projeto-objective`

* Acesse a pasta criada 

    `cd projeto-objective`

* Instale os pacotes

    `npm install`

* Para iniciar os projetos use o comando abaixo

    `npm start`

Antes de iniciar o projeto, é necessário setar as váriaveis de ambiemte para utilizar a API. O passo a passo para esse processo está descrito abaixo.

---

## Setando variáveis de ambiente

* Copie e troque o nome do arquivo `.env.example` para `.env`

    `cp .env.example .env`

* Abra o arquivo e insira os dados da sua API key para poder utilizar a aplicação. Caso não possua uma API key, entre no [site](https://developer.marvel.com/) e faça o cadastro gratuitamente. 
    ~~~
    REACT_APP_API_PUBLIC = <insira sua chave pública>
    REACT_APP_API_PRIVATE = <insira sua chave privada>
    ~~~
    Tanto a chave pública quanto a privada são utilizadas na hora de chamar a API. A Validação das chaves é feita através da criação de um hash utilizando codificação md5, sendo o hash=md5(timestamp + chave privada + chave publica)).
    Para mais informações sobre o método de autorização veja [aqui](https://developer.marvel.com/documentation/authorization).


---

## Bibliotecas externas instaladas

* ### React Icons
    Biblioteca utilizada para inserir icones como o de busca e as setas para paginação. <https://react-icons.github.io/react-icons/>

* ### React Router
    Biblioteca utilizada para criar rotas e navegar entre as páginas. <https://www.npmjs.com/package/react-router-dom>

* ### MD5
    Biblioteca utilizada para geração de hash a partir do das chaves API. <https://www.npmjs.com/package/md5>
