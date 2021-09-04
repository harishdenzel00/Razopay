

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, TouchableOpacity, Dimensions
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
function App(props) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const PaymentTrigger = () => {

    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_yvGlWgPQcKbQBr', // Your api key
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: { color: '#F37254' }
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });

  }

  return (
    <View style={{ flex: 1, backgroundColor: '#4fb3ff' }}>
      <View style={{ flex: 0.08, justifyContent: 'center', alignItems: 'center' }} >
        <Text style={{ fontSize: width / 100 * 5, fontWeight: "bold" }}>{"Payment Gatway"}</Text>
      </View>
      <View style={{ flex: 0.92, backgroundColor: '#fff', borderTopLeftRadius: 10, borderTopRightRadius: 125 }}>

        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ fontSize: width / 100 * 5, fontWeight: "bold" }}>Harish Demo paymet Gateway</Text>
        </View>
        <View style={{ flex: 0.52, justifyContent: 'center', alignItems: 'center' }} >

        </View>
        <TouchableOpacity style={{ flex: 0.08, backgroundColor: '#149dff', alignItems: 'center', justifyContent: 'center' }} onPress={() => PaymentTrigger()}>
          <View  >


            <Text style={{ fontSize: width / 100 * 5, fontWeight: "bold", color: '#fff' }}>Pay now</Text>

          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default App;
