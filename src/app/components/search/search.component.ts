import { Component } from '@angular/core';
import { MoviedetailsService } from 'src/app/services/moviedetails.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  moviess:any = []
  constructor(private movies:MoviedetailsService){}

onSubmit(e:any){
  e.preventDefault();

}
  getMovies(data:any){
    this.movies.getSearchMovie(data).subscribe(movie=>{
      this.moviess = movie
    });
  }

}
