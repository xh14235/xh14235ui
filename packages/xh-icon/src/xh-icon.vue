<template>
  <i class="xh-icon" :class="'xh-icon-' + name"></i>
</template>

<script>
export default {
  name: "XhIcon",
  props: {
    name: String
  }
};
</script>

<style lang="stylus" scoped>
@font-face
  font-family: xh-icons
  src: url('../../styles/icons/element-icons.woff') format('woff'), url('../../styles/icons/element-icons.ttf') format('truetype')
  font-weight: 400
  font-style: normal
.xh-icon
  font-family: xh-icons !important
  font-style: normal
  line-height: 1
  display: inline-block
.xh-icon-ice-cream-round:before
  content: '\e6a0'
.xh-icon-ice-cream-square:before
  content: '\e6a3'
.xh-icon-lollipop:before
  content: '\e6a4'
.xh-icon-potato-strips:before
  content: '\e6a5'
.xh-icon-milk-tea:before
  content: '\e6a6'
.xh-icon-ice-drink:before
  content: '\e6a7'
.xh-icon-ice-tea:before
  content: '\e6a9'
.xh-icon-coffee:before
  content: '\e6aa'
.xh-icon-orange:before
  content: '\e6ab'
.xh-icon-pear:before
  content: '\e6ac'
.xh-icon-apple:before
  content: '\e6ad'
.xh-icon-cherry:before
  content: '\e6ae'
.xh-icon-watermelon:before
  content: '\e6af'
.xh-icon-grape:before
  content: '\e6b0'
.xh-icon-refrigerator:before
  content: '\e6b1'
.xh-icon-goblet-square-full:before
  content: '\e6b2'
.xh-icon-goblet-square:before
  content: '\e6b3'
.xh-icon-goblet-full:before
  content: '\e6b4'
.xh-icon-goblet:before
  content: '\e6b5'
.xh-icon-cold-drink:before
  content: '\e6b6'
.xh-icon-coffee-cup:before
  content: '\e6b8'
.xh-icon-water-cup:before
  content: '\e6b9'
.xh-icon-hot-water:before
  content: '\e6ba'
.xh-icon-ice-cream:before
  content: '\e6bb'
.xh-icon-dessert:before
  content: '\e6bc'
.xh-icon-sugar:before
  content: '\e6bd'
.xh-icon-tableware:before
  content: '\e6be'
.xh-icon-burger:before
  content: '\e6bf'
.xh-icon-knife-fork:before
  content: '\e6c1'
.xh-icon-fork-spoon:before
  content: '\e6c2'
.xh-icon-chicken:before
  content: '\e6c3'
.xh-icon-food:before
  content: '\e6c4'
.xh-icon-dish-1:before
  content: '\e6c5'
.xh-icon-dish:before
  content: '\e6c6'
.xh-icon-moon-night:before
  content: '\e6ee'
.xh-icon-moon:before
  content: '\e6f0'
.xh-icon-cloudy-and-sunny:before
  content: '\e6f1'
.xh-icon-partly-cloudy:before
  content: '\e6f2'
.xh-icon-cloudy:before
  content: '\e6f3'
.xh-icon-sunny:before
  content: '\e6f6'
.xh-icon-sunset:before
  content: '\e6f7'
.xh-icon-sunrise-1:before
  content: '\e6f8'
.xh-icon-sunrise:before
  content: '\e6f9'
.xh-icon-heavy-rain:before
  content: '\e6fa'
.xh-icon-lightning:before
  content: '\e6fb'
.xh-icon-light-rain:before
  content: '\e6fc'
.xh-icon-wind-power:before
  content: '\e6fd'
.xh-icon-baseball:before
  content: '\e712'
.xh-icon-soccer:before
  content: '\e713'
.xh-icon-football:before
  content: '\e715'
.xh-icon-basketball:before
  content: '\e716'
.xh-icon-ship:before
  content: '\e73f'
.xh-icon-truck:before
  content: '\e740'
.xh-icon-bicycle:before
  content: '\e741'
.xh-icon-mobile-phone:before
  content: '\e6d3'
.xh-icon-service:before
  content: '\e6d4'
.xh-icon-key:before
  content: '\e6e2'
.xh-icon-unlock:before
  content: '\e6e4'
.xh-icon-lock:before
  content: '\e6e5'
.xh-icon-watch:before
  content: '\e6fe'
