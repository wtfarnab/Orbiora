import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
    // Partial mock to avoid errors if injected
    user = { findUnique: () => null, create: () => null };
    submission = { findMany: () => [], create: () => null };
}
