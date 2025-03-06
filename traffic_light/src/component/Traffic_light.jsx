// import React, { useEffect, useState } from "react";

// const LIGHTS = {
//     red: 'red',
//     green: 'green',
//     yellow: 'yellow'
// }

// const Traffic_light = () => {
//     const [active, setActive] = useState(LIGHTS.red);

//     useEffect(() => {
//         switch (active) {
//             case LIGHTS.red:
//                 setTimeout(() => {
//                     setActive(LIGHTS.yellow)
//                 }, 4000)
//                 break;
//             case LIGHTS.yellow:
//                 setTimeout(() => {
//                     setActive(LIGHTS.green)
//                 }, 1000)
//                 break;
//             case LIGHTS.green:
//                 setTimeout(() => {
//                     setActive(LIGHTS.red)
//                 }, 4000)
//                 break;
//         }
//     }, [active]);

//     return (
//         <div className="wrapper ">
//             <div className="light green"
//                 style={active !== LIGHTS.green ? { opacity: .5 } : null}> A</div>
//             <div className="light yellow"
//                 style={active !== LIGHTS.yellow ? { opacity: .5 } : null}> B</div>
//             <div className="light red"
//                 style={active !== LIGHTS.red ? { opacity: .5 } : null}> C</div>
//         </div >
//     )
// };

// export default Traffic_light

import { useEffect, useState } from "react";

const LIGHTS = {
    red: "red",
    yellow: "yellow",
    green: "green"
};

const getRandomLight = (currentLight) => {
    const colors = Object.values(LIGHTS).filter(color => color !== currentLight);
    return colors[Math.floor(Math.random() * colors.length)];
};

const Traffic_light = () => {
    const [active, setActive] = useState(LIGHTS.red);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive(getRandomLight(active));
        }, active === LIGHTS.yellow ? 1000 : 4000);

        return () => clearTimeout(timer);
    }, [active]);

    return (
        <div className="wrapper ">
            <div className="light green"
                style={active !== LIGHTS.green ? { opacity: .5 } : null}> A</div>
            <div className="light yellow"
                style={active !== LIGHTS.yellow ? { opacity: .5 } : null}> B</div>
            <div className="light red"
                style={active !== LIGHTS.red ? { opacity: .5 } : null}> C</div>
        </div >
    );
};

export default Traffic_light;
