module.exports = function check(str, bracketsConfig) {
    var stack = [];
    var opensBrackets = [];
    var closedBrackets = [];

    bracketsConfig.forEach(function (item, index) {
        opensBrackets.push(item[0]);
        closedBrackets.push(item[1]);
        return;
    });

    for (var i = 0; i < str.length; i++) {
        if (stack.length == 0) {
            stack.push(str.charAt(i));
            if (opensBrackets.indexOf(str.charAt(i)) != -1) {
                continue;
            } else {
                break;
            }
        }
        if (opensBrackets.indexOf(stack[stack.length - 1]) == closedBrackets.indexOf(str.charAt(i))) {
            stack.pop();
            continue;
        }
        if (opensBrackets.indexOf(str.charAt(i)) != -1) {
            stack.push(str.charAt(i));
            continue;
        } else {
            break;
        }
    }

    return stack.length == 0;

}
