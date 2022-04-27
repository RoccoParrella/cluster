const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const app = require("./server")
const PORT = process.argv[2] || 8080
const MODO = process.argv[3] || "FORK"

if (MODO !== "FORK") {
    if (cluster.isPrimary) {
        for (let i = 0; i < numCPUs; i++) {
            setTimeout(() => cluster.fork(), 1500 * i);
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
        console.log("Proceso Primario", process.pid)
    } else {
        app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}\n`))
    }
} else {
    app.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}\n`))
} 
