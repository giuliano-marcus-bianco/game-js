# 👾 Criando Criaturas para Jogos em JavaScript

Este projeto demonstra como criar criaturas animadas com JavaScript e HTML5 Canvas utilizando **orientação a objetos**, **herança com classes**, **animação baseada em tempo (delta time)** e **spritesheets**.

Aprenda como organizar seu código de forma modular e escalável para criar jogos performáticos e com comportamentos visuais variados.

## 📽️ Demonstração

<!-- Adicione aqui um gif demonstrando as animações em funcionamento -->

![Demonstração das criaturas animadas](./demonstracao.gif)

## ✨ Funcionalidades

* Estrutura de classes com herança (`extends`) e chamadas ao `super()`
* Lógica de game loop com `requestAnimationFrame`
* Cálculo de `delta time` para garantir consistência de animação
* Sprites animados com `drawImage()` (9 argumentos)
* Movimento aleatório e padrões personalizados (como senoide para fantasmas)
* Filtragem de objetos fora da tela
* Layers visuais simulando profundidade

## 🧱 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript ES6+

## 📦 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/giuliano-marcus-bianco/game-js.git
```

2. Navegue até o diretório do projeto:

```bash
cd 06_criaturas-js
```

3. Abra o arquivo `index.html` no navegador.

## 🗂️ Estrutura do Projeto

```
📁 06_criaturas-js/
├── index.html
├── style.css
├── script.js
└── imgs/
    ├── enemy_ghost.png
    ├── enemy_spider.png
    └── enemy_worm.png
```

## 📝 Explicações Importantes

* `super()` deve ser chamado antes de usar `this` em subclasses.
* `delta time` é usado para normalizar a velocidade da animação independentemente do desempenho da máquina.
* O canvas pode ser desenhado em camadas para simular profundidade com `array.sort()`.
* Cada criatura (worm, ghost, spider) tem comportamento e visuais distintos mas compartilham estrutura base.

## 🔄 Créditos

Baseado em um excelente tutorial gratuito sobre desenvolvimento de jogos com JavaScript e canvas.

## 🧠 Aprendizado

Esse projeto é uma excelente introdução a técnicas fundamentais para quem deseja trabalhar com:

* Desenvolvimento de jogos 2D
* Animação interativa na web
* JavaScript orientado a objetos
* Estruturação de código escalável

---

🎨 Sinta-se à vontade para trocar os sprites, criar novos comportamentos e expandir esse mini game como quiser!
