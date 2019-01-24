const mongoose = require('mongoose');
const ReservationSchema = require('./reservation.schema.server');

const ReservationModel = mongoose.model('ReservationModel', ReservationSchema);

ReservationModel.createReservation = createReservation;
ReservationModel.updateReservation = updateReservation;
ReservationModel.findResevation = findReservation;
ReservationModel.deleteReservation = deleteReservation;

function createReservation(reservation) { 
    return ReservationModel.create(reservation)
}

function updateReservation(pid) { 
    return ReservationModel.updateOne({ _id: pid}, Reservation)
}

function findReservation() { 
    return ReservationModel.find({});
}

function deleteReservation(pid) { 
    return ReservationModel.deleteOne({ _id: pid });
}



module.exports= ReservationModel; 