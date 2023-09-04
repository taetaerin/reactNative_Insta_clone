import { View, Text, Image } from 'react-native'
import React from 'react'
import ProfileButton from './ProfileButton'
import Feater from 'react-native-vector-icons/Feather'

const ProfileBody = ({name, accountName, profileImage, post, followers, following}) => {
  return (
    <View>
        {accountName ? (
            <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{accountName}</Text>
                    <Feater name='chevron-down' style={{fontSize: 20, color: 'black', padddingHorizontal: 5, opacity: 0.5}} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Feater name='plus-square' style={{fontSize: 25, color: 'black', padddingHorizontal: 15}} />
                    <Feater name='menu' style={{fontSize: 25}} />
                </View>
            </View>
        ) : null}
        <View style={{
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-around',
            paddingVertical: 20,
        }}>
            <View style={{alignItems: 'center'}}>
                <Image 
                    source={profileImage} 
                    style={{width: 80, height: 80, borderRadius: 100}}
                />
                <Text style={{paddingVertical: 5, fontWeight: 'bold'}}>{name}</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>{post}</Text>
                <Text>게시물</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>{followers}</Text>
                <Text>팔로워</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>{following}</Text>
                <Text>팔로잉</Text>
            </View>
            
        </View>
    </View>
  )
}

export default ProfileBody