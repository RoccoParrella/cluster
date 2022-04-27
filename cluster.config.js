module.exports = {
    apps: [{
        name: "server cluster",
        script: "server.js",
        args: "8080",
        instances: "max",
        exec_mode: "cluster",
    }]
}