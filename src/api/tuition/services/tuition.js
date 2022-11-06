'use strict';

/**
 * tuition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tuition.tuition');
