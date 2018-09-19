Palindrome(value = "123444321") {
        value += '';
        var max_length = 0,
            palindrome = '';

        for (let i = 0; i < value.length; i++) {
            let subString = value.substr(i, value.length),
                j = subString.length;
            while (j) {
                let stringOperate = subString.substr(0, j);

                if (isPalindrome(stringOperate) && stringOperate.length > max_length) {
                    max_length = stringOperate.length;
                    if (stringOperate.length === value.length) {
                        return palindrome = stringOperate;
                    }
                    palindrome = stringOperate;
                }
                j -= 1;
            }
        }
        if (!palindrome) return 0;
        return palindrome;

        function isPalindrome(subString) {
            subString += '';
            var reversed = subString.split("").reverse().join("");
            return subString == reversed;
        }