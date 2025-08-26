import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import MainCard from '@/components/MainCard';
import MainContent from '@/components/MainContent';

export default function MainScreen() {
    return (
        <SafeAreaProvider className=''>
            <ScrollView className='h-full flex-1 bg-brandGray'>
                <MainCard />
                <MainContent/>
            </ScrollView>
        </SafeAreaProvider>
    );
}