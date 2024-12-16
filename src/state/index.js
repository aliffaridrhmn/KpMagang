// state/index.js
import { useIsLoading } from './isLoading';
import { useLowongan } from './lowongan';
import api from '../utils/api';

async function asyncGetLowongan() {
    const isLoadingStore = useIsLoading();
    isLoadingStore.setLoading();
    try {
        const lowongan = await api.getLowongan();
        const lowonganStore = useLowongan();
        lowonganStore.setLowongan(lowongan);
    } catch (error) {
        console.log(error);
    } finally {
        isLoadingStore.unSetLoading();
    }
}

export { asyncGetLowongan };
