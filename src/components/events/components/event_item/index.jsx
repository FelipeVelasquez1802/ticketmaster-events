const EventItem = ({id, name, image, info, onEventClick}) => {
    return (
        <div>
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={(event) => {
                event.stopPropagation()
                onEventClick(id)
            }}>Ver más</button>
        </div>
    )
}

export default EventItem