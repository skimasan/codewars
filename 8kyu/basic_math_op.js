// Your task is to create a function that does four basic mathematical operations.
//
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
//
// Examples(Operator, value1, value2) --> output
//
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
    switch (operation) {
        case '+': // Если операция сложение
            return value1 + value2;
        case '-': // Если операция вычитание
            return value1 - value2;
        case '*': // Если операция умножение
            return value1 * value2;
        case '/': // Если операция деление
            if (value2 === 0) { // Проверяем, не делим ли на ноль
                return "Ошибка: Деление на ноль невозможно";
            }
            return value1 / value2;
        default: // Если передана неизвестная операция
            return "Ошибка: Неверная операция";
    }
}