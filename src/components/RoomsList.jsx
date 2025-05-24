import { useEffect, useState } from "react";
import { Card } from "./Card";
import { RoomDetail } from "./RoomDetail";

export const RoomsList = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/rooms');
        const json = await response.json();
        setRooms(json.data);
      } catch (error) {
        console.error("Chyba při načítání pokojů:", error);
      }
    };

    fetchRooms();
  }, []);

  if (selectedRoom) {
    return <RoomDetail room={selectedRoom} onBack={() => setSelectedRoom(null)} />;
  }

  return (
    <div className="cards-row">
      {rooms.map((room) => (
        <div key={room.id} onClick={() => setSelectedRoom(room)}>
          <Card
            title={`${room.name} – ${room.price} Kč/os`}
            image={room.image}
          />
        </div>
      ))}
    </div>
  );
};