function test_prime(n)
{

    if (n===1)
    {
        return false;
    }
    else if(n === 2)
    {
        return true;
    }
    else
    {
        for(let x = 2; x <= Math.sqrt(n); x++)
        {
            if(n % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}

console.log(test_prime(37));

function task2 (a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        if(test_prime(i)) {
            arr.push(i)
        }
    }

    return arr;
}

console.log(task2(1, 7))

function task3 (n) {
    let t = [];
    while (n > 0) {
        t.push(n % 10);
        n = Math.floor(n / 10)
    }
    return t.join('');
}

console.log(task3(100))

function checkPalindrome (num) {
    if (num === task3(num)) return true;
    else return false;
}
console.log(checkPalindrome(121))

function binarySum(a, b) {

    let arr1 = [];
    let arr2 = [];
    while(a != 0) {
        arr1.unshift(a%10);
        a = Math.floor(a / 10);
    }
    while(b != 0) {
        arr2.unshift(b%10);
        b = Math.floor(b / 10);
    }
    if (arr1.length > arr2.length) {
        let l = arr1.length - arr2.length;
        for (let i = 0; i < l; i++) {
            arr2.unshift(0)
        }
    }
    else if (arr1.length < arr2.length) {
        let l = arr2.length - arr1.length;
        for (let i = 0; i < l; i++) {
            arr1.unshift(0);
        }
    }
    let sum = [];
    let carry = 0;
    let t = 0;
    let l = arr1.length-1;
    for (let i = 0; i < arr1.length; i++) {
        t = arr1[l-i] + arr2[l-i] + carry;
        if (t == 0) {
            sum.unshift(0)
        }
        else if (t == 1) {
            sum.unshift(1);
            carry = 0;
        }
        else if (t == 2) {
            sum.unshift(0)
            carry = 1
        }
    }
    if (carry == 1) sum.unshift(1)
    return sum;
}
console.log(binarySum(101, 100))

function binaryInverse(a)
{
    let stringVer = a.toString();
    let inverseVer = "";
    for(let i = 0; i < stringVer.length; i++)
    {
        inverseVer += stringVer.charAt(i) == "0" ? "1" : "0";
    }
    return inverseVer;
}
console.log(binaryInverse("100010100101"))


function binaryTwosComplement(binNumber)
{

    let finalResult = binarySum(binaryInverse(binNumber), 1);
return finalResult.join('');

}


console.log(binaryTwosComplement(100));


