/*
    STRATEGY: 
        use a stack / LIFO queue
        iterate through string[], 
        if num, add to stack
        if operator, calc from top 2 in stack
            then add res to 
            
    NOTE: The input represents a valid arithmetic expression in a reverse polish notation.
 */
function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    const operators: Set<string> = new Set(['+', '-', '*', '/']);

    tokens.forEach(token => {
        if (operators.has(token)) {
            const [a,b] = [stack.pop(), stack.pop()];
            switch (token) {
                case '+':
                    stack.push(b+a);
                    break;
                case '-':
                    stack.push(b-a);
                    break;
                case '*':
                    stack.push(b*a);
                    break;
                case '/':
                    stack.push(Math.trunc(b/a));
                    break;
            }
        }
        else {
            stack.push(parseInt(token));
        }
    });

    return stack.pop();
};