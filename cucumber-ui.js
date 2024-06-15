module.exports = {
    default: {
      require: [
        './step-definitions/ui-step-definitions/*.js',
        'library/ui-hooks.js',
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
      paths: ['features/ui/*.feature']
    }
  };
  