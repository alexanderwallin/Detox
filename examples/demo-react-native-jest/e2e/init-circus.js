const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
const workerAssignReporter = require('detox/runners/jest/assignReporter');
const specReporter = require('detox/runners/jest/specReporter');

// Set the default timeout
jest.setTimeout(300000);

const testEventListeners = global.circusEnv().testEventListeners;
testEventListeners.addListener(adapter);
testEventListeners.addListener(workerAssignReporter);
testEventListeners.addListener(specReporter);

beforeAll(async () => {
  await detox.init(config);
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});
