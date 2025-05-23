import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Icon } from 'react-native-elements';
import { useGeneralInsuranceData } from '../api/general';

type InsuranceItem = {
  type: string;
  icon: string;
  iconType: string;
  description: string;
};

type Props = {
  data: InsuranceItem[];
};

const InsuranceCardList: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data?.map((item) => (
        <Card key={item?.id} containerStyle={styles.card}>
          <View style={styles.header}>
            <Icon name={item?.icon} type="font-awesome" color="#517fa4" />
            <Text style={styles.title}>{item?.name}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.premium}>{item?.premium}</Text>
        </Card>
      ))}
    </View>
  );
};

const General = () => {
    const {data, isLoading} = useGeneralInsuranceData();

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (!data) {
        return <Text>No data available</Text>;
    }
    
    return <InsuranceCardList data={data} />;
    }

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  card: {
    width: '90%',
    borderRadius: 10,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    color: '#666',
    fontSize: 14,
  },
   premium: {
    fontSize: 16,
    fontWeight: '600',
    color: 'green',
  },
});

export default General;
