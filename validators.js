// 暂时只校验IPV4，后续加上IPV6的校验
export const ipAddress = (val) => {
  if (typeof val != 'string') return false;
  const list = val.split('.');
  if (list.length == 4) return list.every(e => (e && Number(e) >= 0 && Number(e) <= 255));
  return false;
}

console.log(ipAddress(null));
console.log(ipAddress(undefined));
console.log(ipAddress(234));
console.log(ipAddress(''));
console.log(ipAddress([]));
console.log(ipAddress('127.0.0.1'));
console.log(ipAddress('localhost'));
console.log(ipAddress('4564.234234.432'));
console.log(ipAddress('1...0'));
console.log('4.6'); // 这种是合法的，会在最后一位前面补0，也就是4.0.0.6，这种也需要考虑