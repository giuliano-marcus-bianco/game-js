# 💥 Efeitos Visuais e Sonoros com JavaScript

Este projeto demonstra como criar animações de **explosões animadas** com sprites e efeitos sonoros em **JavaScript puro (Vanilla JS)** usando **HTML5 Canvas**. O foco é oferecer feedback audiovisual dinâmico em resposta a eventos do usuário, como cliques ou colisões.


## 📽️ Demonstração

<!-- Adicione aqui um gif demonstrando as explosões animadas funcionando -->

![Demonstração de Explosão com Sprite Animation](./explosion-demo.gif)

## ✨ Funcionalidades

* Animação baseada em sprite sheet com `drawImage()`
* Detecção de eventos (click/mousemove) para disparar animações
* Sistema de `timer` para controlar a velocidade dos frames
* Remoção automática das explosões após o fim da animação
* Randomização de ângulo de rotação para efeito mais natural
* Efeito sonoro sincronizado com a explosão (executado apenas no frame inicial)
* Três variações de som para tornar cada evento único (`sound0.wav`, `sound1.wav`, `sound2.wav`)

## 🧱 Tecnologias Utilizadas

* HTML5 Canvas
* CSS3 para layout
* JavaScript ES6+ (classes, eventos, arrays, Math)

## 📦 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/giuliano-marcus-bianco/game-js
```

2. Navegue até o diretório do projeto:

```bash
cd 04_sprite-explosions-js
```

3. Abra o arquivo `index.html` no navegador.

## 🗂️ Estrutura do Projeto

```
📁 04_sprite-explosions-js/
├── boom.png
├── index.html
├── script.js
├── sound0.wav
├── sound1.wav
├── sound2.wav
└── style.css
```

## 📝 Explicações Importantes

* `drawImage()` com 9 argumentos é usado para recortar e posicionar cada frame da sprite.
* `getBoundingClientRect()` garante que o clique seja corretamente interpretado no canvas.
* O `requestAnimationFrame()` é usado para criar o loop de renderização suave.
* A lógica de rotação é protegida com `ctx.save()` e `ctx.restore()` para isolar transformações.
* Objetos de explosão são removidos da tela após `frame > 5` via `splice()`.

## 🔄 Créditos

Baseado no tutorial de [Frank's Laboratory](https://www.youtube.com/watch?v=Eg_zUEy_lDE) sobre efeitos visuais com JavaScript e canvas.

## 🧠 Aprendizado

Este projeto ensina princípios fundamentais sobre animação baseada em eventos, manipulação de sprite sheets e sincronia entre som e imagem, sendo ótimo ponto de partida para criação de jogos web interativos.

---

🎮 Experimente alterar os sprites e sons para personalizar seus efeitos e criar novas experiências visuais!
