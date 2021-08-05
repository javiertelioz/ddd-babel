import { createClient } from 'redis';

const { REDIS_HOST, REDIS_PORT } = process.env;

const redisClient = () => {
  const handleError = err => console.log('Redis client error', err.stack);
  const handleSuccess = () => console.info(`🗄️  Redis\t\t ${REDIS_HOST}:${REDIS_PORT}\n`);

  const redisClient = createClient({
    host: REDIS_HOST,
    port: REDIS_PORT || 6379,
  });

  return {
    redisClient,
    start: () => {
      redisClient.on('error', handleError).on('connect', handleSuccess);
    },
  };
};

export default redisClient;
