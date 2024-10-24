import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingService {

    getSetting(){
        let profileSetting ={
            name: 'Your name',
            address: 'address@.gmail',
        }

        return (profileSetting);
    }
}
