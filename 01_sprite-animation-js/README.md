# 🕹️ Sprite Animation em JavaScript

Este projeto demonstra como criar animações de sprites utilizando **JavaScript puro (Vanilla JS)** e **HTML5 Canvas**. Ele cobre desde técnicas simples até uma abordagem escalável e avançada baseada em manipulação de coordenadas e estrutura de dados dinâmica para diferentes estados de animação.

## 📽️ Demonstração

<!-- Adicione aqui um gif demonstrando as animações em funcionamento -->
![Demonstração da Sprite Animation](./demonstracao.gif)

## ✨ Funcionalidades

- Animação de sprites em canvas com `drawImage()`
- Controle de FPS com `staggerFrames`
- Estrutura de dados dinâmica para sprites com tamanhos e animações variáveis
- Interface com `<select>` para trocar animações em tempo real
- Compatível com sprite sheets regulares e irregulares

## 🧱 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript ES6+

## 📦 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/giuliano-marcus-bianco/game-js.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd 01_sprite-animation-js
   ```

3. Abra o `index.html` no seu navegador.

## 🗂️ Estrutura do Projeto

```
📁 sprite-animation-js/
├── index.html
├── style.css
├── script.js
└── shadow_dog.png
```

## 📝 Explicações Importantes

- O método `drawImage()` pode receber 3, 5 ou 9 argumentos, permitindo diferentes níveis de controle sobre a renderização da imagem.
- Utiliza `Math.floor()` e o operador `%` para criar uma lógica de repetição suave entre os frames.
- A troca de animação é feita por uma variável `playerState` associada à opção selecionada no menu.

## 🔄 Créditos

Tutorial baseado no conteúdo educacional gratuito sobre animação de sprites com JavaScript puro contido [nesse link](https://www.youtube.com/watch?v=CY0HE277IBM&list=PLYElE_rzEw_uryBrrzu2E626MY4zoXvx2&index=1).

## 🧠 Aprendizado

Este projeto ensina como estruturar animações de forma limpa, eficiente e escalável — conhecimentos úteis não só para jogos, mas para interfaces web interativas em geral.

---

👨‍💻 Sinta-se livre para modificar, adaptar e criar suas próprias animações com novos sprites!
