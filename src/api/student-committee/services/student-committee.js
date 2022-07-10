'use strict';

/**
 * student-committee service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::student-committee.student-committee');
