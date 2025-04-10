import { Controller, Get, Post, Put, Patch, Body, HttpCode, HttpStatus,Param, Query, BadRequestException } from '@nestjs/common';
import {MoviesService} from './movies.service';
import {AxiosResponse} from 'axios';
import { map, catchError} from 'rxjs';


@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
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
