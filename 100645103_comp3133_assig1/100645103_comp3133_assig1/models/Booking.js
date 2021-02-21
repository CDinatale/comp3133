const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
        trim: true
    },
    booking_date: {
        type: String,
        required: true,
        trim: true
    },
    booking_start: {
        type: String,
        required: true,
        trim: true
    },
    booking_end: {
        type: String,
        required: true,
        trim: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        trim: true
    },
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;