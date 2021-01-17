'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {

    count(params) {
        return strapi.query('texty').count(params);
    }
};
