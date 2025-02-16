/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    // strategy
    // when iterating through tokens
    // add operands to a stack
    // if token == operator,
    // then pop last 2 operands and operate on them
    // lastly, push result to operand stack

    // answer should be the last operand standing

    // edge cases?
    // assume we always receive a valid RPN expression

    const operators = ['+','-','*','/']
    const operands = [];

    const operate = (operand1,operand2, operator) => {
        switch(operator){
            case '+':
                return parseInt(operand1) + parseInt(operand2);
            case '-':
                return parseInt(operand2) - parseInt(operand1);
            case '*':
                return parseInt(operand1) * parseInt(operand2);
            case '/':
                return parseInt(parseInt(operand2) / parseInt(operand1));
        }
    }

    for(const tkn of tokens) {
        // tkn is operator
        if (operators.includes(tkn)) {
            const operand1 = operands.pop();
            const operand2 = operands.pop();
        
            const result = operate(operand1, operand2, tkn); // calculate
            // console.log(operand1, operand2, tkn, result);
            operands.push(result); // push result to our operand stack
        }

        // tkn is operand
        else {
            operands.push(tkn);
        }
    }

    return operands[0];
};