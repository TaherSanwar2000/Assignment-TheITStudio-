import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

const BarGraph = ({ data }) => {
  const [selectedBar, setSelectedBar] = useState(null);

  const onBarPress = (bar) => {
    setSelectedBar(bar);
    // Show your message or any action you want to take when a bar is pressed.
  };

  // Calculate the maximum value to set the bar height proportionally.
  const max = Math.max(...data.map((item) => item.value));

  return (
    <View>
      <Svg width="100%" height="200">
        {data.map((item, index) => (
          <Rect
            key={index}
            x={index * 40}
            y={180 - (item.value * 150) / max}
            width="30"
            height={(item.value * 150) / max}
            fill={selectedBar === index ? '#FFB627' : '#FBDEB5'}
            rx="8" // Rounded corners
            ry="8" // Rounded corners
            onPress={() => onBarPress(index)}
          />
        ))}
        {data.map((item, index) => (
          <SvgText
            key={index}
            x={index * 40 + 15}
            y="195"
            fill={selectedBar === index ? '#FFB627' : '#C7CDDC'}
            textAnchor="middle"
            onPress={() => onBarPress(index)}
          >
            {item.label}
          </SvgText>
        ))}
      </Svg>
    </View>
  );
};

export default BarGraph;
