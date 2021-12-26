function isMatchingBrackets (string) {
    let stack = [];
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    if (string.length % 2) return false;
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        if (element === '{' || element === '(' || element === '[' ) {
            stack.push(string[i]);
            continue;
        }
        if (stack.length === 0) return false;
        let check = stack.pop();
        
        if (obj[check] !== element) return false;
    }
    if (stack.length > 0) return false;
    return true;
}
console.log(isMatchingBrackets("{}()[]"));