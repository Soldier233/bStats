const config = require('./config');
const Redis = require('ioredis');

let cluster = null;

/**
 * Gets the redis cluster defined in the config.
 *
 * @returns {Redis.Cluster} The cluster.
 */
function getRedisCluster() {
    if (cluster === null) {
        cluster = new Redis(6379, "192.168.10.102");
    }
    return cluster;
}

// Exports
module.exports.getRedisCluster = getRedisCluster;