// state/isLoading.js
import { defineStore } from 'pinia';

export const useIsLoading = defineStore('isLoading', {
    state: () => ({
        isLoading: false,
    }),
    actions: {
        setLoading() {
            this.isLoading = true;
        },
        unSetLoading() {
            this.isLoading = false;
        },
    },
});
