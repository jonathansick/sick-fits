const { forwardTo } = require('prisma-binding');

const Query = {
  // async items(parent, args, ctx, info) {
  //   console.log('Getting items');
  //   // query.items() comes from prisma.graphql
  //   const items = await ctx.db.query.items();
  //   return items;
  // },
  // Forward items Yoga directly to items Query in prisma.graphql
  items: forwardTo('db'),
};

module.exports = Query;
