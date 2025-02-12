import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class UserService {

  constructor(private readonly prisma: PrismaService) {}

  async getUsers(){


  const users = await this.prisma.user.findMany({ 
    select:{
      id:true,
      email:true,
      firstname:true,
      
    }
  });
    
  return users;
  }


  async getUserId(){


    const users = await this.prisma.user.findMany({ 
      select:{
        id:true,
        email:true,
        firstname:true,
        
      }
    });
      
    return users;
    }
}

