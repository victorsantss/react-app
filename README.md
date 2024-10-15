# App React

## 🔥 Introdução

Este é um aplicativo de pesquisa de funcionários desenvolvido como parte de um teste técnico. O objetivo do app é fornecer uma interface simples e funcional que permita ao usuário buscar e visualizar informações sobre funcionários. Implementado utilizando React para a construção da interface, Material UI para o design, Context API para gerenciamento de estados. Além disso, integra uma API utilizando JSON Server para realizar todas as operações CRUD de funcionários.

O aplicativo inclui funcionalidades como roteamento dinâmico e alternância entre modos claro e escuro, garantindo uma experiência de usuário moderna e responsiva. O foco deste projeto está na organização de componentes, boas práticas de código e usabilidade.

## 💡 Funcionalidades:

* **Cadastro de funcionário:** Permite que novos funcionários sejam cadastrados na plataforma. Fornecendo informações como nome, matrícula, cargo e filial. A validação dos dados foi feito utilizando o zod com o React Hook Form para uma boa experiência de desenvolvimento e feedback para o usuário.

* **Remover funcionário:** Permite que os funcionários sejam excluídos da aplicação com um feedback visual. Ao acionar essa funcionalidade, os dados do funcionário são removidos tanto do cliente quanto do servidor.

* **Editar funcionário:** Possibilita que sejam editadas as informações dos funcionários com validação de dados. Após as alterações serem feitas, os dados são atualizados em tempo real no servidor e no estado local da aplicação.

* **Listagem de funcionários:** Oferece uma funcionalidade de busca que permite listar aos funcionários da plataforma.

* **Filtrar funcinários:** Permite que sejam filtrados os funcionários de acordo com o tipo de filtro selecionado.

* **Troca de tema entre dark e light:** Permite que o usuário alterne entre os temas claro e escuro, ajustando a aparência da interface de acordo com sua preferência visual.

* **Feedback visual em operações:** O usuário tem uma notificação ao realizar as operações de cadastro, edição e deleção de funcionários, bem como erros.

* **Boa performance nas operações de get e mutations:** Foi utilizado o React Query para ter uma boa performance ao listar, excluir e editar informações da aplicação.

## 💡  Rotas da Aplicação
As rotas da aplicação foram implementadas utilizando o React Router DOM, consistindo principalmente em três rotas distintas:

* /

  Essa é a rota inicial da aplicação.

* /funcionarios:

  Nesta rota, todas as funcionalidades do CRUD podem ser executadas. Ambas as rotas '/' e '/funcionarios' compartilham o mesmo layout.

## 💡 Testes Unitários e E2E
Foram desenvolvidos testes unitários para validar cada componente e função individualmente, assegurando que cada parte do código funcione conforme esperado. Além disso, foram implementados testes de ponta a ponta (E2E) para simular interações do usuário em toda a aplicação, garantindo a integração adequada entre os componentes.

## 📦 Tecnologias:
  <!-- Link para pegar as badges: https://github.com/Ileriayo/markdown-badges -->

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
* ![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
* ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
* ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
* ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
* ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
* ![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)
* Axios
* Material UI

## 🔨 Guia de instalação

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js e Yarn.
Além disso é bom ter um editor para trabalhar com o código como o VSCode

### Clone este repositório e instale as dependências

    git clone https://github.com/victorsantss/react-app.git
    npm i

### Edite o nome do arquivo .env.example para .env.local

### Foram criados dois scripts um para rodar a aplicação e o outro para rodar o server mas podemos executar ambos usando o seguinte comando

    npm run start

## 🔨 Executando os testes E2E

    npm run start
    npm run cy:open

## 🔨 Executando os testes unitários

     npm run test

## 🔨 Scripts utilizados no desenvolvimento

    "lint": "eslint src --ext .ts,.tsx"
    "lint:fix": "eslint src --ext .ts,.tsx --fix"
    "dev": "vite",
    "dev:server": "json-server --watch db.json --port 5000",
    "start": "concurrently \"npm run dev:server\" \"npm run dev\"",
    "test": "vitest",
    "dev:test": "vite --port 3332 --mode test",
    "cy:open": "npx cypress open"

## 🔨 Aplicação web rodando na vercel
https://app-funcionarios.vercel.app/

## 🔨 Servidor
  https://react-app-server-topaz.vercel.app/


## 🔨 Video da aplicação em uso
https://github.com/user-attachments/assets/0ec53464-1c0a-48e2-a1c4-513069b8ba3f


