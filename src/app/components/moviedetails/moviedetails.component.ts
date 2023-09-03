import { MoviedetailsService } from './../../services/moviedetails.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css'],
})
export class MoviedetailsComponent {
  getMovieDetailResult:any;
  constructor(
    private movie: MoviedetailsService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    this.getMovie(getParamId);
  }
  getMovie(id: any) {
    this.movie.getMovieDetails(id).subscribe((details) => {
      this.getMovieDetailResult = details
    });
  }
}
