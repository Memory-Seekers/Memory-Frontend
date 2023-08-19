import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navigation from './navigations/Navigation';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({});
