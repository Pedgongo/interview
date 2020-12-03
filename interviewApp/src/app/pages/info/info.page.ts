import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestApiService } from 'src/app/services/request-api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private requestApi: RequestApiService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.requestApi.getData(id).subscribe( result => {
      this.information = result;
    })
  }

}
