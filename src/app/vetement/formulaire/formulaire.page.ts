import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Category } from '../category.enum';
import { MoreInfo } from '../moreInfo.model';
import { Vetement } from '../vetement.model';
import { VetementService } from '../vetement.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {

  vetementForm: FormGroup = this.fb.group({
    name: [[], Validators.required],
    price: [[], Validators.required],
    size: [[], Validators.required],
    link: [[], Validators.required],
    color: [[], Validators.required],
    category: ['homme', Validators.required],
  });

  constructor(private fb: FormBuilder, private navCtrol: NavController, private vetementService: VetementService) { }

  ngOnInit() {
  }

  saveVet(){
    if(this.vetementForm.valid){
      const insertInfo: MoreInfo = {
        status: (this.vetementForm.get('price')?.value > 10),
        category: (this.vetementForm.get('category')?.value === 'homme')? Category.HOMME : Category.FEMME,
        color: this.vetementForm.get('color')?.value,
      };

      const newVet: Vetement = {
        id: 0,
        name: this.vetementForm.get('name')?.value,
        price: this.vetementForm.get('price')?.value,
        size: this.vetementForm.get('size')?.value,
        link: this.vetementForm.get('link')?.value,
        moreInfo: insertInfo,
      };
      this.vetementService.addVetement(newVet);
      // this.vetementService.removeAllVet();
      this.navCtrol.navigateRoot(`vetement`);
    }
  }

}
