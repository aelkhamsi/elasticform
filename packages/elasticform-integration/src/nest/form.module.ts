import { DynamicModule, Module } from '@nestjs/common';
import { FormController } from './form.controller';
import { IFormService } from '@elasticform/core';

export interface ElasticFormModuleOptions {
  service: IFormService;
}

@Module({})
export class FormModule {
  static forRoot(options: ElasticFormModuleOptions): DynamicModule {
    return {
      module: FormModule,
      controllers: [FormController],
      providers: [
        {
          provide: IFormService,
          useValue: options.service,
        },
      ],
    };
  }
}