import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EndUserServiceBase } from "./base/endUser.service.base";

@Injectable()
export class EndUserService extends EndUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
