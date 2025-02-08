"use strict";
function Islegal(age) {
    if (age > 18) {
        return "You are legal to drive";
    }
    else {
        return "You are not legal to drive";
    }
}
console.log(Islegal(16));
