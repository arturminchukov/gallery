const processData = (data, options) => {
    gemini.suite(options.suiteName || data, (suite) => {
        suite.setUrl(`/gemini-test/?path=${data}`)
            .setCaptureElements(options.selector || '.gemini-suite-wrapper')
            .capture('plain');

        options.before && suite.before(options.before);

        if (options.states)
            for (let key in options.states)
                suite.capture(key, options.states[key])
    });
};

module.exports = function(options) {
    if (Array.isArray(options.data))
        options.data.forEach((data) => processData(data, options));
    else
        processData(options.data, options);
};
