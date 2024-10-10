import pino from 'pino';

const logger = pino({
  level: process.env.WEB_LOG_LEVEL
});

export default logger;
