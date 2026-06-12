# Módulo 06 — Footer: Rodapé com Links Animados

## 🎯 Objetivo

Criar o rodapé com logo, navegação e copyright, usando um efeito de **underline animado** nos links com `::after` e pseudo-elementos CSS.

---

## 📄 HTML: Rodapé

```html
<footer>
  <!-- Logo + Nome da marca -->
  <div class="logo">
    <a href="#">
      <img src="assets/logo.svg" alt="" />
    </a>
    <span>Snitap</span>
  </div>

  <!-- Links de navegação -->
  <nav>
    <a href="#">Home</a>
    <a href="#">Catálogo</a>
    <a href="#">Sobre</a>
    <a href="#">Contato</a>
  </nav>

  <!-- Copyright -->
  <p>© 2024 Snitap. Todos os direitos reservados.</p>
</footer>
```

### Estrutura

```
<footer>
  ├── .logo              ← Ícone + Nome
  ├── <nav>              ← Links de navegação
  │     ├── <a> Home
  │     ├── <a> Catálogo
  │     ├── <a> Sobre
  │     └── <a> Contato
  └── <p>                ← Copyright
```

**Por que `<footer>` e `<nav>` são importantes?**

São tags **semânticas** — comunicam a função do conteúdo:
- `<footer>`: rodapé da página
- `<nav>`: bloco de navegação

Isso é essencial para **acessibilidade**: leitores de tela anunciam "rodapé" e "navegação" para usuários com deficiência visual.

---

## 📄 CSS: `styles/footer.css`

```css
footer {
  max-width: 80rem;
  width: 100%;
  padding: 4rem 2rem 2rem;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* ─── Logo ─── */

  & .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font: 700 1.25rem / 1.3 'Syne', sans-serif;

    & img {
      width: 2rem;
      transition: rotate 350ms;

      &:hover {
        rotate: 90deg;
      }
    }
  }

  /* ─── Navegação ─── */

  & nav {
    display: flex;
    gap: 2rem;

    & a {
      width: fit-content;
      position: relative;

      font: 500 var(--text-sm) / 1.5 var(--ff-base);

      /* Linha decorativa antes (escondida) */
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;

        width: 100%;
        height: 1px;
        background-color: currentColor;

        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;

        transition:
          opacity 300ms,
          transform 300ms;
      }

      /* Aparece ao hover */
      &:hover::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }

  /* ─── Copyright ─── */

  & p {
    font: 500 var(--text-sm) / 1.5 var(--ff-base);
    opacity: 0.5;
  }
}

/* ─── Responsividade ─── */

@media (max-width: 768px) {
  footer {
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    & nav {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
```

---

## 🧠 Explicação dos Conceitos

### 1. O Efeito de Underline Animado com `::after`

Este é um dos efeitos de hover mais populares e elegantes do CSS moderno:

```css
& a {
  position: relative;  /* Contexto para o ::after */

  &::after {
    content: '';         /* Pseudo-elemento vazio */
    position: absolute;
    bottom: -2px;        /* Abaixo do texto */
    left: 0;

    width: 100%;         /* Mesma largura do link */
    height: 1px;         /* Linha fina */
    background-color: currentColor; /* Mesma cor do texto */

    opacity: 0;                /* Começa invisível */
    transform: scaleX(0);      /* Começa "encolhido" */
    transform-origin: left;    /* Expande da esquerda para a direita */

    transition:
      opacity 300ms,
      transform 300ms;
  }

  &:hover::after {
    opacity: 1;           /* Fica visível */
    transform: scaleX(1); /* Expande para o tamanho total */
  }
}
```

**O que acontece passo a passo:**

```
Normal:
  Home ← sem linha
  
Hover (início):
  Home
  ▏← linha começa a aparecer da esquerda

Hover (completo, 300ms depois):
  Home
  ────  ← linha completa
```

**`transform: scaleX(0/1)`**:
- `scaleX(0)` = largura 0 (invisível)
- `scaleX(1)` = largura original (100%)

**Por que `scaleX` ao invés de `width: 0` → `width: 100%`?**

`transform: scale` não causa **reflow** (recalcular o layout). Animar `width` é muito mais custoso para o browser. Use sempre `transform` para animações mais suaves.

**`transform-origin: left`**: Define o ponto de origem da transformação. Com `left`, a linha cresce da esquerda para a direita. Com `right`, cresceria da direita para a esquerda. Com `center` (padrão), cresceria do centro.

**`currentColor`**: Palavra-chave CSS que usa **a cor herdada do texto**. Assim, se o link tiver uma cor diferente, o underline sempre combinará.

### 2. Pseudo-Elementos: `::after` e `::before`

Pseudo-elementos são elementos criados **puramente pelo CSS**, sem nenhum HTML adicional. São virtuais — não existem no DOM.

```
HTML:    <a href="#">Home</a>
         (apenas 1 elemento)

CSS:     a::before  → elemento virtual antes do "Home"
         a          → "Home" em si  
         a::after   → elemento virtual depois do "Home"
         (3 "elementos" no total para o CSS)
```

**Regras dos pseudo-elementos:**
- Precisam de `content: ''` (mesmo vazio) para aparecer
- `position: absolute` os posiciona em relação ao pai com `position: relative`
- São ótimos para decorações que não precisam estar no HTML

### 3. `transition` com Múltiplas Propriedades

```css
transition:
  opacity 300ms,
  transform 300ms;
```

Podemos animar múltiplas propriedades separando por vírgula. Aqui, tanto `opacity` quanto `transform` são animadas simultaneamente em 300ms.

Também poderíamos usar:
```css
transition: all 300ms;  /* Anima todas as propriedades — menos eficiente */
```

Mas especificar as propriedades é melhor para performance.

### 4. `rotate` vs `transform: rotate()`

```css
img {
  transition: rotate 350ms;

  &:hover {
    rotate: 90deg;
  }
}
```

A propriedade `rotate` é a forma moderna (CSS Transforms Level 2) de aplicar rotação. Equivalente a `transform: rotate(90deg)`, mas mais simples de escrever e não sobrescreve outros `transform` aplicados.

### 5. Layout do Footer com Flexbox

```css
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

```
┌──────────────────────────────────────────────────┐
│  🛼 Snitap    Home  Catálogo  Sobre  Contato    © │
│  ← espaço entre os 3 filhos (space-between) →    │
└──────────────────────────────────────────────────┘
```

Os 3 filhos do footer (`.logo`, `<nav>`, `<p>`) se distribuem automaticamente.

---

## 📱 Mobile First — Footer

No mobile, o footer empilha verticalmente:

```css
/* Mobile (padrão) */
footer {
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  padding: 3rem 1.5rem 2rem;

  & nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 768px) {
  footer {
    flex-direction: row;
    text-align: left;
    padding: 4rem 2rem 2rem;
  }
}
```

**`flex-wrap: wrap`**: Permite que os links de navegação quebrem para uma segunda linha em telas muito pequenas, ao invés de ficarem apertados.

---

## ♻️ Comparando Header e Footer

Note como header e footer compartilham o mesmo padrão de layout:

```css
/* Padrão compartilhado */
{
  max-width: 80rem;
  width: 100%;
  padding: [valor] 2rem;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

Em um projeto real, poderíamos criar uma classe utilitária `container` ou uma variável de layout para evitar repetição:

```css
/* Possível otimização */
.container {
  max-width: 80rem;
  width: 100%;
  padding-inline: 2rem;
  margin-inline: auto;
}
```

---

➡️ Próximo módulo: [Módulo 07 — Responsividade Mobile First](./modulo-07-responsividade.md)
