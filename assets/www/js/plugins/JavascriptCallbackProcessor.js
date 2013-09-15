var JavascriptCallbackProcessor = function(){};

JavascriptCallbackProcessor.prototype.execute = function(functionName, data, success, failure) {
    return cordova.exec(success, failure, "JavascriptCallbackProcessor", functionName, data);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.JavascriptCallbackProcessor) {
    window.plugins.JavascriptCallbackProcessor = new JavascriptCallbackProcessor();
}