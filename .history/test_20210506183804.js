const binaryConvert = (val) => {
    const arr = []
    while(true){
        i = val % 2
        console.log(i)
        arr.push(i)
        break;
    }

    return arr
}


console.log(binaryConvert(4))
