import Redis from 'ioredis';
import redisStrings from "./strings";
import redisHashes from "./hashes";
import redisLists from "./lists";

const redis = new Redis();

// redisStrings(redis);
//redisHashes(redis);
redisLists(redis);