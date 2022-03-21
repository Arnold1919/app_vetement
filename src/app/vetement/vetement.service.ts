import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Vetement } from './vetement.model';

 const STORAGE_KEY = 'mylist';
 export interface Vetement19 {


  id: number;
  name: string;
  price: number;
  size: string;
  link: string;
  status: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class VetementService {

private allvetment: Vetement[]=[];
  // vetements: Vetement[]=[
  //   {
  //     id: 1,
  //     name: 'Costume',
  //     price: 50,
  //     size: 'L',
  //     // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len
  //     link: 'https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=',
  //     status: 'HOMME',
  //     color: 'black-blue-red',
  //   },
  //   {
  //     id: 2,
  //     name: 'Skirt',
  //     price: 25,
  //     size: 'XL',
  //     // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len
  //     link: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //     status: 'FEMME',
  //     color: 'Blank-red-green',
  //   },
  //   {
  //     id: 3,
  //     name: 'T-shirt',
  //     price: 30,
  //     size: 'XLL',
  //     // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len
  //     link: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  //     status: 'FEMME',
  //     color: 'Blank-red-green-pink',
  //   },
  //   {
  //     id: 4,
  //     name: 'Pull-over',
  //     price: 15,
  //     size: 'L',
  //     // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len
  //     link: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //     status: 'HOMME',
  //     color: 'Blank-red-green-pink',
  //   },
  //   {
  //     id: 5,
  //     name: 'Jeans',
  //     price: 20,
  //     size: 'XL',
  //     // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len
  //     link: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  //     status: 'FEMME',
  //     color: 'Blank-red-green-pink',
  //   }


  // ];

  constructor( private storage: Storage, private navCtrol: NavController,) {
     this.init();

   }

  async init(){
    const storate= await this.storage.create();
  }


  getData(): Vetement[] {

    const vetements: Vetement[] = [];
    let vetement;
    this.storage.forEach((value) => {
      vetement = JSON.parse(value);
      const newOne: Vetement = {
        id: vetement.id,
        name: vetement.name,
        price: vetement.price,
        size: vetement.size,
        link: vetement.link,
        moreInfo:{
          category: vetement.moreInfo.category,
          status: vetement.moreInfo.status,
          color: vetement.moreInfo.color,
        },
      };
      console.log(newOne);
      vetements.push(newOne);
      this.allvetment.push(newOne);
    });
    return vetements;
  }

  // getvetements(): Vetement[] {
  //   return [...this.vetements];
  // }

  getById(id: number): Vetement | undefined{

    return this.allvetment.find(value => value.id ===id);

  }
  deleteVet(id: number):  void {

    this.storage.remove(id.toString())
    .then(() => {
      this.navCtrol.navigateRoot(`vetements`);
    }).then(() => {window.location.reload();});

    // // eslint-disable-next-line eqeqeq
    // this.vetements = this.vetements.filter(value => value.id !=id);

  }

  addVetement(vetement: Vetement) {
    let maxId = 0;
    this.storage.forEach((value, key) => {
      console.log(key);
      if(parseInt(key, 10) >= maxId) {maxId = parseInt(key, 10) + 1; console.log('MaxId : ' + maxId);}
    })
    .then(()=>{
      vetement.id = maxId;
      vetement.moreInfo.status = (vetement.price <= 10);
      const jsonVetement = JSON.stringify(vetement);
      console.log(jsonVetement);
      this.storage.set(maxId.toString(), jsonVetement);
      window.location.reload();
    });


    // return this.storage.get(STORAGE_KEY).then((vetements: Vetement[]=[
    //   {
    //     id: 1,
    //     name: 'Costume',
    //     price: 50,
    //     size: 'L',
    //     // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len
    //     link: 'https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=',
    //     status: 'HOMME',
    //     color: 'black-blue-red',
    //   },
    //   {
    //     id: 2,
    //     name: 'Skirt',
    //     price: 25,
    //     size: 'XL',
    //     // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len
    //     link: 'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //     status: 'FEMME',
    //     color: 'Blank-red-green',
    //   },
    //   {
    //     id: 3,
    //     name: 'T-shirt',
    //     price: 30,
    //     size: 'XLL',
    //     // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len
    //     link: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    //     status: 'FEMME',
    //     color: 'Blank-red-green-pink',
    //   },
    //   {
    //     id: 4,
    //     name: 'Pull-over',
    //     price: 15,
    //     size: 'L',
    //     // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len
    //     link: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    //     status: 'HOMME',
    //     color: 'Blank-red-green-pink',
    //   },
    //   {
    //     id: 5,
    //     name: 'Jeans',
    //     price: 20,
    //     size: 'XL',
    //     // eslint-disable-next-line max-len
    // eslint-disable-next-line max-len
    //     link: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    //     status: 'FEMME',
    //     color: 'Blank-red-green-pink',
    //   }


    // ]) => {if (vetements)
    //   {vetements.push(vetement19); return this.storage.set(STORAGE_KEY,vetements); }
    // else {return this.storage.set(STORAGE_KEY, [vetement19]);}});
  }

  deleteItem(id: number): void{


    // return this.storage.get(STORAGE_KEY).then((vetements: Vetement[]) =>{
    //  if(!vetements || vetements.length === 0){return null;}
    //  const toKeep: Vetement[] =[];
    //  for (const i of vetements){if (i.id !== id){toKeep.push(i);}}
    //  return this.storage.set(STORAGE_KEY, toKeep);
    // });

    // eslint-disable-next-line eqeqeq
    // this.vetements = this.vetements.filter(value => value.id !=id);
  }
  public updateVetement(vetement: Vetement): void{
    vetement.moreInfo.status = (vetement.price <= 10);
    const jsonVetement = JSON.stringify(vetement);
    console.log(jsonVetement);
    this.storage.set(vetement.id.toString(), jsonVetement)
    .then(() => {this.navCtrol.navigateRoot(`/vetement`);})
    .then(() => {window.location.reload();});
  }
  public removeAllVet(): void{
    this.storage.clear().then(() => {this.allvetment = [];});
    window.location.reload();
  }

}
