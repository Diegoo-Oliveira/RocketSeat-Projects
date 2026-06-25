# Guia de estudos de CSS Flexbox

Este material acompanha os arquivos HTML desta pasta. A ideia e abrir as
paginas no navegador, comparar o visual de cada exemplo e depois editar os
valores para sentir a mudanca.

## 1. Como pensar no Flexbox

Flexbox organiza elementos em um container pai.

- O pai recebe `display: flex`.
- Os filhos diretos viram itens flex.
- O layout passa a trabalhar com dois eixos:
- `main axis`: eixo principal
- `cross axis`: eixo cruzado

Se o container usa `flex-direction: row`, o eixo principal e horizontal.
Se usa `flex-direction: column`, o eixo principal e vertical.

## 2. Propriedades estudadas

### `flex-flow`

Atalho para juntar:

- `flex-direction`
- `flex-wrap`

Exemplo:

```css
.container {
  display: flex;
  flex-flow: row wrap;
}
```

Valores que valem a pena praticar:

- `row nowrap`
- `row wrap`
- `column nowrap`
- `column wrap`

Arquivo para abrir:

- [flex-flow.html](./flex-flow.html)

### `gap`

Cria espaco entre os itens sem precisar usar margem em cada filho.

Exemplos:

```css
gap: 16px;
gap: 12px 24px;
```

- Um valor: serve para linha e coluna.
- Dois valores: primeiro para linhas, segundo para colunas.

Arquivo para abrir:

- [gap.html](./gap.html)

### `justify-content`

Alinha os itens no eixo principal.

Valores mais usados:

- `flex-start`
- `center`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`

Arquivo para abrir:

- [justify-content.html](./justify-content.html)

### `align-items`

Alinha os itens no eixo cruzado.

Valores mais usados:

- `stretch`
- `flex-start`
- `center`
- `flex-end`
- `baseline`

Arquivo para abrir:

- [align-items.html](./align-items.html)

### `align-content`

Distribui as linhas no eixo cruzado.

Importante:

- So funciona quando existe `flex-wrap: wrap`
- Precisa haver mais de uma linha de itens

Valores mais usados:

- `flex-start`
- `center`
- `flex-end`
- `space-between`
- `space-around`
- `space-evenly`

Arquivo para abrir:

- [align-content.html](./align-content.html)

### `children`

`children` nao e uma propriedade do Flexbox.

No estudo de layout, esse termo representa os filhos diretos do container.
Algumas propriedades importantes aplicadas nos filhos sao:

- `flex-grow`
- `flex-shrink`
- `flex-basis`
- `order`
- `align-self`

Arquivo para abrir:

- [children.html](./children.html)

## 3. Diferenca importante entre `align-items` e `align-content`

- `align-items` mexe na posicao dos itens dentro de cada linha.
- `align-content` mexe na distribuicao do conjunto de linhas.

Se houver apenas uma linha, `align-content` quase nao vai mostrar efeito.

## 4. Ordem sugerida de estudo

1. Abra `index.html`.
2. Veja primeiro `flex-flow.html` para entender direcao e quebra.
3. Depois abra `gap.html` para dominar o espacamento.
4. Estude `justify-content.html` e `align-items.html` juntos.
5. So depois avance para `align-content.html`.
6. Termine em `children.html` para entender o que o pai controla e o que o filho controla.

## 5. Exercicios praticos

1. Pegue um exemplo com `row` e troque para `column`.
2. Mude `gap: 20px` para `gap: 8px 32px` e observe a diferenca.
3. Em `justify-content.html`, troque `center` por `space-evenly`.
4. Em `align-items.html`, altere `flex-start` para `flex-end`.
5. Em `align-content.html`, remova o `wrap` e veja o que acontece.
6. Em `children.html`, aumente o `flex-grow` do item central para `3`.

## 6. Resumo rapido

- `flex-flow`: direcao + quebra
- `gap`: espaco entre itens
- `justify-content`: alinhamento no eixo principal
- `align-items`: alinhamento no eixo cruzado
- `align-content`: distribuicao das linhas
- `children`: filhos diretos do container

## 7. Proximo passo

Depois deste material, vale estudar:

- `flex-grow`, `flex-shrink` e `flex-basis` com mais calma
- centralizacao completa com Flexbox
- menus, cards e galerias responsivas
- quando usar Grid no lugar de Flexbox
