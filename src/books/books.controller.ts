import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import CreateBookDto from "./dto/create-book.dto";
import { BooksService } from './books.service';
import {ApiBearerAuth} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('books')
export default class BooksController {
    constructor(private readonly bookService: BooksService) {}
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('post')
    postGenre( @Body() book: CreateBookDto) {
      return this.bookService.insert(book);
    }

    @Get()
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getAll() {
      return this.bookService.getAllBooks();
    }
}
