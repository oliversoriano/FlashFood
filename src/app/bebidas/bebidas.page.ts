import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
})
export class BebidasPage implements OnInit {

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
