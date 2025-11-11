<!-- Instruções para agentes AI (Copilot/assistentes) focadas neste repositório de exemplos JS/HTML -->
# Objetivo rápido

Este repositório contém vários pequenos projetos/front-ends de aprendizado (cada pasta é um app mínimo com `index.html` e `index.js`). O objetivo das instruções abaixo é permitir que um agente AI edite, teste e proponha mudanças rapidamente sem quebrar a estrutura simples de cada app.

# Estrutura importante

- Raiz: cada subpasta (por exemplo, `filaDeEspera`, `calculadora`, `tabuada`, `velocidade`) representa um pequeno app.
- Padrão por app: `index.html` (UI mínima) e `index.js` (lógica). Procure por funções que usam `prompt`, `alert` e manipulação direta do DOM.

# Como testar alterações rapidamente

- Abra o arquivo `index.html` correspondente no navegador (duplo clique no arquivo ou `Live Server` no VS Code) para testar interatividade baseada em `prompt`/`alert`.
- Para checar sintaxe/erros básicos, execute `node <caminho>/index.js` apenas quando o script não usar APIs do navegador (prompt/alert não funcionarão no Node). Para testes interativos, prefira o navegador.

# Padrões e convenções do projeto

- Scripts são simples e síncronos — frequentemente usam `prompt`/`alert` e arrays locais para armazenar estado. Evite transformar muita lógica em assíncrona ou adicionar bundlers sem necessidade.
- Mensagens e variáveis: nomes em português (ex.: `fila`, `pacientes`, `novoPaciente`). Preserve esse idioma ao propor mudanças.
- Evite alterar estruturas de pastas — cada pasta é intencionalmente independente.

# Problemas comuns detectados aqui

- Erros de sintaxe típicos: operadores incorretos (ex.: `==!` em vez de `!==`).
- Uso de `shift()` em arrays sem checar comprimento — resultado pode ser `undefined`. Trate com `if (fila.length === 0)` ou teste valor retornado.

# Exemplos práticos do repositório

- `filaDeEspera/index.js`: apresenta o padrão de menu `prompt`/`switch`. Quando for editar, mantenha a experiência de prompt e mensagens em português e corrija operadores lógicos/cheques de `undefined`.

# Regras para o assistente

- Faça mudanças mínimas e localizadas. Não reescreva apps inteiros por padrão.
- Ao corrigir bugs, inclua uma breve explicação no commit/PR sobre a causa e como testar (ex: "corrige operador `==!` para `!==` e adiciona checagem antes de `shift()` — testar abrindo `filaDeEspera/index.html`").
- Se adicionar utilitários, coloque-os dentro da pasta do app específico e atualize apenas aquele `index.html`/`index.js`.

# Pontos de atenção ao gerar código

- Não introduza dependências externas (npm) sem pedir permissão — o repositório é propositalmente leve.
- Ao propor melhorias UX (ex: substituir `prompt` por um pequeno formulário), forneça uma implementação alternativa completa e instruções de como testar.

# Perguntas frequentes que o agente pode fazer

- "Posso unificar utilitários entre apps?" — Não sem autorização; cada app é independente.
- "Posso trocar `prompt`/`alert` por UI moderna?" — Você pode propor uma alternativa em PR separado com instruções de teste.

---
Por favor revise este arquivo e diga se quer que eu adicione exemplos de commits/PRs ou padrões de lint/format.
