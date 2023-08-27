import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations/Navigation';
import { AuthProvider } from './contexts/AuthContext';
import Toast from 'react-native-toast-message';
import toastConfig from './styles/toastConfig';

const App = () => {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <Navigation />
      <Toast config={toastConfig} />
    </AuthProvider>
  );
};

export default App;
