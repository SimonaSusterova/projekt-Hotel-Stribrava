import { useEffect, useState } from "react";
import { Card } from "./Card";

export const DarkSection = ({ onSelectRoom }) => {
  const [rooms, setRooms] = useState([]);

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

  return (
    <section className="dark">
      <div className="container">
        <h2>Vyberte si pokoj</h2>
        <div className="cards-row">
          {rooms.map((room) => (
            <div key={room.id} onClick={() => onSelectRoom(room)}>
              <Card
                title={`${room.name} – ${room.price} Kč/os`}
                image={room.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};