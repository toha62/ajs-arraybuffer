export default class ArrayBufferConverter {
  load(buffer) {
    if (Object.prototype.toString.call(buffer) !== '[object ArrayBuffer]') {
      throw new Error('ArrayBuffer expected');
    }
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    let resultString = '';

    for (let i = 0; i < this.bufferView.length; i++) {
      resultString += String.fromCharCode(this.bufferView[i]);
    }

    return resultString;
  }
}
