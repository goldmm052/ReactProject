import { action, computed, makeObservable, observable } from 'mobx';
class ServiceStore {
    services = [];


    constructor() {
        makeObservable(this, {
            services: observable,
            addService: action,

        })
    }
    setService = (services) => {
        if (services.length) {
            this.services = [...services]
        } else {
            this.services = [{
                
                name: "psichology treat",
                price: 150,
                duration: 60
            },
            {
                
                name: "parent guidance",
                price: 150,
                duration: 120
            },]
        }
    }
    addService = (service) => {
        this.services = [...this.services, service]
    }

}

export default new ServiceStore();