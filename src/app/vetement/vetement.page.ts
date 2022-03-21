import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { url } from 'inspector';
import { $ } from 'protractor';
import { Listener } from 'selenium-webdriver';
import { Vetement } from './vetement.model';
import { VetementService } from './vetement.service';

@Component({
  selector: 'app-vetement',
  templateUrl: './vetement.page.html',
  styleUrls: ['./vetement.page.scss'],
})
export class VetementPage implements OnInit {
   vetements: Vetement[]=[
     //{
  //   id: 1,
  //   name: 'Costume',
  //   price: 50,
  //   size: 'L',
  //    eslint-disable-next-line max-len
  //   link: 'https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=',
  //   status: 'HOMME',
  //   color: 'black-blue-red',
  // },
  // {
  //   id: 2,
  //   name: 'Skirt',
  //   price: 25,
  //   size: 'XL',
  //   eslint-disable-next-line max-len
  //   link: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //   status: 'FEMME',
  //   color: 'Blank-red-green',
  // },
  // {
  //   id: 3,
  //   name: 'T-shirt',
  //   price: 30,
  //   size: 'XLL',
  //    eslint-disable-next-line max-len
  //   link: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //   status: 'FEMME',
  //   color: 'Blank-red-green-pink',
  // },
  // {
  //   id: 4,
  //   name: 'Pull-over',
  //   price: 15,
  //   size: 'L',
  //    eslint-disable-next-line max-len
  //   link: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //   status: 'HOMME',
  //   color: 'Blank-red-green-pink',
  // },
  // {
  //   id: 5,
  //   name: 'Jeans',
  //   price: 20,
  //   size: 'XL',
  //    eslint-disable-next-line max-len
  //   link: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //   status: 'FEMME',
  //   color: 'Blank-red-green-pink',
  // }
];

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('mylist')mylist: FileList;


  // eslint-disable-next-line max-len
  constructor(private vetementService: VetementService, private navCtrol: NavController, private alertController: AlertController) { }


  ngOnInit() {

     this.loadAll();
  }


   loadAll() {
     this.vetements = this.vetementService.getData();
   }

  goTo(id: number): void {
    this.navCtrol.navigateForward(`/vetement/${id}`);
  }

  goToForm(): void {
    this.navCtrol.navigateForward(`/formulaire`);
  }


  deleteVet(id: number): void {
    // this.vetementService.deleteItem(id);
   this.vetementService.deleteVet(id);
  this.loadAll();
}

async presentAlertConfirm(id: number) {
  const alert = await this.alertController.create({
    header: 'Confirm!',
    message: 'Are you <strong>sure</strong>!!!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        id: 'cancel-button',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      },
      {
        text: 'Okay',
        id: 'confirm-button',
        handler: () => {
          console.log('Confirm Okay');
          this.deleteVet(id);
        }
      }
    ]
  });
  await alert.present();
}

// loadAll() {
//    this.vetementService.getData().then(vetements => {
//      this.vetements = vetements;
//    });
// }
goToMod(id: number): void | undefined {
  this.navCtrol.navigateForward(`/modify/${id}`);
}

}
