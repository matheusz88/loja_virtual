const {prismaClient, Prisma, PrismaClient} = require('@prisma/client')
const {prismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')

const adpter = new prismaBetterSqlite3({ur: process.eventNames.DATABASE_URL })
const prisma = new PrismaClient({ adpter })

module.exports = prisma