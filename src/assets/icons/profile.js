import Svg, {Path} from 'react-native-svg';
import React from 'react';

const Profile = ({color = 'black'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      className="icon"
      viewBox="0 0 1024 1024">
      <Path
        d="M512 512c94.293 0 170.667-76.373 170.667-170.667S606.293 170.667 512 170.667 341.333 247.04 341.333 341.333 417.707 512 512 512zm0 85.333c-113.92 0-341.333 57.174-341.333 170.667v85.333h682.666V768c0-113.493-227.413-170.667-341.333-170.667z"
        fill={color}
      />
    </Svg>
  );
};
export default Profile;
