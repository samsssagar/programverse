/**
 * Functional recursion
 */
function palindrome(i, str, n) {
    if (i >= Math.abs(n / 2)) return true;
    if (str[i] !== str[n - i - 1]) return false;
    return palindrome(i + 1, str, n);
}

console.log(palindrome(0, "dog", 3));