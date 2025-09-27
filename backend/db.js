const { Client } = require('pg');

const DATABASE_URL = process.env.DATABASE_URL;

const client = new Client({
    connectionString: DATABASE_URL,
});

async function connectDB() {
    console.log('Connecting to PostgreSQL...');
    try {
        await client.connect();
        console.log('✅ Successful connection to PostgreSQL.');
        
        const res = await client.query('SELECT NOW()');
        console.log(`Postgress working. Current Date: ${res.rows[0].now}`);
        
    } catch (err) {
        console.error('❌ Error connecting to PostgreSQL:', err.message);
        throw err; 
    }
}

module.exports = {
    connectDB,
    client
};