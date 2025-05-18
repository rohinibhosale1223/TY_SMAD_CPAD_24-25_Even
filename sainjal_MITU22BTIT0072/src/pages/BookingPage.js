// import {  useEffect, useState } from "react"
import BookingForm from "../componant/BookingForm"
import Footer from "../componant/Footer"
import Header from "../componant/Header"
import Nav from "../componant/Nav"
import React from 'react';
import { fetchAPI, submitAPI} from "../utilities/API"
import {  useReducer } from "react";


const updateTimeSlots = (availableTimeSlots, date) => {
  const response = fetchAPI(new Date(date));

  return (
    response.morning.length !== 0 && response.afternoon.length !== 0 && response.evening.length !== 0
    ) ? response : availableTimeSlots
}

const initTimeSlots = (initAvaliableTimeSlots) => {
    // return [...initAvaliableTimeSlots, ...fetchAPI(new Date())];
    return {
        morning: [...initAvaliableTimeSlots.morning, ...fetchAPI(new Date()).morning], 
        afternoon: [...initAvaliableTimeSlots.afternoon, ...fetchAPI(new Date()).afternoon], 
        evening: [...initAvaliableTimeSlots.evening, ...fetchAPI(new Date()).evening]
    };
}





const BookingPage = ()=>{
    
    const [
    availableTimeSlots, 
    dispatchTimeslotsOnDateChange
    ] = useReducer(updateTimeSlots, {morning: [], afternoon: [], evening: []}, initTimeSlots);


  // Handler Function to submit the reservation data to the server
    const submitReservation = (reservation) => {
      submitAPI(reservation);
  }

    return(
        <>
        <Header >
            <Nav />
        </Header>
        <main className="grid grid-cols-4 gap-x-5 px-10 md:grid-cols-8 lg:grid-cols-12 lg:h-[95vh]">
        <BookingForm 
        submitReservation={submitReservation} 
        availableTimeSlots={availableTimeSlots} 
        dispatchTimeslotsOnDateChange={dispatchTimeslotsOnDateChange}
        />
        </main>
        <Footer />
        </>
    )
}
export default BookingPage;