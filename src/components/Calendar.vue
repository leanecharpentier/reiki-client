<script>
import { Calendar } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import frLocale from '@fullcalendar/core/locales/fr'

export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            calendarOptions: {
                plugins: [timeGridPlugin],
                initialView: 'timeGridWeek',
                headerToolbar: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'timeGridWeek,timeGridDay'
                },
                locale: frLocale,
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
                        daysOfWeek: [ 6],
                        startTime: '09:00',
                        endTime: '14:00'
                    }
                ],
                slotMinTime: '09:00:00',
                slotMaxTime: '18:00:00',
                slotDuration: '00:30:00',
                slotLabelInterval: { hours: 1 },
                nowIndicator: true,
                displayEventEnd: false
            },
            appointmentsList: []
        }
    },

    methods: {
        fetchAppointments() {
            fetch('http://localhost:3000/appointments?date=2024-06')
                .then(response => response.json())
                .then(json => {
                    this.appointmentsList = json;
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
        }
    },
    mounted() {
        this.fetchAppointments();
    }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>