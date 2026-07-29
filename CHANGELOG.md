# Changelog

Todas as mudanças notáveis neste projeto serão documentadas aqui.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/),
e o projeto segue [Semantic Versioning](https://semver.org/).

## [1.2.0] — 2026-07-29

### Adicionado

- Método `close()` — fecha o modal programaticamente
- Método `destroy()` — remove todos os event listeners e limpa referências da instância
- Suporte a tecla `Escape` — fecha o modal ao pressionar Escape
- Suporte a clique no backdrop — fecha o modal ao clicar fora do conteúdo
- Bloqueio de scroll do body (`overflow: hidden`) enquanto o modal estiver aberto, restaurado ao fechar

### Melhorado

- Handlers de show/cancel extraídos para métodos nomeados (`_show`, `_cancel`) com referências armazenadas (`_boundShow`, `_boundCancel`, etc.) para permitir `removeEventListener` no `destroy()`
- **Fechamento automático de modais concorrentes**: ao abrir um modal, todas as outras instâncias visíveis são fechadas automaticamente via `OpenModal._closeOthers()`, evitando sobreposição de backdrops
- **Registro estático de instâncias**: array `OpenModal._instances` rastreado no `init()` para coordenar o fechamento entre instâncias

### Página do Projeto

- **Smooth scroll**: `scroll-behavior: smooth` adicionado ao `style.css` para transições suaves ao navegar por âncoras como `#demos`

### Adicionado

- Método `updateEffects(contentInEffects, contentOutEffects)` para trocar animações em tempo real sem recriar a instância
- `AGENTS.md` — guia de referência para IAs e novos contribuidores
- `CHANGELOG.md` — registro histórico de versões
- `TODO.md` — lista de tarefas e melhorias planejadas

### Corrigido

- **Vazamento de animações entre instâncias**: `clearAnimateClasses`, `addAnimateByClassName` e `addAnimateByClassNameAndHide` usavam `document.querySelectorAll` global, afetando elementos de outros modais. Agora escopam para `this.openModal.querySelectorAll`
- **Acúmulo de event listeners**: `init()` agora usa `{ once: true }` no listener de `animationend`, e só deve ser chamado uma vez por instância
- **Recursão no cancel handler**: removida a chamada `this.init()` dentro do listener do botão cancelar, que causava multiplicação de listeners a cada ciclo abrir/fechar
- **Estado global compartilhado (`window.OPM`)**: removido o método `initObject()` e o uso de `window.OPM`; cada instância agora acessa suas próprias propriedades via `this`
- **Select de efeitos com value inválido**: `new Option(respKey, resp)` passava o objeto JSON inteiro como value, resultando em `[object Object]`; corrigido para usar o nome do efeito como value
- **`removeAnimateByClass` removia `animate__animated` junto com a animação**: removia a classe base `animate__animated` que toda animação do animate.css exige para funcionar. Sem ela, as animações de saída não tocavam, `animationend` nunca disparava, e o `hide` nunca era adicionado de volta
- **Classes de animação antigas acumuladas**: ao trocar de efeito via select, as classes `animate__backOutLeft` (do primeiro efeito) permaneciam no DOM e conflitavam com as novas classes, causando animações simultâneas e travamento do modal na segunda troca

### Melhorado

- **Instância única no modal "selected effect"**: o modal de demonstração agora cria uma única instância do `OpenModal` e chama `updateEffects()` ao selecionar um novo efeito, em vez de criar uma nova instância a cada seleção
- **Novo método `clearAnimateClasses()`**: limpa TODAS as classes `animate__*` do container e conteúdo antes de aplicar novos efeitos, eliminando o acúmulo de efeitos antigos
- **Show e Cancel handlers simplificados**: ambos agora limpam o estado anterior antes de aplicar novos efeitos, garantindo que apenas uma animação (in ou out) esteja ativa por vez
- Código mais legível e auto-contido — cada instância não depende mais de variáveis globais

### Página do Projeto

- **Landing page redesenhada** (`index.html`): seções Hero, Features, Demos, Effects Explorer — design clean/responsivo
- **Página de documentação** (`docs.html`): Getting Started, Configuration, API Reference, Effects, Examples, Migration
- **Sistema bilíngue** (`translations.js`): toggle EN/PT com localStorage, aplicado em todas as páginas
- **Effects JSON expandido** (`lib/effects.json`): categorias, labels e descrições em inglês e português para todos os 17 efeitos
- **Preview de efeitos**: cada efeito na tabela tem um botão Preview que aplica e abre o modal automaticamente
- **README.md** atualizado com nova API e links para docs

## [1.1.0] — 2024

### Adicionado

- Lançamento inicial no npm como pacote `open-modal`
- Publicação no GitHub: https://github.com/isaacangello/openModal
- Página do projeto: https://openmodal.sourceforge.io/
