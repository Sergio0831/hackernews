import { makeSchema } from 'nexus';
import { join } from 'path';
import * as types from './graphql';

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), 'server', 'schema.graphql'),
    typegen: join(process.cwd(), 'server', 'nexus-typegen.ts')
  },
  contextType: {
    module: join(process.cwd(), './server/src/context.ts'),
    export: 'Context'
  }
});
