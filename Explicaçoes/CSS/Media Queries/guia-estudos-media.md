# Guia de estudos – @media e Responsividade

## O que e @media

`@media` e uma regra CSS que aplica estilos somente quando uma condicao e
verdadeira. Funciona como um "if": se a tela for menor que X, aplique este CSS.

```css
@media (max-width: 768px) {
  .sidebar { display: none; }
}
```

## Breakpoints comuns

| Dispositivo     | Faixa          | Breakpoint          |
| --------------- | -------------- | ------------------- |
| Celular         | 0 – 767px      | max-width: 767px    |
| Tablet          | 768 – 1023px   | max-width: 1023px   |
| Laptop          | 1024 – 1279px  | max-width: 1279px   |
| Desktop         | 1280px+        | min-width: 1280px   |

## Mobile-first vs Desktop-first

- **Mobile-first** (min-width): CSS base para celular, cresce
- **Desktop-first** (max-width): CSS base para desktop, encolhe
- A industria recomenda mobile-first como padrao

## Media Types

- `all` – todos (padrao)
- `screen` – telas (monitores, celulares)
- `print` – impressao
- `speech` – leitores de tela

## Media Features principais

- `width` / `min-width` / `max-width` – largura da viewport
- `height` / `min-height` / `max-height` – altura da viewport
- `orientation` – portrait ou landscape
- `aspect-ratio` – proporcao da tela
- `resolution` – densidade de pixels (Retina)
- `prefers-color-scheme` – modo claro/escuro
- `prefers-reduced-motion` – acessibilidade
- `hover` / `pointer` – mouse vs touch

## Operadores logicos

- `and` – todas verdadeiras
- `,` (virgula) – pelo menos uma verdadeira (OR)
- `not` – nega tudo
- `only` – compatibilidade (obsoleto)
- Range (Level 4): `(768px <= width <= 1023px)`

## Unidades responsivas

- `rem` – relativo ao root, consistente
- `em` – relativo ao pai, acumula
- `vw` / `vh` – relativo a viewport
- `%` – relativo ao pai
- `clamp(min, ideal, max)` – valor fluido
- `min()` e `max()` – limites dinamicos

## Container Queries

- Em vez de olhar a viewport, olha o tamanho do container pai
- Ideal para componentes reutilizaveis
- `container-type: inline-size` no pai
- `@container nome (min-width: 400px) { ... }` no filho

## Sequencia de estudo

1. Entenda a sintaxe do @media
2. Estude breakpoints e mobile-first
3. Explore media types e features
4. Pratique com exemplos reais
5. Combine com unidades responsivas
6. Avance para container queries
