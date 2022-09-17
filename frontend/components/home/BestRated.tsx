import { Tabs } from 'antd';
import React from 'react';
import UserCardContainer from './UserCardContainer';

const { TabPane } = Tabs;

// const onChange = (key: string) => {
//   console.log(key);
// };

const BestRated: React.FC = () => (
  <div className='my-container my-20'>
    <div className='xl:container mx-auto'>
      <Tabs defaultActiveKey="1" type='card' centered>
        <TabPane tab="Өндөр үнэлгээтэй мэргэжилтэн" key="1">
          <UserCardContainer/>
        </TabPane>
        <TabPane tab="Өндөр үнэлгээтэй инфлүүнсер" key="2">
          <UserCardContainer/>
        </TabPane>
      </Tabs></div>
  </div>
);

export default BestRated;
