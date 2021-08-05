import winston from 'winston';

const { createLogger, format, transports } = winston;

const { LOGGER_DATE_FORMAT } = process.env;

const logFormat = format.printf(
  info => `${info.timestamp.split(' ')[1]} ${info.level}: ${JSON.stringify(info.message, null, 2)}`
);

const logger = createLogger({
  format: format.timestamp({ format: LOGGER_DATE_FORMAT || 'DD-MM-YYYY HH:mm:ss' }),
  transports: [
    new transports.Console({
      format: format.combine(format.timestamp(), format.colorize(), format.simple(), logFormat),
    }),
    new transports.File({
      filename: '/var/log/error.log',
      level: 'error',
      format: format.combine(format.json()),
    }),
    new transports.File({
      filename: '/var/log/combined.log',
      format: format.combine(format.json()),
    }),
  ],
});

/**
 * Class representing a Logger.
 *
 * @class
 * @classdesc
 */
class Logger {
  /**
   * Info message
   * @static
   * @param {string} message Message
   * @param {null} details Details
   * @returns {void}
   */
  static log(message, details = null) {
    logger.info({ message, details });
  }

  /**
   * Error message
   * @static
   * @param {string} message Message
   * @param {null} details Details
   * @returns {void}
   */
  static error(message, details = null) {
    logger.error({ message, details });
  }

  /**
   * Error message
   * @static
   * @param {string} message Message
   * @param {null} details Details
   * @returns {void}
   */
  static warning(message, details = null) {
    logger.warning({ message, details });
  }
}

export default Logger;
