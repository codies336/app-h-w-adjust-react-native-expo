import {Dimensions, PixelRatio} from 'react-native';

let {width, height} = Dimensions.get('window');

const widthToDp = number => {
let givenWidth = typeof number === 'number' ? number: parseFloat(number);
return PixelRatio.roundToNearestPixel(layoutSize: (width * givenWidth) /100);
};

const heightTop = number => {
let givenHeight = typeof number === 'number' ? number: parseFloat(number);
return PixelRatio.roundToNearestPixel(layoutSize: (height * givenHeight) /100);
};

const listenToOrientationChanges = ref => {
Dimensions.addEventListener( type: 'change', handler: newDimension => {
width= newDimension.screen.width;
height = newDimension.screen.height;
});
};

export {widthToDp, heightToDp, listenToOrientationChanges};