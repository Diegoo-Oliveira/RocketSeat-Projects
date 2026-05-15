# Portifolio Dev

Projeto de portfolio pessoal desenvolvido durante os estudos da Rocketseat.
A proposta e recriar o layout "Portfolio Dev" do Figma usando HTML e CSS, com
uma estrutura organizada para facilitar comparacoes futuras com o codigo do
professor.

## Status

Layout principal em desenvolvimento avancado.

No momento, o projeto ja possui a estrutura HTML das quatro secoes principais e
os estilos separados por responsabilidade: base global, intro, projetos,
servicos, contato e utilitarios. A pagina esta montada para o layout desktop do
Figma, com largura de referencia em `1366px`.

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
    contact.css
    global.css
    intro.css
    projects.css
    services.css
    utility.css
```

## Arquivos principais

`index.html`

Arquivo principal da pagina. Contem a estrutura das secoes `intro`, `projects`,
`services` e `contact`, alem dos cards, tags de tecnologias e links sociais.

`index.css`

Arquivo de entrada dos estilos. Ele importa os arquivos CSS separados dentro da
pasta `styles`.

`styles/global.css`

Arquivo com reset, tokens de cor, fontes, classes de texto e configuracoes
principais das secoes.

`styles/intro.css`

Arquivo com os estilos da apresentacao inicial, avatar, textos e tecnologias.

`styles/projects.css`

Arquivo com os estilos dos cards de projeto e espacamento da secao "Meu
trabalho".

`styles/services.css`

Arquivo com os estilos dos cards da secao "Meus servicos".

`styles/contact.css`

Arquivo com os estilos da secao final de contato e dos botoes sociais.

`styles/utility.css`

Arquivo com classes utilitarias de flex, grid e gaps reutilizados nas secoes.

`Assets/img`

Pasta com os backgrounds e thumbnails dos seis projetos que aparecem no layout.

`Assets/icons`

Pasta com os icones das tecnologias e links sociais.

## Referencias de estudo

- Tutorial local: `Explicaçoes/Tutorial-Projetos/Portfolio-Dev/index.html`
- Guia local sobre SVG e cores: `Explicaçoes/SVG-Cores/index.html`
- Figma: https://www.figma.com/design/NkfKgGFcSA1EAim4CSlbfT/Portfolio-Dev--Community-?node-id=3-376&p=f&t=F0ZS9DH72Pq32v2X-0
- Desafio Rocketseat: https://app.rocketseat.com.br/projetos/desafio-pratico-portfolio-dev

## Proximos ajustes

1. Comparar o layout completo com o Figma em `1366px`.
2. Ajustar os estados de hover dos botoes sociais.
3. Definir a estrategia para cores dos SVGs: editar `fill`/`stroke`, criar
   copias coloridas ou usar SVG inline com `currentColor`.
4. Revisar responsividade para telas menores.
5. Comparar com o projeto do professor em `RocketSeat-Projects`.

## Observacoes sobre SVG

Os icones do projeto estao sendo usados com a tag `img`, apontando para arquivos
`.svg`. Como esses SVGs possuem `fill` fixo dentro do arquivo, o CSS do elemento
pai nao consegue trocar a cor diretamente.

Para manter o projeto simples, existem tres caminhos:

- alterar o `fill` ou `stroke` direto no arquivo SVG;
- criar copias coloridas dos icones para estados como hover;
- usar SVG inline com `currentColor`, quando quiser que o icone obedeca a cor
  definida no CSS.

## Observacao

O nome da pasta esta como `PortifolioDev`. Se quiser manter o padrao em ingles,
uma alternativa futura seria renomear para `PortfolioDev`, mas isso deve ser
feito com cuidado para nao quebrar links locais.
