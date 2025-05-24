import { Form } from "./Form";

export const RoomDetail = ({ room }) => {
  return (
    <div class="columns-2">
        <div class="column">
            <h2>Pokoj {room.name}, {room.price} Kč/os</h2>
            <img src={room.image} alt={room.name} className="room-image" />
            <p>{room.description}</p>
        </div>
        <div class="column">
            <Form />
        </div>
    </div>
  );
};