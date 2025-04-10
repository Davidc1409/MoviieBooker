import { Controller, Get, Post, Put, Patch, Body, HttpCode, HttpStatus,Param, Query, BadRequestException } from '@nestjs/common';
import {MoviesService} from './movies.service';
import {AxiosResponse} from 'axios';
import { map, catchError} from 'rxjs';
import { ApiParam, ApiBody, ApiQuery } from '@nestjs/swagger';



@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @ApiQuery({
        name: "query",
        type: String,
        description: "A required parameter of the movie name",
        required: true,
        example: "Terminator"
    })
    @ApiQuery({
        name: "page",
        type: String,
        description: "A required parameter to indicate the page number",
        required: true,
        example: "1"
    })
    @ApiQuery({
        name: "primary_release_year",
        type: String,
        description: "An optional parameter to filter movies by year of release",
        required: false,
        example: "2015"
    })
    @Get("/search")
    getMovies(@Query() query: any) {
        return this.moviesService.findMovieByName(query.query, query.page,query.primary_release_year).pipe(
            catchError((e) => {
                throw new BadRequestException(e.message);
            }),
            map((axiosResponse: AxiosResponse) => {
              return axiosResponse.data;
            })
        );
    }

    @ApiQuery({
        name: "sort_by",
        type: String,
        description: "An optional parameter to filter movies by year of release",
        required: false,
        example: "primary_release_date.desc"
    })
    @ApiQuery({
        name: "page",
        type: String,
        description: "A required parameter to indicate the page number",
        required: true,
        example: "1"
    })
    @Get("/discover")
    getDiscoverMovies(@Query() query: any){
        return this.moviesService.discoverMovies(query.sort_by, query.page).pipe(
            catchError((e) => {
                throw new BadRequestException(e.message);
            }),
            map((axiosResponse: AxiosResponse) => {
                return axiosResponse.data;
            })
        );
    }
}
