# 💬 Social Feed App

Uma aplicação de rede social criada com **React**, **TypeScript** e **Date-fns**, que simula uma timeline com publicações e comentários, semelhante ao feed de uma rede social moderna.

---

## 📚 Tecnologias

### ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

O **React** é uma biblioteca JavaScript para construção de interfaces de usuário de forma declarativa e baseada em componentes. Nesta aplicação, ele foi utilizado para:

- Dividir a interface em componentes reutilizáveis (`Post`, `Sidebar`, `Comment`, `Avatar`, etc)
- Gerenciar estado local com hooks (`useState`, `useEffect`)
- Controlar formulários e interações (ex: envio de comentários, curtidas)

### ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

O **TypeScript** adiciona tipagem estática ao JavaScript, ajudando a evitar erros comuns em tempo de desenvolvimento e melhorando a experiência com autocomplete e validação de tipos. Nesta aplicação, ele foi utilizado para:

- Tipar as props dos componentes (`PostProps`, `CommentProps`, etc)
- Garantir segurança ao manipular eventos, estados e funções (`FormEvent`, `ChangeEvent`, etc)
- Melhorar a legibilidade e manutenção do código

---

## ✨ Funcionalidades

- 🧑‍💻 Sidebar com perfil do usuário
- 📰 Feed de postagens com conteúdo variado (parágrafos e links)
- 💬 Sistema de comentários por postagem
- 👍 Curtidas nos comentários
- 🕒 Datas formatadas com `date-fns` em **pt-BR**
- 🧼 Estilização com CSS Modules

---



## 📁 Estrutura de Pastas
```bash
src/ 
├── assets/ 
├── components/ 
│ ├── avatar/ 
│ ├── comment/ 
│ ├── header/ 
│ ├── posts/ 
│ ├── sidebar/ 
│ └── wrapper/ 
├── App.tsx 
├── main.tsx 
├── global.css 
├── App.module.css
```

## 🧱 Componentes

- `Avatar.tsx`: Componente reutilizável para imagens de perfil
- `Sidebar.tsx`: Exibe o avatar, nome, função e botão para editar perfil
- `Post.tsx`: Renderiza um post completo com conteúdo, data e formulário de comentário
- `Comment.tsx`: Comentário com botão de like e delete
- `Header.tsx`: Cabeçalho da aplicação (se usado)
- `Wrapper.tsx`: Possível estrutura externa de layout

## 📦 Tecnologias

- React
- TypeScript
- date-fns
- CSS Modules
- @phosphor-icons/react (ícones)

📅 Formatação de datas
Utilizamos o date-fns para formatar:

format: para data completa (ex: "05 de Abril às 12:30h")

formatDistanceToNow: para tempo relativo (ex: "há 2 horas")

Com suporte à localização pt-BR.

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/social-feed-app.git
cd social-feed-app
```

2. Clone o repositório:
```bash
npm install
```
2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

📝 Licença
[MIT](https://choosealicense.com/licenses/mit/)