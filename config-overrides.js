/* eslint-disable quotes */
/* eslint-disable import/no-extraneous-dependencies */

const { addLessLoader, override } = require('customize-cra');

module.exports = override(addLessLoader());
