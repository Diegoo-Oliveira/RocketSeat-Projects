# Módulo 04 — Banner: Faixa de Texto com Rolagem Infinita

## 🎯 Objetivo

Criar uma faixa horizontal que rola continuamente da direita para a esquerda, com gradiente de cor animado no fundo.

---

## 📄 HTML: Seção Banner

```html
<section class="banner">
  <div class="scroller">
    <!-- Duplicamos o conteúdo para criar o efeito de loop infinito -->
    <div class="rolling">
      <img src="assets/banner.svg" alt="snitap patins" />
      <img src="assets/banner.svg" alt="snitap patins" />
      <img src="assets/banner.svg" alt="snitap patins" />
      <img src="assets/banner.svg" alt="snitap patins" />
    </div>
  </div>
</section>
```

### Estrutura do HTML

```
<section class="banner">              ← Container externo (largura total)
  <div class="scroller">             ← Janela com overflow: hidden
    <div class="rolling">            ← Fila de imagens que se move
      <img> <img> <img> <img>        ← Mesma imagem 4x (para loop)
    </div>
  </div>
</section>
```

**Por que duplicar a imagem 4 vezes?**

O truque da rolagem infinita: quando a animação chega ao final, ela volta ao início — mas se a fila de imagens for grande o suficiente, essa "volta" acontece **fora da tela visível**, tornando o loop imperceptível:

```
Visível ↓
┌────────────────────────────┐
│ [img1][img2][img3][img4]   │→ rolando para esquerda...
└────────────────────────────┘
                             [img1] aparece de novo → loop!
```

---

## 📄 CSS: `styles/banner.css`

```css
.banner {
  width: 100%;
  padding-block: 2.5rem;
  overflow: hidden;

  .scroller {
    width: 100%;
    overflow: hidden;
    padding-block: 1rem;
  }

  .rolling {
    display: flex;
    gap: 1.5rem;

    animation: rolling 20s linear infinite;
  }

  .bg-gradient-animate {
    background: linear-gradient(
      90deg,
      var(--snitap-sky-light),
      var(--snitap-joy-light),
      var(--snitap-sun),
      var(--snitap-sky-light)
    );
    background-size: 300% 100%;

    animation: gradient-move 4s ease infinite;
  }
}

/* ─── Keyframes ─── */

@keyframes rolling {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

---

## 🧠 Explicação dos Conceitos

### 1. O Truque da Rolagem Infinita (`rolling`)

```css
.rolling {
  display: flex;        /* Imagens em fila horizontal */
  gap: 1.5rem;          /* Espaço entre elas */
  animation: rolling 20s linear infinite;
}

@keyframes rolling {
  from { transform: translateX(0); }    /* posição inicial */
  to   { transform: translateX(-50%); } /* move metade do total */
}
```

**Por que `-50%`?**

Como duplicamos as imagens (4 cópias), a animação precisa mover exatamente **metade** da largura total para que, ao reiniciar, a posição seja visualmente idêntica à posição inicial:

```
Total: [img1][img2][img3][img4]  = 100% de largura
       ├─────── 50% ───────┤
       [img1][img2] == [img3][img4]  (são idênticos!)

Quando chegamos a -50%, voltamos para 0% → seamless loop ✅
```

**`animation-timing-function: linear`**: Diferente de `ease`, que acelera e desacelera, `linear` mantém velocidade constante — essencial para o movimento fluido de uma esteira!

### 2. Duas camadas de `overflow: hidden`

```css
.banner {
  overflow: hidden;   /* Esconde o que sai da tela lateralmente */

  .scroller {
    overflow: hidden; /* Esconde também verticalmente */
  }
}
```

O `.banner` garante que o conteúdo não cause scroll horizontal na página. O `.scroller` isola a área de rolagem e permite adicionar padding sem quebrar o efeito.

### 3. Gradiente Animado no Fundo

```css
.bg-gradient-animate {
  background: linear-gradient(
    90deg,
    var(--snitap-sky-light),   /* Azul claro */
    var(--snitap-joy-light),   /* Rosa claro */
    var(--snitap-sun),         /* Amarelo */
    var(--snitap-sky-light)    /* Azul claro (fecha o loop) */
  );
  background-size: 300% 100%; /* Gradiente 3x maior que o elemento */

  animation: gradient-move 4s ease infinite;
}
```

**Como funciona o gradiente animado:**

Criamos um gradiente **maior que o elemento** (300% de largura) e "deslizamos" esse gradiente usando `background-position`:

```
background-size: 300% ← gradiente é 3x mais largo

[azul → rosa → amarelo → azul]
       ↑ posição 0%

[azul → rosa → amarelo → azul]
              ↑ posição 50%

[azul → rosa → amarelo → azul]
                    ↑ posição 100% (= 0%, loop!)
```

```css
@keyframes gradient-move {
  0%   { background-position: 0% 50%; }    /* início */
  50%  { background-position: 100% 50%; }  /* meio */
  100% { background-position: 0% 50%; }    /* volta ao início */
}
```

### 4. `padding-block` — Shorthand Moderno

```css
padding-block: 2.5rem;
```

É o equivalente moderno de:
```css
padding-top: 2.5rem;
padding-bottom: 2.5rem;
```

Faz parte das **CSS Logical Properties** — propriedades que respeitam a direção de escrita do documento (LTR/RTL). `block` = dimensão vertical, `inline` = dimensão horizontal.

---

## 📱 Mobile vs Desktop

O banner funciona bem em qualquer tamanho de tela por natureza, pois é `width: 100%`. O ajuste para mobile seria principalmente a **velocidade** da rolagem:

```css
/* Mobile: movimento mais rápido (tela menor = menos conteúdo visível) */
.rolling {
  animation-duration: 12s;
}

/* Desktop: movimento mais lento */
@media (min-width: 1024px) {
  .rolling {
    animation-duration: 20s;
  }
}
```

---

## 🎨 Variações do Efeito

Você pode personalizar facilmente:

```css
/* Rolagem mais rápida */
animation: rolling 8s linear infinite;

/* Rolagem na direção oposta */
animation: rolling 20s linear infinite reverse;

/* Pausa ao passar o mouse */
.scroller:hover .rolling {
  animation-play-state: paused;
}
```

---

➡️ Próximo módulo: [Módulo 05 — Galeria de Fotos](./modulo-05-gallery.md)
