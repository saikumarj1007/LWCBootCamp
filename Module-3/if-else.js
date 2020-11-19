import { LightningElement, track} from 'lwc';
import TOM_IMAGE from '@salesforce/resourceUrl/Tom';
import JERRY_IMAGE from '@salesforce/resourceUrl/Jerry';

export default class TomAndJerry extends LightningElement {
    TomImageResource = TOM_IMAGE;
    JerryImageResource = JERRY_IMAGE;

   @track clickedButton = 'Show Jerry';
   @track clickedButtonTitle = 'Show Jerry';
   @track showTomBoolean = true;

    handleClick(event){
       const label = event.target.label;

       if(label === 'Show Jerry'){
            this.clickedButton = 'Show Tom';
            this.clickedButtonTitle = 'Show Tom';
            this.showTomBoolean = false;
       }
       else if (label === 'Show Tom'){
        this.clickedButton = 'Show Jerry';
        this.clickedButtonTitle = 'Show Jerry';
        this.showTomBoolean = true;

       }
    }
}