# 📚 Plataforma Conectar - Hub de Educação e Conhecimento

![Plataforma Conectar](https://)

## 📌 Visão Geral

**Plataforma Conectar** é um aplicativo móvel multifuncional desenvolvido em **React Native (TypeScript/JavaScript)** para unir estudantes, professores e entusiastas da educação. Com rede social, chat, fórum, live rooms, repositórios e mais, promove a partilha de conhecimento em um ambiente colaborativo e dinâmico.

## 🚀 Executando o Projeto

Siga as instruções abaixo para configurar e rodar o projeto localmente.

### 1️⃣ Clonando o Repositório

```sh
git clone https://github.com/gilson-leonel01/plataforma_conectar.git
cd plataforma_conectar
```

### 2️⃣ Configuração do Ambiente

#### 📌 Pré-requisitos:
- Node.js instalado (versão 16+ recomendada).
- Yarn ou npm como gerenciador de pacotes.
- Firebase configurado (para autenticação, chat, armazenamento e lives).
- Emulador Android/iOS ou dispositivo físico para testes.
- Criar um arquivo `.env` com credenciais do Firebase e APIs externas (ex.: WebRTC para lives).

#### 📌 Configuração:

1. Instalar as dependências:
   ```sh
   npm install
   # ou
   yarn install
   ```
2. Configurar o Firebase e APIs externas:
   - Adicione as credenciais do Firebase no arquivo `.env` (ex.: `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`).
   - Configure APIs para streaming de lives (ex.: WebRTC).
3. Iniciar o Metro Bundler:
   ```sh
   npm start
   # ou
   yarn start
   ```
4. Rodar o aplicativo no emulador ou dispositivo:
   ```sh
   npm run android
   # ou
   npm run ios
   ```

A aplicação estará disponível no emulador ou dispositivo conectado.

## 📝 Funcionalidades

- 📌 Rede social educacional com perfis, posts e interações.
- 📌 Chat em tempo real para conversas individuais e em grupo.
- 📌 Fóruns e comunidades públicas/privadas para debates.
- 📌 Live rooms para aulas e apresentações ao vivo.
- 📌 Repositórios para compartilhamento de arquivos e projetos.
- 📌 Publicação de vídeos e anexos educacionais.
- 📌 Criação de grupos e eventos colaborativos.

## 🛠️ Tecnologias Utilizadas

### 🔹 Frontend:
- React Native
- TypeScript/JavaScript
- React Navigation
- Firebase (Authentication, Firestore, Realtime Database, Storage)
- WebRTC (para lives)
- React Native Video
- Styled Components
- React Native Vector Icons
- React Native Document Picker

### 🔹 Backend:
- Firebase (Firestore para banco de dados, Authentication para login, Realtime Database para chat, Storage para arquivos)

## 📌 Links Úteis

- [Documentação do React Native](https://reactnative.dev/docs)
- [Firebase](https://firebase.google.com/docs)
- [React Navigation](https://reactnavigation.org/docs)
- [WebRTC](https://webrtc.org/)
- [React Native Video](https://github.com/react-native-video/react-native-video)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b minha-feature`).
3. Faça as alterações e commite (`git commit -m 'Minha nova feature'`).
4. Envie um pull request.

---

Desenvolvido com 💙 por [Gilson Leonel a.k.a G!](https://github.com/gilson-leonel01)