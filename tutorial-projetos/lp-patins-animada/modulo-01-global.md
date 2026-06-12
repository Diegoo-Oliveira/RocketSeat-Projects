# Módulo 01 — Global CSS: Reset e Design Tokens

## 🎯 Objetivo

Criar a "fundação" visual do projeto: resetar os estilos padrão do browser e definir as **variáveis CSS** (Design Tokens) que serão usadas em todo o site.

---

## 📄 Arquivo: `styles/global.css`

### Código Completo

```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --snitap-sun: #ffcd1e;
  --snitap-sky-mid: #06b6d4;
  --snitap-sky-light: #67e8f9;
  --snitap-joy-mid: #db2777;
  --snitap-joy-light: #f472b6;
  --snitap-leaf-mid: #16a34a;

  --text: #000000;
  --highlights: #000000;
  --background: #fafafa;

  --ff-base: 'Montserrat', sans-serif;
  --ff-accent: 'Syne', sans-serif;

  --text-sm: 0.875rem;   /* 14px */
  --text-md: 1rem;       /* 16px */
  --text-lg: 1.25rem;    /* 20px */
  --text-xl: 1.5rem;     /* 24px */
  --text-2xl: 2rem;      /* 32px */
  --text-3xl: 3rem;      /* 48px */
  --text-4xl: 5rem;      /* 80px */
}

body {
  font-family: var(--ff-base);
  background-color: var(--background);
  color: var(--text);
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
}
```

---

## 🧠 Explicação Linha por Linha

### 1. Reset Universal

```css
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

| Propriedade | Por que usar |
|-------------|-------------|
| `margin: 0` | Remove margens padrão dos elementos (ex: `<h1>` tem margem por padrão) |
| `padding: 0` | Remove padding padrão (ex: `<ul>` tem padding à esquerda) |
| `box-sizing: border-box` | Faz o `padding` e `border` ficarem **dentro** da largura total do elemento |

**Entendendo o `box-sizing`:**

```
┌─────────────────────────────────────┐
│  box-sizing: content-box (padrão)   │
│                                     │
│  width: 200px + padding: 20px       │
│  = elemento ocupa 240px na tela ❌  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  box-sizing: border-box             │
│                                     │
│  width: 200px + padding: 20px       │
│  = elemento ainda ocupa 200px ✅    │
└─────────────────────────────────────┘
```

O `*::after` e `*::before` aplicam o reset também nos **pseudo-elementos**, que são elementos criados pelo CSS (usados para decorações, como o underline animado do footer).

---

### 2. Variáveis CSS — Design Tokens

```css
:root {
  --snitap-sun: #ffcd1e;
  /* ... */
}
```

**O que é `:root`?** É o seletor para o elemento mais alto da página (o `<html>`). Variáveis definidas aqui ficam disponíveis em **todo o CSS**.

**Por que usar variáveis?**
- Mude a cor em um lugar e ela muda em todo o site
- Nomes semânticos (`--snitap-sun`) são mais fáceis de entender que códigos hexadecimais

**Paleta de cores do projeto:**

| Variável | Cor | Uso |
|----------|-----|-----|
| `--snitap-sun` | `#ffcd1e` ☀️ | Amarelo — botão principal de compra |
| `--snitap-sky-mid` | `#06b6d4` 🩵 | Ciano — primeira e quarta palavra animadas |
| `--snitap-sky-light` | `#67e8f9` | Ciano claro — gradiente do banner |
| `--snitap-joy-mid` | `#db2777` 💗 | Rosa — segunda palavra animada |
| `--snitap-joy-light` | `#f472b6` | Rosa claro — gradiente do banner |
| `--snitap-leaf-mid` | `#16a34a` 🍃 | Verde — terceira palavra animada |

**Sistema tipográfico com variáveis de tamanho:**

```css
--text-sm: 0.875rem;  /* 14px — legendas, spans */
--text-md: 1rem;      /* 16px — corpo do texto */
--text-lg: 1.25rem;   /* 20px — texto médio */
--text-xl: 1.5rem;    /* 24px — subtítulos */
--text-2xl: 2rem;     /* 32px — títulos de seção */
--text-3xl: 3rem;     /* 48px — títulos grandes (mobile) */
--text-4xl: 5rem;     /* 80px — título hero (desktop) */
```

> 💡 **Por que `rem` ao invés de `px`?**
> `rem` é relativo ao tamanho base do browser (geralmente 16px). Se o usuário aumentar o tamanho da fonte nas configurações de acessibilidade, o site inteiro se ajusta. `px` é fixo e ignora isso.

---

### 3. Estilos Base do Body

```css
body {
  font-family: var(--ff-base);
  background-color: var(--background);
  color: var(--text);
}
```

Define os estilos herdáveis que se propagam para todos os filhos. `font-family` e `color` são **propriedades herdáveis** — os filhos do `body` herdam automaticamente.

---

### 4. Reset de Links e Imagens

```css
a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
}
```

- **`text-decoration: none`**: Remove o sublinhado padrão dos links (iremos criar sublinhados animados customizados)
- **`color: inherit`**: Links herdam a cor do pai ao invés de usar o azul padrão do browser
- **`img { display: block }`**: Imagens são `inline` por padrão, o que cria um espaço extra embaixo. `block` remove esse bug

---

## 📱 Mobile First — O que muda no Global?

O `global.css` é **neutro** em relação a breakpoints — ele define tokens e resets que funcionam em qualquer tela. Mas note que usamos **`rem`** em vez de `px` para permitir escalabilidade.

---

➡️ Próximo módulo: [Módulo 02 — Header](./modulo-02-header.md)
