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
                // id: "0",
                name: "psichology treat",
                // description: "pppppppp",
                price: 150,
                duration: 60
            },
            {
                // id: "1",
                name: "parent guidance",
                // description: "pppppppp",
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