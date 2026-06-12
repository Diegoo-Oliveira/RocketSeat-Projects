# Módulo 07 — Responsividade: Estratégia Mobile First Completa

## 🎯 Objetivo

Unificar a estratégia de responsividade do projeto, entender quando e como usar media queries com Mobile First, e ver o site completo adaptado para todos os tamanhos de tela.

---

## 🧠 Mobile First: A Filosofia

### O que é Mobile First?

É uma abordagem de design e desenvolvimento onde você **começa pelo menor tamanho de tela** e progressivamente adiciona estilos para telas maiores.

```css
/* ✅ Mobile First — estilos base para mobile, expande para desktop */
.hero {
  flex-direction: column;     /* Mobile: empilhado */
}

@media (min-width: 1024px) {
  .hero {
    flex-direction: row;      /* Desktop: lado a lado */
  }
}
```

```css
/* ❌ Desktop First — começa no desktop e encolhe */
.hero {
  flex-direction: row;        /* Desktop */
}

@media (max-width: 1024px) {
  .hero {
    flex-direction: column;   /* Mobile — sobrescreve tudo depois */
  }
}
```

### Por que Mobile First é melhor?

1. **Performance**: O browser mobile baixa apenas os estilos base. Os estilos de desktop (media queries com `min-width`) só são processados em telas grandes
2. **Progressive Enhancement**: Começa do simples e adiciona complexidade
3. **Foco no essencial**: Força você a pensar no conteúdo prioritário
4. **Realidade**: Mais de 60% do tráfego web é mobile

---

## 📐 Breakpoints do Projeto

| Nome | Valor | Dispositivo |
|------|-------|-------------|
| `sm` | `480px` | Celulares maiores |
| `md` | `768px` | Tablets |
| `lg` | `1024px` | Laptops / Desktops |
| `xl` | `1280px` | Telas grandes |

---

## 📱 Visão Completa: HTML + CSS Responsivo

### `index.html` Completo

```html
<!DOCTYPE html>
<html lang="pt_BR">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Snitap Patins</title>
    <link rel="stylesheet" href="styles/index.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Montserrat:ital,wght@0,500;1,500&family=Syne:wght@700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>

    <!-- ── HEADER ── -->
    <header class="top">
      <a href="#">
        <img src="assets/logo.svg" alt="" />
      </a>
      <a href="#">
        <img src="assets/icons/shopping-bag.svg" alt="" />
        <span>1</span>
      </a>
    </header>

    <!-- ── HERO ── -->
    <section class="hero">
      <div>
        <h1>
          Snitap, sua vida mais
          <div>
            <span>radical</span>
            <span>divertida</span>
            <span>saudável</span>
            <span>radical</span>
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
      <div class="image-wrapper">
        <img class="ellipse" src="assets/hero/ellipse.svg" alt="" />
        <img class="patins" src="assets/hero/patins-image.png" alt="Patins colorido" />
        <img class="stars stars-1" src="assets/hero/stars-1.svg" alt="" />
        <img class="stars stars-2" src="assets/hero/stars-2.svg" alt="" />
      </div>
    </section>

    <!-- ── BANNER ── -->
    <section class="banner bg-gradient-animate">
      <div class="scroller">
        <div class="rolling">
          <img src="assets/banner.svg" alt="snitap patins" />
          <img src="assets/banner.svg" alt="snitap patins" />
          <img src="assets/banner.svg" alt="snitap patins" />
          <img src="assets/banner.svg" alt="snitap patins" />
        </div>
      </div>
    </section>

    <!-- ── GALLERY ── -->
    <section class="gallery">
      <header>
        <span>Nossa galeria</span>
        <h2>Momentos que valem a pena</h2>
      </header>
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

    <!-- ── FOOTER ── -->
    <footer>
      <div class="logo">
        <a href="#">
          <img src="assets/logo.svg" alt="" />
        </a>
        <span>Snitap</span>
      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Catálogo</a>
        <a href="#">Sobre</a>
        <a href="#">Contato</a>
      </nav>
      <p>© 2024 Snitap. Todos os direitos reservados.</p>
    </footer>

  </body>
</html>
```

---

## 🎨 CSS Responsivo por Seção

### global.css — Tipografia Responsiva

```css
/* Mobile: tamanhos menores */
:root {
  --text-hero: var(--text-3xl);    /* 48px no mobile */
  --text-section: var(--text-2xl); /* 32px no mobile */
}

/* Desktop: tamanhos maiores */
@media (min-width: 1024px) {
  :root {
    --text-hero: var(--text-4xl);    /* 80px no desktop */
    --text-section: var(--text-3xl); /* 48px no desktop */
  }
}
```

### header.css — Responsivo

```css
/* Mobile: padding menor */
header.top {
  padding: 1rem 1.25rem;
}

/* Desktop: padding maior */
@media (min-width: 1024px) {
  header.top {
    padding: 1.25rem 2rem;
  }
}
```

### hero.css — O Mais Complexo

```css
/* ═══ MOBILE (padrão) ═══ */
section.hero {
  flex-direction: column;    /* Texto em cima, imagem embaixo */
  text-align: center;
  padding: 1.5rem 1.25rem;
  gap: 2rem;

  & h1 {
    font-size: var(--text-3xl);  /* 48px */
  }

  & .buttons {
    justify-content: center;
    flex-wrap: wrap;             /* Botões quebram para 2 linhas se necessário */
    gap: 1rem;
  }

  & .image-wrapper {
    & .ellipse { width: 18rem; }   /* Menor no mobile */
    & .patins  { width: 22rem; }
  }
}

/* ═══ TABLET (≥ 600px) ═══ */
@media (min-width: 600px) {
  section.hero {
    & h1 {
      font-size: calc(var(--text-3xl) + 0.5rem);  /* Um pouco maior */
    }

    & .image-wrapper {
      & .ellipse { width: 22rem; }
      & .patins  { width: 28rem; }
    }
  }
}

/* ═══ DESKTOP (≥ 1024px) ═══ */
@media (min-width: 1024px) {
  section.hero {
    flex-direction: row;       /* Texto e imagem lado a lado */
    text-align: left;
    padding: 2.5rem 2rem;
    gap: 0;

    & h1 {
      font-size: var(--text-4xl); /* 80px */
    }

    & .buttons {
      justify-content: flex-start;
      flex-wrap: nowrap;
    }

    & .image-wrapper {
      & .ellipse { width: 28rem; }
      & .patins  { width: 36rem; }
    }
  }
}
```

