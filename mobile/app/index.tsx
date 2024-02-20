import { router } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function HomePage() {
  return (
    <View className="absolute flex h-screen w-screen items-center justify-center bg-[#fff]">
      <TouchableOpacity onPress={() => router.push('login')}>
        <Text>Go to login</Text>
      </TouchableOpacity>
    </View>
  )
}
