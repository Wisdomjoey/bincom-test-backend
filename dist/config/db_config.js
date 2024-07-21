import { PrismaClient } from "@prisma/client";
export var db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV === "production")
    globalThis.prisma = db;
