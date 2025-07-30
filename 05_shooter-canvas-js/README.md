# 🕹️ Crow of Duty

Este projeto é um jogo de tiro em 2D chamado **Crow of Duty**, desenvolvido com **JavaScript puro (Vanilla JS)** e **HTML5 Canvas**. Ele aborda animações com sprites, colisão pixel-a-pixel e efeitos visuais e sonoros interativos. Utiliza **Vite** para build e foi hospedado com **Firebase Hosting**.

## 🔗 Link para Jogar

Acesse o jogo aqui: [https://crow-of-duty.web.app/](https://crow-of-duty.web.app/)

## 📽️ Demonstração

<!-- Adicione aqui um gif demonstrando as sprites, explosões e trilhas em funcionamento -->

![Demonstração do Crow of Duty](./demonstracao.gif)

## ✨ Funcionalidades

* Game loop com `requestAnimationFrame`
* Delta time para animações sincronizadas em diferentes máquinas
* Sprites animados com `drawImage()` (9 argumentos)
* Detecção de colisão pixel-a-pixel via cores exclusivas (getImageData)
* Efeitos visuais: explosões, trilhas, camadas
* Sons personalizados para eventos no jogo
* Sistema de pontuação, vidas e game over

## 🚀 Tecnologias Utilizadas

* HTML5 Canvas
* CSS3
* JavaScript ES6+
* [Vite](https://vitejs.dev/) (para build)
* [Firebase Hosting](https://firebase.google.com/products/hosting)

## 📦 Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/giuliano-marcus-bianco/game-js.git
```

2. Instale as dependências e execute com Vite:

```bash
cd 05_shooter-canvas-js
npm install
npm run dev
```

3. Acesse `http://localhost:5173` no navegador.

## 🗂️ Estrutura do Projeto

```
📁 05_shooter-canvas-js/
├── .firebase/
├── dist/
├── node_modules/
├── public/
│   ├── background.png
│   ├── crow.mp3
│   ├── favicon.png
│   ├── game-over.png
│   ├── life.png
│   ├── raven.png
│   ├── slash.png
│   ├── sound0.wav
│   ├── sound1.wav
│   └── sound2.wav
├── .firebaserc
├── firebase.json
├── index.html
├── main.js
├── package.json
├── package-lock.json
├── style.css
└── vite.config.js
```

## 📌 Observações

* `main.js` é o ponto de entrada principal
* Sons estão organizados em arquivos `.wav` na raiz da pasta `public`
* `getImageData()` é usado para detectar cliques pixel-a-pixel
* A detecção de colisão é feita com cores únicas por objeto

## 🔄 Repositório

Repositório oficial: [https://github.com/giuliano-marcus-bianco/game-js](https://github.com/giuliano-marcus-bianco/game-js)

## 🧠 Aprendizado

Este projeto oferece uma base sólida para quem deseja se aprofundar em desenvolvimento de jogos 2D com JavaScript, abordando controle de performance, sprites, interação, estrutura de código limpa e escalável.

## 🛠️ Próximos Passos

- Adicionar função de pause ao jogo
- Criar evento para detectar mudança de largura e altura da tela
- Ao mudar o tamanho da tela, verificar se o pause está ativado; se não estiver, ativar automaticamente
- Ajustar o código para que o jogo seja responsivo à mudança de tamanho da tela
- Pesquisar como portar/traduzir o código para um aplicativo Android (APK)

---

🎯 Experimente o jogo, modifique sprites, sons ou crie novas funcionalidades!
