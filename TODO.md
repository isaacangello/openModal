# OpenModal — TODO List

## Melhorias no Código

- [x] Remover `window.OPM` e usar propriedades da própria instância (`this`)
- [x] Remover recursão do `init()` dentro do cancel handler
- [x] Adicionar `{ once: true }` no listener de `animationend`
- [x] Adicionar método `updateEffects()` para trocar animação sem recriar instância
- [x] Corrigir select de efeitos (value `[object Object]`)
- [x] Instância única para modal "selected effect" na demo
- [x] Adicionar `destroy()` para limpar listeners quando a instância não for mais necessária
- [x] Adicionar suporte a tecla `Escape` para fechar modal
- [x] Adicionar suporte a clique fora do modal (no backdrop) para fechar
- [x] Prevenir scroll do body quando modal estiver aberto

## Testes

- [ ] Criar teste manual via página demo (`index.html`)
- [ ] Adicionar teste automatizado básico (ex: com Node + jsdom)
- [ ] Configurar script `npm test` funcional

## Build e Publicação

- [ ] Adicionar minificação para `dist/open-modal.min.js`
- [ ] Adicionar TypeScript typings (`.d.ts`)
- [ ] Publicar versão 1.2.0 no npm

## Documentação

- [x] Criar `AGENTS.md`
- [x] Criar `CHANGELOG.md`
- [ ] Adicionar exemplos de `updateEffects()` no `README.md`
- [ ] Adicionar exemplo de como usar com React/Vue/Svelte no README

## Design / CSS

- [ ] Refatorar `open-modal.css` (remover duplicações entre temas)
- [ ] Adicionar variáveis CSS para facilitar customização
- [ ] Considerar remover fontes e node-waves vendados (usar CDN)
