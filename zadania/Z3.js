function getResult() {
    const a = [
        '0', '1', '3',
        '4', '5', '6', '7', '8', '9' 
    ];

    for (let i = 0; i < a.length; i++) {
        s = s.replace(a[i], '!');
    }

    return s;
}


console.log(
    getResult('Текст с числами 2 и 3 до 5.'),
    '==',
    'Текст с числами ! и ! до !.'
);