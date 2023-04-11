import { Inter } from 'next/font/google'
import { HomeScreen } from '@app/screens/HomeScreen';
import CustomHead from '@app/layouts/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <CustomHead
        title='Ai powerplay'
        description='Ai will generate videos, audios, text'
        keywords='Ai will generate videos, audios, text'
      />
      <HomeScreen />
    </>
  )

}
