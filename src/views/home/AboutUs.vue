<script setup>
import { phoneNumber, emailAddress, mapUrl } from "@/config";

const { $copy } = window;
</script>

<template>
  <div class="flex flex-col gap-y-3 text-gray-700">
    <div>
      <div class="font-semibold text-primary">Về chúng tôi</div>
      <div class="flex flex-col gap-y-2 ml-4 mt-2">
        <div>
          Công ty <strong class="text-primary">Ngũ Kim Hồng Phát</strong> là một trong những công ty kinh doanh hàng đầu tại Việt Nam trong lĩnh vực cung cấp và
          phân phối:
        </div>
        <ul class="list-disc font-medium ml-8">
          <li>Dụng cụ cơ khí & Phụ kiện máy cnc</li>
          <li>Các loại bầu kẹp & Phụ kiện gá kẹp</li>
          <li>Các loại dụng cụ cắt gọt kim loại</li>
          <li>Dao & cán dao gia công kim loại</li>
        </ul>
      </div>
    </div>

    <div>
      <div class="font-semibold text-primary">Chúng tôi CAM KẾT</div>
      <div class="flex flex-col gap-y-2 ml-4 mt-2">
        <div>
          <div class="font-medium">➡️ Về chất lượng sản phẩm:</div>
          <div class="pl-4 mt-1">
            Tất cả các mặt hàng do chúng tôi cung cấp đều đạt tiêu chuẩn xuất khẩu của nhiều nước trên Thế giới như: Đức, Mỹ, Ý, Anh, Nhật, Hà Lan, Thuỵ Sỹ, Tây
            Ban Nha, Pháp, Singapore, Hàn Quốc, Đài Loan…
          </div>
        </div>
        <div>
          <div class="font-medium">➡️ Về dịch vụ:</div>
          <div class="pl-4 mt-1">Chúng tôi sẽ cố gắng phản hồi mọi thắc mắc của quý khách nhanh nhất có thể.</div>
        </div>
        <div>
          <div class="font-medium">➡️ Thời gian chuẩn bị hàng:</div>
          <div class="pl-4 mt-1">Thời gian chuẩn bị tối ưu nhất.</div>
        </div>
        <div>
          <div class="font-medium">➡️ Quyền Lợi của Khách Hàng:</div>
          <div class="pl-4 mt-1">Tuân thủ chính sách đổi trả hàng khi sản phẩm bị lỗi từ nhà sản xuất, khi bị nhầm sản phẩm.</div>
        </div>
      </div>
    </div>

    <div class="w-fit pr-2">
      <div class="font-semibold text-primary">
        {{ $t("contact") }}
      </div>
      <div class="flex flex-col gap-y-2 text-[13px] ml-4 mt-2">
        <div class="flex justify-between items-center">
          <a :href="`tel:${phoneNumber}`" class="min-w-44 flex items-center gap-x-2 hover:text-primary">
            <i class="pi pi-phone" style="font-size: 14px" />
            <span> {{ phoneNumber }} </span>
          </a>
          <i v-tooltip="$t('menu.copyPhoneNumber')" class="pi pi-clone hover:text-primary" style="font-size: 14px" @click="$copy(phoneNumber)" />
        </div>

        <div class="flex justify-between items-center">
          <a :href="`mailto:${emailAddress}`" class="min-w-44 flex items-center gap-x-2 hover:text-primary">
            <i class="pi pi-envelope" style="font-size: 14px" />
            <span> {{ emailAddress }} </span>
          </a>
          <i v-tooltip="$t('menu.copyEmailAddress')" class="pi pi-clone hover:text-primary" style="font-size: 14px" @click="$copy(emailAddress)" />
        </div>

        <a :href="mapUrl" target="_blank" class="flex items-center gap-x-2 hover:text-primary">
          <i class="pi pi-map-marker" style="font-size: 14px" />
          <span> {{ $t("menu.address") }} </span>
        </a>

        <div class="flex justify-between px-5">
          <Image src="/img/qr/facebook.png" width="120" preview imageClass="border border-gray-400 rounded-md" />
          <Image src="/img/qr/zalo.png" width="120" preview imageClass="border border-gray-400 rounded-md" />
        </div>
      </div>
    </div>
  </div>
</template>
