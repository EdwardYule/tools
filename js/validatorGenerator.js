// async-validator校验器生成器
export const validatorGenerator = (validator, message = '请填写正确的值') => (rule, value, callback) => {
  if (!validator(value)) callback(new Error(message));
  callback();
}