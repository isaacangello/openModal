# OpenModal

OpenModal is a lightweight, framework-agnostic modal library built with vanilla ES6. It uses [animate.css](https://animate.style/) for smooth entry and exit animations.

- 🪶 **Zero dependencies** — pure ES6 class, no runtime libraries
- 🧩 **Framework-agnostic** — works with Bootstrap, Materialize, Tailwind CSS, or your own styles
- 🎬 **17 animation pairs** — separate in/out effects for backdrop and content
- ⚙️ **Fully configurable** — IDs, classes, colors, effects, triggers
- 🌐 **Bilingual** — English and Portuguese documentation
- 🌍 **Live demo**: [openmodal.sourceforge.io](https://openmodal.sourceforge.io/)

## Quick Start

```bash
npm install open-modal
```

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">

<button id="showModal">Open Modal</button>

<div class="open-modal hide">
  <div class="modal-content">
    <p>Content here</p>
    <button id="cancelButton">Close</button>
  </div>
</div>

<script type="module">
  import OpenModal from 'open-modal'
  new OpenModal().init()
</script>
```

## Documentation

Full documentation with configuration reference, API guide, and examples: **[openmodal.sourceforge.io/docs.html](https://openmodal.sourceforge.io/docs.html)**

Live demo with interactive effects explorer: **[openmodal.sourceforge.io](https://openmodal.sourceforge.io/)**

## Options

| Option | Default | Description |
|--------|---------|-------------|
| `btnShowId` | `"showModal"` | ID of the trigger button |
| `btnCancelId` | `"cancelButton"` | ID of the close button |
| `containerClass` | `"open-modal"` | Backdrop container class |
| `contentClass` | `"modal-content"` | Content wrapper class |
| `hideClass` | `"hide"` | Visibility toggle class |
| `containerBackground` | `false` | Backdrop color (e.g. `"rgba(0,0,0,0.5)"`) |
| `containerEffects` | `false` | Object with `containerInEffects` / `containerOutEffects` |
| `contentEffects` | `false` | Object with `contentInEffects` / `contentOutEffects` |
| `trigger` | `false` | Optional callback before opening |

## API

### `new OpenModal(options)`
Creates a new modal instance.

### `.init()`
Registers event listeners. Call once per instance.

### `.updateEffects(contentIn, contentOut)`
Changes animation effects in real time without recreating the instance.

```js
modal.updateEffects('animate__fadeIn', 'animate__fadeOut')
```

## License

[LGPL-2.1](https://www.gnu.org/licenses/lgpl-2.1.html) — Made by Isaac Castro
