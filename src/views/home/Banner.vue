<script setup>
import { useLayout } from "@/composable/layout";
const { isDesktop } = useLayout();

const banner = [
  {
    imgSrc: "/img/banner/dao-phay.png",
    text1: "banner.text11",
    text2: "banner.text12"
  },
  {
    imgSrc: "/img/banner/bau-kep.png",
    text1: "banner.text21",
    text2: "banner.text22"
  },
  {
    imgSrc: "/img/banner/taro-khoan.png",
    text1: "banner.text31",
    text2: "banner.text32"
  },
  {
    imgSrc: "/img/banner/can-dao.png",
    text1: "banner.text41",
    text2: "banner.text42"
  }
];
</script>

<template>
  <Carousel
    :value="banner"
    :circular="true"
    :showNavigators="isDesktop"
    :autoplayInterval="5000"
    indicatorsContentClass="pb-2 sm:pb-3"
  >
    <template #item="{ data }">
      <div class="relative w-full flex justify-end px-2 xl:px-10">
        <img :src="data.imgSrc" class="h-40 sm:h-96 object-contain rounded-xl" />
        <div class="absolute min-w-fit sm:w-1/3 lg:w-5/12 h-full left-2 top-0 flex items-center sm:pl-2 xl:pl-10">
          <div class="uppercase">
            <span class="font-semibold text-xs sm:text-base italic">
              {{ $t("banner.supply") }}
            </span>
            <br />
            <div
              class="inline-block bg-gray-300 sm:bg-primary sm:bg-opacity-10 sm:hover:bg-gray-300 text-primary text-sm sm:text-2xl xl:text-3xl rounded-md px-1 sm:px-4 py-1 sm:py-2 mt-2"
            >
              <strong class="leading-normal">
                <span class="whitespace-nowrap">
                  {{ $t(data.text1) }}
                </span>
                <br />
                <span class="whitespace-nowrap">
                  {{ $t(data.text2) }}
                </span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Carousel>
</template>