.xh-icon-watch-1:before
  content: '\e6ff'
.xh-icon-timer:before
  content: '\e702'
.xh-icon-alarm-clock:before
  content: '\e703'
.xh-icon-map-location:before
  content: '\e704'
.xh-icon-delete-location:before
  content: '\e705'
.xh-icon-add-location:before
  content: '\e706'
.xh-icon-location-information:before
  content: '\e707'
.xh-icon-location-outline:before
  content: '\e708'
.xh-icon-location:before
  content: '\e79e'
.xh-icon-place:before
  content: '\e709'
.xh-icon-discover:before
  content: '\e70a'
.xh-icon-first-aid-kit:before
  content: '\e70b'
.xh-icon-trophy-1:before
  content: '\e70c'
.xh-icon-trophy:before
  content: '\e70d'
.xh-icon-medal:before
  content: '\e70e'
.xh-icon-medal-1:before
  content: '\e70f'
.xh-icon-stopwatch:before
  content: '\e710'
.xh-icon-mic:before
  content: '\e711'
.xh-icon-copy-document:before
  content: '\e718'
.xh-icon-full-screen:before
  content: '\e719'
.xh-icon-switch-button:before
  content: '\e71b'
.xh-icon-aim:before
  content: '\e71c'
.xh-icon-crop:before
  content: '\e71d'
.xh-icon-odometer:before
  content: '\e71e'
.xh-icon-time:before
  content: '\e71f'
.xh-icon-bangzhu:before
  content: '\e724'
.xh-icon-close-notification:before
  content: '\e726'
.xh-icon-microphone:before
  content: '\e727'
.xh-icon-turn-off-microphone:before
  content: '\e728'
.xh-icon-position:before
  content: '\e729'
.xh-icon-postcard:before
  content: '\e72a'
.xh-icon-message:before
  content: '\e72b'
.xh-icon-chat-line-square:before
  content: '\e72d'
.xh-icon-chat-dot-square:before
  content: '\e72e'
.xh-icon-chat-dot-round:before
  content: '\e72f'
.xh-icon-chat-square:before
  content: '\e730'
.xh-icon-chat-line-round:before
  content: '\e731'
.xh-icon-chat-round:before
  content: '\e732'
.xh-icon-set-up:before
  content: '\e733'
.xh-icon-turn-off:before
  content: '\e734'
.xh-icon-open:before
  content: '\e735'
.xh-icon-connection:before
  content: '\e736'
.xh-icon-link:before
  content: '\e737'
.xh-icon-cpu:before
  content: '\e738'
.xh-icon-thumb:before
  content: '\e739'
.xh-icon-female:before
  content: '\e73a'
.xh-icon-male:before
  content: '\e73b'
.xh-icon-guide:before
  content: '\e73c'
.xh-icon-news:before
  content: '\e73e'
.xh-icon-price-tag:before
  content: '\e744'
.xh-icon-discount:before
  content: '\e745'
.xh-icon-wallet:before
  content: '\e747'
.xh-icon-coin:before
  content: '\e748'
.xh-icon-money:before
  content: '\e749'
.xh-icon-bank-card:before
  content: '\e74a'
.xh-icon-box:before
  content: '\e74b'
.xh-icon-present:before
  content: '\e74c'
.xh-icon-sell:before
  content: '\e6d5'
.xh-icon-sold-out:before
  content: '\e6d6'
.xh-icon-shopping-bag-2:before
  content: '\e74d'
.xh-icon-shopping-bag-1:before
  content: '\e74e'
.xh-icon-shopping-cart-2:before
  content: '\e74f'
.xh-icon-shopping-cart-1:before
  content: '\e750'
.xh-icon-shopping-cart-full:before
  content: '\e751'
.xh-icon-smoking:before
  content: '\e752'
.xh-icon-no-smoking:before
  content: '\e753'
.xh-icon-house:before
  content: '\e754'
.xh-icon-table-lamp:before
  content: '\e755'
.xh-icon-school:before
  content: '\e756'
.xh-icon-office-building:before
  content: '\e757'
.xh-icon-toilet-paper:before
  content: '\e758'
.xh-icon-notebook-2:before
  content: '\e759'
.xh-icon-notebook-1:before
  content: '\e75a'
.xh-icon-files:before
  content: '\e75b'
.xh-icon-collection:before
  content: '\e75c'
