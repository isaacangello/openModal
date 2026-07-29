# OpenModal — Guia para Agentes e Desenvolvedores

## Sobre

OpenModal é uma biblioteca de modal/dialog em JavaScript puro (ES6) que usa animate.css para animações. Projetada para ser framework-agnostic (funciona com Bootstrap, Materialize, Tailwind ou CSS próprio).

## Stack

- **JavaScript ES6+** — classe única, módulo ES6 (`export default`)
- **animate.css v4.x** — animações de entrada/saída (CDN)
- **CSS3** — flexbox, transitions, gradients
- **node-waves v0.7.6** — efeito ripple (opcional, vendored em `lib/`)

## Estrutura do Projeto

```
open-modal/
├── dist/
│   ├── open-modal.js    → Classe OpenModal (núcleo)
│   └── open-modal.css   → Estilos da biblioteca
├── lib/
│   ├── effects.json     → 17 presets de animação
│   ├── node-waves/      → Biblioteca de ripple (vendored)
│   └── fonts/           → Roboto, Playfair Display, Segoe UI
├── main.js              → Script da página de demonstração
├── index.html           → Página de demonstração (5 modais)
├── style.css            → Estilos da demonstração
├── AGENTS.md            → Este arquivo
├── CHANGELOG.md         → Histórico de versões
├── TODO.md              → Tarefas planejadas
├── README.md            → Documentação do projeto
└── package.json         → Metadados npm (sem build step)
```

## Convenções de Código

- **Sem build step** — editar `dist/open-modal.js` diretamente (ES6 module)
- **Animações**: usar classes do animate.css com prefixo `animate__` (ex: `animate__fadeIn`)
- **Configuração**: objeto literal no construtor com destructuring + defaults
- **Estilo**: sem ponto e vírgula, aspas simples, indentação de 4 espaços
- **CSS classes**: usar prefixo `modal-` para containers, `modal-dialog-` para conteúdo

## Arquitetura

- Classe `OpenModal` com ciclo de vida event-driven
- `constructor(params)` — recebe configuração com defaults
- `init()` — registra listeners nos botões (chamar UMA vez por instância)
- `updateEffects(contentIn, contentOut)` — troca animações em tempo real
- Métodos auxiliares: `removeAnimateByClass`, `addAnimateByClassName`, `addAnimateByClassNameAndHide`

Cada instância controla um par de botões (show/cancel) e um container+conteúdo.

## Como Contribuir

1. Leia `TODO.md` para tarefas abertas
2. Faça alterações nos arquivos apropriados
3. Teste manualmente abrindo `index.html` no navegador
4. Atualize `CHANGELOG.md` com as mudanças
5. Atualize a versão em `package.json` se necessário

## Comandos

```bash
npm test    # Ainda não implementado (placeholder)
```

Não há build step. O projeto é usado diretamente via `<script type="module">` ou bundlers (Webpack, Vite, Rollup).
