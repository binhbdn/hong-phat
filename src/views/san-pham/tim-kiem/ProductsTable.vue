<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n-lite";
import { first } from "@/stores/search";
import { isDesktop } from "@/composable/layout";
import { imgServer } from "@/config";

const props = defineProps({
  items: Array
});

const { current } = useI18n();
const rows = 5;
const hasMultiplePages = computed(() => props.items.length > rows);
</script>

<template>
  <div>
    <DataTable v-model:first="first" :value="items" dataKey="code" :paginator="hasMultiplePages" :rows="rows" :size="isDesktop ? null : 'small'">
      <Column header="#">
        <template #body="{ index }">
          {{ first + index + 1 }}
        </template>
      </Column>
      <Column :header="$t('products')">
        <template #body="{ data }">
          <div
            class="group flex items-stretch gap-x-3 text-gray-600 cursor-pointer"
            @click="
              $router.push({
                name: data.routeName,
                params: { code: data.code }
              })
            "
          >
            <div class="flex-shrink-0 w-[60px] h-[60px] border border-gray-400 rounded-md" @click.stop>
              <Image :src="`${imgServer}${data.image}?w=300&h=300`" preview imageClass="rounded-md" />
            </div>
            <div class="flex flex-col justify-between">
              <div class="font-bold text-gray-900 group-hover:text-primary line-clamp-2">
                {{ data.name[current] }}
              </div>
              <div class="font-medium leading-4 text-gray-500">
                {{ formattedPrice || $t("contactForQuote") }}
              </div>
            </div>
          </div>
        </template>
      </Column>

      <template #empty>
        <div class="text-[13px]/5 sm:text-sm/[22px]">{{ $t("noProductsFound") }}</div>
      </template>
    </DataTable>
  </div>
</template>
