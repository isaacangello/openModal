const i18n = {
  en: {
    nav: { demo: 'Demo', docs: 'Docs', github: 'GitHub' },
    hero: {
      title: 'OpenModal',
      subtitle: 'A lightweight, framework-agnostic modal library powered by animate.css',
      btnDemo: 'Try Demos',
      btnDocs: 'Read Docs',
      btnGithub: 'View on GitHub',
    },
    features: {
      title: 'Features',
      zeroDeps: { title: 'Zero Dependencies', desc: 'Pure ES6 class with no runtime dependencies. Just you, animate.css, and your markup.' },
      agnostic: { title: 'Framework-Agnostic', desc: 'Works with Bootstrap, Materialize, Tailwind CSS, or your own custom styles.' },
      animations: { title: '17 Animation Pairs', desc: 'Separate entry and exit animations for both backdrop and content. Mix and match freely.' },
      config: { title: 'Fully Configurable', desc: 'Customize IDs, classes, colors, effects, and triggers via a simple options object.' },
      module: { title: 'ES6 Module', desc: 'Import as a standard ES6 module. Works with Webpack, Vite, Rollup, or directly in the browser.' },
      ripple: { title: 'Material Ripple', desc: 'Optional click ripple effect using the vendored node-waves library.' },
    },
    demos: {
      title: 'Live Demos',
      standard: { title: 'Standard Modal', desc: 'Data entry form with customer details table. Uses bounceInUp/bounceOutUp effects.' },
      bootstrap: { title: 'Bootstrap Style', desc: 'Familiar Bootstrap-like dialog with fadeInDown/fadeOutUp effects.' },
      materialize: { title: 'Materialize Style', desc: 'Material Design inspired modal with zoomIn/zoomOut effects.' },
      modern: { title: 'Modern Style', desc: 'Sleek modern dialog with jackInTheBox/hinge effects.' },
      effects: { title: 'Effects Explorer', desc: 'Try all 17 animation pairs in real time. Select and preview any effect.' },
    },
    effects: {
      title: 'Animation Effects',
      subtitle: 'Click Preview to test any effect on the modal below',
      select: 'Choose an effect...',
      current: 'Current',
      preview: 'Preview',
      category: {
        back: 'Back Entrances',
        bounce: 'Bouncing Entrances',
        fade: 'Fading Entrances',
        special: 'Special',
      },
    },
    footer: {
      license: 'Licensed under LGPL-2.1',
      madeBy: 'Made by Isaac Castro',
    },
  },

  pt: {
    nav: { demo: 'Demo', docs: 'Docs', github: 'GitHub' },
    hero: {
      title: 'OpenModal',
      subtitle: 'Uma biblioteca de modal leve e agnóstica, com animações do animate.css',
      btnDemo: 'Ver Demos',
      btnDocs: 'Ler Docs',
      btnGithub: 'Ver no GitHub',
    },
    features: {
      title: 'Funcionalidades',
      zeroDeps: { title: 'Zero Dependências', desc: 'Classe ES6 pura sem dependências de runtime. Apenas você, animate.css e seu HTML.' },
      agnostic: { title: 'Agnóstico a Frameworks', desc: 'Funciona com Bootstrap, Materialize, Tailwind CSS ou seus próprios estilos.' },
      animations: { title: '17 Pares de Animação', desc: 'Animações de entrada e saída separadas para backdrop e conteúdo. Misture à vontade.' },
      config: { title: 'Totalmente Configurável', desc: 'Customize IDs, classes, cores, efeitos e gatilhos via um simples objeto de opções.' },
      module: { title: 'Módulo ES6', desc: 'Importe como um módulo ES6 padrão. Funciona com Webpack, Vite, Rollup ou diretamente no navegador.' },
      ripple: { title: 'Efeito Ripple', desc: 'Efeito de ondulação opcional usando a biblioteca node-waves (incluída).' },
    },
    demos: {
      title: 'Demonstrações',
      standard: { title: 'Modal Padrão', desc: 'Formulário com tabela de dados. Usa efeitos bounceInUp/bounceOutUp.' },
      bootstrap: { title: 'Estilo Bootstrap', desc: 'Diálogo similar ao Bootstrap com efeitos fadeInDown/fadeOutUp.' },
      materialize: { title: 'Estilo Materialize', desc: 'Modal inspirado no Material Design com zoomIn/zoomOut.' },
      modern: { title: 'Estilo Moderno', desc: 'Diálogo moderno e elegante com jackInTheBox/hinge.' },
      effects: { title: 'Explorador de Efeitos', desc: 'Teste todos os 17 pares de animação em tempo real. Selecione e visualize qualquer efeito.' },
    },
    effects: {
      title: 'Efeitos de Animação',
      subtitle: 'Clique em Visualizar para testar qualquer efeito no modal abaixo',
      select: 'Escolha um efeito...',
      current: 'Atual',
      preview: 'Visualizar',
      category: {
        back: 'Entradas com Recuo',
        bounce: 'Entradas Quicando',
        fade: 'Desvanecimento',
        special: 'Especiais',
      },
    },
    footer: {
      license: 'Licenciado sob LGPL-2.1',
      madeBy: 'Feito por Isaac Castro',
    },
  },
}

let currentLang = localStorage.getItem('openmodal-lang') || 'en'

function t(key) {
  const keys = key.split('.')
  let val = i18n[currentLang]
  for (const k of keys) {
    if (val && typeof val === 'object') val = val[k]
    else return key
  }
  return typeof val === 'string' ? val : key
}

function setLang(lang) {
  currentLang = lang
  localStorage.setItem('openmodal-lang', lang)
  document.documentElement.lang = lang
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    el.textContent = t(key)
  })
}

function toggleLang() {
  setLang(currentLang === 'en' ? 'pt' : 'en')
}
