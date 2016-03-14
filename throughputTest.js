import { Test } from '/test'

class DataChannelThroughputTest extends Test {
  constructor () {
    super(...arguments)
    this.samplePacket = ''

    for (let i = 0; i !== 1024; ++i) {
      this.samplePacket += 'h'
    }
  }
  start () {
    super.start()
  }
  destroy () {
    super.destroy()
    window.clearTimeout(this.throughputTimeout)
    if (this.call) {
      this.call.close()
      this.call = null
    }
  }
}

export default DataChannelThroughputTest
