const binaryConvert = (val) => {
    const arr = []
    while(true){
        if(val % 2 === 0){
            arr.push(0)
            val=val/2
        }else{
            arr.push(1)
            val=val/2
        }
        break val =0
    }

    return arr
}


console.log(binaryConvert(4))
