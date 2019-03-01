import React from 'react';
import { View, Platform } from 'react-native';
import { 
  createStackNavigator,
  NavigationContainer,
  NavigationRouteConfigMap,
  StackNavigatorConfig,
  createAppContainer,
} from 'react-navigation';
import NavigationService from './NavigationService';
import ScreenUtil from './common/style';

import MainTab from './TabNavigator';

import Search from './container/Search';
import Media from './container/MediaPlay';

const withOutNavigation = {
  navigationOptions: () => ({
    header: null
  }),
}
/**
 * @param {NavigationRouteConfigMap} 导航器屏幕
 */
const navigationRouteConfigMap: NavigationRouteConfigMap = {
  
  MainTab: {
    screen: MainTab,
    ...withOutNavigation,
  },
  Media: {
    screen: Media,
    ...withOutNavigation,
  },
  Search: {
    screen: Search,
    ...withOutNavigation,
  }
};

/**
 * @param {StackNavigatorConfig} 导航器配置选项
 */
const stackNavigatorConfig: StackNavigatorConfig = {
  navigationOptions: () => ({
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      shadowColor: 'transparent',
      height: (Platform.OS == 'ios') ? 49 : 72,
      paddingTop: (Platform.OS == 'ios') ? 0 : 18
    },
  }),
};

/**
 * @param {NavigationContainer} 生成的导航 
 */
const MyStackNavigationContainer: NavigationContainer = createStackNavigator(
  navigationRouteConfigMap,
  stackNavigatorConfig,
);

const MyNavigationContainer = createAppContainer(MyStackNavigationContainer);

/**
 * @todo 路由组件
 *
 * @class RouteContainer
 * @extends {React.Component<RouteContainerProps, RouteContainerState>}
 */
class RouteContainer extends React.Component<any, any> {
  render () {
    // return (
    //   <View>
    //     <Text>asd</Text>
    //   </View>
    // );
    return (
      <View 
        style={{
          flex: 1,
          width: ScreenUtil.autoWidth(ScreenUtil.uiWidth), 
          height: ScreenUtil.autoHeight(ScreenUtil.uiHeight)
        }} 
      >
        <MyNavigationContainer ref={(navigatorRef: any) => { NavigationService.setTopLevelNavigator(navigatorRef); }} />
      </View>
    );
  }
}

export default RouteContainer;