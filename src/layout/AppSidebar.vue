<script setup>
import { ref } from "vue";
import { phoneNumber, emailAddress, mapUrl } from "@/config";
import AppMenu from "./AppMenu.vue";

const { $copy } = window;

const showContactDetails = ref(false);
</script>

<template>
  <div class="layout-sidebar shadow-md px-1.5 sm:px-2">
    <RouterLink :to="{ name: 'pHome' }" class="px-2 py-2 sm:py-4">
      <img src="/img/logo.png" class="h-16" />
      <div class="font-semibold text-xs mt-2">
        {{ $t("m.shortDescription") }}
      </div>
    </RouterLink>

    <div class="layout-menu-container">
      <AppMenu />

      <ul class="layout-menu">
        <li>
          <ul>
            <li :class="{ 'active-menuitem': showContactDetails }">
              <a class="rounded-md white-space-nowrap" :class="{ 'active-route': showContactDetails }" @click="showContactDetails = !showContactDetails">
                <i class="pi pi-address-book layout-menuitem-icon" />
                <span class="white-space-nowrap"> {{ $t("contact") }} </span>
                <i class="pi pi-angle-down layout-submenu-toggler" />
              </a>
              <ul>
                <li>
                  <a :href="`tel:${phoneNumber}`" class="rounded-md white-space-nowrap active-route-bg !cursor-default !mt-0 !pl-2">
                    <div class="flex items-center gap-x-1.5 hover:text-primary cursor-pointer">
                      <i class="pi pi-phone" />
                      <span class="text-[13px] white-space-nowrap"> {{ phoneNumber }} </span>
                    </div>
                    <i v-tooltip="$t('m.copyPhoneNumber')" class="pi pi-clone hover:text-primary ml-auto cursor-pointer" @click.prevent="$copy(phoneNumber)" />
                  </a>
                </li>
                <li>
                  <a :href="`mailto:${emailAddress}`" class="rounded-md white-space-nowrap active-route-bg !mt-0 !pl-2">
                    <div class="flex items-center gap-x-1.5 hover:text-primary">
                      <i class="pi pi-envelope" />
                      <span class="text-[13px] white-space-nowrap"> {{ emailAddress }} </span>
                    </div>
                    <i v-tooltip="$t('m.copyEmailAddress')" class="pi pi-clone hover:text-primary ml-auto" @click.prevent="$copy(emailAddress)" />
                  </a>
                </li>
                <li>
                  <a :href="mapUrl" target="_blank" class="rounded-md white-space-nowrap active-route-bg !mt-0 !pl-2">
                    <div class="flex items-center gap-x-1.5 hover:text-primary">
                      <i class="pi pi-map-marker" />
                      <span class="text-[13px] white-space-nowrap"> {{ $t("m.address") }} </span>
                    </div>
                  </a>
                </li>
                <li class="flex justify-between pl-2">
                  <Image src="/img/qr/facebook.png" width="90" preview imageClass="border border-gray-400 rounded-md" />
                  <Image src="/img/qr/zalo.png" width="90" preview imageClass="border border-gray-400 rounded-md" />
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="menu-separator border-b mt-1"></li>
      </ul>
    </div>
  </div>
</template>
