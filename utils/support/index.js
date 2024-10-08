import addContext from 'mochawesome/addContext'

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    let item = runnable
    const nameParts = [runnable.title]

    while (item.parent) {
      nameParts.unshift(item.parent.title)
      item = item.parent
    }
    const fullTestName = nameParts.filter(Boolean).join(' -- ')

    const imageUrl = `assets/screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`
    addContext({ test }, imageUrl)
  }
})

Cypress.on('uncaught:exception', () => {
  return false
})
