var formatter = function (input) {
    // Remove non-numerical characters
    var inputNums = input.replace(/\D/g, '');
    if (inputNums.length !== 10) {
        return 'Please provide a 10-digit phone number';
    }
    var inputArray = inputNums.split('');
    inputArray.splice(0, 0, '(');
    inputArray.splice(4, 0, ') ');
    inputArray.splice(8, 0, '-');
    return inputArray.join('');
};
module.exports.formatter = formatter;
