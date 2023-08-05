import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
};

LocaleConfig.defaultLocale = 'en';

const CustomCalendar = () => {
    // Assume you have an array of dates that should have red dots below them
    const redDotDates = ['2023-08-05', '2023-08-15', '2023-08-25'];
  
    const [selectedDate, setSelectedDate] = useState('');
  
    const renderDot = (date) => {
      // Check if the date is present in the redDotDates array
      if (redDotDates.includes(date.dateString)) {
        return <View style={styles.dot} />;
      }
      return null; // Return null for dates without a dot
    };
  
    const customTheme = {
      // Define the custom theme to change the background color of the selected date
      backgroundColor: {
        selected: '#FF0000', // Replace with your desired background color for the selected date
      },
      calendarBackground: '#FFFFFF', // Replace with your desired calendar background color
      // Add more custom styles for the calendar if needed
    };
  
    const markedDates = redDotDates.reduce((obj, date) => {
      obj[date] = { dots: [{ key: 'redDot', color: 'red' }] };
      return obj;
    }, {});
  
    if (selectedDate) {
      // Add the selected date and change its background color
      markedDates[selectedDate] = {
        ...markedDates[selectedDate],
        selected: true,
        selectedColor: customTheme.backgroundColor.selected,
      };
    }
  
    return (
      <View style={{ flex: 1 }}>
        <Calendar
          // Add custom styling and configurations as per your requirements
          // See the documentation for available props and options
          markedDates={markedDates}
          renderDot={renderDot}
          theme={customTheme}
          onDayPress={(day) => setSelectedDate(day.dateString)}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    dot: {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: 'red',
      marginHorizontal: 1,
      marginTop: 1,
    },
  });
  
  export default CustomCalendar;
