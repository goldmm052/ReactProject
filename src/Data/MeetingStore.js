import { action, computed, makeObservable, observable } from 'mobx';
class MeetingStore {
    meetings = [
    ];

    constructor() {
        makeObservable(this, {
            meetings: observable,
            addMeeting: action,
            colorMeeting: action,
        })
    }
    setMeeting = (meetings) => {
        if (meetings.length) {
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
    colorMeeting(dateTime) {
        const currentDate = new Date();
        const meetingDate = new Date(dateTime);
        const restDay = 7 - meetingDate.getDay()

        const lastDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + 7);
        if (meetingDate > currentDate && meetingDate <= lastDayOfWeek)
            return 'orange'
        if (meetingDate.getDate() === currentDate.getDate() &&
            meetingDate.getMonth() === currentDate.getMonth() &&
            meetingDate.getFullYear() === currentDate.getFullYear())
            return 'red';
        return 'green';
    }
}
export default new MeetingStore();