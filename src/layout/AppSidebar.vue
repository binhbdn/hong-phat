<script setup>
import { ref } from "vue";
import AppMenu from "./AppMenu.vue";

const showContactDetails = ref(false);
</script>

<template>
  <div class="layout-sidebar shadow-md px-2 sm:px-3">
    <RouterLink :to="{ name: 'pageHome' }" class="px-2 py-2 sm:py-4">
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
                <span class="white-space-nowrap"> Liên hệ </span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" />
              </a>
              <ul>
                <li>
                  <a href="tel:0988957584" class="rounded-md white-space-nowrap active-route-bg cursor-default !mt-0">
                    <div class="flex items-center gap-x-2 hover:text-primary">
                      <i class="pi pi-phone" style="font-size: 14px; margin-right: 2px" />
                      <span class="text-[13px] white-space-nowrap"> 0988957584 </span>
                    </div>
                    <i class="pi pi-fw pi-clone hover:text-primary ml-auto" style="font-size: 14px" />
                  </a>
                </li>
                <li>
                  <a href="mailto:hongphat@gmail.com" class="rounded-md white-space-nowrap active-route-bg !mt-0">
                    <div class="flex items-center gap-x-2 hover:text-primary">
                      <i class="pi pi-envelope" style="font-size: 14px; margin-right: 2px" />
                      <span class="text-[13px] white-space-nowrap"> hongphat@gmail.com </span>
                    </div>
                    <i class="pi pi-fw pi-clone hover:text-primary ml-auto" style="font-size: 14px" />
                  </a>
                </li>
                <li>
                  <a class="rounded-md white-space-nowrap active-route-bg !mt-0">
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
