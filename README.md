# Logger

## 1. About

Logger utility (for JavaScript) is just a tool to for simple logging. It will automatically stringify objects, and it provides different levels of logging.

## 1. Installation

Import the file at:

    src/logger.js

It should work for both, NodeJS and browser environments.


## 2. Usage

You can use this utility like: 

    Log(message, message2, message3, ...)

But also like:

    Log(data, data, data,...);

The available levels of debugging are:

    TODO:       Log.todo(...)
    PRODUCTION: Log.production(...)
    CORRECTION: Log.correction(...)
    NOTE:       Log.note(...)
    TRACE:      Log.trace(...)
    DEBUG:      Log.debug(...) 
    LOG:        Log.log(...)
    INFO:       Log.info(...)
    WARN:       Log.warn(...)
    ERROR:      Log.error(...)
    DANGER:     Log.danger(...)
    
Use them freely.


## 3. Why?

Minimalistic, and fully customizable. Note that the first version has only 50 lines, and it adds more levels of logging than the usual. You can mute all the logs by adding a comment in the correct line.

## 4. License

Licensed under "meh, the elites eclipsed your vision and projection, I won't be an obstacle unlike them, so use it as you prefer".