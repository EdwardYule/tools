export const ipv4Validator = val => {
  if (typeof val != 'string') return false;
  const list = val.split('.');
  if (list.length <= 4 && list.length >= 1) return list.every(e => (e && Number(e) >= 0 && Number(e) <= 255));
  return false;
}
console.log(ipv4Validator('4.6')); // 这种是合法的，会在最后一位前面补0，也就是4.0.0.6

export const hostnameValidator = val => {
  if (typeof val != 'string') return false;
  const list = val.split('.');
  if (list.every(e => e.length && !e.match(/[^0-9a-zA-Z\-]/g))) return true;
  return false;
}

export const portValidator = val => {
  if (typeof val != 'string') return false;
  if (val >= 0 && val <= 65535) return true;
  return false;
}

export const url = val => {
  // 如果是async-validator, 里面自带有type: 'url'的校验
  if (typeof val != 'string') return false;
  const [protocol, host] = val.split('://');
  const [hostname, port] = host.split(':');
  if (['http', 'https'].includes(protocol) && (hostnameValidator(hostname) || ipv4Validator(hostname)) && portValidator(port)) return true;
  return false;
}