import {createStackNavigator} from '@react-navigation/stack'
import HpDrivers from '../routes/HPDrivers';

const Stack = createStackNavigator();

export default class StackNav extends Component {
    render() {
        <Stack-Navigator>
            <Stack.Screen name="App" component={App} />
            <Stack.Screen name="HpDrivers" component={HpDrivers} />
        </Stack-Navigator>
    }
}