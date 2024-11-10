import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { VoiceBotButton } from 'voicebot-react-native-expo';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <VoiceBotButton 
        voicebot_id="YOUR_VOICEBOT_ID"
        caller_id="YOUR_CALLER_ID" 
        caller_name="YOUR_CALLER_NAME" 
      /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});