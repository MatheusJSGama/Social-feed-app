# 💬 Social Feed App

Uma aplicação de rede social criada com **React**, **TypeScript** e **Date-fns**, que simula uma timeline com publicações e comentários, semelhante ao feed de uma rede social moderna.

---
# :film_strip: vídeo da aplicação

https://github.com/user-attachments/assets/14917197-f727-4abc-83ff-2843e576f754

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

### ![CSS#](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

O **CSS Modules permite** escrever CSS de forma modular e com escopo local.
Utilizado para estilizar os componentes sem risco de conflito de classes globais, com arquivos como Task.module.css, Header.module.css, etc.

##

📅 O **Date-fns** é uma biblioteca para manipulação e formatação de datas no JavaScript, com uma API moderna e modular. Nesta aplicação, ele foi utilizado para:

Formatação de datas completas com format
Exemplo: "05 de Abril às 12:30h"

⏳ Tempo relativo ao momento atual com formatDistanceToNow
Exemplo: "há 2 horas"

Com suporte à localização em pt-BR, para garantir uma melhor experiência para usuários brasileiros.

##

O **Phosphor Icons** é uma biblioteca de ícones personalizáveis para React.
🔹 Utilizado para exibir ícones de adicionar, deletar e status das tarefas de forma elegante e responsiva.

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
- `Header.tsx`: Cabeçalho da aplicação
- `Wrapper.tsx`: Estrutura externa de layout

## 🚀 Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/matheusjsgama/social-feed-app.git
cd social-feed-app
```

2. Instale as dependências:
```bash
npm install
```
2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

📝 Licença
[MIT](https://choosealicense.com/licenses/mit/)
