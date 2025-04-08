import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {AxiosResponse, AxiosRequestConfig} from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
    constructor(private readonly httpService: HttpService){}
    findMovieByName(query:string,page :string, releaseDate:string): Observable<AxiosResponse<any[]>> {
        let sortString = '';
        if(releaseDate){
            sortString = '&primary_release_year='+releaseDate;
        }
        return this.httpService.get('https://api.themoviedb.org/3/search/movie?query='+query+'&include_adult=false&language=en-US&page='+page+sortString,{
            headers: { Authorization: 'Bearer '+process.env.ACCESS_TOKEN_TMDB},
          });
      }

      discoverMovies(sortingValue : string, page:string): Observable<AxiosResponse<any[]>> {
        let sortString = '';
        if(sortingValue){
            sortString = '&sort_by='+sortingValue;
        }
        return this.httpService.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+page+sortString,{
            headers: { Authorization: 'Bearer '+process.env.ACCESS_TOKEN_TMDB},
          });
      }
}
