import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, ScrollView, Pressable} from 'react-native';
import {Card, Text, Icon, Button} from 'react-native-elements';
import {useUserStore} from '../../store/useUserStore';
import {insuranceData} from '../../constants/insurance_data';

const Home = () => {
  const navigation = useNavigation();

  const logout = useUserStore(state => state.logout);

  const handleLogOut = () => {
    logout();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Logout" onPress={handleLogOut} />,
    });
  }, [navigation]);

  const onPressCard = item => {
    switch (item.type) {
      case 'General Insurance':
        navigation.navigate('General');
        break;
      case 'Life Insurance':
        navigation.navigate('Life');
        break;
      case 'Assets Insurance':
        navigation.navigate('Assets');
        break;
      default:
        console.warn(`No route defined for type: ${item.type}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {insuranceData.map((item, index) => (
        <Pressable key={index} onPress={() => onPressCard(item)}>
          <Card
            key={index}
            containerStyle={styles.card}
            onPress={() => onPressCard(item)}>
            <View style={styles.cardHeader}>
              <Icon
                name={item.icon}
                type={item.iconType}
                size={30}
                color="#007bff"
                style={styles.icon}
              />
              <Text style={styles.cardTitle}>{item.type}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </Card>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 10,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: '#555',
  },
});

export default Home;
