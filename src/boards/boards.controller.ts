import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  //   boardsService: BoardsService;
  //   constructor(boardsService: BoardsService) {
  //     this.boardsService = boardsService;
  //   }
  constructor(private boardsService: BoardsService) {}

  @Get()
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}
