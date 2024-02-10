import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx'; // Import BarcodeScanner
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [HomePage],
  providers: [BarcodeScanner] // Include BarcodeScanner in the providers array
})
export class HomePageModule {}
