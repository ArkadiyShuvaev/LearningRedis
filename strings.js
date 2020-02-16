const redisStrings = (redis) =>  {
    redis.set('name', 'Arkadiy', "EX", 10);
    redis.get('name', (err, result) => {
        console.log(result);
    });

    redis.set("port", '443');
    redis.incrby("port", 100);
    redis.get("port", (err, result) => {
        console.log("port:" + result);
    });

    redis.mset("address", "Zeppelinstr. 52", "name", "Anastasiia");

    redis.mget("address", "name", (err, result) => {
        console.log(result);
    });
}

export default redisStrings;
