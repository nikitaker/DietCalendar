import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import { getData, storeData } from './Storage';

export default function MyCalendar() {
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenDay, setChosenDay] = useState('');
  const [cals, setCals] = useState(0);

  const [datesData, setDatesData] = useState({});
  const [datesColor, setDatesColor] = React.useReducer(dataToColor, {});

  const [botCals, setBotCals] = useState(1600);
  const [topCals, setTopCals] = useState(2500);

  React.useEffect(() => {
    getData('data').then((x) => {
    if(x){
      if (x.botCals) setBotCals(x.botCals);
      if (x.topCals) setTopCals(x.topCals);
      if (x.dates) setDatesColor(x);
      if (x.dates) setDatesData(x.dates);}
    });
  }, []);

  function dataToColor(state, action) {
    let color = 'white';
    for (const [key, value] of Object.entries(action.dates)) {
      if (value < parseInt(action.botCals)) {
        color = 'limegreen';
      } else if (value < parseInt(action.topCals)) {
        color = 'orange';
      } else if (value >= parseInt(action.topCals)) {
        color = 'red';
      }

      state[key] = {
        customStyles: {
          container: {
            backgroundColor: color,
            width: 40,
            borderRadius: 3,
            alignItems: 'center',
          },
          text: {
            fontSize: 30,
          },
        },
      };
    }
    return state;
  }

  return (
    <View style={styles.container}>
      <Calendar
        firstDay={1}
        dayComponent={({ date, marking, onPress, state }) => {
          return (
            <TouchableOpacity
              onPress={() => onPress(date)}
              style={marking ? marking['customStyles'].container : {}}>
              <Text
                style={
                  marking
                    ? marking['customStyles']?.text
                    : {
                        textAlign: 'center',
                        fontSize: 30,
                        color: state === 'disabled' ? 'gray' : 'black',
                      }
                }>
                {date.day}
              </Text>
            </TouchableOpacity>
          );
        }}
        markedDates={datesColor}
        markingType={'custom'}
        onDayPress={(day) => {
          setChosenDay(day.dateString);
          console.log(datesColor);
          setCals('');
          setModalVisible(!modalVisible);
        }}
        theme={{ textMonthFontSize: 25 }}
      />

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 20 }}>{chosenDay}</Text>
            <View style={styles.input}>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder="Enter calories"
                autoFocus={true}
                onChangeText={(text) => setCals(text)}
                value={cals}
                maxLength={10}
              />
              <Button
                title="Ввод"
                style={{ fontSize: 20 }}
                onPress={() => {
                  datesData[chosenDay] = cals;

                  setDatesColor({
                    dates: datesData,
                    topCals: topCals,
                    botCals: botCals,
                  });

                  storeData('data', { dates: datesData });
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInput: {
    width: 200,
    fontSize: 20,
  },
});
