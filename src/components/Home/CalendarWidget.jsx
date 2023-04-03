import daygrid from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import "./homeWidget.scss";

export const CalendarWidget = () => {
  return (
    <div className="bgAllDiv p-3 mt-3">
      <FullCalendar
        plugins={[daygrid]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        weekNumbers={false}
        headerToolbar={{
          start: "",
          center: "title",
          end: "",
        }}
      ></FullCalendar>
    </div>
  );
};
