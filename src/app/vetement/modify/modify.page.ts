import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Category } from '../category.enum';
import { MoreInfo } from '../moreInfo.model';
import { Vetement } from '../vetement.model';
import { VetementService } from '../vetement.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.page.html',
  styleUrls: ['./modify.page.scss'],
})
export class ModifyPage implements OnInit {

  vetement: Vetement;
  id: number;
  // vetementForm: FormGroup | undefined;
  vetementForm: FormGroup | undefined = this.fb.group({
    name: [[], Validators.required],
    price: [[], Validators.required],
    size: [[], Validators.required],
    link: [[], Validators.required],
    color: [[], Validators.required],
    category: ['homme', Validators.required],
  });

  // eslint-disable-next-line max-len
  constructor(private fb: FormBuilder, private navCtrol: NavController, private vetementService: VetementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = + params.get('id');
      this.vetement = this.vetementService.getById(this.id);

      this.vetementForm = this.fb.group({
        name: [this.vetement.name, Validators.required],
        price: [this.vetement.price, Validators.required],
        size: [this.vetement.size, Validators.required],
        link: [this.vetement.link],
        color: [this.vetement.moreInfo.color, Validators.required],
        category: [(this.vetement.moreInfo.category === Category.HOMME)? 'homme':'femme', Validators.required],
      });

    });

    // const userId = +this.route.snapshot.paramMap.get('id');
    // this.vetement = this.vetementService.getById(userId);
    // console.log(userId);

    // this.vetementForm = this.fb.group({
    //   name: [this.vetement.name, Validators.required],
    //   price: [this.vetement.price, Validators.required],
    //   size: [this.vetement.size, Validators.required],
    //   link: [this.vetement.link],
    //   color: [this.vetement.moreInfo.color, Validators.required],
    //   category: [(this.vetement.moreInfo.category === Category.HOMME)? 'homme':'femme', Validators.required],
    // });

  }

  update(){
    if(this.vetementForm.valid){
      const newInfo: MoreInfo = {
        status: (this.vetementForm.get('price')?.value > 10),
        category: (this.vetementForm.get('category')?.value === 'homme')? Category.HOMME : Category.FEMME,
        color: this.vetementForm.get('color')?.value,
      };

      const newVet: Vetement = {
        id: this.id,
        name: this.vetementForm.get('name')?.value,
        price: this.vetementForm.get('price')?.value,
        size: this.vetementForm.get('size')?.value,
        link: this.vetementForm.get('link')?.value,
        moreInfo: newInfo,
      };
      this.vetementService.updateVetement(newVet);
      this.navCtrol.navigateRoot(`vetement`);
    }
  }

  goBack(){
    window.history.back();
  }

}
