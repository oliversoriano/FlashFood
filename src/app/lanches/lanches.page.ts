import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
})
export class LanchesPage implements OnInit {

  constructor(public alertController: AlertController) { }

  async alerta() {
    const telinha = await this.alertController.create({
      header: 'CUPOM VÁLIDO',
      subHeader: '',
      message: 'R$ 5,00',
      buttons: ['OK']
    });

    await telinha.present();
  }


  ngOnInit() {
  }

}
