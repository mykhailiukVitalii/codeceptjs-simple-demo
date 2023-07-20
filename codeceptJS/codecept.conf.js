require('dotenv').config();

const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

const tests = process.env.jenkins_JOB_ENV === "prod"
          ? './todomvc-tests/prod/*_test.js'
          : './todomvc-tests/staging/*_test.js'

exports.config = {
  tests,
  output: './output',
  helpers: {
    Playwright: {
      video: false,
      trace: false,
      url: 'http://localhost',
      waitForTimeout: 5000,
      waitForNavigation: 'networkidle0',
      waitForAction: 0,
      show: false,
      browser: process.env.jenkins_BROWSER || 'firefox'
    },

    REST: {},

    CustomHelper: {
      require: './todomvc-tests/helpers/custom.helper.js'
    }
  },

  include: {
    TodosPage: './todomvc-tests/pages/todos.page.js'
  },
  plugins: {
    testomatio: {
      enabled: true,
      require: '/home/vitalii/tomato-testreporter/reporter/lib/adapter/codecept.js',
      apiKey:  process.env.TESTOMATIO,
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}
