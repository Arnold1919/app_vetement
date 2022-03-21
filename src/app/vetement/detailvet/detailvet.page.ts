import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vetement } from '../vetement.model';
import { VetementService } from '../vetement.service';

@Component({
  selector: 'app-detailvet',
  templateUrl: './detailvet.page.html',
  styleUrls: ['./detailvet.page.scss'],
})
export class DetailvetPage implements OnInit {
  route: any;
  vetement: Vetement;

  constructor(private vetementService: VetementService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    const userId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.vetement = this.getVetement(userId);

    // this.activatedRoute.queryParams.subscribe(params => {
    //   // eslint-disable-next-line @typescript-eslint/dot-notation
    //   const userId = params['id'];
    //   console.log(userId);
    //   this.getVetement(userId);
    //    this.vetement = this.getVetement(userId);
    // });


    // const queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);
    // const paramValue = urlParams.get('id');


    // this.getVetement(paramValue);
    //  this.vetement = this.getVetement(paramValue);

    // this.route.paramMap.subscribe
    // (
    //   param =>
    //   {const id = +param.get ('id');
    //   this.getVetement(id);
    //   this.vetement = this.getVetement(id);
    //   console.log(this.vetement);
    //   }
    // );
  }

  getVetement(id: number): Vetement{
    return this.vetementService.getById(id);
  }
  deleteVet(id: number): void {
    this.vetementService.deleteVet(id);
  }


}
