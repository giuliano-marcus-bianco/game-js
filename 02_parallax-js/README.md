# 🌄 Parallax em Jogos JavaScript

Este projeto mostra como criar o efeito de **parallax scrolling** em jogos 2D usando **JavaScript puro (Vanilla JS)** e **HTML5 Canvas**. O parallax traz profundidade visual e movimento dinâmico ao cenário ao mover diferentes camadas do fundo em velocidades variadas. O exemplo pode ser facilmente adaptado para jogos, sites ou qualquer experiência visual interativa.

## 📽️ Demonstração

<!-- Adicione aqui um gif mostrando o efeito parallax funcionando -->

![Demonstração do Parallax](./demo-parallax.gif)

## ✨ Funcionalidades

* Parallax com múltiplas camadas (backgrounds em diferentes velocidades)
* Controle de velocidade do parallax via slider interativo na interface
* Código modular e limpo usando **classes** JavaScript
* Rolagem infinita suave, sem gaps ou repetições visíveis
* Estrutura pronta para personalização: adicione/remova camadas e ajuste imagens facilmente
* Possibilidade de incluir controle por teclado para acelerar/desacelerar o fundo

## 🧱 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript ES6+ (Canvas API)

## 📦 Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/giuliano-marcus-bianco/game-js.git
   ```
2. Navegue até o diretório do projeto:

   ```bash
   cd 02_parallax-js
   ```
3. Abra o arquivo `index.html` em seu navegador.

## 🗂️ Estrutura do Projeto

```
parallax-js/
├── imgs/
│   ├── layer-1.png
│   ├── layer-2.png
│   ├── layer-3.png
│   ├── layer-4.png
│   ├── layer-5.png
├── index.html
├── README.md
├── script.js
└── style.css
```

## 📝 Explicações Importantes

* Cada camada do fundo é um objeto gerenciado por uma **classe Layer**, que controla a imagem, a posição e a velocidade relativa.
* O valor de **gameSpeed** pode ser ajustado dinamicamente com o slider (ou por teclado, se implementado).
* O efeito parallax acontece ao desenhar várias imagens de background, cada uma movendo-se a uma fração diferente da velocidade principal do jogo.
* O método de rolagem infinita evita gaps usando cálculo de posição e reposicionamento automático.
* O canvas é centralizado e configurado para 800x700px, mas pode ser ajustado conforme a necessidade do projeto.

## 💡 Dicas e Personalização

* Substitua os backgrounds por suas próprias imagens para criar efeitos exclusivos.
* Adicione novas camadas ajustando o array de layers no código.
* Para melhorar a performance em dispositivos móveis, utilize imagens menores.
* Implemente controles adicionais, como setas ou teclas de atalho, para alterar a velocidade do parallax durante o jogo.

## 📚 Conceitos Aplicados

* **Parallax:** ilusão de profundidade criada pelo movimento desigual de camadas do fundo.
* **Canvas:** área de desenho para renderizar gráficos 2D em tempo real.
* **RequestAnimationFrame:** otimiza a atualização dos frames para animações suaves.
* **Classes:** organização orientada a objetos para facilitar expansão e manutenção do código.
* **Slider HTML:** permite alterar variáveis do jogo em tempo real via interface.

## 🔄 Créditos

Baseado no tutorial em vídeo [Parallax in JavaScript Games](https://www.youtube.com/watch?v=Mg7ibYWhjPI).

## 🧠 Aprendizado

Este projeto ensina como estruturar rolagens e animações de fundo de maneira eficiente e reutilizável — uma base fundamental para criação de jogos, sites animados e experiências web envolventes.

---

👨‍💻 Fique à vontade para modificar, experimentar e criar seus próprios efeitos de parallax!
