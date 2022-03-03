const basicUrl = process.env.NODE_ENV === 'production'? "https://office--app.herokuapp.com/users" : 'http://localhost:5050/office/users';

export const getAllUSers = ()=>{
    return fetch(basicUrl)
    .then((result)=>{result.json()})
    .catch((err)=>{console.log(err);})
}

