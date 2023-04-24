//Acts as temporary "database"
const users = [
    {
        userId: 12345,
        userName: "cathy123",
        password: "bestPswd123"
    },
    {
        userId: 55555,
        userName: "fredburger2",
        password: "helloworld42"
    },
    {
        userId: 78942, 
        userName: "coolcathy",
        password: "icecream"
    }
]

//Create needed functions underneath: 
function getUsers(){
    return users; 
}

function login(username, password) {
    const user = users.filter((u) => u.userName == username); 
    if(!user[0]) throw Error('User not found');
    if(user[0].password !==password) throw Error('Password is incorrect');
    return user[0];
}

//MUST EXPORT FUNCTIONS to have access to them 
module.exports = { getUsers };