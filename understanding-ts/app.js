"use strict";
let userInput;
userInput = 5;
userInput = 'Max';
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('s', 300);
