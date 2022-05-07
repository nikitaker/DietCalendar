import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { getData, storeData } from './Storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Profile() {
  const [botCals, setBotCals] = useState(1600);
  const [topCals, setTopCals] = useState(2500);

  React.useEffect(() => {
    getData('data').then((x) => {
    if(x){
      if (x) setBotCals(x.botCals);
      if (x) setTopCals(x.topCals);}
    });
  }, []);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.centeredView}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://i.kym-cdn.com/entries/icons/original/000/034/811/cover6.jpg',
          }}
        />
        <Text style={{ fontSize: 40 }}>Границы</Text>
        <View style={styles.input}>
          <Text style={{ fontSize: 30, color: 'limegreen' }}>
            меньше чем&nbsp;
          </Text>
          <TextInput
            style={{ fontSize: 30, color: 'limegreen', width: 100 }}
            keyboardType="numeric"
            placeholder="Enter"
            returnKeyType="done"
             clearTextOnFocus={false}
            borderWidth={2}
            borderRadius={8}
            onChangeText={(text) => setBotCals(text)}
            onSubmitEditing={(text) => storeData('data', { botCals: botCals })}
            value={botCals}
          />
        </View>
        <Text style={{ fontSize: 30, color: 'orange' }}>
          от {botCals} до {topCals}
        </Text>
        <View style={styles.input}>
          <Text style={{ fontSize: 30, color: 'red' }}>больше чем&nbsp;</Text>
          <TextInput
            style={{ fontSize: 30, color: 'red', width: 100 }}
            keyboardType="numeric"
            placeholder="Enter"
            returnKeyType="done"
             clearTextOnFocus={false}
            borderWidth={2}
            borderRadius={8}
            onChangeText={(text) => setTopCals(text)}
            onSubmitEditing={(text) => storeData('data', { topCals: topCals })}
            value={topCals}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
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
  tinyLogo: {
    marginBottom: 30,
    width: 250,
    height: 250,
  },
});
