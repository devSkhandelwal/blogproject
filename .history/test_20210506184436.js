const binaryConvert = (val) => {
    const arr = []
    while(val){
        if(val % 2 === 0){
            arr.push(0)
            return val=val/2
        }else{
            arr.push(1)
            return val=val/2
        }
        break
    }

    return arr
}


console.log(binaryConvert(4))
