'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async joul(ctx) {
        console.log("ca marche")
        return "hello";
    },

    async random(ctx) {
        let size = await strapi.services.texty.count(ctx.query);
        let id = Math.floor(Math.random()* size) + 1;
        console.log(id);


        const entity = await strapi.services.texty.findOne({ id  });

        return sanitizeEntity(entity, { model: strapi.models.texty }) ;
    }
};
