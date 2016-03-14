class Test {
  constructor (options, callback) {
    this.log = []
  }

  start () {
    this.timeout = window.setTimeout(() => {
      if (this.reject) {
        this.reject('timeout', this.log)
      }
    }, 30000)
  }

  destroy () {
    window.clearTimeout(this.timeout)
  }
}

export { Test }
