import { Warrior } from './warrior.js';
import { Mage } from './mage.js';

window.addEventListener("DOMContentLoaded",function(){
    let mage= new Mage("Yen", 50, 50);
    let warrior = new Warrior("Geralt", 60, 10);
    
    console.log(mage);
    console.log(warrior);
})