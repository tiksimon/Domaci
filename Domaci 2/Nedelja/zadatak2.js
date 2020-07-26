for (let count = 1; count <= 100; count++) {
    if(count % 3 == 0 && count % 5 == 0) {
        console.log("FizzBuzz")
        continue
    }

    if(count % 3 == 0) {
        console.log("Fizz")
        continue
    }

    if(count % 5 == 0) {
        console.log("Buzz")
        continue
    }
    console.log(count)

}
