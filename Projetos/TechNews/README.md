# TechNews

Portal de noticias sobre tecnologia desenvolvido durante os estudos da
Rocketseat. O projeto pratica a montagem de um layout editorial com HTML e CSS,
usando Grid para as regioes maiores da pagina e Flexbox para alinhar elementos
internos dos componentes.

## Status

Projeto implementado como pagina estatica.

O layout ja possui cabecalho, menu de categorias, noticias em destaque, secao
de mais lidas, coluna de destaques de inteligencia artificial, anuncio lateral e
lista de noticias no aside.

## Tecnologias

- HTML
- CSS
- Google Fonts: Archivo

## Como abrir

Abra o arquivo `index.html` no navegador:

```txt
Projetos/TechNews/index.html
```

## Estrutura da pagina

- `header.site-header` - cabecalho com menu, logo e busca.
- `.secondary-nav` - navegacao por categorias de tecnologia.
- `.featured-news` - area de destaque com uma noticia principal e quatro cards.
- `.popular-news` - secao "Mais lidas da semana" com quatro cards.
- `.main-columns` - grid final com conteudo principal e aside.
- `#featured-ia` - lista de noticias sobre inteligencia artificial.
- `.main-aside` - anuncio e lista "Viu isso aqui?".

## Estrutura da pasta

```txt
TechNews/
  index.html
  global.css
  README.md
  Styles/
    index.css
    header.css
    featured.css
    popular.css
    main.css
  assets/
    ads.png
    arrow-right.svg
    close.svg
    menu.svg
    search.svg
    noticia-01.png
    ...
    noticia-18.png
```

## Arquivos principais

`index.html`

Contem toda a estrutura semantica da pagina: cabecalho, navegacao, secoes de
noticias, cards, aside e imagens.

`global.css`

Arquivo de base com variaveis, reset, cores, fontes e estilos globais usados no
projeto.

`Styles/index.css`

Arquivo central que importa os demais arquivos CSS do projeto.

`Styles/header.css`

Estilos do cabecalho principal e do menu de categorias.

`Styles/featured.css`

Estilos da area de noticias em destaque, incluindo a noticia principal e o grid
2x2 de cards menores.

`Styles/popular.css`

Estilos da secao "Mais lidas da semana".

`Styles/main.css`

Estilos da parte final da pagina, com coluna de inteligencia artificial, anuncio
e aside.

## Assets

A pasta `assets` guarda os icones de interface, a imagem de anuncio e as imagens
das noticias. As noticias seguem a sequencia `noticia-01.png` ate
`noticia-18.png`.

## Referencias locais

- Tutorial: `../../Explicaçoes/Tutorial-Projetos/Tech-News/index.html`
- Comparacao profissional: `../../Explicaçoes/CSS Profissional/index.html`
- Projeto do professor: `../../RocketSeat-Projects/portal-de-noticias-main/index.html`

## Repositorio separado

Este projeto tambem foi exportado para um repositorio proprio:

https://github.com/Diegoo-Oliveira/TechNews

## Melhorias futuras

- Trocar classes muito especificas de tags por uma classe reutilizavel.
- Adicionar responsividade para tablets e celulares.
- Melhorar textos alternativos das imagens.
- Criar componentes CSS reutilizaveis para cards e cabecalhos de secao.
