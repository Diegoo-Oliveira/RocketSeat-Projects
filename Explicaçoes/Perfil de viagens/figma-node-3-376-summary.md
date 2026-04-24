# Resumo do node `3:376` no Figma

Fonte usada para esta leitura:

- URL informada pelo usuario:
  `https://www.figma.com/design/wLFfFkFzw4zZrUlahUIec6/Perfil-de-viagens--Community-?node-id=3-376`
- Captura da tela enviada pelo usuario na conversa

## O que esta pagina mostra

O node `3:376` representa a pagina interna do perfil no projeto
`Travelgram`.

Os elementos visiveis no print sao estes:

1. Header superior com a marca `Travelgram`
2. Busca, links de navegacao e avatar no lado direito
3. Faixa do perfil com avatar grande, nome, bio e informacoes
4. Galeria com 12 fotos
5. Rodape com copyright e links

## Observacao importante sobre o print

As linhas azuis sobre o nome e a descricao pertencem ao editor do Figma.
Elas indicam selecao e limites de camada. Nao fazem parte da interface final.

## Leitura de layout

### 1. Header

- Marca pequena a esquerda
- Navegacao compacta a direita
- Estrutura ideal para `display: flex`

### 2. Secao do perfil

- Avatar na esquerda
- Nome e descricao no centro
- Lista de dados na direita
- Faixa com fundo mais claro que o restante da pagina

Essa parte funciona muito bem com **Flexbox** porque existem tres grupos
principais na mesma linha.

### 3. Galeria

- 4 colunas
- 3 linhas
- Espacamento uniforme entre as fotos

Essa parte fica melhor com **Grid** do que com Flexbox quando o objetivo e
copiar a tela com fidelidade.

### 4. Rodape

- Texto pequeno na esquerda
- Links pequenos na direita

Aqui volta a fazer sentido usar **Flexbox**.

## Melhor estrategia de CSS

- Container principal: `display: flex` com `flex-direction: column`
- Header: `display: flex`
- Secao do perfil: `display: flex`
- Bio: `display: flex` em coluna
- Estatisticas: `display: flex` em coluna
- Galeria: `display: grid`
- Rodape: `display: flex`

## Conclusao

Essa e a tela interna de perfil do projeto. A leitura correta e:

- Flexbox para a estrutura da pagina
- Grid para a galeria de fotos
- Ignorar as marcacoes azuis do editor do Figma ao recriar a interface
