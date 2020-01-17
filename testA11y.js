import axe from 'axe-core'

const testA11y = html =>
  new Promise((resolve, reject) => {
    axe.run(html, {}, (err, { violations }) => {
      if (err) {
        reject(err)
        return
      }
      if (violations.length > 0) {
        reject(violations)
        return
      }
      resolve(true)
    })
  })

export default testA11y
