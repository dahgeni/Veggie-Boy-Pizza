module.exports = function(app) {
    const reservationModel = require("../models/Reservation/reservation.model.server");

    // create reservation
    app.post("/api/reservation", createReservation)

    async function createReservation(req, res) {
        const reservation = req.body;
        const data = await reservationModel.createReservation(reservation)
        res.json(data);
    }
}