.xh-icon-receiving:before
  content: '\e75d'
.xh-icon-suitcase-1:before
  content: '\e760'
.xh-icon-suitcase:before
  content: '\e761'
.xh-icon-film:before
  content: '\e763'
.xh-icon-collection-tag:before
  content: '\e765'
.xh-icon-data-analysis:before
  content: '\e766'
.xh-icon-pie-chart:before
  content: '\e767'
.xh-icon-data-board:before
  content: '\e768'
.xh-icon-data-line:before
  content: '\e76d'
.xh-icon-reading:before
  content: '\e769'
.xh-icon-magic-stick:before
  content: '\e76a'
.xh-icon-coordinate:before
  content: '\e76b'
.xh-icon-mouse:before
  content: '\e76c'
.xh-icon-brush:before
  content: '\e76e'
.xh-icon-headset:before
  content: '\e76f'
.xh-icon-umbrella:before
  content: '\e770'
.xh-icon-scissors:before
  content: '\e771'
.xh-icon-mobile:before
  content: '\e773'
.xh-icon-attract:before
  content: '\e774'
.xh-icon-monitor:before
  content: '\e775'
.xh-icon-search:before
  content: '\e778'
.xh-icon-takeaway-box:before
  content: '\e77a'
.xh-icon-paperclip:before
  content: '\e77d'
.xh-icon-printer:before
  content: '\e77e'
.xh-icon-document-add:before
  content: '\e782'
.xh-icon-document:before
  content: '\e785'
.xh-icon-document-checked:before
  content: '\e786'
.xh-icon-document-copy:before
  content: '\e787'
.xh-icon-document-delete:before
  content: '\e788'
.xh-icon-document-remove:before
  content: '\e789'
.xh-icon-tickets:before
  content: '\e78b'
.xh-icon-folder-checked:before
  content: '\e77f'
.xh-icon-folder-delete:before
  content: '\e780'
.xh-icon-folder-remove:before
  content: '\e781'
.xh-icon-folder-add:before
  content: '\e783'
.xh-icon-folder-opened:before
  content: '\e784'
.xh-icon-folder:before
  content: '\e78a'
.xh-icon-edit-outline:before
  content: '\e764'
.xh-icon-edit:before
  content: '\e78c'
.xh-icon-date:before
  content: '\e78e'
.xh-icon-c-scale-to-original:before
  content: '\e7c6'
.xh-icon-view:before
  content: '\e6ce'
.xh-icon-loading:before
  content: '\e6cf'
.xh-icon-rank:before
  content: '\e6d1'
.xh-icon-sort-down:before
  content: '\e7c4'
.xh-icon-sort-up:before
  content: '\e7c5'
.xh-icon-sort:before
  content: '\e6d2'
.xh-icon-finished:before
  content: '\e6cd'
.xh-icon-refresh-left:before
  content: '\e6c7'
.xh-icon-refresh-right:before
  content: '\e6c8'
.xh-icon-refresh:before
  content: '\e6d0'
.xh-icon-video-play:before
  content: '\e7c0'
.xh-icon-video-pause:before
  content: '\e7c1'
.xh-icon-d-arrow-right:before
  content: '\e6dc'
.xh-icon-d-arrow-left:before
  content: '\e6dd'
.xh-icon-arrow-up:before
  content: '\e6e1'
.xh-icon-arrow-down:before
  content: '\e6df'
.xh-icon-arrow-right:before
  content: '\e6e0'
.xh-icon-arrow-left:before
  content: '\e6de'
.xh-icon-top-right:before
  content: '\e6e7'
.xh-icon-top-left:before
  content: '\e6e8'
.xh-icon-top:before
  content: '\e6e6'
.xh-icon-bottom:before
  content: '\e6eb'
.xh-icon-right:before
  content: '\e6e9'
.xh-icon-back:before
  content: '\e6ea'
.xh-icon-bottom-right:before
  content: '\e6ec'
.xh-icon-bottom-left:before
  content: '\e6ed'
.xh-icon-caret-top:before
  content: '\e78f'
.xh-icon-caret-bottom:before
  content: '\e790'
.xh-icon-caret-right:before
  content: '\e791'
.xh-icon-caret-left:before
  content: '\e792'
.xh-icon-d-caret:before
  content: '\e79a'
.xh-icon-share:before
  content: '\e793'
