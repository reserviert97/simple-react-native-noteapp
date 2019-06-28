import React from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native';

const NoteList = (props) => {
  return(
    <View style={styles.bottom}>
      <FlatList
        data={props.data}
        numColumns={2}
        renderItem={(data) => (
          <TouchableOpacity activeOpacity={0.9} style={styles.bottomItem} onPress={props.navigateEditNote}>
            <View style={styles.bottomItemInner}>
              <View style={{alignItems: 'flex-end', flex:1}}>
                <Text style={{fontSize: 12, color: 'white'}}>27 Juni</Text>
              </View>
              <View style={{justifyContent: 'center', flex:2}}>
                <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: 'bold'}}>Create a Job</Text>
                <Text style={{fontSize: 13, color: '#FFFFFF'}}>Work</Text>
              </View>
              <View style={{justifyContent: 'center', flex:3}}>
                <Text style={{fontSize: 13}}>{data.item.content}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  bottom: {
    marginTop: 5,
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  bottomItem: {
    width: '50%',
    height: 170,
    padding: 10
  },
  bottomItemInner: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#C0EB6A',
    elevation: 10,
    padding: 10
  },
})

export default NoteList;

