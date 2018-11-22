const Query = {
  async items(parent, args, ctx, info) {
    console.log('Getting items');
    // query.items() comes from prisma.graphql
    const items = await ctx.db.query.items();
    return items;
  },
};

module.exports = Query;
