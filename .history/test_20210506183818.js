const binaryConvert = (val) => {
    const arr = []
    while(true){
        const i = val % 2
        console.log(i)
        arr.push(i)
        break;
    }

    return arr
}


console.log(binaryConvert(4))
