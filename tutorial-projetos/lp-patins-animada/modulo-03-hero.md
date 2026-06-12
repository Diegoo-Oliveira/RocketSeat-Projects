# Módulo 03 — Hero Section: Animação de Texto e Patins Flutuantes

## 🎯 Objetivo

Criar a seção principal da página com:
- Texto com palavras rotativas animadas com `@keyframes`
- Dois botões de ação (comprar e demonstração)
- Imagem dos patins com efeito de flutuação
- Elementos decorativos (estrelas e elipse)

---

## 📄 HTML: Seção Hero

```html
<section class="hero">
  <!-- Lado esquerdo: texto e botões -->
  <div>
    <h1>
      Snitap, sua vida mais
      <div>
        <span>radical</span>
        <span>divertida</span>
        <span>saudável</span>
        <span>radical</span><!-- repetição para loop suave -->
      </div>
    </h1>

    <div class="buttons">
      <a href="#" class="button buy">
        <img src="assets/icons/shopping-bag.svg" alt="" />
        Comprar agora
      </a>
      <a href="#" class="button play">
        <div class="play-icon">
          <img src="assets/icons/play.svg" alt="" />
        </div>
        Ver demonstração
      </a>
    </div>
  </div>

  <!-- Lado direito: imagem e decorações -->
  <div class="image-wrapper">
    <img
      class="ellipse"
      src="assets/hero/ellipse.svg"
      alt=""
    />
    <img
      class="patins"
      src="assets/hero/patins-image.png"
      alt="Patins colorido"
    />
    <img class="stars stars-1" src="assets/hero/stars-1.svg" alt="" />
    <img class="stars stars-2" src="assets/hero/stars-2.svg" alt="" />
  </div>
</section>
```

### Estrutura Visual

```
┌──────────────────────────────────────────────────────┐
│  HERO                                                │
│                                                      │
│  ┌─────────────────┐    ┌──────────────────────────┐ │
│  │ Snitap, sua     │    │   ⭐                      │ │
│  │ vida mais       │    │       🛼 (patins)         │ │
│  │ [radical]       │    │   ⭐                      │ │
│  │ [divertida]     │    │   (  elipse SVG  )        │ │
│  │ [saudável]      │    │                          │ │
│  │                 │    └──────────────────────────┘ │
│  │ [Comprar] [▶]   │                                │
│  └─────────────────┘                                │
└──────────────────────────────────────────────────────┘
```

**Por que o quarto `<span>` "radical" é repetido?**

Para a animação de loop ficar **suave**! Quando chegamos ao último slide, precisamos voltar para o primeiro sem um salto brusco. A sequência é:
```
radical → divertida → saudável → radical (volta ao início sem pulo)
```

---

## 📄 CSS: `styles/hero.css`

```css
section.hero {
  max-width: 80rem;
  width: 100%;
  padding: 2.5rem 2rem;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  /* ─── Título ─── */

  & h1 {
    max-width: 40rem;
    font: 500 var(--text-3xl) / 1.1 var(--ff-base);
  }

  /* Container das palavras rotativas */
  & h1 div {
    display: inline-block;
    overflow: hidden;       /* Esconde palavras fora da área */
    height: 5rem;           /* Mostra apenas UMA palavra por vez */
    width: min-content;
    vertical-align: bottom;
  }

  /* Cada palavra */
  & h1 span {
    display: block;
    animation: slideUp 5s 2s infinite ease;
  }

  /* Cores de cada palavra */
  & h1 span:nth-child(1),
  & h1 span:nth-child(4) {
    color: var(--snitap-sky-mid);    /* Azul — radical */
  }

  & h1 span:nth-child(2) {
    color: var(--snitap-joy-mid);    /* Rosa — divertida */
  }

  & h1 span:nth-child(3) {
    color: var(--snitap-leaf-mid);   /* Verde — saudável */
  }

  /* ─── Botões ─── */

  & .buttons {
    display: flex;
    gap: 2rem;
    margin-top: 3rem;

    & .button {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border-radius: 5rem;
      transition: scale 350ms;

      &.buy {
        padding: 1.5rem 3rem;
        background-color: var(--snitap-sun);
        font: 500 var(--text-md) / 1 var(--ff-base);
      }

      &.play {
        gap: 1rem;
        font: 500 var(--text-sm) / 1.5 var(--ff-base);

        & .play-icon {
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--highlights);
          border-radius: 50%;

          & img {
            filter: invert(1);
          }
        }
      }

      &:hover {
        scale: 1.05;
      }
    }
  }

  /* ─── Imagem ─── */

  & .image-wrapper {
    position: relative;
    flex-shrink: 0;

    & .ellipse {
      width: 28rem;
    }

    & .patins {
      width: 36rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%);

      animation: float 3s ease-in-out infinite;
    }

    & .stars {
      position: absolute;
      animation: spin 6s linear infinite;
    }

    & .stars-1 {
      top: 10%;
      right: 5%;
      width: 3rem;
    }

    & .stars-2 {
      bottom: 15%;
      left: 5%;
      width: 2rem;
      animation-direction: reverse;
    }
  }
}

/* ─── Keyframes ─── */

@keyframes slideUp {
  0%, 20% {
    transform: translateY(0);
  }
  25%, 45% {
    transform: translateY(-100%);
  }
  50%, 70% {
    transform: translateY(-200%);
  }
  75%, 100% {
    transform: translateY(-300%);
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(-50%, -55%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
}

@keyframes spin {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
}

/* ─── Responsividade Desktop ─── */

@media (max-width: 1024px) {
  section.hero {
    flex-direction: column;
    text-align: center;

    & .buttons {
      justify-content: center;
    }

    & .image-wrapper {
      margin-top: 3rem;

      & .ellipse {
        width: 20rem;
      }

      & .patins {
        width: 26rem;
      }
    }
  }
}
```

