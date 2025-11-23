import EventItem from "./components/event_item/index.jsx";
import eventsJson from "../../data/events.json";
import {useState} from "react";

const Events = ({searchTerm}) => {
    const [data] = useState(eventsJson);
    const {_embedded: {events}} = data;

    const handleEventItemClick = (id) => {
        console.log("handleEventItemClick", id);
    }

    const renderEvents = () => {
        let eventsFiltered = events;
        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return eventsFiltered.map((event) => (
            <EventItem
                key={`event-item-${event.id}`}
                id={event.id}
                name={event.name}
                info={event.info}
                image={event.images[0].url}
                onEventClick={handleEventItemClick}
            />
        ));
    }
    return (
        <div>
            Eventos
            <ul>{renderEvents()}</ul>
        </div>
    )
}

export default Events;