import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, GestureResponderEvent } from "react-native";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  function handleAlertPress(event: GestureResponderEvent): void {
    throw new Error('Function not implemented.');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {/* --- Header Section --- */}
          <View style={styles.header}>
            <View style={styles.serviceNotice}>
              <Ionicons name="warning" size={10} color="#FFD700" />
              <Text style={styles.serviceText}>Service Notice</Text>
              <Ionicons name="help-circle-outline" size={20} color="white" style={{marginLeft: 'auto'}} />
            </View>

            <Text style={styles.brandText}>RBC Mobile</Text>
            <Text style={styles.greetingText}>Good Morning</Text>

            {/* Search Bar PLaceholder */}
            <View style={styles.searchBar}>
              <Ionicons name="search" size={15} color="white" />
              <Text style={styles.searchText}>Search RBC Mobile</Text>
            </View>
          </View>

          {/* --- Quick Action Cards --- */}
          <View style={styles.actionsRow}>
            <View style={styles.card}>
              <Ionicons name="send-outline" size={30} color="#005ad4" /><Text style={styles.cardText}>Send</Text>
            </View>
            <View style={styles.card}>
              <MaterialCommunityIcons name="swap-horizontal" size={30} color="005da4" /><Text style={styles.cardText}>Transfer</Text>
            </View>
            <View style={styles.card}>
              <Ionicons name="document-text-outline" size={30} color="005da4" /><Text style={styles.cardText}>Pay bills</Text>
            </View>
          </View>


          {/* --- Accounts Overview --- */}
          <View style={styles.accountSection}>
            <Text style={styles.sectionHeader}>Accounts Overview</Text>
            <View style={styles.accountItem}>
              <Text>Input (6279)</Text><Text style={styles.balance}>••••••</Text>
            </View>
            <View style={styles.accountItem}>
              <Text>Disposable Income (3977)</Text><Text style={styles.balance}>••••••</Text>
            </View>
            <View style={styles.accountItem}>
              <Text>VISA (7977)</Text><Text style={styles.balance}>••••••</Text>
              </View>
          </View>


          {/* --- Mandatory Assignment Button --- */}
        <TouchableOpacity style={styles.alertButton} onPress={handleAlertPress}>
          <Text style={styles.alertButtonText}>Alert</Text>
        </TouchableOpacity>


        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4'
  },
  header: {
    backgroundColor: '#005da4'
  },
  serviceNotice: {

  },
  serviceText: {

  },
  brandText: {

  },
  greetingText: {

  },
  searchBar: {

  },
  searchText: {

  },
  actionsRow: {

  },
  card: {

  },
  cardText: {

  },
  accountSection: {

  },
  sectionHeader: {

  },
  accountItem: {

  },
  balance: {

  },
  alertButton: {

  },
  alertButtonText: {

  },
});