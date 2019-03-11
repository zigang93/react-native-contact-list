import { createStackNavigator , createAppContainer } from 'react-navigation'; 
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';

const StackNavigator = createStackNavigator({ 
  Contacts: {
    screen: Contacts,
  },
  Profile: {
    screen: Profile,
  },
});


export default createAppContainer(StackNavigator);