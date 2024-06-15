module.exports = {
    default: {
      require: [
        'step-definitions/api-step-definitions/*.js',
        'library/api-hooks.js',
        'library/common.js',
      ],
      format: [
        "summary",
        "progress-bar",
        "@cucumber/pretty-formatter",
        "cucumber-console-formatter",
        `html:./report/report.html`,
        `json:./report/report.json`,
      ],
      paths: ['features/api/*.feature']
    }
  };
  