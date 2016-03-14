import { Test } from '/test'

class DataChannelThroughputTest extends Test {
  constructor () {
    super(...arguments)
    this.samplePacket = ''
    
    // this for loop causes a standardjs error indicating that some code paths do not call super()
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
