import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EndUserModuleBase } from "./base/endUser.module.base";
import { EndUserService } from "./endUser.service";
import { EndUserController } from "./endUser.controller";
import { EndUserResolver } from "./endUser.resolver";

@Module({
  imports: [EndUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [EndUserController],
  providers: [EndUserService, EndUserResolver],
  exports: [EndUserService],
})
export class EndUserModule {}
