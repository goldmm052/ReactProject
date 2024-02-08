import { makeObservable, observable, action } from 'mobx';

class DataStore {
    isLogin = false;
    selectedService = "";
    selectedDateMeeting = "";

    constructor() {
        makeObservable(this,
            {
                isLogin: observable,
                selectedService: observable,
                selectedDateMeeting: observable,
                setIsLogin: action,
                setSelectedService: action,
                setSelectedDateMeeting: action
            }
        )
    }
    setIsLogin(status) {
        this.isLogin = status;
    }
    setSelectedService(selectedService) {
        this.selectedService = selectedService;
    }
    setSelectedDateMeeting(selectedDateMeeting) {
        this.selectedDateMeeting = selectedDateMeeting;
    }
}

export default new DataStore();