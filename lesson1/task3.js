const isTrue = true;
const isFalse = false;

const andResult = isTrue && isFalse;
const orResult = isTrue || isFalse;
const notTrue = !isTrue;
const notFalse = !isFalse;

if (isTrue) {
    console.log("isTrue is true!");
}

if (!isFalse) {
    console.log("isFalse is false!");
}

if (isTrue && !isFalse) {
    console.log("Both conditions are satisfied.");
}

if (isFalse || isTrue) {
    console.log("At least one condition is true.");
}