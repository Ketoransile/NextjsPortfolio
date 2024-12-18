// import React from "react";
// import { MovingSkills } from "./movingSkills";

// const Skills = () => {
//   return (
//     <div className="flex flex-col px-40 pt-40">
//       <div className="flex flex-col ">
//         <h1 className="text-2xl text-center font-bold text-primary">Skills</h1>
//         <h2 className="text-xl text-center text-slate-400">
//           Technologies and Tools I Excel At
//         </h2>
//       </div>
//       <MovingSkills />
//     </div>
//   );
// };

// export default Skills;
import React from "react";
import { MovingSkills } from "./movingSkills";

const Skills = () => {
  return (
    <div className="flex flex-col px-40 pt-40 gap-8">
      {" "}
      {/* Adjusted spacing */}
      <div className="flex flex-col text-center gap-2">
        {" "}
        {/* Aligned and reduced spacing */}
        <h1 className="text-2xl font-bold text-primary">Skills</h1>
        <h2 className="text-xl text-slate-400">
          Technologies and Tools I Excel At
        </h2>
      </div>
      <MovingSkills /> {/* Now closer to the heading */}
    </div>
  );
};

export default Skills;
