import { PolyMod } from "https://pml.crjakob.com/polytrackmods/PolyModLoader/0.5.0/PolyModLoader.js";
class summerdropmod extends PolyMod {
    init = (pml) => {
        this.pml = pml; // so pml is accessible outside of init (not neccesary)
        // regular init
    }
    postInit = () => {
        // post init
    }
    simInit = () => {
        // sim init here
    } 
}


export let polyMod = new summerdropmod();
