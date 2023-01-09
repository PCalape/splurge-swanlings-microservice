import * as dotenv from 'dotenv';

dotenv.config();

const APP_PORT = +process.env.APP_PORT || 4000;

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL || '-';

const TOKEN = process.env.TOKEN || '';

const SWANLING_DEFAULT_VALUE = +process.env.SWANLING_DEFAULT_VALUE || 5;

export { APP_PORT, MONGODB_CONNECTION_URL, TOKEN, SWANLING_DEFAULT_VALUE };
