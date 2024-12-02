<script setup>
import { phoneNumber, emailAddress, mapUrl } from "@/config";

const { $copy } = window;
</script>

<template>
  <div class="flex flex-col gap-y-3 text-[13px]/[18px] text-gray-700">
    <div>
      <div class="font-semibold text-sm text-primary">
        {{ $t("aboutUs") }}
      </div>
      <div class="flex flex-col gap-y-2 ml-4 mt-2">
        <div>
          {{ $t("h.aboutCompany1") }}
          <strong class="text-primary"> {{ $t("h.aboutCompany2") }} </strong>
          {{ $t("h.aboutCompany3") }}:
        </div>
        <ul class="list-disc font-medium ml-8">
          <li>{{ $t("h.introduceService1") }}</li>
          <li>{{ $t("h.introduceService2") }}</li>
          <li>{{ $t("h.introduceService3") }}</li>
          <li>{{ $t("h.introduceService4") }}</li>
        </ul>
      </div>
    </div>

    <div>
      <div class="font-semibold text-sm text-primary">
        {{ $t("h.weCommit") }}
      </div>
      <div class="flex flex-col gap-y-2 ml-4 mt-2">
        <div>
          <div class="font-medium">➡️ {{ $t("h.aboutProductQuality") }}:</div>
          <div class="pl-4 mt-1">
            {{ $t("h.aboutProductQualityContent") }}
          </div>
        </div>
        <div>
          <div class="font-medium">➡️ {{ $t("h.aboutService") }}:</div>
          <div class="pl-4 mt-1">
            {{ $t("h.aboutServiceContent") }}
          </div>
        </div>
        <div>
          <div class="font-medium">➡️ {{ $t("h.goodsPreparationTime") }}:</div>
          <div class="pl-4 mt-1">
            {{ $t("h.goodsPreparationTimeContent") }}
          </div>
        </div>
        <div>
          <div class="font-medium">➡️ {{ $t("h.customerRights") }}:</div>
          <div class="pl-4 mt-1">
            {{ $t("h.customerRightsContent") }}
          </div>
        </div>
      </div>
    </div>

    <div class="w-fit pr-2">
      <div class="font-semibold text-sm text-primary">
        {{ $t("contact") }}
      </div>
      <div class="flex flex-col gap-y-2 ml-4 mt-2">
        <div class="flex justify-between items-center">
          <a :href="`tel:${phoneNumber}`" class="min-w-44 flex items-center gap-x-2 hover:text-primary">
            <i class="pi pi-phone" />
            <span> {{ phoneNumber }} </span>
          </a>
          <i v-tooltip="$t('m.copyPhoneNumber')" class="pi pi-clone hover:text-primary" @click="$copy(phoneNumber)" />
        </div>

        <div class="flex justify-between items-center">
          <a :href="`mailto:${emailAddress}`" class="min-w-44 flex items-center gap-x-2 hover:text-primary">
            <i class="pi pi-envelope" />
            <span> {{ emailAddress }} </span>
          </a>
          <i v-tooltip="$t('m.copyEmailAddress')" class="pi pi-clone hover:text-primary" @click="$copy(emailAddress)" />
        </div>

        <a :href="mapUrl" target="_blank" class="flex items-center gap-x-2 hover:text-primary">
          <i class="pi pi-map-marker" />
          <span> {{ $t("m.address") }} </span>
        </a>

        <div class="flex justify-between px-5">
          <Image src="/img/qr/facebook.png" width="120" preview imageClass="border border-gray-400 rounded-md" />
          <Image src="/img/qr/zalo.png" width="120" preview imageClass="border border-gray-400 rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>
