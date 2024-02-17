import { useTStore } from '@/stores/t'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function Page() {
  const store = useTStore()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{store.user}</Text>
      <Button title="Update" onPress={() => store.setUser(Date.now().toString())} />
    </View>
  )
}
