
export function validName (name){

        console.log(name)
        if(name.length < 2){
            return false;
        }
        for (let i = 0; i < name.length; i++) {
            if (!(name[i] >= 'A' && name[i] <= 'Z' || name[i] >= 'a' && name[i] <= 'z')) {
                return false;
            }
        }
        return true;
}


export function validPrice (price){

    if(price === 0 || price.length < 1){
        return false;
    }
    for(let i = 0; i < price.length; i++){
        if(price[i] < '0' || price[i] > '9'){
            return false;
        }
    }
    return true;
}


export function validDescription(desc){
    if(desc.length < 5){
        return false;
    }
    return true;
}

export function validImage(img){
    if(img === null || img === ''){
        return false;
    }
    return true;
}

export function validCategory(category){
    if(category === 'Category' || category === '' || category === null  ){
        return false;
    }
    return true;
}