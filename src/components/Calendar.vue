<script>
import timeGridPlugin from '@fullcalendar/timegrid'
import FullCalendar from '@fullcalendar/vue3'
import frLocale from '@fullcalendar/core/locales/fr'

export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            showModal: false,
            selectedEvent: {},
            calendarOptions: {
                plugins: [timeGridPlugin],
                initialView: 'timeGridWeek',
                headerToolbar: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                locale: frLocale,
                timeZone: 'local',
                height: "auto",
                weekends: true,
                hiddenDays: [0],
                dayCount: 6,
                allDaySlot: false,
                businessHours: [
                    {
                        daysOfWeek: [ 1, 2, 3, 4, 5 ],
                        startTime: '09:00',
                        endTime: '18:00'
                    },
                    {
                        daysOfWeek: [ 6 ],
                        startTime: '09:00',
                        endTime: '14:00'
                    }
                ],
                slotMinTime: '09:00:00',
                slotMaxTime: '18:00:00',
                slotDuration: '00:30:00',
                slotLabelInterval: { hours: 1 },
                nowIndicator: true,
                displayEventEnd: false,
                events: [],
                eventClick: this.handleEventClick
            },
            appointmentsList: []
        }
    },

    methods: {
        fetchAppointments(arg) {
            const start = arg.start.toISOString().split('T')[0];
            const end = arg.end.toISOString().split('T')[0];
            fetch(`http://localhost:3000/appointments?startDate=${start}&endDate=${end}`)
                .then(response => response.json())
                .then(json => {
                    this.appointmentsList = json;
                    console.log(this.appointmentsList);
                    this.updateEvents();
                })
                .catch(error => {
                    console.error('Error fetching appointments:', error);
                });
        },
        updateEvents() {
            this.calendarOptions.events = this.appointmentsList.map(appointment => ({
                title: appointment.name + " " + appointment.firstName,
                start: appointment.date,
                end: new Date(new Date(appointment.date).getTime() + 60 * 60 * 1000)
            }));
        },
        handleEventClick(info) {
            this.selectedEvent = {
                title: info.event.title,
                start: info.event.start,
                end: info.event.end,
                description: info.event.extendedProps.description
            };
            this.showModal = true;
        },
        loadInitialAppointments() {
            const calendarApi = this.$refs.calendar.getApi();
            const arg = {
                start: calendarApi.view.activeStart,
                end: calendarApi.view.activeEnd,
            }
            this.fetchAppointments(arg);
        }
    },
    mounted() {
        this.loadInitialAppointments();
        this.$refs.calendar.getApi().setOption('datesSet', this.fetchAppointments);
    }
}
</script>
<template>
    <FullCalendar :options="calendarOptions" ref="calendar" />
    <div v-if="showModal" class="modal">
        <div class="modal-content">
            <span class="close" @click="showModal = false">&times;</span>
            <h2>{{ selectedEvent.title }}</h2>
            <p>Start: {{ selectedEvent.start }}</p>
            <p>End: {{ selectedEvent.end }}</p>
            <p>{{ selectedEvent.description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }
    }
}
</style>