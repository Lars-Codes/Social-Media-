//create a create table statement for post 
const con = require("./db_connect");

async function createTables() {
    let sql = `CREATE TABLE IF NOT EXISTS post(
        post_id INT NOT NULL AUTO_INCREMENT, 
        date_posted DATE, 
        content TEXT, 
        account_id INT, 
        CONSTRAINT post_pk PRIMARY KEY(post_id), 
        CONSTRAINT account_fk FOREIGN KEY(account_id) REFERENCES account(account_id)
    )`;
    await con.query(sql);
}

async function getAllPosts() {
    let sql = `SELECT * FROM post;`
    return await con.query(sql);
  }

async function postExists(post_id) {
    const sql = `SELECT * FROM post
    WHERE post_id = "${post_id}"
    `;
    let u = await con.query(sql);
    console.log(u); 
    return u; 
}

async function getPost(postId) {
    let sql; 
    if(postId.post_id) {
        sql = `SELECT * FROM account
        WHERE account_id = ${postId.post_id}`
    } else {
        sql = `SELECT * FROM account 
        WHERE ${postId.post_id}`
    }
    return await con.query(sql); 
}

async function editPost(con){
    const sql = `UPDATE post SET
    content = "${con.content}"
    WHERE post_id = ${con.post_id}
    `; 
}

async function deletePost(postId){
    const sql = `DELETE FROM account 
    WHERE post_id = ${postId}
    `;
    await con.query(sql); 
}
module.exports = {getAllPosts, postExists, getPost, editPost, deletePost};