<script setup lang="ts">
import { useMainStore } from '@/stores/main'

const props = defineProps<{ name: string }>()
const router = useRouter()
const mainStore = useMainStore()
const { t } = useI18n()

watchEffect(() => {
  mainStore.setNewName(props.name)
})
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>

    <p class="mb-8 text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="mainStore.otherNames.length">
      <span class="opacity-75">{{ t('intro.aka') }}:</span>
      <ul>
        <li v-for="otherName in mainStore.otherNames" :key="otherName">
          <router-link :to="`/hi/${otherName}`" replace>
            {{ otherName }}
          </router-link>
        </li>
      </ul>
    </template>

    <div>
      <button class="m-3 mt-6 text-sm btn" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
