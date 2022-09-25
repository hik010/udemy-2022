let userInput: unknown;

userInput = 5;
userInput = 'Max';

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError('s', 300);
