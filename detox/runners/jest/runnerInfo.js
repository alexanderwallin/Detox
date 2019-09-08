const isJasmine = !!global.jasmine;
const isJestCircus = !!(global.circusEnv && global.circusEnv());

module.exports = {
  type: isJestCircus ? 'jest-circus' : 'jasmine',
  isJasmine,
  isJestCircus,
};
