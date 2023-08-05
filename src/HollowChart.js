import React from 'react';
import {View, Text} from 'react-native';
import {Svg, G, Path, Circle} from 'react-native-svg';

const HalfDonutChart = ({value1, value2}) => {
  const radius = 60; // Radius of the chart
  const thickness = 20; // Thickness of the donut

  // Calculate the angles based on the values
  const totalValue = value1 + value2;
  const angle1 = (value1 / totalValue) * Math.PI * 2;
  const angle2 = Math.PI * 2 - angle1;

  // Calculate the paths for each segment
  const path1 = `
    M ${radius} ${radius}
    L ${radius} ${radius - radius}
    A ${radius} ${radius} 0 ${angle1 > Math.PI ? 1 : 0} 1 ${
    radius + radius * Math.sin(angle1)
  } ${radius - radius * Math.cos(angle1)}
    Z
  `;
  const path2 = `
    M ${radius} ${radius}
    L ${radius} ${radius - radius}
    A ${radius} ${radius} 0 ${angle2 > Math.PI ? 1 : 0} 0 ${
    radius + radius * Math.sin(angle1)
  } ${radius - radius * Math.cos(angle1)}
    Z
  `;

  // Render the chart
  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <G>
          <Circle cx={radius} cy={radius} r={radius} fill="lightgray" />
          <Path d={path1} fill="#FBDEB5" />
          <Path d={path2} fill="#FFB627" />

          <Circle cx={radius} cy={radius} r={radius - thickness} fill="#FFF" />
          <Text
            x={100}
            y={100}
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={20}
            fill="black"
            style={{left:40,top:45,fontSize:25,color:'#F5B42B',fontWeight: 'bold',}}>
            75%
          </Text>
        </G>
      </Svg>
    </View>
  );
};

export default HalfDonutChart;
