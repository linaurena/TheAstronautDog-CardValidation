function maskify(number) {
  //
    return number.length > 4 ? '#'.repeat(number.length - 4) + number.substr(number.length - 4) : number;
}
console.log(maskify("hello world"));