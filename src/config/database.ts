import { PrismaClient } from "../../generated/prisma/client.js" // Prisma ka auto-generated tool — isse tum SQL likhe bina database query kar sakte ho
import { PrismaPg } from "@prisma/adapter-pg" // PostgreSQL ke liye adapter — Prisma ko pg driver se connect karta hai
import { DATABASE_URL } from "./env.js"


const adapter = new PrismaPg({
    connectionString: DATABASE_URL
})

export const prisma = new PrismaClient({   // Query Builder
    adapter,
    log: ["query", "info", "warn", "error"],
    errorFormat: "pretty"  // dev mein achha lagta hai in console
})

export async function connectToDatabase() {
    try {
        await prisma.$connect()
        console.log('[Database]: connected] successfully')
    } catch (error) {
        console.error('[Database: error] ', error)
        process.exit(1)
    }
}