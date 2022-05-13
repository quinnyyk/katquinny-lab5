console.log("[feedbackService.js] initialized")

const feedback = require( '../model/feedback' );

const { Pool, Client } = require( 'pg' );

const pool = new Pool( {
    user: 's22',
    host: 'localhost',
    database: 's22',
    password: 's22',
    port: 1337,
} );

exports.saveFeedback = async (feedback) => {
    let sqlText = "INSERT INTO posts (title, description) VALUES ('" + feedback.review + "', '" + feedback.rating + "', '" + feedback.review + "');";

    let res = await pool.query( sqlText );
    return true;
}
