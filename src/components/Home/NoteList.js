import React, {Component} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text, ScrollView , RefreshControl} from 'react-native';
import moment from 'moment';
import color from './color';

const NoteList = (props) => {
    
    return(
        <View style={styles.bottom}>
          <FlatList
            refreshControl={
              <RefreshControl 
                refreshing={props.refreshing}
                onRefresh={props.onRefresh}
              />
            }
            data={props.data}
            numColumns={2}
            keyExtractor={(item, index) => item.id.toString()}
            onEndReached={props.onEndReached}
            onEndReachedThreshold={0.1}
            renderItem={(data) => (
              <TouchableOpacity activeOpacity={0.9} style={styles.bottomItem} onPress={() => props.navigateEditNote(data)} onLongPress={() => props.deleteNote(data.item.id)}>
                <View style={{flex: 1, borderRadius: 10, elevation: 10, padding: 10, 
                  backgroundColor: (data.item.Category !== null ) ? color()[data.item.Category.id] : color()[0]  }
                  }>
                  <View style={{alignItems: 'flex-end', flex:1}}>
                    <Text style={{fontSize: 12, color: 'white'}}>{moment(data.item.createdAt).format('DD MMMM')}</Text>
                  </View>
                  <View style={{justifyContent: 'center', flex:2}}>
                    <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: 'bold'}} numberOfLines={1}>{data.item.title}</Text>
                    <Text style={{fontSize: 13, color: '#FFFFFF'}}>{ (data.item.Category !== null ) ? data.item.Category.name : '-' }</Text>
                  </View>
                  <View style={{justifyContent: 'center', flex:3}}>
                    <Text style={{fontSize: 13, color: '#FFFFFF'}} numberOfLines={3}>{data.item.content}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      // </ScrollView>
    )
}

const styles = StyleSheet.create({
  bottom: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    flex: 1
  },
  bottomItem: {
    width: '50%',
    height: 170,
    padding: 10
  },
})

export default NoteList;

