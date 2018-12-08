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

  // Delete a single item
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. Find item (passing in raw graphql)
    const item = await ctx.db.query.item({ where }, `{ id title }`);
    console.log(item);
    // 2. Check if they own it or have permissions
    // TODO
    // 3. Delete it
    return ctx.db.mutation.deleteItem({ where }, info);
  },
};

module.exports = Mutations;
