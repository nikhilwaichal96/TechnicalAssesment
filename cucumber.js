module.exports = {
    default: {
      require: [
        './step-definitions/*.ts',
        'library/hooks.js',
        'library/common.js',
      ],
      format: [
        "summary",
        "progress-bar",
        "@cucumber/pretty-formatter",
        "cucumber-console-formatter",
        `html:./report/report.html`,
        `json:./report/report.json`,
      ]
    }
  };
  