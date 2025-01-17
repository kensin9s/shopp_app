import React, {useContext} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductsNavigator from './ProductsNavigator';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from '../components/icons/LightIcons';
import {Colors} from '../constants/Colors';
import OrdersScreen from '../screens/OrdersScreen';
import AdminOrdersScreen from '../screens/AdminOrderScreen';
import AdminNavigator from './AdminNavigator';
import ProfileNavigator from './ProfileNavigator';
import CategoryNavigator from './Categorynavigator';
import {Context as AuthContext} from '../context/auth/AuthContext';
import FriesOddIcon from '../components/icons/FriesOddIcon';
import FavoritesNavigator from './FavoritesNavigator';
import AdminOrderItem from '../components/shop/AdminOrderItem';
const textColor = `rgba(${Colors.text.primary}, 0.7)`;
const Drawer = createDrawerNavigator();

const CartIcon = ({color}) => <Icon name="cart-o" size={20} color={color} />;
const ShopIcon = ({color}) => <Icon name="shop-o" size={20} color={color} />;
const userIcon = ({color}) => <Icon name="trash-o" size={20} color={color} />;
const starIcon = ({color}) => <Icon name="heart-o" size={20} color={color} />;
const ListIcon = ({color}) => <Icon name="menu-o" size={20} color={color} />;
const AccountIcon = ({color}) => <Icon name="user-o" size={20} color={color} />;

const drawerContentOpts = {
  activeTintColor: `rgb(${Colors.primary})`,
  inactiveTintColor: `rgba(${Colors.text.primary}, 0.7)`,
  labelStyle: {
    fontFamily: 'Lato-Bold',
    fontSize: 16,
  },
  itemStyle: {
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 0,
  },
};
const screenOpts = {
  headerTitleStyle: {
    fontFamily: 'Lato-Black',
    fontSize: 28,
    marginLeft: 20,
  },
  headerStyle: {
    height: 120,
  },
};

const drawerEdgeWidth = Dimensions.get('window').width / 4;

const DrawerNavigator = () => {
  const {logout} = useContext(AuthContext);

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{
            height: '100%',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.title}>Menu</Text>
            <DrawerItemList {...props} />
          </View>
          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Icon name="logout-left" size={20} color={textColor} />
            <Text style={styles.logoutTitle}>Đăng xuất</Text>
          </TouchableOpacity>
        </DrawerContentScrollView>
      )}
      drawerStyle={styles.drawerStyle}
      overlayColor={`rgba(${Colors.primaryDark}, 0.8)`}
      edgeWidth={drawerEdgeWidth}
      drawerContentOptions={drawerContentOpts}
      screenOptions={screenOpts}>
        

      <Drawer.Screen
        name="ProductsFlow"
        component={ProductsNavigator}
        options={{
          title: 'Chợ Sách',
          drawerIcon: ShopIcon,
        }}
      />
       <Drawer.Screen
        name="CATEGORY"
        component={CategoryNavigator}
        options={{
          title: 'Thể loại',
          drawerIcon: ListIcon,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersScreen}
        options={({navigation}) => ({
          title: 'Đơn hàng của tôi',
          drawerIcon: CartIcon,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={navigation.toggleDrawer}>
              <FriesOddIcon
                height={52}
                width={52}
                weight={1}
                color={textColor}
              />
            </TouchableOpacity>
          ),
          drawerLabel: 'Đơn hàng',
        })}
      />
            <Drawer.Screen
        name="AdminOrder"
        component={AdminOrdersScreen}
        options={({navigation}) => ({
          title: 'Đơn đã bán',
          drawerIcon: CartIcon,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              style={{marginLeft: 20}}
              onPress={navigation.toggleDrawer}>
              <FriesOddIcon
                height={52}
                width={52}
                weight={1}
                color={textColor}
              />
            </TouchableOpacity>
          ),
          drawerLabel: 'Đơn đã bán được',
        })}
      /> 
      <Drawer.Screen
        name="FavoritesFlow"
        component={FavoritesNavigator}
        options={{
          drawerIcon: starIcon,
          drawerLabel: 'Yêu thích',
        }}
      />
      <Drawer.Screen
        name="AdminFlow"
        component={AdminNavigator}
        options={{
          title: 'Sách của tôi',
          drawerIcon: userIcon,
        }}
      />
      <Drawer.Screen
        name="AccountFlow"
        component={ProfileNavigator}
        options={{
          title: 'Tài khoản',
          drawerIcon: AccountIcon,
        }}
      />
      
    
  {/* <Drawer.Screen
        
        name="AđdrFlow"
        component={AddressNavigator}
        options={{

          title: 'My Address',
          drawerIcon: AccountIcon,
        }}
      /> */}
    </Drawer.Navigator>
    
    
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: 'white',
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Lato-Bold',
    color: `rgb(${Colors.text.secondary})`,
    marginVertical: 20,
    marginLeft: 10,
    alignSelf:'center',
  },
  logoutButton: {
    width: '100%',
    marginBottom: 30,
    flexDirection: 'row',
    paddingLeft: 30,
    alignItems: 'center',
  },
  logoutTitle: {
    color: textColor,
    fontFamily: 'Lato-Bold',
    fontSize: 16,
    marginLeft: 30,
  },
});
