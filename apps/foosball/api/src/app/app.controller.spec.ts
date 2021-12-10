import { DataService } from '@foosball/data';
import { FoosballMatchModule } from '@foosball/match';
import { FoosballPlayerModule } from '@foosball/player';
import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [FoosballMatchModule, FoosballPlayerModule],
      controllers: [AppController],
      providers: [AppService, DataService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to foosball-api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to foosball-api!',
      });
    });
  });
});
