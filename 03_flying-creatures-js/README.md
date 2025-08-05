# 🦇🌀 Padrões de Movimento de Criaturas Voadoras em JavaScript

Este repositório contém **quatro miniprojetos** em **Vanilla JS** e **HTML5 Canvas** que demonstram diferentes técnicas de animação de inimigos para jogos. Você aprenderá a gerar grupos de personagens controlados por código e aplicar diversos padrões de movimento — de vibrações caóticas a trajetórias senoidais, circulares e em enxame.

## 📽️ Demonstração

<!-- Adicione aqui um gif demonstrando as animações em funcionamento -->

![Demonstração das Criaturas Voando](./demo-flying-creatures.gif)

## ✨ Funcionalidades

* Geração massiva de inimigos via **classes** (`Enemy`)
* Carregamento de **sprite sheets** e recorte de quadros com `drawImage()`
* Quatro padrões de movimento prontos:

  1. **Jitter aleatório** (vibração)
  2. **Onda senoidal horizontal**
  3. **Órbitas e lóbulos** com `Math.sin`/`Math.cos`
  4. **Enxame autônomo** usando interpolação de posição
* Randomização de velocidade, amplitude, intervalo de “batidas de asa” e ponto inicial
* Loop de animação suave com `requestAnimationFrame`
* Código limpo, comentado e facilmente extensível

## 🧱 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript ES6+
* Canvas API

## 📦 Como Executar

```bash
# 1. Clone o repositório
git clone https://github.com/giuliano-marcus-bianco/game-js.git

# 2. Acesse a pasta
cd 03_flying-creatures-js

# 3. Abra o index.html no navegador
```

> **Dica:** use uma extensão de servidor local no VS Code (ou `npx serve`) para evitar problemas de CORS ao carregar imagens.

## 🗂️ Estrutura do Projeto

```text
📁 03_flying-creatures-js/
├── enemy1/
│   ├── enemy1.png
│   ├── index.html
│   ├── script.js
│   └── style.css
├── enemy2/
│   ├── enemy2.png
│   ├── index.html
│   ├── script.js
│   └── style.css
├── enemy3/
│   ├── enemy3.png
│   ├── index.html
│   ├── script.js
│   └── style.css
├── enemy4/
│   ├── enemy4.png
│   ├── index.html
│   ├── script.js
│   └── style.css
└── index.html
```

## 📝 Explicações Importantes

* `drawImage()` aceita **3, 5 ou 9 argumentos**; com 9, é possível recortar quadros específicos do sprite sheet.
* O loop usa `requestAnimationFrame`, garantindo sincronia com o refresh do navegador.
* `Math.random()`, `Math.floor()` e o operador `%` geram variação e controlam taxa de quadros.
* `Math.sin()` e `Math.cos()` produzem valores periódicos entre **-1** e **1**, ideais para trajetórias circulares ou onduladas.
* A movimentação em enxame redefine aleatoriamente um alvo (`newX`, `newY`) a cada *intervalo* e interpola a posição atual até lá.

## 🔄 Créditos

* Tutorial original baseado neste [vídeo gratuito](https://www.youtube.com/watch?v=pyhb8Y9qKUI&list=PLYElE_rzEw_uryBrrzu2E626MY4zoXvx2&index=6) sobre animação de criaturas.
---

👾 **Hackeie à vontade**: troque sprites, combine padrões de movimento ou adicione interatividade (mouse, teclado, colisões) para criar a sua própria experiência!