### gallery.css — Grid Adaptável

```css
/* ═══ MOBILE (padrão) — coluna única ═══ */
section.gallery {
  & .content {
    display: grid;
    grid-template-areas:
      'A'
      'B'
      'C'
      'D';
    gap: 1.5rem;
  }

  /* Todas as figuras ocupam 1 coluna */
  & figure:nth-child(1) { grid-area: A; }
  & figure:nth-child(2) { grid-area: B; }
  & figure:nth-child(3) { grid-area: C; }
  & figure:nth-child(4) { grid-area: D; }
}

/* ═══ TABLET (≥ 600px) — 2 colunas ═══ */
@media (min-width: 600px) {
  section.gallery {
    & .content {
      grid-template-areas:
        'A B'
        'C D';
      gap: 2rem;
    }
  }
}

/* ═══ DESKTOP (≥ 1024px) — layout especial ═══ */
@media (min-width: 1024px) {
  section.gallery {
    & .content {
      grid-template-areas:
        'A B B'
        'C C D';
      gap: 2.5rem;
    }
  }
}
```

### footer.css — De Coluna para Linha

```css
/* ═══ MOBILE (padrão) — coluna ═══ */
footer {
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 3rem 1.25rem 2rem;

  & nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
}

/* ═══ DESKTOP (≥ 768px) — linha ═══ */
@media (min-width: 768px) {
  footer {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    padding: 4rem 2rem 2rem;

    & nav {
      flex-wrap: nowrap;
      gap: 2rem;
    }
  }
}
```

---

## 🔍 A Meta Viewport — Essencial para Mobile

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Esta linha no `<head>` é **obrigatória** para qualquer site responsivo.

**Sem ela**: O browser mobile simula uma tela de 980px e depois encolhe tudo — o site parece minúsculo.

**Com ela**: O browser usa a largura real do dispositivo (`width=device-width`) sem zoom (`initial-scale=1.0`).

---

## 🧪 Testando a Responsividade

### No Browser (DevTools)

1. Pressione `F12` para abrir o DevTools
2. Clique no ícone de celular/tablet (ou `Ctrl+Shift+M`)
3. Selecione dispositivos pré-configurados ou defina largura customizada

### Pontos de Verificação

| Largura | O que verificar |
|---------|-----------------|
| 375px | iPhone SE — layout mais estreito possível |
| 390px | iPhone 14 — celular mais comum |
| 768px | iPad — transição mobile/tablet |
| 1024px | iPad Pro landscape / laptop pequeno |
| 1280px | Desktop padrão |
| 1440px | Desktop grande |
| 1920px | Full HD — verificar `max-width` |

---

## 📋 Checklist de Responsividade

Antes de considerar o projeto concluído, verifique:

- [ ] O texto do hero está legível em 375px?
- [ ] Os botões são clicáveis em mobile? (mínimo 44px × 44px)
- [ ] As imagens não estouram a tela horizontalmente?
- [ ] O footer empilha corretamente em mobile?
- [ ] A galeria mostra as fotos em coluna única no mobile?
- [ ] O banner de rolagem funciona em todas as telas?
- [ ] Não há scroll horizontal indesejado?
- [ ] As fontes são legíveis sem zoom? (mínimo 16px para corpo)
- [ ] As animações funcionam (ou degradam graciosamente) em todos os browsers?

---

## 🏆 Resumo de Técnicas Utilizadas

| Técnica | Onde foi usada | Por que |
|---------|---------------|---------|
| **CSS Custom Properties** | global.css | Consistência e manutenção |
| **CSS Reset** | global.css | Comportamento uniforme entre browsers |
| **Flexbox** | header, hero, footer | Layout 1D (linha ou coluna) |
| **CSS Grid** | gallery | Layout 2D (linhas E colunas) |
| **CSS Nesting** | todos os arquivos | Organização e legibilidade |
| **@keyframes** | hero, banner | Animações de loop |
| **animation-timeline: view()** | gallery | Animação baseada em scroll |
| **transition** | header, hero, footer | Interações suaves no hover |
| **pseudo-elemento ::after** | footer | Underline animado |
| **transform + translate** | hero | Centralização e animação performática |
| **overflow: hidden** | hero, gallery, banner | Controle visual e efeito de "janela" |
| **Media Queries (min-width)** | todos | Mobile First responsivo |
| **Semantic HTML** | todos | Acessibilidade e SEO |

---

## 🎓 O que aprender a seguir?

Após dominar este projeto, os próximos passos são:

1. **JavaScript**: Adicionar interatividade (menu hambúrguer no mobile, filtros na galeria)
2. **CSS Scroll Snap**: Navegação suave entre seções
3. **Intersection Observer API**: Alternativa JS para animation-timeline
4. **SASS/SCSS**: Variáveis e mixins mais poderosos que o CSS nativo
5. **Performance**: Lazy loading de imagens, Critical CSS

---

🎉 **Parabéns!** Você completou o tutorial da LP de Patins Animada!

← Voltar para: [README — Índice](./README.md)
