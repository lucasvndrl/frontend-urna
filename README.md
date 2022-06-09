# PROJETO INTEGRADOR - URNA

A seguir você encontrará as instruções para rodar o frontend na sua máquina:

## Tecnologias necessárias

## VSCode
Utilizamos o VSCode como editor de código para nosso projeto.

## NodeJS
Necessária instalação do node

## React Native
Necessária instalação do React Native

## Expo

Utilizamos o expo para gerenciar nosso projeto, é necessário a instalação do mesmo na máquina

## Android Studio
Necessário um emulador de android para rodar o app

## Instalação

Para rodar o projeto na sua máquina, uma vez aberto, siga pro terminal e digite:

```bash
npm install
```
para instalar todas as dependências do projeto.

Com tudo instalado, é necessário alterar a url da api, que aponta pro seu backend. Em src/api você encontrará o arquivo 

```javascript
 import axios from "axios";

const api = axios.create({
  baseURL: "urlDoSeuBackLocal",
});

export default api;
```

Alterar a baseURL pro seu backend rodando localmente.

Após alterar para a url desejada, rodar no bash o script:

```bash
npm start
```

Aparecerá algo assim: 

```bash
Developer tools running on http://localhost:19002
Starting Metro Bundler
› Metro waiting on http://192.168.1.9:8081
› Linking is disabled because the client scheme cannot be resolved.

› Press a │ open Android
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press d │ show developer tools
› shift+d │ toggle auto opening developer tools on startup (disabled)

› Press ? │ show all commands

```

Então é só apertar 'a' para abrir o app direto no seu emulador do android


# Membros

Fazem parte do desenvolvimento deste projeto os membros:

* Lucas Alves Vanderlei Pedroza - <01299366@sempreuninassau.com.br>
* José Vitor dos Santos - <01306023@sempreuninassau.com.br>
* Hugo Filipe Siqueira Costa - <01289269@sempreuninassau.com.br>
* Renato Loureiro de Lima - <01301758@sempreuninassau.com.br>
* Victor Nacimento Brito Moreno Neves - <01302036@sempreuninassau.com.br>
* Filipe Luan da Silva - <01386106@sempreuninassau.com.br>
* José Gabriel Rodrigues dos Santos - <01308482@sempreuninassau.com.br>
* Gabriel Gomes Nunes - <01384456@sempreuninassau.com.br>
