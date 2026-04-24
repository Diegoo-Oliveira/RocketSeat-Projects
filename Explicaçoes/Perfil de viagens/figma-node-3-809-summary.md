# Resumo do no `3:809` no Figma

Fonte solicitada: `https://www.figma.com/design/wLFfFkFzw4zZrUlahUIec6/Perfil-de-viagens--Community-?node-id=3-809&t=jCszvrHlR9rV2SFH-0`

## Status da inspecao real

Em `24/04/2026`, tentei consultar o no `3:809` via servidor MCP do Figma com `get_design_context`, `get_screenshot` e `get_metadata`. As tres chamadas retornaram o mesmo erro de quota do plano Starter: `You've reached the Figma MCP tool call limit on the Starter plan`.

Por causa desse bloqueio, **nao foi possivel obter o contexto real do no nem screenshot**. Para nao inventar detalhes, os pontos abaixo ficam marcados como indisponiveis para este no:

- **Tamanho geral do frame e estrutura completa:** nao confirmado.
- **Secoes principais em ordem:** nao confirmadas.
- **Estrategia de layout por secao:** nao confirmada.
- **Cores principais do no `3:809`:** nao confirmadas.
- **Tipografia do no `3:809`:** nao confirmada.
- **Cards/componentes de destaque:** nao confirmados.
- **Decisao Flexbox vs Grid:** depende da hierarquia real do no, que nao pode ser lida.

## Leitura visual de fallback pelo thumbnail publico

Mesmo com o MCP bloqueado, o thumbnail publico do node `3:809` ficou
acessivel. A composicao visivel indica que este node funciona como uma
**capa/apresentacao do projeto**, nao como uma tela interna isolada.

Pelo thumbnail:

- O frame usa um fundo bem escuro, com atmosfera suave e uma faixa roxa na
  base.
- A composicao principal e dividida em **duas colunas**.
- Na esquerda aparecem: logotipo da Rocketseat, titulo grande `Perfil de viagens`,
  subtitulo `Projeto de formacao` e um badge `Fullstack`.
- Na direita aparece um mockup/cartao da interface do projeto, com uma janela
  branca e sombra forte.
- Dentro desse mockup, a parte superior parece ser um cabecalho de perfil com
  marca `Travelgram`, avatar, nome da usuaria e texto descritivo.
- Abaixo do cabecalho existe uma grade de fotos.

## Melhor leitura de layout a partir da imagem

Com base apenas no thumbnail publico, a melhor estrategia de implementacao e:

1. Container externo da capa: **Flexbox horizontal**.
2. Coluna esquerda: **Flexbox vertical**.
3. Badge `Fullstack`: **Flexbox horizontal**.
4. Cabecalho do perfil no mockup: **Flexbox horizontal**.
5. Galeria de fotos do mockup: **Grid** para fidelidade ou **Flexbox com wrap**
   para treino.

## Observacao importante

Os pontos acima refletem a leitura visual do thumbnail publico do node
`3:809`. Eles sao uteis para estudo de composicao e Flexbox, mas **nao
substituem** a confirmacao estrutural fina que viria do `get_design_context`
quando a quota do Figma MCP voltar a ficar disponivel.

## Contexto parcial verificavel do mesmo arquivo

Existe neste workspace um resumo anterior, derivado de MCP, para o no irmao `939:533` do mesmo arquivo Figma. Esse material **nao confirma o conteudo de `3:809`**, mas indica a linguagem visual usada em pelo menos uma secao do arquivo:

- Fundo preto puro `#000000`.
- Card secundario em cinza muito escuro `#121214`.
- Texto principal em cinza claro `#E1E1E6`.
- Texto de apoio em cinza medio-claro `#C4C4CC`.
- Tipografia `Plus Jakarta Sans`.
- Estrutura verificada nesse no irmao: titulo `Imagens`, grade de 12 fotos e um card de observacao.
- Melhor modelagem nesse no irmao: coluna principal com **Flexbox** e grade das fotos com **Grid**.

## Conclusao

Sem a resposta do MCP para `3:809`, nao ha base confiavel para descrever o frame-alvo com especificidade. Assim que a quota do servidor Figma MCP for restabelecida, o caminho correto e:

1. Rodar `get_design_context` para o no `3:809`.
2. Se o payload vier grande demais, usar `get_metadata` para mapear a hierarquia.
3. Fazer lookups focados nos principais filhos.
4. Capturar `get_screenshot` para validar visualmente a ordem das secoes.
