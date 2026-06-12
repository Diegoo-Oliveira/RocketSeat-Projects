# Módulo 00 — Introdução e Estrutura do Projeto

## 🎯 O que vamos construir?

A **Snitap** é uma landing page para uma loja fictícia de patins inline. O projeto tem:

- Um **Header** fixo com logo e carrinho
- Uma **Hero Section** com animação de texto rotativo e imagem dos patins flutuando
- Um **Banner** com faixa de texto em rolagem infinita
- Uma **Galeria** de fotos com animação de entrada ao rolar a página
- Um **Footer** com links animados

## 🏗️ Estrutura de Pastas

```
lp-de-patins-animada/
│
├── index.html                  → HTML principal
│
├── assets/
│   ├── logo.svg               → Logo da marca
│   ├── banner.svg             → SVG do banner de texto
│   ├── icons/
│   │   └── shopping-bag.svg   → Ícone do carrinho
│   ├── hero/
│   │   ├── patins-image.png   → Foto dos patins (imagem principal)
│   │   ├── ellipse.svg        → Elipse decorativa
│   │   ├── stars-1.svg        → Estrelas decorativas
│   │   └── stars-2.svg        → Estrelas decorativas
│   └── gallery/
│       ├── image-1.png        → Fotos da galeria
│       ├── image-2.png
│       ├── image-3.png
│       └── image-4.png
│
└── styles/
    ├── index.css              → Arquivo de entrada (importa todos os outros)
    ├── global.css             → Reset e variáveis CSS
    ├── header.css             → Estilos do header
    ├── hero.css               → Estilos da seção hero
    ├── banner.css             → Estilos do banner rolante
    ├── gallery.css            → Estilos da galeria
    └── footer.css             → Estilos do rodapé
```

## 📁 Criando o Projeto do Zero

### Passo 1 — Crie as pastas

```
mkdir lp-de-patins-animada
cd lp-de-patins-animada
mkdir assets/icons assets/hero assets/gallery styles
```

### Passo 2 — Crie o arquivo de entrada CSS

O arquivo `styles/index.css` funciona como um **centralizador**: ele importa todos os outros arquivos CSS. Isso organiza melhor o código:

```css
/* styles/index.css */
@import url(global.css);
@import url(header.css);
@import url(hero.css);
@import url(banner.css);
@import url(gallery.css);
@import url(footer.css);
```

> 💡 **Por que separar o CSS em múltiplos arquivos?**
> Facilita a manutenção! Ao invés de procurar o estilo do header em um arquivo de 500 linhas, você vai direto no `header.css`. É uma boa prática profissional.

### Passo 3 — Fonts do Google

No `index.html`, vamos carregar 3 fontes do Google Fonts:

| Font | Peso | Uso |
|------|------|-----|
| **Montserrat** | 500 (normal e italic) | Textos gerais, botões |
| **Inter** | 500 | Textos de legenda, spans |
| **Syne** | 700 | Logo, títulos de seção |

```html
<!-- Colocar antes do </head> -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Montserrat:ital,wght@0,500;1,500&family=Syne:wght@700&display=swap"
  rel="stylesheet"
/>
```

> 💡 **`rel="preconnect"`**: Diz ao browser para abrir a conexão com o servidor das fontes antecipadamente, tornando o carregamento mais rápido.

## 📱 Estratégia Mobile First

Neste projeto usamos a abordagem **Mobile First**:

1. **Escreva o CSS base para telas pequenas** (375px — celulares)
2. **Use `@media (min-width: ...)` para adaptar para telas maiores** (tablets e desktops)

```css
/* ❌ Errado — Desktop First */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* Desktop */
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;   /* Mobile — sobrescreve depois */
  }
}

/* ✅ Correto — Mobile First */
.container {
  display: flex;
  flex-direction: column;          /* Mobile: empilhado */
}

@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Desktop: lado a lado */
  }
}
```

**Por que Mobile First?**
- Mais de 60% dos usuários acessam pelo celular
- O CSS mobile é mais simples (menos propriedades)
- Performance melhor em dispositivos mais fracos

---

➡️ Próximo módulo: [Módulo 01 — Global CSS](./modulo-01-global.md)
