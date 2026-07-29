fetch('lib/effects.json')
  .then(r => r.json())
  .then(data => {
    const container = document.querySelector('#docs-effects-table')
    if (!container) return

    let html = '<table class="effects-table"><thead><tr>'
    html += '<th>Category</th><th>Effect</th><th>Description</th><th>In / Out</th>'
    html += '</tr></thead><tbody>'

    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'en'

    for (const key in data) {
      const e = data[key]
      const label = e.label[lang] || e.label.en
      const desc = e.description[lang] || e.description.en
      html += '<tr>'
      html += `<td><span class="category-badge ${e.category}">${e.category}</span></td>`
      html += `<td>${label}</td>`
      html += `<td>${desc}</td>`
      html += `<td style="font-size:0.8rem"><code>${e.effectIn}</code><br><code>${e.effectOut}</code></td>`
      html += '</tr>'
    }

    html += '</tbody></table>'
    container.innerHTML = html
  })
