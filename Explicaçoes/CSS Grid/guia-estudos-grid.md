# Guia de estudos de CSS Grid

Este material acompanha as paginas HTML da pasta `CSS Grid`.

## 1. Ideia principal

CSS Grid organiza elementos em duas direcoes ao mesmo tempo:

- colunas
- linhas

Flexbox costuma ser melhor para alinhar itens em uma direcao principal. Grid
costuma ser melhor para montar estruturas com linhas e colunas.

## 2. Propriedades do container

O container recebe:

```css
.container {
  display: grid;
}
```

Depois voce define a grade:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px 120px;
  gap: 16px;
}
```

## 3. Linhas e colunas

- `grid-template-columns`: define as colunas.
- `grid-template-rows`: define as linhas.
- `gap`: define o espaco entre celulas.

Arquivos para abrir:

- [grid-template-rows.html](./grid-template-rows.html)
- [grid-column.html](./grid-column.html)
- [grid-row.html](./grid-row.html)
- [gap.html](./gap.html)

## 4. Areas nomeadas

Areas nomeadas deixam layouts grandes mais faceis de ler:

```css
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}
```

Arquivo para abrir:

- [grid-template-areas.html](./grid-template-areas.html)

## 5. Shorthand

`grid-template` permite declarar areas, linhas e colunas em uma forma compacta:

```css
.page {
  grid-template:
    "brand menu" 64px
    "hero hero" 240px
    / 1fr 2fr;
}
```

Arquivo para abrir:

- [grid-template.html](./grid-template.html)

## 6. Alinhamentos

Pense assim:

- `content`: move a grade inteira.
- `items`: move todos os itens dentro das celulas.
- `self`: move um item especifico.

Arquivos para abrir:

- [alinhamentos-introducao.html](./alinhamentos-introducao.html)
- [align-content.html](./align-content.html)
- [align-items.html](./align-items.html)
- [align-self.html](./align-self.html)

## 7. Grid automatico

Quando ha mais itens que posicoes explicitas, o Grid cria linhas ou colunas
automaticamente.

Propriedades uteis:

- `grid-auto-rows`
- `grid-auto-columns`
- `grid-auto-flow`

Arquivo para abrir:

- [grid-auto.html](./grid-auto.html)

## 8. Grid ou Flex

Use Flexbox quando:

- o layout segue uma linha principal
- voce esta alinhando menu, botoes, avatar e textos
- o componente e pequeno

Use Grid quando:

- voce precisa controlar linhas e colunas
- a pagina tem areas bem definidas
- a galeria precisa ficar regular

Arquivo para abrir:

- [grid-ou-flex.html](./grid-ou-flex.html)
