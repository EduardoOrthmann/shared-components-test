import {WingBlank, Card as AntdCard} from '@ant-design/react-native';
import CardBody from '@ant-design/react-native/lib/card/CardBody';
import CardFooter from '@ant-design/react-native/lib/card/CardFooter';
import CardHeader from '@ant-design/react-native/lib/card/CardHeader';
import React from 'react';
import {Text, View} from 'react-native';

const Card = () => {
  return (
    <View>
      <WingBlank size="lg">
        <AntdCard>
          <CardHeader title="This is title" extra="This is extra" />
          <CardBody>
            <View style={{height: 42}}>
              <Text style={{marginLeft: 16}}>Card Content</Text>
            </View>
          </CardBody>
          <CardFooter content="footer content" extra="footer extra content" />
        </AntdCard>
      </WingBlank>
    </View>
  );
};

export default Card;
