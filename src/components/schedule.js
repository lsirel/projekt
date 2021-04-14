import React from 'react';
import { Inject, ScheduleComponent, Week, Month, Agenda } from '@syncfusion/ej2-react-schedule';

export default function Schedule() {
  return(
    <div className="container-schedule">
    <ScheduleComponent currentView="Month">
      <Inject services={[Week, Month, Agenda]}/>
    </ScheduleComponent>
    </div>
  );
}