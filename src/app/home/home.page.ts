import { Component, OnInit } from '@angular/core';
import { NFC, NdefEvent } from '@ionic-native/nfc/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private nfc: NFC, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    this.startNfcScan();
  }

  startNfcScan() {
    // Check if NFC is available
    this.nfc.enabled().then(() => {
      console.log('NFC is available');

      // Start listening for NFC events
      this.nfc.addNdefListener().subscribe((event: NdefEvent) => {
        // Extract NFC tag information from the event
        const tag = event.tag;
        const message = this.nfc.bytesToString(tag.ndefMessage[0].payload);

        // Print NFC tag information to the console
        console.log('NFC Tag Information:', message);
      });
    }).catch((err: Error) => {
      console.error('NFC is not available', err);
    });

    // Start scanning for barcodes when the page loads
    this.scanBarcode();
  }

  scanBarcode() {
    console.log('Scanning barcode...');
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data:', barcodeData.text);
    }).catch((err: Error) => {
      console.error('Barcode scanning error:', err);
    });
  }
}
