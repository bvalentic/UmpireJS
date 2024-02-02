// Given a string, write a function to return its reverse.

function reverse(string) {
    strLength = string.length;
    result = "";

    for (let i=strLength; i>=0; i--) {
        result += string.charAt(i);
    }
    return result;
}

console.log(reverse("Hello World"));
console.log(reverse("abcdefghijklmnopqrstuvwxyz"))
