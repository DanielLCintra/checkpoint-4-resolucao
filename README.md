# Checkpoint 4 — Resolução (App de Anotações)

Este repositório é a **resolução de referência** do Checkpoint 4: um app de anotações em Next.js (App Router) com React.

Use-o para **entender a solução**, não só para copiar. O objetivo é reconhecer onde cada conceito da disciplina aparece no código e conseguir explicar o fluxo com as suas palavras.

---

## Como estudar este material

1. **Rode o projeto** e use o app (criar, excluir, abrir detalhes).
2. **Siga o fluxo no código**: da tela inicial até a página de detalhes.
3. **Leia os comentários** nos arquivos — eles marcam o conceito didático (props, eventos, `useState`, etc.).
4. **Feche o arquivo e tente reescrever** um trecho sozinho (ex.: `handleCreate` ou o `ListItem`).
5. **Compare** com a resolução e anote o que ainda não ficou claro.

Dica: se você só “olhar” o código sem rodar e sem tentar refazer, o aprendizado fica fraco. Use este repo como gabarito de estudo.

---

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

---

## Mapa do projeto (o que estudar em cada arquivo)

| Arquivo | O que observar |
|---|---|
| `app/layout.js` | Layout raiz do App Router |
| `app/page.js` | Página inicial: `useState`, eventos de criar/excluir, composição de componentes |
| `app/notes/[id]/page.js` | Rota dinâmica, `useSearchParams`, `useEffect`, `Suspense`, `Link` |
| `app/components/Header.js` | Props + navegação com `Link` |
| `app/components/Button.js` | Props + callback de evento (`onClick`) |
| `app/components/InputText.js` | Props controladas + renderização condicional |
| `app/components/List.js` | Lista com `.map` e passagem de props |
| `app/components/ListItem.js` | Item da lista, `Link` com query params, exclusão |

---

## Conceitos cobertos e onde encontrar

### Componentes e props
- Componentes em `app/components/`
- Props tipicamente usadas: `title`, `label`, `value`, `onClick`, `onChange`, `items`, `onDelete`

### Manipulação de eventos
- Criar anotação: `handleCreate` em `app/page.js`
- Excluir anotação: `handleDelete` em `app/page.js` (passada até o `ListItem`)
- Digitação nos campos: `onChange` nos `InputText`

### `useState`
- Em `app/page.js`: lista de anotações (`notes`) e campos do formulário (`title`, `content`)
- Os dados ficam **só na memória** — ao recarregar a página, a lista some (comportamento esperado neste checkpoint)

### `useEffect`
- Em `app/notes/[id]/page.js`: atualiza o título da aba (`document.title`) quando o título da anotação muda

### Next.js Router
- `Link` para navegar entre início e detalhes
- Página dinâmica: `app/notes/[id]/page.js`
- Dados da anotação enviados por **query params** (`title`, `content`, `date`) e lidos com `useSearchParams`
- `Suspense` envolve o conteúdo que usa `useSearchParams` (exigência do Next.js)

---

## Fluxo sugerido para revisar

1. Abra `app/page.js` e entenda como o formulário atualiza o estado.
2. Veja como `List` → `ListItem` recebe a lista e a função de excluir.
3. Clique em “Ver detalhes” e acompanhe a URL montada em `ListItem`.
4. Em `app/notes/[id]/page.js`, veja como os params viram título, conteúdo e data na tela.
5. Observe o `useEffect` mudando o título da aba do navegador.

---

## Perguntas para se autoavaliar

Antes de considerar o checkpoint “dominado”, tente responder sem olhar o código:

- Por que a página inicial tem `'use client'`?
- O que acontece se `title` ou `content` estiverem vazios no `handleCreate`?
- Por que `onDelete` é passado de `page.js` → `List` → `ListItem`?
- Onde está o `useEffect` e qual problema ele resolve?
- Por que a página de detalhes usa `Suspense`?

Se travar em alguma pergunta, volte ao arquivo correspondente na tabela acima.

---

## Observações importantes

- Esta é uma **resolução didática**: o foco é clareza dos conceitos, não produção completa (sem banco, sem persistência, sem autenticação).
- Evite copiar trechos sem entender. O valor deste material está em **conectar conceito ↔ arquivo ↔ comportamento na tela**.
