/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import { initialize } from 'unleash-client';

const unleash = initialize({
  url: process.env.UNLEASH_URL,
  appName: 'default',
  customHeaders: { Authorization: process.env.UNLEASH_TOKEN },
});

export default unleash;
