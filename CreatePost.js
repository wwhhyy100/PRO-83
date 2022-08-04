import React, { Component } from 'react';
import { Text, View, StyleSheet,SafeAreaView,Image,ScrollView,DropDownPicker,TextInput } from 'react-native';

export default class Feed extends Component {
  render() {
    return (
      <View style = {StyleSheet.container}>
        <SafeAreaView style = {styles.droidSafeArea}/>
        <View style = {styles.appTitle}>
        <View style = {appIcon}>
        <Image source={require('')} style = {styles.iconImage}></Image>
        </View>

        <View style = {styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}> CreatePost </Text>    
        </View>

        </View>

        <View style={styles.fieldsContainer}>
            <ScrollView>
                <Image source={preview_images[this.state.previewImage]}
                 style ={styles.previewImage}></Image>

                 <View style={{height:RFValue(this.state.dropdownHeight)}}>
                <DropDownPicker
                items={[
                    {label:'Image 1',value:'image_1'},
                    {label:'Image 2',value:'image_2'},
                    {label:'Image 3',value:'image_3'},
                    {label:'Image 4',value:'image_4'},
                    {label:'Image 5',value:'image_5'},
                    {label:'Image 6',value:'image_6'},
                    {label:'Image 7',value:'image_7'},
                ]}

                defaultValue={this.state.previewImage}
                
                containerStyle={{height:40,borderRadius:20,marginBottom:10}}

                onOpen={()=>{
                    this.setState({dropdownHeight:170})

                }}

                onClose={()=>{
                    this.setState({dropdownHeight:40})

                }}

                style={{backgroundColor:'orange'}}

                itemStyle={{justifyContent:'flex-start'}}

                dropdownStyle={{backgroundColor:'black'}}

                labelStyle={{color:'white'}}

                arrowStyle={{color:"white"}}

                onChangeItem={item => this.setState({previewImage:item.value})}
                />
            
             </View>
                
                <TextInput style={styles.inputFont}
                
                onChangetText={caption => this.setState({caption})}

                placeholder={'Caption'}

                placeholderTextColor='white'
                />


            </ScrollView>
        </View>
        
      </View>
    );
  }
}
