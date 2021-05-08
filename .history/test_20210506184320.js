const binaryConvert = (val) => {
    const arr = []
    while(val){
        if(val % 2 === 0){
            arr.push(0)
        }else{
            arr.push(1)
        }
    }

    return arr
}


console.log(binaryConvert(4))
