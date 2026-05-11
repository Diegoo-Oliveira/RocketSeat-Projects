# Travelgram

Pagina de perfil de viagens desenvolvida durante os estudos da Rocketseat. O
projeto simula uma rede social visual para uma viajante, com navegacao superior,
perfil, informacoes de viagem, galeria de fotos e rodape.

## Status

Projeto implementado como pagina estatica.

A estrutura ja possui menu, apresentacao do perfil, dados de localizacao,
quantidade de paises visitados, total de fotos e galeria com doze imagens.

## Tecnologias

- HTML
- CSS
- Google Fonts: Poppins

## Como abrir

Abra o arquivo `index.html` no navegador:

```txt
Projetos/Travelgram/index.html
```

## Estrutura da pagina

- `nav.container` - barra superior com logo, busca, links e avatar.
- `header` - area do perfil com foto, nome, bio e dados da viajante.
- `main.container` - galeria com doze imagens de viagem.
- `footer.container` - rodape com nome do projeto e links de politica/termos.

## Estrutura da pasta

```txt
Travelgram/
  index.html
  global.css
  README.md
  styles/
    index.css
    nav.css
    header.css
    main.css
    footer.css
  Assets/
    Logo.png
    Profile.svg
    icons/
      AirplaneTilt.svg
      MagnifyingGlass.png
      MapPin.svg
      Menu item.svg
      orange_glass.svg
      Vector.svg
    images/
      Image_1.png
      ...
      Image_12.png
```

## Arquivos principais

`index.html`

Contem a estrutura da pagina, incluindo a navegacao, cabecalho do perfil,
galeria de fotos e rodape.

`global.css`

Arquivo base com variaveis, reset, cores, fonte, container e estilos globais.

`styles/index.css`

Arquivo central que importa os arquivos CSS das partes da pagina.

`styles/nav.css`

Estilos da barra de navegacao superior.

`styles/header.css`

Estilos da area de perfil e da lista de informacoes da viajante.

`styles/main.css`

Estilos da galeria de imagens.

`styles/footer.css`

Estilos do rodape.

## Assets

A pasta `Assets` guarda o logo, o avatar do perfil, icones da interface e doze
imagens usadas na galeria.

## Repositorio separado

Este projeto tambem foi exportado para um repositorio proprio:

https://github.com/Diegoo-Oliveira/Travelgram

## Melhorias futuras

- Adicionar responsividade para telas menores.
- Melhorar textos alternativos das imagens da galeria.
- Transformar medidas repetidas em variaveis ou utilitarios.
- Revisar nomes de arquivos e pastas para manter um padrao unico.
