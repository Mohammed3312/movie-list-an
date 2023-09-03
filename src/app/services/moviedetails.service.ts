import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviedetailsService {
  constructor(private http: HttpClient) {}
  baseurl = 'https://api.themoviedb.org/3';
  apikey = '3356dc43722bcefeffa8cca7d7ac1c16';
  movieData() {
    return this.http.get(
      `${this.baseurl}/trending/all/week?api_key=${this.apikey}`
    );
  }
  trendingMovieApiData() {
    return this.http.get(
      `${this.baseurl}/trending/movie/day?api_key=${this.apikey}`
    );
  }
  getSearchMovie(data: any) {
    return this.http.get(
      `${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data}`
    );
  }
  getMovieDetails(data: any){
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`);
  }
}
