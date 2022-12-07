export const validateGenerator = (validator, message = '请填写正确的值') => (rule, value, callback) => {
  if (!validator(value)) return cb(new Error(message));
  cb();
}