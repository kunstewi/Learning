const { create } = require("domain");
const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Contenet-Type": "text/plain"});
    res.end("Hello World!\n");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
