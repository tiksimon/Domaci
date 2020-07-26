let n = 5

for(let i = 1; i <= n; i++) {
    let red = ""
    for(let j = 1; j <= n; j++) {
        if(j <= n - i){
            red += " "
        } else {
            red += "#"
        }
    }

    red += " "

    for(let j = 1; j <= n; j++) { 
        if (j <= i) {
            red += "#"
        }
    }

    console.log(red)
}
