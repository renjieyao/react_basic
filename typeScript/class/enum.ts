enum Status{
    MASSAGE = 1,
    SPA,
    DABAOJIAN
}

function getServe(status:any){
    if(status === Status.MASSAGE)
        return "massage";
    else if(status === Status.SPA)
        return "spa";
    else if(status === Status.DABAOJIAN)
        return "dabaojian"
}

const result = getServe(1);
console.log(`I am going to ${result}`);