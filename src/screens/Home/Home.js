import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import debounce from 'lodash.debounce';

import NoteList from '../../components/Home/NoteList';
import Header from '../../components/Home/Header';
import SortModal from '../../components/Home/SortModal';
import DeleteModal from '../../components/Home/DeleteModal';

import { connect } from 'react-redux';
import { getNotes, searchNotes, deleteNote, sortNote, getNotesPerPage } from '../../public/redux/actions/notes';
import { getCategories } from '../../public/redux/actions/categories';
class Home extends Component {
  state = {
    modalVisible: false,
    search: '',
    searchActive: false,
    deleteModal: false,
    selectedItem: 0,
    refreshing: false,
    page:1,
    categoryId: '',
    treshold: 0  
  };

  static navigationOptions = ({navigation}) => ({
    header: null
  });

  searchData = (keyword) => {
    this.props.dispatch(searchNotes(keyword));
  }

  fetchData = async () => {
    this.props.dispatch(getNotes());
    this.props.dispatch(getCategories());
  }

  componentDidMount(){
    this.fetchData();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  deleteItem() {
    this.props.dispatch(deleteNote(this.state.selectedItem));
    this.setDeleteModal(!this.state.deleteModal)
  }
  
  setDeleteModal(visible) {
    this.setState({deleteModal: visible})
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    this.setState({page: 1});
    this.fetchData();
    this.setState({refreshing: false});
  }

  sort(type) {
    this.props.dispatch(sortNote(type))
    this.setModalVisible(!this.state.modalVisible)
  }

  getMore = (page) => {
    if (page <= 3 && !this.props.isCategory && !this.props.isSearching) {
      this.props.dispatch(getNotesPerPage(page));
    }
  }
  
  loadMoreHandler = () => {
    this.setState({page: (this.state.page + 1)});
    this.getMore(this.state.page+1);
  }

  render(){
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Header 
          openDrawer={() => navigation.toggleDrawer()} 
          openModal={() => this.setModalVisible(true)}
        />

        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.search} 
            placeholder="search.." 
            onChangeText={debounce(this.searchData, 500) }
          />
        </View>

        <NoteList 
          data={this.props.notes} 
          navigateEditNote={(data) => navigation.navigate('EditNote', data)}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          deleteNote={(id) => {
            this.setDeleteModal(true)
            this.setState({selectedItem: id})
          }}
          onEndReached={this.loadMoreHandler}
          treshold={this.state.treshold}
        />

        <TouchableOpacity 
          activeOpacity={1} 
          onPress={() => navigation.navigate('AddNote')} 
          style={styles.floatingButtonStyle}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
        </TouchableOpacity>

        <SortModal 
          closeModal={() => { this.setModalVisible(!this.state.modalVisible) }}
          visibility={this.state.modalVisible}
          sort={(type) => this.sort(type)}
        />

        <DeleteModal 
          visible={this.state.deleteModal} 
          closeModal={() => {this.setDeleteModal(!this.state.deleteModal)}}
          deleteItem={() => this.deleteItem()}
        />

      </View>
    );
  };
};

const mapStateToProps = state => {
  return {
      notes: state.notes.data,
      totalPage: state.notes.totalPage,
      categories: state.categories.categories,
      isCategory: state.notes.isCategory,
      isSearching: state.notes.isSearching
  }
}

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  search: {
    paddingLeft: 15,
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: "#FFFFFF",
    backgroundColor : "#FFFFFF",
    elevation: 5
  },
  floatingButtonStyle: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    borderRadius: 50,
    elevation: 5
  }
});


