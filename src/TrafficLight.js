export default function TrafficLight({ currentNum, id, timeRemaining }) {
  return (
    <div
      className={currentNum === id ? "traffic-light active" : "traffic-light"}
    >
      {timeRemaining}
    </div>
  );
}
