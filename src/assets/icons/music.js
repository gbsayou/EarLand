import Svg, {Path} from 'react-native-svg';
import React from 'react';

const MusicFill = ({color = 'black'}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      className="icon"
      viewBox="0 0 1024 1024">
      <Path
        d="M895.456 770.56c.096-.864.544-1.664.544-2.56V160c0-1.056-.512-1.984-.608-3.008-.032-1.664.448-3.232.16-4.928-2.88-17.408-19.328-29.184-36.8-26.304l-480 80c-17.408 2.912-29.216 19.392-26.304 36.832.256 1.472 1.024 2.656 1.44 4.032-.928 3.04-1.888 6.048-1.888 9.376v429.6c-20.128-9.376-43.648-14.784-69.408-14.784-21.312 0-42.816 3.456-63.968 10.336-39.616 12.8-73.536 36.224-95.584 65.984-24.064 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.72-3.456 63.904-10.304 58.656-19.04 100.288-59.2 115.04-103.808 2.848-4.8 4.96-10.112 4.96-16.128v-5.312a102.798 102.798 0 000-25.472V264.448l416-69.344v490.88c-20.32-9.632-44.096-15.2-70.176-15.2-21.28 0-42.816 3.456-63.968 10.336-39.584 12.8-73.568 36.224-95.584 65.984-24.096 32.512-31.68 70.24-20.864 103.648 15.648 48.288 66.656 79.456 129.92 79.456 21.248 0 42.752-3.456 63.904-10.304 78.24-25.344 126.944-88.224 120.224-149.344z"
        fill={color}
      />
    </Svg>
  );
};
export default MusicFill;