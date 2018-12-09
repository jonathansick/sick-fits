// Graphql Query resolvers for the public API.

const { forwardTo } = require('prisma-binding');

const Query = {
  // async items(parent, args, ctx, info) {
  //   console.log('Getting items');
  //   // query.items() comes from prisma.graphql
  //   const items = await ctx.db.query.items();
  //   return items;
  // },

  // Forward these to queries directly to Prisma because they're already
  // implemented in the DB's prisma.graphql schema
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
};

module.exports = Query;
