import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";


const AppointmentInfo = ({appointment, onDeleteAppointment }) => {
    return (
        <>
        <ListGroup.Item>
                <p><small>Date: {appointment.aptDate}</small></p>
                <p><strong>First Name: {appointment.firstName}</strong></p>
                <p><strong>Last Name: {appointment.lastName}</strong></p>
                <p><strong>Notes: {appointment.aptNotes}</strong></p>
                <Button onClick={() => onDeleteAppointment(appointment.id)} size="sm" variant="danger"><MdDeleteForever />Delete</Button>

        </ListGroup.Item>
        </>
    )
}

export default AppointmentInfo;