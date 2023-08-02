import "./App.css";
import { useState } from "react";
import TrafficLight from "./TrafficLight";

function App() {
  const [lightTimer, setLightTimer] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(5);
  function HandleLightSwitch() {
    if (lightTimer === 3) setLightTimer(1);
    else setLightTimer(lightTimer + 1);
  }
  setTimeout(() => {
    if (timeRemaining === 0) {
      HandleLightSwitch();
      setTimeRemaining(5);
    } else {
      setTimeRemaining(timeRemaining - 1);
    }
  }, 1000);
  return (
    <>
      <div className="traffic-lights ">
        <TrafficLight
          timeRemaining={lightTimer === 1 && timeRemaining}
          currentNum={lightTimer}
          id={1}
        />
        <TrafficLight
          timeRemaining={lightTimer === 2 && timeRemaining}
          currentNum={lightTimer}
          id={2}
        />
        <TrafficLight
          timeRemaining={lightTimer === 3 && timeRemaining}
          currentNum={lightTimer}
          id={3}
        />
      </div>
      <div className="instruction">
        {lightTimer === 1 && "Stop"}
        {lightTimer === 2 && "Get ready"}
        {lightTimer === 3 && "Go"}
      </div>
    </>
  );
}

export default App;

// import { useState } from "react";
// import { initialTravelPlan } from "./Places.js";

// function PlaceTree({ place }) {
//   const childPlaces = place.childPlaces;
//   return (
//     <li>
//       {place.title}
//       {childPlaces.length > 0 && (
//         <ol>
//           {childPlaces.map((place) => (
//             <PlaceTree key={place.id} place={place} />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);
//   const planets = plan.childPlaces;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planets.map((place) => (
//           <PlaceTree key={place.id} place={place} />
//         ))}
//       </ol>
//     </>
//   );
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import { useState } from "react";
// import { initialTravelPlan } from "./Places.js";

// function PlaceTree({ id, placesById }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       {childIds.length > 0 && (
//         <ol>
//           {childIds.map((childId) => (
//             <PlaceTree key={childId} id={childId} placesById={placesById} />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);
//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ul>
//         {planetIds.map((id) => (
//           <PlaceTree key={id} id={id} placesById={plan} />
//         ))}
//       </ul>
//     </>
//   );
// }

// import { useState } from "react";
// import { initialTravelPlan } from "./Places.js";

// export default function TravelPlan() {
//   const [plan, setPlan] = useState(initialTravelPlan);

//   function handleComplete(parentId, childId) {
//     const parent = plan[parentId];
//     // Create a new version of the parent place
//     // that doesn't include this child ID.
//     const nextParent = {
//       ...parent,
//       childIds: parent.childIds.filter((id) => id !== childId),
//     };
//     // Update the root state object...
//     setPlan({
//       ...plan,
//       // ...so that it has the updated parent.
//       [parentId]: nextParent,
//     });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map((id) => (
//           <PlaceTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// function PlaceTree({ id, parentId, placesById, onComplete }) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       <button
//         onClick={() => {
//           onComplete(parentId, id);
//         }}
//       >
//         Complete
//       </button>
//       {childIds.length > 0 && (
//         <ol>
//           {childIds.map((childId) => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               parentId={id}
//               placesById={placesById}
//               onComplete={onComplete}
//             />
//           ))}
//         </ol>
//       )}
//     </li>
//   );
// }
