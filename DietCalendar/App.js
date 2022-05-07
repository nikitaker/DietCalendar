import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';
import { LocaleConfig } from 'react-native-calendars';
import Profile from './Profile';
import MyCalendar from './MyCalendar';

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  monthNamesShort: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ],
  dayNames: [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня',
};
LocaleConfig.defaultLocale = 'ru';

export default function App() {
  const [isCalendar, setIsCalendar] = useState(true); //РЕЖЫМЫ

  return (
    <SafeAreaView style={styles.container}>
      {isCalendar ? <MyCalendar /> : <Profile />}
      <View style={styles.buttonrow}>
        <Button
          title="Календарь"
          onPress={() => {
            setIsCalendar(true);
          }}
        />
        <Button
          title="Профиль"
          onPress={() => {
            setIsCalendar(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  buttonrow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

