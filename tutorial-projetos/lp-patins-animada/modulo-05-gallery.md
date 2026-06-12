# Módulo 05 — Gallery: Grade de Fotos com Animação por Scroll

## 🎯 Objetivo

Criar uma galeria de imagens usando **CSS Grid** com áreas nomeadas, e aplicar uma animação de entrada que é ativada conforme o usuário rola a página usando `animation-timeline: view()`.

---

## 📄 HTML: Seção Gallery

```html
<section class="gallery">
  <!-- Cabeçalho da seção -->
  <header>
    <span>Nossa galeria</span>
    <h2>Momentos que valem a pena</h2>
  </header>

  <!-- Grade de fotos -->
  <div class="content">
    <figure>
      <img src="assets/gallery/image-1.png" alt="Pessoa andando de patins" />
    </figure>

    <figure data-delay>
      <img src="assets/gallery/image-2.png" alt="Patins coloridos" />
    </figure>

    <figure data-delay>
      <img src="assets/gallery/image-3.png" alt="Grupo andando de patins" />
    </figure>

    <figure>
      <img src="assets/gallery/image-4.png" alt="Patins em close" />
    </figure>
  </div>
</section>
```

### Por que `data-delay`?

O atributo `data-delay` é um **atributo de dados HTML** (`data-*`). Aqui, ele é usado como um **seletor CSS** para definir um delay diferente na animação de algumas imagens — criando um efeito escalonado:

```
Sem delay:    ████████ aparece na linha 100px-300px do scroll
Com delay:    ░░██████ aparece na linha 150px-350px do scroll (atrasada)
```

**Por que usar `data-*` ao invés de uma classe CSS?**

Ambos funcionam, mas `data-delay` é semanticamente mais claro: diz "este elemento tem um delay" sem misturar conceitos visuais com dados. Mas `class="delay"` também seria válido.

---

## 📄 CSS: `styles/gallery.css`

```css
section.gallery {
  width: 100%;
  max-width: 80rem;
  padding: 2.5rem 2rem;
  margin-inline: auto;

  /* ─── Cabeçalho ─── */

  & header {
    text-align: center;
  }

  & header span {
    font: 500 var(--text-sm) / 1.5 var(--ff-base);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.6;
  }

  & header h2 {
    font: 700 var(--text-2xl) / 1.2 var(--ff-accent);
    margin-top: 0.5rem;
  }

  /* ─── Grade de imagens ─── */

  & img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  & .content {
    margin-top: 2rem;
    display: grid;
    grid-template-areas:
      'A B B'
      'C C D';
    gap: 2.5rem;
  }

  /* Atribuindo cada figura a uma área do grid */
  & figure:nth-child(1) { grid-area: A; }
  & figure:nth-child(2) { grid-area: B; }
  & figure:nth-child(3) { grid-area: C; }
  & figure:nth-child(4) { grid-area: D; }

  /* ─── Estilo das figuras ─── */

  & figure {
    position: relative;
    border-radius: 2.5rem;
    overflow: hidden;
    line-height: 0;

    /* Animação de entrada por scroll */
    animation: image-appear linear backwards;
    animation-timeline: view();
    animation-range: 100px 300px;

    &[data-delay] {
      animation-range: 150px 350px;
    }

    &:hover img {
      scale: 1.05;
    }

    & img {
      transition: scale 500ms;
    }
  }
}

/* ─── Keyframe de entrada ─── */

@keyframes image-appear {
  from {
    opacity: 0;
    scale: 0.8;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

/* ─── Responsividade ─── */

/* Tablet */
@media (max-width: 768px) {
  section.gallery {
    & .content {
      grid-template-areas:
        'A B'
        'C D';
    }
  }
}

/* Mobile */
@media (max-width: 480px) {
  section.gallery {
    & .content {
      grid-template-areas:
        'A'
        'B'
        'C'
        'D';
    }
  }
}
```

---

## 🧠 Explicação dos Conceitos

### 1. CSS Grid com Áreas Nomeadas

O layout da galeria é um dos exemplos mais elegantes do CSS Grid:

```css
& .content {
  display: grid;
  grid-template-areas:
    'A B B'
    'C C D';
  gap: 2.5rem;
}
```

**O resultado visual:**

```
┌───┬───────┐
│ A │   B   │   ← B ocupa 2 colunas (B B)
├───────┬───┤
│   C   │ D │   ← C ocupa 2 colunas (C C)
└───────┴───┘
```

