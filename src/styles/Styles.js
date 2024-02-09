import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },
  button: {
    padding: 6,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#c5161d',
    borderRadius: 3,
    width: 200,
  },
  // ===HeroSection
  hContainer: {
    flexDirection: 'row',
    height: 150,
    margin: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#15001f',
  },
  color: {
    color: 'white',
  },

  // ===Analytics
  marginTop: {
    marginTop: 25,
  },
  mContainer: {
    margin: 8,
  },
  tContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  aContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  charges: {
    height: 90,
    width: 90,
    backgroundColor: 'aliceblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 0.3,
    borderColor: 'grey',
  },
  center: {
    textAlign: 'center',
  },

  // ===MenuItems
  wrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  menuItem: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: 'lightgrey',
  },

  // ===Divider
  divider: {
    height: 10,
    backgroundColor: 'lightgrey',
  },

  // ===Slider
  slider: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  sliderItem: {
    marginHorizontal: 6,
  },
  sliderImage: {
    height: 110,
    width: 350,
    borderRadius: 4,
  },

  // ===Simprise
  packContainer: {
    marginVertical: 12,
  },
  packHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
  },
  packSlider: {
    flexDirection: 'row',
  },
  cardPack: {
    height: 200,
    width: 160,
    borderRadius: 4,
    backgroundColor: 'lightgrey',
    marginHorizontal: 8,
    marginTop: 8,
  },
  cardImage: {
    height: 160,
    width: 160,
    borderRadius: 4,
  },

  // ===DailyPackages
  image: {
    height: 120,
    width: 70,
  },
  package: {
    height: 160,
    width: 350,
    marginTop: 8,
    padding: 14,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: 'grey',
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  packContent: {
    color: 'darkred',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
