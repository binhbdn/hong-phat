# vite_vue_primevue_tailwindcss

* Layout: apollo-vue-nextgen 4.0.0 (2023-01-18) tham khảo từ nguồn [viref-2024/cms](https://gitlab.com/viref-2024/cms) + minify css
* Theme tham khảo từ [primevue-sass-theme 3.52.0](https://github.com/primefaces/primevue-sass-theme/releases/tag/3.52.0) tương thích với [primevue 3.52.0](https://github.com/primefaces/primevue/releases/tag/3.52.0)  + minify css

## Lưu ý quan trọng

 1. Trong source code này, khi import/remove một primevue component thì phải import/remove theme css tương ứng với component đó:<br />
 * sửa file public/scss/theme/theme-tailwind-light/_custom_components.scss
 * cần build lại file custom_theme.min.css
 ```sh
npm run build-css
```

2. Sửa layout ở public/scss/layout/custom_layout.scss cũng cần build lại file custom_layout.min.css

3. Để đồng nhất định dạng mã nguồn, chạy lệnh sau trước khi commit
 ```sh
npm run format
```