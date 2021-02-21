const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
   type Hotel {
     hotel_id: ID!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
   }
   
   type User {
     user_id: ID!
     username: String!
     password: String!
     email: String!
   }

   type Booking{
    booking_id: ID!
    hotel_id: ID!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    user_id: ID!
 }

   type Query {
     getHotel: [Hotel]
     getHotelByName(hotel_name: String!): [Hotel]
     getHotelByCity(city: String!): [Hotel]
     getUser: [User]
     getBooking: [Booking]
   }
   type Mutation {
     addHotel(
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!): Hotel
     
     addUser(
        username: String!
        password: String!
        email: String!): User
        
     addBooking(
        hotel_id: ID!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: ID!): Booking   
   }
`