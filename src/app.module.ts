import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingModule } from './setting/setting.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [UserModule, SettingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
