import { makeSchema } from 'nexus';
import { join } from 'path';

export const schema = makeSchema({
  types: [],
  outputs: {
    schema: join(process.cwd(), 'server', 'schema.graphql'),
    typegen: join(process.cwd(), 'server', 'nexus-typegen.ts')
  }
});
