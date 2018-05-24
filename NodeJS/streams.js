const stream = require('stream')
const fs = require("fs")
const server = require("http").createServer()

const fs = require('fs')
const file = fs.createWriteStream('./big.file')

for (let i = 0; i <= 1e6; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}
file.end()

/*
Without Stream.
Saves all info from big.file in memory and then sends responds.
*/
server.on("request", (req, res)=>{
    fs.readFile("./big.file", (err, data)=>{
        if(err) throw err;

        res.end(data);
    })
})
server.listen(8000);


/*
With Stream.
Doesn't save all info to memory. Sends directly. Doesn't create spike in used memory.
Useful for large amounts of data.
*/
server.on("request", (req,res)=>{
    if(err) throw err;

    const src = fs.createReadStream("./big.file")
    src.pipe(res)
})
server.listen(8000);
