import { Controller, Get } from '@nestjs/common';
import { SettingService } from './setting.service';

@Controller('setting')
export class SettingController {
    constructor(private readonly settingService: SettingService) {}
    //localhost:3000/setting/user
    @Get('user')

    getSetting(){
        return this.settingService.getSetting()
    }
}
