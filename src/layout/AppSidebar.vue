<script setup>
import { ref } from "vue";
import { phoneNumber, emailAddress } from "@/config";
import AppMenu from "./AppMenu.vue";

const { $copy } = window;

const showContactDetails = ref(false);
</script>

<template>
  <div class="layout-sidebar shadow-md px-2 sm:px-3">
    <RouterLink :to="{ name: 'pageHome', query: { menu: 'san-pham-tieu-bieu' } }" class="px-2 py-2 sm:py-4">
      <img src="/img/logo.png" class="h-16" />
      <div class="font-semibold text-xs mt-2">
        {{ $t("menu.shortDescription") }}
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
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" />
              </a>
              <ul>
                <li>
                  <a :href="`tel:${phoneNumber}`" class="rounded-md white-space-nowrap active-route-bg cursor-default !mt-0">
                    <div class="flex items-center gap-x-2 hover:text-primary">
                      <i class="pi pi-phone" style="font-size: 14px; margin-right: 2px" />
                      <span class="text-[13px] white-space-nowrap"> {{ phoneNumber }} </span>
                    </div>
                    <i
                      v-tooltip="$t('menu.copyPhoneNumber')"
                      class="pi pi-fw pi-clone hover:text-primary ml-auto"
                      style="font-size: 14px"
                      @click.prevent="$copy(phoneNumber)"
                    />
                  </a>
                </li>
                <li>
                  <a :href="`mailto:${emailAddress}`" class="rounded-md white-space-nowrap active-route-bg !mt-0">
                    <div class="flex items-center gap-x-2 hover:text-primary">
                      <i class="pi pi-envelope" style="font-size: 14px; margin-right: 2px" />
                      <span class="text-[13px] white-space-nowrap"> {{ emailAddress }} </span>
                    </div>
                    <i
                      v-tooltip="$t('menu.copyEmailAddress')"
                      class="pi pi-fw pi-clone hover:text-primary ml-auto"
                      style="font-size: 14px"
                      @click.prevent="$copy(emailAddress)"
                    />
                  </a>
                </li>
                <li>
                  <a href="https://maps.app.goo.gl/v4CwwvEsFtDqs1zz5" target="_blank" class="rounded-md white-space-nowrap active-route-bg !mt-0">
                    <div class="flex items-center gap-x-2 hover:text-primary">
                      <i class="pi pi-map-marker" style="font-size: 14px; margin-right: 2px" />
                      <span class="text-[13px] white-space-nowrap"> {{ $t("menu.address") }} </span>
                    </div>
                  </a>
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
