# Módulo 02 — Header: Cabeçalho com Hover Animado

## 🎯 Objetivo

Criar o cabeçalho com logo e ícone de carrinho, usando Flexbox para o layout e `transition` para efeitos de hover interativos.

---

## 📄 HTML: `index.html` — Parte do Header

```html
<header class="top">
  <!-- Link do Logo -->
  <a href="#">
    <img src="assets/logo.svg" alt="" />
  </a>

  <!-- Link do Carrinho -->
  <a href="#">
    <img src="assets/icons/shopping-bag.svg" alt="" />
    <span>1</span>
  </a>
</header>
```

### Anatomia do HTML

```
<header class="top">         ← Tag semântica + classe para CSS
  │
  ├── <a href="#">           ← Link clicável
  │     <img logo />         ← Imagem do logo
  │
  └── <a href="#">           ← Link do carrinho
        <img sacola />       ← Ícone da sacola
        <span>1</span>       ← Contador de itens
```

**Por que `<header>` e não `<div>`?**
A tag `<header>` é **semântica** — ela diz ao browser, leitores de tela e mecanismos de busca que aquele bloco é o cabeçalho da página. Isso melhora acessibilidade e SEO.

**Por que `alt=""` nas imagens decorativas?**
O `alt` vazio (`alt=""`) indica para leitores de tela que a imagem é **decorativa** e deve ser ignorada. O logo não precisa ser lido porque já temos o nome da empresa no texto da página.

---

## 📄 CSS: `styles/header.css`

```css
header.top {
  max-width: 80rem;
  width: 100%;
  padding: 1.25rem 2rem;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;

    transition: transform 500ms;
  }

  img[src*='logo']:hover {
    transform: rotate(90deg);
  }

  img[src*='shopping']:hover {
    transform: rotate(-30deg);
  }

  a:last-child {
    position: relative;
    display: flex;
    align-items: center;

    span {
      position: absolute;
      top: -0.5rem;
      right: -0.75rem;

      width: 1.25rem;
      height: 1.25rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: var(--snitap-joy-mid);
      color: white;
      border-radius: 50%;

      font: 500 0.625rem/1 'Inter', sans-serif;
    }
  }
}
```

---

## 🧠 Explicação Bloco por Bloco

### 1. Layout e Largura Máxima

```css
header.top {
  max-width: 80rem;    /* 1280px — limita em telas muito largas */
  width: 100%;         /* Ocupa 100% até o máximo de 80rem */
  padding: 1.25rem 2rem;
  margin-inline: auto; /* Centraliza horizontalmente */
}
```

**`max-width` + `margin-inline: auto`** é o padrão mais comum para centralizar conteúdo:

```
┌─────────────────────────────────────────┐
│              Tela (1440px)              │
│   ┌─────────────────────────────────┐   │
│   │    Header (max 1280px)          │   │
│   │  ← margem auto → ← margem auto │   │
│   └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**`margin-inline: auto`** é o equivalente moderno de:
```css
margin-left: auto;
margin-right: auto;
```

### 2. Flexbox — Logo e Carrinho Lado a Lado

```css
display: flex;
align-items: center;
justify-content: space-between;
```

```
┌────────────────────────────────────────┐
│  🛼 Logo          🛍️ Sacola (1)        │
│  ← espaço entre os filhos →           │
└────────────────────────────────────────┘
```

- `align-items: center` — alinha verticalmente no centro
- `justify-content: space-between` — empurra logo para a esquerda e carrinho para a direita

### 3. CSS Nesting (Aninhamento)

```css
header.top {
  /* estilos do header */

  img {
    /* estilos das imagens DENTRO do header */
    width: 2rem;
  }
}
```

**CSS Nesting** é uma feature moderna do CSS (sem precisar de SASS!) que permite escrever seletores filhos dentro do pai. O código acima é equivalente a:

```css
/* Forma clássica (sem nesting): */
header.top {
  /* ... */
}
header.top img {
  width: 2rem;
}
```

> ⚠️ **Compatibilidade**: CSS Nesting nativo funciona em browsers modernos (Chrome 112+, Firefox 117+, Safari 16.5+). Para projetos que precisam de suporte a browsers mais antigos, use SASS ou PostCSS.

### 4. Seletor de Atributo — Efeito Hover Diferenciado

```css
img[src*='logo']:hover {
  transform: rotate(90deg);
}

img[src*='shopping']:hover {
  transform: rotate(-30deg);
}
```

**`[src*='logo']`** é um **seletor de atributo** que seleciona elementos onde o atributo `src` contém a string `'logo'`. O `*=` significa "contém".

Isso permite aplicar comportamentos diferentes ao logo e ao ícone do carrinho sem precisar adicionar classes extras no HTML!

**A animação funciona assim:**

```
Antes do hover:         Ao passar o mouse:
     🛼                      🛼 (girado 90°)
  transform: rotate(0deg)  transform: rotate(90deg)
  
  ← transition de 500ms →
```

### 5. Transition

```css
img {
  transition: transform 500ms;
}
```

`transition: [propriedade] [duração]`

A propriedade `transition` cria uma animação **suave** entre dois estados CSS. Sem ela, a rotação aconteceria instantaneamente (parece um bug). Com ela, a transição leva 500 milissegundos.

### 6. Badge do Carrinho — Contador Flutuante

```css
a:last-child {
  position: relative;  /* Contexto de posicionamento */

  span {
    position: absolute;  /* Posiciona em relação ao <a> pai */
    top: -0.5rem;        /* Sobe para cima do ícone */
    right: -0.75rem;     /* Empurra para a direita */

    width: 1.25rem;
    height: 1.25rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--snitap-joy-mid);  /* Rosa */
    color: white;
    border-radius: 50%;  /* Deixa cirular */

    font: 500 0.625rem/1 'Inter', sans-serif;
  }
}
```

**Position Absolute + Relative:**

```
┌────────────────────┐   ← <a> (position: relative)
│                    │
│    🛍️              │   ← img da sacola
│         ① ←─────────── <span> (position: absolute)
│                    │      top: -8px, right: -12px
└────────────────────┘
```

O `position: relative` no pai cria o **contexto** para o filho `absolute`. Sem o `relative`, o span se posicionaria em relação ao `<body>`.

**`border-radius: 50%`**: Em um elemento com `width` e `height` iguais, cria um círculo perfeito.

---

## 📱 Mobile vs Desktop

O header é **responsivo por natureza**: no mobile (tela estreita), o logo e o carrinho ficam nas pontas por causa do `space-between`. No desktop (tela larga), eles ficam igualmente nas pontas, mas com mais espaço entre eles.

Não precisamos de media query para o header básico! Mas se quisermos aumentar o padding em telas maiores:

```css
/* Mobile: padding menor */
header.top {
  padding: 1rem 1.5rem;
}

/* Desktop: padding maior */
@media (min-width: 1024px) {
  header.top {
    padding: 1.25rem 2rem;
  }
}
```

---

➡️ Próximo módulo: [Módulo 03 — Hero Section](./modulo-03-hero.md)
