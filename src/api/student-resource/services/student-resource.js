'use strict';

/**
 * student-resource service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-resource.student-resource');
