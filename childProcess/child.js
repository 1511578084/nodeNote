const cluster = require('cluster')

console.log(cluster.isMaster, cluster.isWorker)