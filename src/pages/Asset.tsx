import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Card, Text, Divider, Icon} from 'react-native-elements';
import {useAssetsData} from '../api/assets';

const AssetPortfolioDetails = () => {
  const {data: ASSET_DATA, isLoading} = useAssetsData();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (!ASSET_DATA) {
    return <Text>No data available</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text h4>Portfolio Summary</Text>
        <Divider style={styles.divider} />
        <Text>Policy Holder: {ASSET_DATA.policyHolder}</Text>
        <Text>Portfolio ID: {ASSET_DATA.portfolioId}</Text>
        <Text>Status: {ASSET_DATA.status}</Text>
        <Text>Total Insured Value: {ASSET_DATA.summary.totalInsuredValue}</Text>
        <Text>Total Premium Paid: {ASSET_DATA.summary.totalPremiumPaid}</Text>
        <Text>Assets Covered: {ASSET_DATA.summary.numberOfAssets}</Text>
        <Text>Next Premium Due: {ASSET_DATA.summary.nextPremiumDue}</Text>
      </Card>

      {ASSET_DATA.assets.map((asset, index) => (
        <Card key={index} containerStyle={styles.card}>
          <Text h4>{asset.name}</Text>
          <Divider style={styles.divider} />
          <Text>Type: {asset.type}</Text>
          <Text>Insured Value: {asset.insuredValue}</Text>
          <Text>Annual Premium: {asset.annualPremium}</Text>
          <Text>Status: {asset.status}</Text>
          <Text>Last Payment: {asset.lastPaymentDate}</Text>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
  },
  divider: {
    marginVertical: 10,
  },
});

export default AssetPortfolioDetails;
