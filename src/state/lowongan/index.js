import { defineStore } from 'pinia';

export const useLowongan = defineStore('lowongan', {
    state: () => ({
        lowongan: []
    }),

    actions: {
        setLowongan(lowongan) {
            this.lowongan = lowongan;
        },

        getLowongan() {
            return this.lowongan;
        }
    }
});
