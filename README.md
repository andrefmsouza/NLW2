
<h1 align="center">
    <img alt="NextLevelWeek #2" title="#NextLevelWeek2" src="./assets/banner.png" />
</h1>

<h4 align="center"> 
	🚧 NextLevelWeek 2.0 🚀 em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/andrefmsouza/NLW2?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/andrefmsouza/NLW2">
 
  <a href="https://github.com/andrefmsouza/NLW2/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/andrefmsouza/NLW2">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   
</p>


## 💻 Sobre o projeto

👨‍🏫 Proffy - é uma forma de facilitar a vida dos professores e alunos no aprendizado do dia-a-dia, tornando possível o aluno visualizar professores disponíveis para lecionar uma matéria de seu interesse e entrar em contato com elas via WhatsApp, ou no caso de ser um professor, o mesmo pode se registar e oferecer seus serviços de estudos para novos alunos.

Os professores poderão se cadastrar na plataforma web informando:
- seu nome
- link para sua foto de avatar
- o número de contato via WhatsApp
- sua biografia
- a matéria lecionada
- o preço da sua hora/aula
- disponibilidade de horário

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- encontrar os professores disponíveis
- favoritar um professor
- entrar em contato com o professore do WhatsApp

Projeto desenvolvido durante a **NLW - Next Level Week #2** oferecida pela [Rocketseat](rs).
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.


## 🎨 Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web">
  <img alt="Proffy Web" src="https://img.shields.io/badge/Acessar%20Layout%20-Web-%2304D361">
</a>

<a href="https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile">
  <img alt="Proffy Web" src="https://img.shields.io/badge/Acessar%20Layout%20-Mobile-%2304D361">
</a>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]


## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta server) 
2. Front End (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode]

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/andrefmsouza/NLW2

# Acesse a pasta do projeto no terminal/cmd
$ cd NLW2

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 🖥️ Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/andrefmsouza/NLW2

# Acesse a pasta do projeto no seu terminal/cmd
$ cd NLW2

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### 📱Rodando a aplicação mobile 

🚧 Em construção... 🚧

```bash
# Clone este repositório
$ git clone https://github.com/andrefmsouza/NLW2

# Acesse a pasta do projeto no seu terminal/cmd
$ cd NLW2

# Vá para a pasta da aplicação Front End
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# Será aberta uma nova aba no seu navegador, 
# onde você poderá ler o QRCode com o endereço da aplicação
# (é necessário que o aplicativo Expo esteja instalado em 
# seu aparelho e que esteja na mesma rede do computador que 
# os comandos então sendo executados)
```

## 😯 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)


## 📝 Licença

Este projeto esta sobe a licença MIT.

Feito com ❤️ por André Souza 👋🏽 [Entre em contato!](https://www.linkedin.com/in/andrefmsouza/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br