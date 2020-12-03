import { Component, OnInit } from '@angular/core';
import { appInitialize } from '@ionic/angular/app-initialize';
import { Observable } from 'rxjs';
import { RequestApiService } from 'src/app/services/request-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';

  constructor(private requestApi: RequestApiService) { }

  ngOnInit() {    
  }

  searchChanged(){
    this.results = this.requestApi.searchData(this.searchTerm);
  }
}