.xh-icon-menu:before
  content: '\e798'
.xh-icon-s-grid:before
  content: '\e7a6'
.xh-icon-s-check:before
  content: '\e7a7'
.xh-icon-s-data:before
  content: '\e7a8'
.xh-icon-s-opportunity:before
  content: '\e7aa'
.xh-icon-s-custom:before
  content: '\e7ab'
.xh-icon-s-claim:before
  content: '\e7ad'
.xh-icon-s-finance:before
  content: '\e7ae'
.xh-icon-s-comment:before
  content: '\e7af'
.xh-icon-s-flag:before
  content: '\e7b0'
.xh-icon-s-marketing:before
  content: '\e7b1'
.xh-icon-s-shop:before
  content: '\e7b4'
.xh-icon-s-open:before
  content: '\e7b5'
.xh-icon-s-management:before
  content: '\e7b6'
.xh-icon-s-ticket:before
  content: '\e7b7'
.xh-icon-s-release:before
  content: '\e7b8'
.xh-icon-s-home:before
  content: '\e7b9'
.xh-icon-s-promotion:before
  content: '\e7ba'
.xh-icon-s-operation:before
  content: '\e7bb'
.xh-icon-s-unfold:before
  content: '\e7bc'
.xh-icon-s-fold:before
  content: '\e7a9'
.xh-icon-s-platform:before
  content: '\e7bd'
.xh-icon-s-order:before
  content: '\e7be'
.xh-icon-s-cooperation:before
  content: '\e7bf'
.xh-icon-bell:before
  content: '\e725'
.xh-icon-message-solid:before
  content: '\e799'
.xh-icon-video-camera:before
  content: '\e772'
.xh-icon-video-camera-solid:before
  content: '\e796'
.xh-icon-camera:before
  content: '\e779'
.xh-icon-camera-solid:before
  content: '\e79b'
.xh-icon-download:before
  content: '\e77c'
.xh-icon-upload2:before
  content: '\e77b'
.xh-icon-upload:before
  content: '\e7c3'
.xh-icon-picture-outline-round:before
  content: '\e75f'
.xh-icon-picture-outline:before
  content: '\e75e'
.xh-icon-picture:before
  content: '\e79f'
.xh-icon-close:before
  content: '\e6db'
.xh-icon-check:before
  content: '\e6da'
.xh-icon-plus:before
  content: '\e6d9'
.xh-icon-minus:before
  content: '\e6d8'
.xh-icon-help:before
  content: '\e73d'
.xh-icon-s-help:before
  content: '\e7b3'
.xh-icon-circle-close:before
  content: '\e78d'
.xh-icon-circle-check:before
  content: '\e720'
.xh-icon-circle-plus-outline:before
  content: '\e723'
.xh-icon-remove-outline:before
  content: '\e722'
.xh-icon-zoom-out:before
  content: '\e776'
.xh-icon-zoom-in:before
  content: '\e777'
.xh-icon-error:before
  content: '\e79d'
.xh-icon-success:before
  content: '\e79c'
.xh-icon-circle-plus:before
  content: '\e7a0'
.xh-icon-remove:before
  content: '\e7a2'
.xh-icon-info:before
  content: '\e7a1'
.xh-icon-question:before
  content: '\e7a4'
.xh-icon-warning-outline:before
  content: '\e6c9'
.xh-icon-warning:before
  content: '\e7a3'
.xh-icon-goods:before
  content: '\e7c2'
.xh-icon-s-goods:before
  content: '\e7b2'
.xh-icon-star-off:before
  content: '\e717'
.xh-icon-star-on:before
  content: '\e797'
.xh-icon-more-outline:before
  content: '\e6cc'
.xh-icon-more:before
  content: '\e794'
.xh-icon-phone-outline:before
  content: '\e6cb'
.xh-icon-phone:before
  content: '\e795'
.xh-icon-user:before
  content: '\e6e3'
.xh-icon-user-solid:before
  content: '\e7a5'
.xh-icon-setting:before
  content: '\e6ca'
.xh-icon-s-tools:before
  content: '\e7ac'
.xh-icon-delete:before
  content: '\e6d7'
.xh-icon-delete-solid:before
  content: '\e7c9'
.xh-icon-eleme:before
  content: '\e7c7'
.xh-icon-platform-eleme:before
  content: '\e7ca'
</style>