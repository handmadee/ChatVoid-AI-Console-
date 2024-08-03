'use strict';
import React, {ReactNode} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface ColumnProps {
  flex?: number;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
}

const Column: React.FC<ColumnProps> = ({
  flex,
  alignItems = 'center',
  justifyContent,
  style,
  children,
}) => {
  const styles = StyleSheet.create({
    column: {
      flex: flex,
      flexDirection: 'column',
      alignItems: alignItems,
      justifyContent: justifyContent,
    },
  });

  return <View style={[styles.column, style]}>{children}</View>;
};

export default React.memo(Column);
