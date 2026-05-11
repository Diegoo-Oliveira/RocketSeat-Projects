# Portifolio Dev

Projeto de portfolio pessoal desenvolvido durante os estudos da Rocketseat.
A proposta e recriar o layout "Portfolio Dev" do Figma usando HTML e CSS, com
uma estrutura organizada para facilitar comparacoes futuras com o codigo do
professor.

## Status

Projeto iniciado.

No momento, a pasta ja possui a base do `index.html`, arquivos CSS criados e os
assets do layout separados em imagens e icones. A implementacao visual ainda
esta pendente.

## Objetivo

Construir uma pagina de portfolio em tema escuro com:

- apresentacao inicial com foto, nome, titulo e descricao;
- lista de tecnologias usadas;
- secao "Meu trabalho" com seis projetos em destaque;
- secao "Meus servicos" com cards de servicos;
- secao final de contato com links sociais.

## Tecnologias

- HTML
- CSS

## Estrutura da pasta

```txt
PortifolioDev/
  index.html
  index.css
  README.md
  Assets/
    icons/
      CSS.svg
      GitHub.svg
      HTML.svg
      JavaScript.svg
      Node.js.svg
      React.svg
      discord-logo.svg
      Portfolio Dev (Community).zip
    img/
      Background_Contacts.png
      Background_Intro.png
      Thumbnail_Project-01.png
      Thumbnail_Project-02.png
      Thumbnail_Project-03.png
      Thumbnail_Project-04.png
      Thumbnail_Project-05.png
      Thumbnail_Project-06.png
  styles/
    global.css
```

## Arquivos principais

`index.html`

Arquivo principal da pagina. Atualmente contem a estrutura inicial do HTML com
`doctype`, idioma, meta tags responsivas e titulo do projeto.

`index.css`

Arquivo CSS criado na raiz do projeto. Ainda esta vazio.

`styles/global.css`

Arquivo reservado para estilos globais, tokens de cor, fontes, reset e regras
base do projeto. Ainda esta vazio.

`Assets/img`

Pasta com os backgrounds e thumbnails dos seis projetos que aparecem no layout.

`Assets/icons`

Pasta com os icones das tecnologias e links sociais.

## Referencias de estudo

- Tutorial local: `Explicaçoes/Tutorial-Projetos/Portfolio-Dev/index.html`
- Figma: https://www.figma.com/design/NkfKgGFcSA1EAim4CSlbfT/Portfolio-Dev--Community-?node-id=3-376&p=f&t=F0ZS9DH72Pq32v2X-0
- Desafio Rocketseat: https://app.rocketseat.com.br/projetos/desafio-pratico-portfolio-dev

## Ordem sugerida de desenvolvimento

1. Conectar os arquivos CSS no `index.html`.
2. Criar tokens no `:root` para cores, fontes, espacamentos e largura do container.
3. Montar a secao de intro com background, avatar, texto e tecnologias.
4. Criar o componente reutilizavel de card de projeto.
5. Montar a grid com os seis projetos.
6. Criar a secao de servicos com tres cards.
7. Criar a secao de contato com links.
8. Ajustar responsividade para tablet e celular.
9. Comparar com o projeto do professor em `RocketSeat-Projects`.

## Observacao

O nome da pasta esta como `PortifolioDev`. Se quiser manter o padrao em ingles,
uma alternativa futura seria renomear para `PortfolioDev`, mas isso deve ser
feito com cuidado para nao quebrar links locais.
