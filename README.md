# Projeto Encontre seu Duo

Meu ojetivo com esse projeto pessoal é obter mais conhecimento à respeito das ferramentas de desenvolvimento web com Java: Spring Boot, Spring Web MVC, Spring Security, Hibernate e JPA. A motivação para a criação do projeto foi o evento NLW 9, da Rocketseat, que apresentou a ideia em uma simples versão web do projeto com Node e React. Minha ideia é recomeçar do zero o projeto, adaptando-o para a minha principal stack do momento (Java), adicionar novas funcionalidades e me aventurar no React, já que nunca tinha utilizado. Todo o projeto foi reescrito por mim, e apesar de ser inspirado pelo evento, não copiei nenhum código pronto.  

# Sobre o aplicativo
Trata-se de uma aplicação voltada para o público gamer. O intuito é facilitar a conexão entre players na hora de jogar as partidas. Quem nunca procurou um duo para ajudar a ganhar uns pontos no seu jogo favorito? 

# Banco de dados
Utilizei um modelo relacional com e o SGBD foi o PostgreSQL.
O modelo está na versão de testes.

![image](https://user-images.githubusercontent.com/92180064/219857983-bd58f17f-3e4c-437b-8120-5c0f1b5e7c31.png)

# Back-end 
Foi construida uma API REST com Java, Spring Boot, Hibernate como ORM, e persistência com JPA. No momento, foram criados apenas operações de CRUD para a tabela, a fim de testes. O padrão de projeto utilizado foi o MVC (Model, View, Controller).

# Front-end
O Front-end está sendo construido com React e com a biblioteca CSS Tailwind, para ganho de produtividade. Ainda não foi finalizado.

# O que já foi feito

* Telas: Log in, Cadastro de usuários, Home, Adicionar anúncios.
* API com operações CRUD das tabelas.
* Data Fetch dos dados da tabela games na tela Home.

# Atualizações e funcionalidades futuras

* Terminar as telas e o design permanente do projeto.
* Alterar o consumo da API no Front-End com o uso de SWR para performace do servidor.
* Adição do campo "password" na tabela PLAYER, para criar um modelo de autenticação com Spring Security.
* Criação de novas Regras de negócio para controlar permissões de usuário e aumentar a complexidade do projeto de maneira geral.


# Coisas que venho aprendendo com esse projeto

* Consumo de api's e exibição dos dados consumidos no react
* Executar querys JPQL (uma espécie de SQL para o JPA)
* Manipulação de rotas e extração de parâmetros com react-router-dom





