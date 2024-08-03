'use strict';
import FastImage from 'react-native-fast-image';

export default function Image(props) {
  return <FastImage source={props.src} />;
}
