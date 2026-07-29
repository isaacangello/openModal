import OpenModal from "./dist/open-modal.js"

/* ─── Effects Explorer Instance ─── */
const selectModal = new OpenModal({
  btnShowId: 'slEffect',
  btnCancelId: 'selectedBtnClose',
  containerClass: 'modal-selected',
  contentClass: 'modal-dialog-selected',
  containerBackground: 'rgba(0,0,0,0.45)',
})
selectModal.init()

/* ─── Effects JSON ─── */
let effectsData = {}

const effectsSelect = document.querySelector('#select-effect')
const effectsTbody = document.querySelector('#effects-tbody')
const effectLabel = document.querySelector('#effect-label')
const effectClasses = document.querySelector('#effect-classes')
const previewName = document.querySelector('#preview-effect-name')

function getLang() {
  try { return (typeof currentLang !== 'undefined') ? currentLang : 'en' }
  catch(e) { return 'en' }
}

function renderEffectsTable(data) {
  const lang = getLang()
  effectsTbody.innerHTML = ''

  for (const key in data) {
    const e = data[key]
    const label = e.label[lang] || e.label.en
    const desc = e.description[lang] || e.description.en
    const tr = document.createElement('tr')
    tr.innerHTML = `
      <td><span class="category-badge ${e.category}">${e.category}</span></td>
      <td>${label}</td>
      <td class="hide-mobile">${desc}</td>
      <td><code>${e.effectIn}</code> / <code>${e.effectOut}</code></td>
      <td><button class="btn btn-ghost btn-sm" data-effect-key="${key}">Preview</button></td>
    `
    effectsTbody.appendChild(tr)
  }

  effectsTbody.querySelectorAll('[data-effect-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.effectKey
      const e = data[key]
      selectModal.updateEffects(e.effectIn, e.effectOut)
      const label = e.label[getLang()] || e.label.en
      if (previewName) previewName.textContent = label
      effectsSelect.value = key
      updateEffectInfo(e, key)
      document.querySelector('#slEffect').click()
    })
  })
}

function updateEffectInfo(e, key) {
  const lang = getLang()
  const label = e.label[lang] || e.label.en
  const desc = e.description[lang] || e.description.en
  effectLabel.textContent = `${label} (${key})`
  effectClasses.textContent = `${e.effectIn} → ${e.effectOut}`
  if (previewName) previewName.textContent = label
}

/* ─── Populate ─── */
fetch('lib/effects.json')
  .then(r => r.json())
  .then(data => {
    effectsData = data
    for (const key in data) {
      const label = data[key].label.en
      effectsSelect.appendChild(new Option(label, key))
    }
    renderEffectsTable(data)
  })

effectsSelect.addEventListener('change', function () {
  const key = this.value
  if (!key || !effectsData[key]) return
  const e = effectsData[key]
  selectModal.updateEffects(e.effectIn, e.effectOut)
  updateEffectInfo(e, key)
})

/* ─── Other Modal Instances ─── */
new OpenModal({
  btnShowId: 'botaoMostrar',
  containerBackground: '#05662a80',
  containerEffects: { containerInEffects: 'animate__bounceInUp', containerOutEffects: 'animate__fadeOut' },
  contentEffects: { contentInEffects: 'animate__bounceInUp', contentOutEffects: 'animate__bounceOutUp' },
}).init()

new OpenModal({
  btnShowId: 'bsShowModal',
  btnCancelId: 'bsBtnClose',
  containerClass: 'modal-bootstrap',
  contentClass: 'modal-dialog',
  containerEffects: { containerInEffects: 'animate__fadeIn', containerOutEffects: 'animate__fadeOut' },
  contentEffects: { contentInEffects: 'animate__fadeInDown', contentOutEffects: 'animate__fadeOutUp' },
}).init()

new OpenModal({
  btnShowId: 'mtShowModal',
  btnCancelId: 'btn-close',
  containerClass: 'modal-materialize',
  contentClass: 'modal-content-mt',
  containerEffects: { containerInEffects: 'animate__fadeIn', containerOutEffects: 'animate__fadeOut' },
  contentEffects: { contentInEffects: 'animate__zoomIn', contentOutEffects: 'animate__zoomOut' },
}).init()

new OpenModal({
  btnShowId: 'StdModal',
  btnCancelId: 'ModernBtnClose',
  containerClass: 'modal-modern',
  contentClass: 'modal-dialog-modern',
  containerEffects: { containerInEffects: 'animate__fadeIn', containerOutEffects: 'animate__zoomOut' },
  contentEffects: { contentInEffects: 'animate__jackInTheBox', contentOutEffects: 'animate__hinge' },
}).init()

/* ─── CSS hide-mobile ─── */
const style = document.createElement('style')
style.textContent = `@media (max-width:768px){.hide-mobile{display:none!important}}`
document.head.appendChild(style)
