const basicUrl = 'http://localhost:5050/office/users';

export const getAllUSers = (req,res)=>{
    return fetch(basicUrl)
    .then((result)=>{console.log(result);})
    .catch((err)=>{console.log(err);})
}

