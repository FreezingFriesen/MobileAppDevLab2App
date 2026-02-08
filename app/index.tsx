import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, GestureResponderEvent } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

export default function App() {
  function handleAlertPress(): void {
    Alert.alert("Alert Button pressed");
  }

  return (
    <SafeAreaProvider>
      <Stack.Screen options={{ headerShown: false}} />

      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* --- Header Section --- */}
          <View style={styles.header}>
            <View style={styles.serviceNotice}>
              <Ionicons name="alert-circle" size={20} color="#FFD700" />
              <Text style={styles.serviceText}>Service Notice</Text>
              <Ionicons name="help-circle" size={30} color="white" style={{marginLeft: 'auto'}} />
            </View>

            <Text style={styles.brandText}>RBC Mobile</Text>
            <Text style={styles.greetingText}>Good Morning</Text>

            {/* Search Bar Placeholder */}
            <View style={styles.searchBar}>
              <Ionicons name="search" size={30} color="white" />
              <Text style={styles.searchText}>Search RBC Mobile</Text>
            </View>
          </View>

          {/* --- Quick Action Cards --- */}
          <View style={styles.actionsRow}>
            <View style={styles.card}>
              <Ionicons name="paper-plane-outline" size={25} color="#005ad4" /><Text style={styles.cardText}>Send</Text>
            </View>
            <View style={styles.card}>
              <Ionicons name="swap-horizontal" size={25} color="#005ad4" /><Text style={styles.cardText}>Transfer</Text>
            </View>
            <View style={styles.card}>
              <Ionicons name="document-text-outline" size={25} color="#005ad4" /><Text style={styles.cardText}>Pay bills</Text>
            </View>
          </View>


          {/* --- Accounts Overview --- */}
          <View>
            <View style={styles.accountHeader}>
              <Text style={styles.accountHeaderText}>Accounts Overview</Text><Ionicons name="ellipsis-vertical" size={20}/>

            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountText}>Input (••••)</Text><Text style={styles.balance}>50,000</Text>
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountText}>Disposable Income (••••)</Text><Text style={styles.balance}>1,000,000</Text>
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountText}>VISA (••••)</Text><Text style={styles.balance}>0.00</Text>
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountText}>Rainy Day (Also Student Loans) (••••)</Text><Text style={styles.balance}>Tons of Money</Text>
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountText}>Travel (••••)</Text><Text style={styles.balance}>So Much Money</Text>
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountText}>RRSP (••••)</Text><Text style={styles.balance}>30 MILLION DOLLARS</Text>
            </View>
            <View style={styles.accountItem}>
              <Text style={styles.accountText}>Tax-Free Savings Account (••••)</Text><Text style={styles.balance}>EVEN MORE MONEY</Text>
            </View>

            <View style={styles.accountBottom}>
              <Text style={styles.accountBottomText}>Open an account</Text>
              <Text style={{color: '#CBCBCB'}}> | </Text>
              <Text style={styles.accountBottomText}> View all</Text>
            </View>
          </View>
          <View style={styles.bottomBackground}></View>
        </ScrollView>

          {/* --- Bottom Dashboard + Alert Button --- */}
          <View style={styles.bottomTabContainer}>
            <View style={styles.tabItem}>
              <Ionicons name="home" size={30} color="#005da4" />
              <Text style={[styles.tabText, { color: '#005da4' }]}>Home</Text>
            </View>
            <View style={styles.tabItem}>
              <MaterialCommunityIcons name="credit-card-outline" size={30} color="#666" />
              <Text style={styles.tabText}>Accounts</Text>
            </View>

            {/* THE ALERT BUTTON (Central Yellow Circle) */}
            <TouchableOpacity style={styles.alertCircleButton} onPress={handleAlertPress}>
              <Ionicons name="chevron-up" size={32} color="black" />
              <Text style={styles.hiddenAlertText}>Alert</Text> 
            </TouchableOpacity>

            <View style={styles.tabItem}>
              <MaterialCommunityIcons name="email-outline" size={30} color="#666" />
              <Text style={styles.tabText}>Move Money</Text>
            </View>
            <View style={styles.tabItem}>
              <Ionicons name="menu" size={30} color="#666" />
              <Text style={styles.tabText}>More</Text>
            </View>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005da4',
  },
  // f4f4f4
  header: {
    backgroundColor: '#005da4',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  serviceNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
  },
  serviceText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  brandText: {
    color: 'white',
    fontSize: 16
  },
  greetingText: {
    color: 'white',
    fontSize: 28,
    marginBottom: 20,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  searchText: {
    color: 'white',
    marginLeft: 10,
  },
  actionsRow: {
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    width: '30%',
    padding: 15,
    borderRadius: 2,
  },
  cardText: {
    marginTop: 15,
    color: "#333",
    fontWeight: '500',
  },
  accountHeader: {
    backgroundColor: '#EEEEEE',
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#CBCBCB',  
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accountHeaderText:{
    fontSize: 20,
    color: '#57595B', 
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    padding: 15,
    color: "white",
  },
  accountText: {
    color: "#57595B",
  },
  balance: {
    color: "#57595B",
  },
  accountBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#CBCBCB', 
    borderBottomWidth: 1,
    borderBottomColor: '#CBCBCB', 
    backgroundColor: '#f4f4f4',
  },
  accountBottomText: {
    color: '#6594B1',
  },
  bottomBackground: {
    backgroundColor: '#EEEEEE',
    padding: 50,
  },
  alertButtonText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#000',
  },
  bottomTabContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    paddingBottom: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
  }, 
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 11,
    marginTop: 4,
    color: '#666'
  },
  alertCircleButton: {
    backgroundColor: '#FFD700',
    width: 60,
    height: 60,
    borderRadius: 32.5,
    marginTop: -40, // Lifts the button above the bar
    justifyContent: 'center',
    alignItems: 'center', 
  },
  hiddenAlertText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    bottom: 7,
  },
});