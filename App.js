import React from 'react';
import { View } from 'react-native';
import Counter from './src/Counter';
import { Provider } from "react-redux";
import { store } from './src/store/store';
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <Counter/>
      </Provider>
    </View>
  );
}

export default App;
