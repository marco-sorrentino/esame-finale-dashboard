import "./calendar.scss";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";

export const CalendarHome = () => {
  const [currentEvent, setCurrentEvent] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [eventTitle, setEventTitle] = useState("");
  const handleTitleChange = (e) => setEventTitle(e.target.value);

  const handleDateClick = (selected) => {
    setCurrentEvent(selected);
    handleShow();
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  const initialEvents = [
    {
      id: "1",
      title: "Capstone Project",
      start: "2023-04-07",
      allDay: true,
    },
  ];

  return (
    <div className="bgAllDiv mt-3 p-3">
      <Modal show={show} onHide={handleClose}>
        <div className="ps-3 pt-3">
          <Modal.Title>Add Event</Modal.Title>
        </div>
        <Modal.Body>
          <Form onSubmit={handleClose}>
            <Form.Group>
              <Form.Label>Write your event here</Form.Label>
              <Form.Control
                type="text"
                placeholder="What do you want to save?"
                value={eventTitle}
                onChange={handleTitleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <div className="text-end pe-3 pb-3">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              const calendarApi = currentEvent.view.calendar;
              calendarApi.addEvent({
                id: `${currentEvent.dateStr} - ${eventTitle}`,
                title: eventTitle,
                start: currentEvent.startStr,
                end: currentEvent.endStr,
                allDay: currentEvent.allDay,
              });
              setEventTitle("");
              handleClose();
            }}
          >
            Save
          </Button>
        </div>
      </Modal>
      <div className="calendar">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvent(events)}
          initialEvents={initialEvents}
        ></FullCalendar>
      </div>
    </div>
  );
};
