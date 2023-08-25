import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../components/SearchInput'

const Search = () => {
  return (
    <SafeAreaView style={{width: '100%', backgroundColor: 'white', position: 'relative'}}>
      <ScrollView>
        <SearchInput />
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search