---

## 🧠 Explicação dos Conceitos

### 1. Animação de Texto com `@keyframes slideUp`

Este é o coração da página! A animação desliza as palavras verticalmente, mostrando uma por vez.

**Como funciona:**

```
┌────────────┐  ← overflow: hidden (janela visível — 5rem de altura)
│  radical   │  ← span 1 (visível)
└────────────┘
  divertida     ← span 2 (escondida abaixo)
  saudável      ← span 3 (escondida abaixo)
  radical       ← span 4 (escondida abaixo — repetição para loop)
```

A animação move todo o bloco para cima em etapas:

```css
@keyframes slideUp {
  0%, 20%    → translateY(0)      = "radical" visível
  25%, 45%   → translateY(-100%)  = "divertida" visível
  50%, 70%   → translateY(-200%)  = "saudável" visível
  75%, 100%  → translateY(-300%)  = "radical" (cópia) visível
}
```

**`animation: slideUp 5s 2s infinite ease;`**

| Parte | Valor | Significado |
|-------|-------|-------------|
| nome | `slideUp` | qual @keyframe usar |
| duração | `5s` | tempo para completar 1 ciclo |
| delay | `2s` | espera 2s antes de começar |
| repetição | `infinite` | repete para sempre |
| timing | `ease` | suaviza início e fim |

### 2. Container com `overflow: hidden`

```css
& h1 div {
  display: inline-block;
  overflow: hidden;
  height: 5rem;       /* altura de 1 span */
  width: min-content;
  vertical-align: bottom;
}
```

O truque da animação depende de **esconder** as palavras fora da área. `overflow: hidden` age como uma "janela" que só mostra o que está dentro dos seus limites.

```
height: 5rem → mostra apenas 1 linha por vez
overflow: hidden → esconde o restante
```

**`vertical-align: bottom`**: Alinha o bloco das palavras animadas com a linha de base do texto "Snitap, sua vida mais".

**`width: min-content`**: Faz o container ter exatamente a largura necessária para a maior palavra, sem quebrar linha.

### 3. Animação de Flutuação dos Patins (`float`)

```css
@keyframes float {
  0%, 100% { transform: translate(-50%, -55%); }
  50%       { transform: translate(-50%, -60%); }
}
```

A imagem sobe e desce suavemente. Mas por que usamos `translate` ao invés de `top`?

- **`top` anima o layout** (causa reflow — o browser recalcula tudo)
- **`transform` não afeta o layout** (o browser só move o elemento na GPU, muito mais performático)

O `translate(-50%, -50%)` é o truque clássico de **centralização absoluta**:
```css
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); /* volta metade de si mesmo */
```

### 4. Botões com Efeito de Escala

```css
&:hover {
  scale: 1.05;
}

transition: scale 350ms;
```

`scale: 1.05` aumenta o elemento em 5% ao passar o mouse. `transition` torna essa mudança suave.

> 💡 **`scale` vs `transform: scale()`**: A propriedade `scale` é mais moderna e específica. Ambas funcionam, mas `scale` sozinha não sobrescreve outras transforms aplicadas.

### 5. `filter: invert(1)` — Ícone Branco

```css
& img {
  filter: invert(1);
}
```

O ícone de play original é preto. Como o fundo do botão é preto (`var(--highlights)`), usamos `filter: invert(1)` para **inverter as cores** e deixar o ícone branco — sem precisar de uma segunda versão SVG!

### 6. Estrelas Girando (`spin`)

```css
@keyframes spin {
  from { rotate: 0deg; }
  to   { rotate: 360deg; }
}

& .stars-2 {
  animation-direction: reverse;  /* gira no sentido contrário */
}
```

As duas estrelas giram em **direções opostas** para criar um efeito mais dinâmico.

---

## 📱 Mobile First — A Hero Section

No **mobile**, a seção fica em coluna (texto em cima, imagem embaixo). No desktop, ficam lado a lado.

```css
/* Mobile (padrão — sem media query) */
section.hero {
  flex-direction: column;
  text-align: center;
}

/* Desktop */
@media (min-width: 1024px) {
  section.hero {
    flex-direction: row;    /* lado a lado */
    text-align: left;
  }
}
```

Reduzimos também o tamanho das imagens no mobile com variáveis de tamanho menores:

```css
/* Mobile */
& h1 {
  font-size: var(--text-3xl);  /* 48px */
}

/* Desktop */
@media (min-width: 1024px) {
  & h1 {
    font-size: var(--text-4xl);  /* 80px */
  }
}
```

---

➡️ Próximo módulo: [Módulo 04 — Banner Rolante](./modulo-04-banner.md)
