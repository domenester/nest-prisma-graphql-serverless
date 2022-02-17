import { Module } from '@nestjs/common'
import { ConfigModuleForRoot } from '../config/module.config'
import { PrismaService } from '../service/prisma.service'

@Module({
  imports:[
    ConfigModuleForRoot(),
  ],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
