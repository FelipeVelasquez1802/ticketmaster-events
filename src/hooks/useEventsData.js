import eventsJson from '../data/events.json';
import {useState} from "react";

const useEventsData = () => {
    const [data] = useState(eventsJson);
    const {_embedded: {events}} = data;

    return {
        events
    }
}

export default useEventsData;