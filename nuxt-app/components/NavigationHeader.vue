<template>
    <header style="padding: 1rem 0; border-bottom: 1px solid #ddd;">
        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
            <strong>PIE Aperture:</strong>
            <span
                v-for="item in navigationData"
                :key="item.key"
                :style="{ fontWeight: item.isCurrent ? 'bold' : 'normal' }"
            >
                <span v-if="item.isCurrent">{{ item.name }}</span>
                <pie-link v-else :href="item.url">{{ item.name }}</pie-link>
            </span>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getNavigationData } from '../../shared/navigation-urls.js';
import '@justeattakeaway/pie-webc/components/link.js';

interface NavigationItem {
    name: string;
    url: string;
    key: string;
    isCurrent: boolean;
}

const navigationData = ref<NavigationItem[]>([]);

onMounted(() => {
    navigationData.value = getNavigationData();
});
</script>
