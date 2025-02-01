const fs = require('fs');
const path = require('path');
const readline = require('readline');
const axios = require('axios');
const correctKey = 'My Script'; 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function client() {
    return new Promise((resolve, reject) => {   
        console.log('SILAHKAN MASUKAN KEY SCRIPT !\n'); 
        rl.question('KEY : ', (userKey) => {
            if (userKey === correctKey) {
                console.log('KEY BENAR BOT DI JALANKAN !\n');  
                resolve(true); 
            } else {
                console.log('KEY ANDA TIDAK VALID !!!\n'); 
                process.exit(1); 
            }
        });
    });
}



module.exports = client ;
