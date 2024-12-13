import { EventModel } from "@/models";
import { title } from "process";
import React from "react";

async function getEvents(): Promise<EventModel[]> {
  const response = await fetch("http://localhost:8000/events");
  const data = await response.json();
  return data;
}

const Card = async ()=> {
  const events = await getEvents();
  return (
    <div className="  flex w-full bg-slate-800 rounded-md my-2 py-3 m-auto">
      <div className="flex justify-between flex-wrap  gap-11 w-full px-16 ">
        {events.map((event, key) => (
          <div
            key={key}
            className="text-center my-2 py-3 w-96  bg-white  text-black rounded-md "
          >
            <img
              src="https://images.unsplash.com/photo-1604987167606-3b0b0b1f9c2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
            <h3 className="font-bold">{event.name}</h3>
            <p className="text-sm" color="white">
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p>Tem {event.available_spots} lugares</p>
            <p>{event.price.toFixed(2).replace(".", ",")}</p>
            <p></p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card