import React, {Component} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text, ScrollView } from 'react-native';
import moment from 'moment';

const NoteList = (props) => {
    return(
      <ScrollView>
        <View style={styles.bottom}>
          <FlatList
            data={props.data}
            numColumns={2}
            keyExtractor={(item, index) => item.id}
            renderItem={(data) => (
              <TouchableOpacity activeOpacity={0.9} style={styles.bottomItem} onPress={() => props.navigateEditNote(data)} onLongPress={() => props.deleteNote(data.item.id)}>
                <View style={{flex: 1, borderRadius: 10, elevation: 10, padding: 10, backgroundColor: (data.item.Category.name == 'Unbranded') ? '#C0EB6A' : 
                  (data.item.Category.name == 'Persistent') ? '#2FC2DF' : (data.item.Category.name == 'transmit') ? '#FAD06C' : '#FF92A9'}}>
                  <View style={{alignItems: 'flex-end', flex:1}}>
                    <Text style={{fontSize: 12, color: 'white'}}>{moment(data.item.createdAt).format('DD MMMM')}</Text>
                  </View>
                  <View style={{justifyContent: 'center', flex:2}}>
                    <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: 'bold'}} numberOfLines={1}>{data.item.title}</Text>
                    <Text style={{fontSize: 13, color: '#FFFFFF'}}>{data.item.Category.name}</Text>
                  </View>
                  <View style={{justifyContent: 'center', flex:3}}>
                    <Text style={{fontSize: 13, color: '#FFFFFF'}} numberOfLines={3}>{data.item.content}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            // keyExtractor={}
          />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  bottom: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  bottomItem: {
    width: '50%',
    height: 170,
    padding: 10
  },
})

export default NoteList;

