import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Layout from "../layout/Layout";
import axios from "axios";

function TodayEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get("/data/events.json").then((res) => {
      setEvents(res.data);
    });
    console.log(events);
  }, []);

  return (
    <Layout title="오늘의 행사">
      <div>Filter Part</div>
      <div className="grid grid-cols-2 gap-4 w-full">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </Layout>
  );
}

export default TodayEvents;