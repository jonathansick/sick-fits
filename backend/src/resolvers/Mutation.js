// Graphql Mutation resolvers for the public API.

const Mutations = {
  // Creates a single item
  async createItem(parent, args, ctx, info) {
    // TODO check if they are logged in

    // createItem defined in prisma.graphql
    // Spread the args object into data argument
    const item = await ctx.db.mutation.createItem({ data: { ...args } }, info);
    return item;
  },

  // Updates a single item
  updateItem(parent, args, ctx, info) {
    // First take a copy of the updates (we'll use args.id later)
    const updates = { ...args };
    // Remove the ID from updates (we never update the ID)
    delete updates.id;
    // Run update (from prisma.graphql)
    return ctx.db.mutation.updateItem({
      data: { ...updates },
      where: { id: args.id },
      info,
    });
  },
};

module.exports = Mutations;
