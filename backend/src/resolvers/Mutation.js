const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO check if they are logged in

    // createItem defined in prisma.graphql
    // Spread the args object into data argument
    const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);
    return item;
  },
};

module.exports = Mutations;
