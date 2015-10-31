"use strict";

var React = require("react-native");
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} = React;

var data = [
  {
    time: "2015-10-10T12:45:25.498Z",
    mealType: "LUNCH",
    title: "Erbsensuppe",
  }, {
    time: "2015-10-31T20:45:25.498Z",
    mealType: "DINNER",
    title: "BBQ Ribs",
  }
]

var KitchenLog = React.createClass({

  getInitialState() {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      dataSource: ds.cloneWithRows(data),
    };
  },

  updateRowData(data) {
    this.setState({
      dataSource: ds.cloneWithRows(data),
    });
  },

  render() {
    return (
      <ListView 
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.title}</Text>}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

AppRegistry.registerComponent("KitchenLog", () => KitchenLog);
