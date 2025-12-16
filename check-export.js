import * as libsqlAdapter from '@prisma/adapter-libsql';

console.log('Exports disponibles:', Object.keys(libsqlAdapter));
console.log('PrismaLibSQL existe?', 'PrismaLibSQL' in libsqlAdapter);
console.log('Default export?', libsqlAdapter.default);
console.log('Tout:', libsqlAdapter);