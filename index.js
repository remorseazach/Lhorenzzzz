const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_oheZTS0FJxi6@ep-delicate-mode-a1droa93-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect()
    .then(() => console.log('Connected to Neon database!'))
    .catch(err => console.error('Connection error', err.stack))
    .finally(() => client.end());
