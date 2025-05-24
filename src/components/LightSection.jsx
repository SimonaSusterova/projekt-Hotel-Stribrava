import { RoomDetail } from "./RoomDetail";

export const LightSection = ({ selectedRoom }) => {
  return (
    <section className="light">
      <div className="container">
        {selectedRoom ? (
          <RoomDetail room={selectedRoom} />
        ) : null}
      </div>
    </section>
  );
};