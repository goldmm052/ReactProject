import { action, computed, makeObservable, observable } from 'mobx';
class Store {
business ={};
    
    constructor() {
            makeObservable(this, {
            business: observable,
            editBusiness: action,
            
        })
    }
   setBusinessData=(business)=>{

    if (business) {
        this.business = {...business}
    } else {
        this.business ={
        shem:"Machon Psagot",
        address:"Harav Kuk 23 Petah - Tikva",
        phone:"03-1234567",
        owner:"mindi",
        logo:"",
        description:"Multidisciplinary treatment center",
            }
        }

    }
    
    editBusiness = (business) => {
        this.business = {...this.business, ...business}
        console.log("edit",business);
    }
}

export default new Store();