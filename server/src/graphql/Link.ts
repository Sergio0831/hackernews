import { extendType, nonNull, objectType, stringArg } from 'nexus';

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('description');
    t.nonNull.string('url');
    t.field('postedBy', {
      type: 'User',
      resolve(parent, args, ctx) {
        return ctx.prisma.link
          .findUnique({
            where: { id: parent.id }
          })
          .postedBy();
      }
    });
  }
});

export const LinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('links', {
      type: 'Link',
      resolve(parent, args, ctx) {
        return ctx.prisma.link.findMany();
      }
    });
  }
});

// export const LinkQuery = extendType({
//   type: 'Query',
//   definition(t) {
//     t.nonNull.field('link', {
//       type: 'Link',
//       args: {
//         id: nonNull(stringArg())
//       },
//       resolve(parent, args, ctx) {
//         const link = ctx.prisma.link.findUnique({
//           where: { id: args.id }
//         });

//         return link;
//       }
//     });
//   }
// });

export const CreateLinkMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createLink', {
      type: 'Link',
      args: {
        description: nonNull(stringArg()),
        url: nonNull(stringArg())
      },
      resolve(parent, args, ctx) {
        const { url, description } = args;
        const { userId } = ctx;

        if (!userId) {
          throw new Error('Cannot post without logging in!');
        }

        const newLink = ctx.prisma.link.create({
          data: {
            description,
            url,
            postedBy: { connect: { id: userId } }
          }
        });

        return newLink;
      }
    });
  }
});

export const DeleteLinkMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('deleteLink', {
      type: 'Link',
      args: {
        id: nonNull(stringArg())
      },
      resolve(parent, args, ctx) {
        const { id } = args;

        return ctx.prisma.link.delete({
          where: { id }
        });
      }
    });
  }
});
