import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HeroSection from './src/components/Main/HeroSection';
import MenuItems from './src/components/Main/Menu';
import Slider from './src/components/Main/Slider';
import Divider from './src/components/Main/Divider';
import Analytics from './src/components/Main/Analytics';
import CardPackages from './src/components/Packages/Card';
import DailyPackages from './src/components/Packages/DailyPackages';
import MonthlyPackages from './src/components/Packages/MonthlyPackages';
import WeeklyPackages from './src/components/Packages/WeeklyPackages';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeroSection />
        <Analytics />
        <MenuItems />
        <Divider />
        <Slider />
        <Divider />
        <CardPackages />
        <Divider />
        <DailyPackages />
        <Divider />
        <WeeklyPackages />
        <Divider />
        <MonthlyPackages />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
