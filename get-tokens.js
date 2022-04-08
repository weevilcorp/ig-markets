var IG = require('./lib/ig');
var ig = new IG(
    process.env.IG_KEY,
    process.env.IG_IDENTIFIER,
    process.env.IG_PASSWORD,
    true
);

async function run() {
    await ig.login();

    console.log('cst: '+ig.cst);
    console.log('token: '+ig.token);
}

run().catch(console.dir);