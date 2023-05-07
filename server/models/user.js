const con = require("./db_connect");

async function createTables() {
    let sql = `CREATE TABLE IF NOT EXISTS account (
        account_id INT NOT NULL AUTO_INCREMENT, 
        username VARCHAR(255) NOT NULL UNIQUE, 
        password VARCHAR(255), 
        email VARCHAR(255),
        fname VARCHAR(255), 
        lname VARCHAR(255), 
        dob DATE,
        CONSTRAINT account_pk PRIMARY KEY(account_id) 
    )`;

    // let like_sql = `CREATE TABLE IF NOT EXISTS like ( 
    //     like_id INT NOT NULL AUTO_INCREMENT, 
    //     account_id INT, 
    //     post_id INT, 
    //     CONSTRAINT like_pk PRIMARY KEY(like_id),
    //     CONSTRAINT _account_fk_ FOREIGN KEY(account_id) REFERENCES account(account_id), 
    //     CONSTRAINT post_fk_ FOREIGN KEY(post_id) REFERENCES post(post_id)
    // )`;

    // let comment_sql = `CREATE TABLE IF NOT EXISTS comment(
    //     comment_id INT NOT NULL AUTO_INCREMENT, 
    //     content TEXT, 
    //     post_id INT, 
    //     account_id INT, 
    //     CONSTRAINT comment_pk PRIMARY KEY(comment_id), 
    //     CONSTRAINT post_fk FOREIGN KEY(post_id) REFERENCES post(post_id), 
    //     CONSTRAINT account_fk FOREIGN KEY(account_id) REFERENCES account(account_id)   
    // )`;

    await con.query(sql);
    // await con.query(like_sql);
    // await con.query(comment_sql)
}
createTable(); 

async function getAllUsers() {
    let sql = `SELECT * FROM account;`
    return await con.query(sql);
  }

let getUsers = async () => {
    const sql = "SELECT * FROM account";
    return await con.query(sql); 
};

async function userExists(username) {
    const sql = `SELECT * FROM account
    WHERE username = "${username}"
    `;
    let u = await con.query(sql);
    console.log(u); 
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
        WHERE account_id = ${user.account_id}`
    } else {
        sql = `SELECT * FROM account 
        WHERE ${user.username}`
    }
    return await con.query(sql); 
}

async function register(user){
    const u = userExists(user.username); 
    if(u.length>0) throw error('Username already exists');

    const sql = `INSERT INTO account (username, password) 
    VALUES ("${user.username}", "${user.pass}"
    )`;

    const insert = await con.query(sql); 
    const newUser = await getUser(user); 
    return newUser[0];
}

async function editUser(user){
    const sql = `UPDATE account SET
    username = "${user.username}"
    WHERE account_id = ${user.account_id}
    `; 
}

async function deleteUser(userId){
    const sql = `DELETE FROM account 
    WHERE account_id = ${userId}
    `;
    await con.query(sql); 
}

module.exports = {getAllUsers, getUsers, userExists, login, getUser, register, editUser, deleteUser};










