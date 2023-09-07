import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { OpenMode } from "fs";

@Injectable()
export class PrismaService extends PrismaClient<Prisma.PrismaClientOptions,'beforExit'>  implements OnModuleInit {
    async onModuleInit() {
        await this.$connect()
    }
    async shutdown(app: INestApplication) {
        this.$on('beforExit',async () => {
            await app.close()
        })
    }
}