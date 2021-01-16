import { Controller, Get, Post, Body } from '@nestjs/common';
import CreateBookDto from "./dto/create-book.dto";
import { BooksService } from './books.service';

@Controller('books')
export default class BooksController {
    constructor(private readonly bookService: BooksService) {}
    @Post('post')
    postGenre( @Body() book: CreateBookDto) {
      return this.bookService.insert(book);
    }
    @Get()
    getAll() {
      return this.bookService.getAllBooks();
    }
}