**Como funciona `grid-template-areas`:**
- Cada string `'A B B'` representa uma linha
- Cada palavra representa uma célula (coluna)
- Palavras iguais indicam que o elemento se expande por aquelas colunas
- `.` representa uma célula vazia

Para atribuir uma figura a uma área:
```css
figure:nth-child(1) { grid-area: A; }  /* figura 1 → área A (canto sup. esq.) */
figure:nth-child(2) { grid-area: B; }  /* figura 2 → área B (retângulo longo) */
```

> 💡 **Por que `nth-child` ao invés de classes?**
> Manter o HTML limpo! Não precisamos de `class="area-a"` no HTML. O CSS seleciona pelo número de ordem naturalmente.

### 2. `animation-timeline: view()` — Animação por Scroll ✨

Esta é uma das funcionalidades mais modernas e poderosas do CSS:

```css
& figure {
  animation: image-appear linear backwards;
  animation-timeline: view();
  animation-range: 100px 300px;
}
```

**O que é `animation-timeline: view()`?**

Normalmente, animações CSS são controladas pelo **tempo**. Com `animation-timeline: view()`, a animação é controlada pela **posição do elemento na viewport** (a área visível da tela).

```
Antes de entrar na tela:   opacity: 0, scale: 0.8  (início do @keyframe)
                            ↓ usuário rola para baixo
Elemento a 100px da borda: animação começa
                            ↓ continua rolando
Elemento a 300px da borda: animação completa
                            opacity: 1, scale: 1   (fim do @keyframe)
```

**`animation-range: 100px 300px`:**

Define quando (em relação à entrada na viewport) a animação começa e termina:
- `100px` → começa quando o topo do elemento está 100px dentro da viewport
- `300px` → termina quando está 300px dentro

**`animation-fill-mode: backwards`** (a parte `backwards` de `linear backwards`):

Mantém o estilo do `from` (`opacity: 0, scale: 0.8`) antes da animação começar. Sem isso, as imagens apareceriam normais e depois sumiriam antes de reaparecer.

> ⚠️ **Compatibilidade**: `animation-timeline` funciona em Chrome 115+ e Edge 115+. Firefox e Safari ainda têm suporte limitado (2024). Use como **progressive enhancement** — em browsers sem suporte, as imagens simplesmente aparecem normalmente.

### 3. Hover com `scale` na Imagem Interna

```css
& figure {
  overflow: hidden;     /* Esconde a imagem quando ela "cresce" */
  border-radius: 2.5rem;

  &:hover img {
    scale: 1.05;
  }

  & img {
    transition: scale 500ms;
  }
}
```

O efeito de zoom acontece assim:

```
Normal:                    Hover:
┌──────────────────┐       ┌──────────────────┐
│   ┌──────────┐   │       │   ┌──────────┐   │
│   │  foto    │   │  →→→  │ ┌─┤  foto    ├─┐ │
│   └──────────┘   │       │ │ │  (105%)  │ │ │
└──────────────────┘       │ └─┤          ├─┘ │
                            │   └──────────┘   │
                            └──────────────────┘
    figure: overflow hidden corta a imagem que cresceu
```

O `overflow: hidden` na `figure` garante que a imagem não "vaze" para fora das bordas arredondadas quando escalada.

### 4. `line-height: 0` na Figure

```css
figure {
  line-height: 0;
}
```

Imagens são elementos `inline` por padrão. Isso significa que o browser deixa um pequeno espaço embaixo delas (como se houvesse uma linha de texto). `line-height: 0` remove esse espaço extra e elimina um gap visual indesejado.

### 5. `object-fit: cover`

```css
img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
```

Se as imagens tiverem tamanhos diferentes, `object-fit: cover` garante que elas preencham o espaço disponível sem distorção, recortando o excesso (como o background-size: cover do CSS, mas para `<img>`).

---

## 📱 Mobile First — A Galeria

A galeria é o elemento mais complexo de adaptar. A abordagem Mobile First:

```css
/* Mobile (padrão) — coluna única */
& .content {
  display: grid;
  grid-template-areas:
    'A'
    'B'
    'C'
    'D';
  gap: 1.5rem;
}

/* Tablet */
@media (min-width: 600px) {
  & .content {
    grid-template-areas:
      'A B'
      'C D';
    gap: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  & .content {
    grid-template-areas:
      'A B B'
      'C C D';
    gap: 2.5rem;
  }
}
```

---

➡️ Próximo módulo: [Módulo 06 — Footer](./modulo-06-footer.md)
