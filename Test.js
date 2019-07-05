import React, { Component } from 'react';
import { ActivityIndicator, View, Text, FlatList, Image } from 'react-native';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      page: 1,
      isLoading: false
    };
  }

  componentDidMount(){
    this.setState({
      isLoading: true
    });
    this.getData()
  }

  getData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10&_page='+this.state.page;
    fetch(url)
      .then( (response) => response.json())
      .then( (responseJson) => {
        this.setState(
          { 
            data: this.state.data.concat(responseJson),
            isLoading: false
          }
        )
    })
  }

  renderFooter = () => {
    return(
      this.state.isLoading ?
      <View style={styles.loader}>
        <ActivityIndicator size="large"/>
      </View> : null
    )
  }

  renderRow = ({item}) => {
    return(
      <View style={styles.item}>
        <Image source={{uri: item.url}} style={styles.itemImage}/>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemText}>{item.id}</Text>
      </View>
    ) 
  }

  hanldeLoadMore = () => {
    this.setState({page: this.state.page + 1});
    this.getData()
  }

  render(){
    return(
      <FlatList 
        style={styles.container}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderRow}
        onEndReached={this.hanldeLoadMore}
        onEndReachedThreshold={0.25}
        ListFooterComponent={this.renderFooter}
      />
    )
  }
}
export default App;

const styles = {
  container: {
    backgroundColor: '#f5fcff',
    paddingBottom: 100
  },
  item : {
    borderBottomColor: '#ccc',
    marginBottom: 5,
    borderBottomWidth: 1,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  itemText: {
    fontSize: 16,
    padding: 5
  },
  loader: {
    marginTop: 10,
    alignItems: 'center'
  }
}
