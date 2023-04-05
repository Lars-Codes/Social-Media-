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

//MUST EXPORT FUNCTIONS to have access to them 
module.exports = { getUsers };