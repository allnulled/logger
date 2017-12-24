(function() {
    function formatDate(date) {
        return date.getFullYear() +
            "/" + (date.getMonth() + 1) +
            "/" + date.getDate() +
            " " + date.getHours() +
            ":" + date.getMinutes() +
            ":" + date.getSeconds();
    };

    function formatArguments(argsParameter) {
        var message = "";
        for (var a = 0; a < argsParameter.length; a++) {
            message += (a !== 0 ? "\n----\n" : "");
            switch (typeof argsParameter[a]) {
                case 'object':
                    message += JSON.stringify(argsParameter[a], null, 4);
                    break;
                default:
                    message += argsParameter[a];
            }
        }
        return message;
    };

    function Log$defaultFactory(method) {
        return function() {
            console.log("[" + method.toUpperCase() + "] [" + formatDate(new Date()) + "]: " + formatArguments(arguments));
        };
    };
    var Log = Object.assign(Log$defaultFactory("log"), {
        todo: Log$defaultFactory("todo"),
        production: Log$defaultFactory("production"),
        correction: Log$defaultFactory("correction"),
        note: Log$defaultFactory("note"),
        trace: Log$defaultFactory("trace"),
        debug: Log$defaultFactory("debug"),
        log: Log$defaultFactory("log"),
        info: Log$defaultFactory("info"),
        warn: Log$defaultFactory("warn"),
        error: Log$defaultFactory("error"),
        danger: Log$defaultFactory("danger")
    });
    (function() {
        if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
            module.exports = Log;
        else
            window.Log = Log;
    })();
})();