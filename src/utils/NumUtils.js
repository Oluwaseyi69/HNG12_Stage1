const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num && num !== 1;
};

const isArmstrong = (num) => {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    return digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0) === num;
};

const digitSum = (num) => {
    return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
};

module.exports = { isPrime, isPerfect, isArmstrong, digitSum };
