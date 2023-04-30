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

const con = require("./db_connect");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS account (
        account_id INT NOT NULL AUTO INCREMENT, 
        username VARCHAR(255) NOT NULL UNIQUE, 
        password VARCHAR(255), 
        email VARCHAR(255),
        fname VARCHAR(255), 
        lname VARCHAR(255), 
        dob DATE 
    )`;
    await con.query(sql);
}
createTable(); 

let getUsers = async () => {
    const sql = "SELECT * FROM account";
    return await con.query(sql); 
};

async function userExists(username) {
    const sql = `SELECT * FROM account
    WHERE username = "${username}"
    `;
    let u = await con.query(sql);
    console,log(u); 
    return u; 
}

async function login(username, password) {
    const user = await userExists(username); 
    if(!user[0]) throw Error('User not found'); 
    if(user[0].user_password !== password) throw Error('Password is incorrect.'); 

    return user[0];
}

async function getUser(user) {
    let sql; 
    if(user.userId) {
        sql = `SELECT * FROM account
        WHERE account_id = ${user.accountId}`
    } else {
        sql = `SELECT * FROM account 
        WHERE ${user.username}`
    }
    return await con.query(sql); 
}








