import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.msg}</p>;
  }
  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

//this loader is only running on browser
//and we need to write the funtionallity
//available in browser
//eg : local storage , cookies
//but not useState as it a react hook
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    return { isError: true, msg: "Something went wrong" };
  } else {
    const resData = await response.json();
    return resData;
  }
}
