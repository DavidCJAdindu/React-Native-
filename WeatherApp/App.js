import React, { useState, useCallback} from 'react';
import { View, Text, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import { styles } from './Stylesheet';
import axios from 'axios';


const App = () => {

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const api = {
    key: '07ce10893b4be23b70ab282f81a437ad',
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  };

  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput("");
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    }).then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(e => console.dir(e))
    .finally(() => setLoading(false));
  }, [api.key, input]);


  return (
    <View style={styles.container}>

      <ImageBackground 
        source={require('./assets/background.jpg')}
        resizeMode='cover'
        style={styles.image}
      >

        <View>
          <TextInput 
            placeholder='Enter location ...' 
            onChangeText={text => setInput(text)}
            value={input}
            placeholderTextColor={'#000'}
            style={styles.textInput}
            onSubmitEditing={fetchDataHandler}   
          />
        </View>

        {loading && (
        <View>
          <ActivityIndicator size={"large"} color="#000" /> 
        </View>
        )}

        {data && 
        <View style={styles.infoView}>
          <Text style={styles.cityCountryText}>
            {`${data?.name}, ${data?.sys?.country}`}
          </Text>
          <Text style={styles.dateText}>
            {new Date().toLocaleString()}
          </Text>
          <Text style={styles.tempText}>
            {`${Math.round(data?.main?.temp,)} °C`}
          </Text>
          <Text style={styles.minMaxText}>
            {`MIN: ${Math.round(data?.main?.temp_min,)} °C / MAX: ${Math.round(data?.main?.temp_max,)} °C`}
          </Text>
        </View>
        }

      </ImageBackground>

    </View>

  );
};



export default App;
