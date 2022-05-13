console.log("[userService.js] initialized")

const user = require( '../model/user' );

const { Pool, Client } = require( 'pg' );


const pool = new Pool( {
    user: 's22',
    host: 'localhost',
    database: 's22',
    password: 's22',
    port: 1337,
} );

exports.saveUser = async (user) => {
    let sqlText = "INSERT INTO users (title, description) VALUES ('" + user.firstName + "', '" + user.lastName + "', '" + user.email + "', '" + user.username + "', '" + user.password + "');";

    let res = await pool.query( sqlText );
    return true;
}