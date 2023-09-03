import { Component, OnInit } from '@angular/core';
import { MoviedetailsService } from 'src/app/services/moviedetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviess: any = [];
  num: number = 0;
  trending:any = []
  constructor(private movies: MoviedetailsService) {}
  ngOnInit(): void {
    this.trendingmovieData()
  }

  moviesDetails() {
    this.movies.movieData().subscribe((movie) => {
      this.moviess = movie;
    });
  }
  nextButton() {
    if(this.num === 19){
      this.num = 0
    }else{
      this.num++;
    }

  }
  prevButton() {
    if(this.num === 0){
      this.num = 19
    }else{
      this.num--;
    }
  }
  trendingmovieData(){
    this.movies.movieData().subscribe((data)=>{
      this.trending = data
    })
  }
}
