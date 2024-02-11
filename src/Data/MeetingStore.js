import { action, computed, makeObservable, observable } from 'mobx';
class MeetingStore {
    meetings = [
    ];

    constructor() {
        makeObservable(this, {
            meetings: observable,
            addMeeting: action,
        })
    }
    setMeeting = (meetings) => {
        
        if (meetings.length) {
            const currentDateTime = new Date();
            meetings = meetings.filter(meeting =>new Date( meeting.dateTime) > currentDateTime)
            meetings.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))
            this.meetings = [...meetings]
        } else {
            this.meetings = [{
                serviceName: "parent guidance",
                serviceDescription: "aaaaa",
                servicePrice: 500,
                dateTime: "2021-06-20T10:00:00.000Z",
                clientName: "avi",
                clientPhone: "050-1234567",
                clientEmail: "a@a.com",
            },]
        }
    }
    addMeeting = (meeting) => {
        const currentDateTime = new Date();
        this.meetings = [...this.meetings, meeting]
        this.meetings.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime))

        this.meetings = this.meetings.filter(meeting => meeting.dateTime > currentDateTime);
    }

}
export default new MeetingStore();