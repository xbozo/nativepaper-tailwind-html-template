import { ReactNode } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './style'
import './style.ts'

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {children}
    </SafeAreaView>
  )
}
