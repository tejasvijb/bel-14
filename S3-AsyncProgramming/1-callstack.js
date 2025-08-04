

const f1 = () => {
    console.log("f1 called");
    f2()
    console.log("Exiting f2");
}

const f2 =() => {
    console.log("f2 called");
    f3() 
    console.log("Exiting f3");
    
}

const f3 = () => {
    try {
        throw new Error("Error Encountered")
    } catch (e) {
        console.log(e);
    }
}

f1()

// SOMETHING which does async task for us
// Stack: Datastructure supports LIFO (Last In First Out)
// Call Stack
/*
F1 {
    .
    .
    .
    -> F2
    .
    .
}
F2 {
    .
    .
    .
    -> F3
    .
    .

}

F3 {
    .
    .
    .
}

// Example 2


F1 {}
F2 {} --> Line 5
F3 {}
CallStack: 




*/