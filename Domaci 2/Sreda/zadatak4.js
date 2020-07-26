{
    let i = 1
    let j = 1
    for (; i <= 5 * 1000; i++) {
        if (i % 5 == 0) {
            console.log (`${j++}. ${i}`)
        }
    }
}