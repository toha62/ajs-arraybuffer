import ArrayBufferConverter from './ArrayBufferConverter';

// const converter = new ArrayBufferConverter();

// function getBuffer() {
//   const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

//   return (input => {
//     const buffer = new ArrayBuffer(data.length * 2);
//     const bufferView = new Uint16Array(buffer);
//     for (let i = 0; i < input.length; i++) {
//       bufferView[i] = input.charCodeAt(i);
//     }
//     return buffer;
//   })(data);
// }

// const buffer = getBuffer();

// console.log(buffer);
// converter.load(buffer);
// console.log(converter.bufferView);
// console.log(Object.prototype.toString.call(buffer));
// console.log(converter.toString());
