import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Divider, Icon } from 'react-native-elements';
import { useLifeInsuranceData } from '../api/life';

// Static data (or you can pass it as props

const LifePolicyDetails = () => {
    const {data : LIFE_DATA, isLoading } = useLifeInsuranceData();

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (!LIFE_DATA) {
        return <Text>No data available</Text>;
    }

  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text h4>Policy Details</Text>
        <Divider style={styles.divider} />
        <Text>Policy Holder: {LIFE_DATA.policyHolder}</Text>
        <Text>Policy Number: {LIFE_DATA.policyNumber}</Text>
        <Text>Plan: {LIFE_DATA.planName}</Text>
        <Text>Sum Assured: {LIFE_DATA.sumAssured}</Text>
        <Text>Status: {LIFE_DATA.status}</Text>
        <Text>Start Date: {LIFE_DATA.policyStartDate}</Text>
        <Text>End Date: {LIFE_DATA.policyEndDate}</Text>
      </Card>

      <Card containerStyle={styles.card}>
        <Text h4>Deposit Statements</Text>
        <Divider style={styles.divider} />
        {LIFE_DATA.depositStatement.map((deposit, index) => (
          <View key={index} style={styles.row}>
            <Icon name="calendar" type="font-awesome" size={16} />
            <Text style={styles.depositText}>
              {deposit.year} - {deposit.amountPaid} on {deposit.paymentDate}
            </Text>
          </View>
        ))}
      </Card>

      <Card containerStyle={styles.card}>
        <Text h4>Maturity Benefits</Text>
        <Divider style={styles.divider} />
        <Text>Expected Date: {LIFE_DATA.maturityBenefits.expectedMaturityDate}</Text>
        <Text>Total Expected: {LIFE_DATA.maturityBenefits.totalExpectedPayout}</Text>
        <Text>Breakdown:</Text>
        <Text>• Sum Assured: {LIFE_DATA.maturityBenefits.breakdown.sumAssured}</Text>
        <Text>• Bonuses: {LIFE_DATA.maturityBenefits.breakdown.bonuses}</Text>
        <Text>• Loyalty: {LIFE_DATA.maturityBenefits.breakdown.loyaltyAdditions}</Text>
      </Card>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  depositText: {
    marginLeft: 8,
  },
});

export default LifePolicyDetails;
