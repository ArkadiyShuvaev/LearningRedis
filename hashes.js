const redisHashes = (redis) => {
    redis.hmset("user:12", "firstName", "Arkadiy", "lastName", "Shuvaev");

    // var isExist = redis.hexists("user:12", "lastName");
    // console.log(isExist);

    redis.hincrby("user:12", "updatedDt", 10);

    redis.hgetall("user:12", (err, result) => {
        console.log(result);
    });

}

export default redisHashes;