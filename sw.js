importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"),workbox.core.skipWaiting(),self.__precacheManifest=[{url:"index.html",revision:"28c040446ea1e9bd75b01f02e4a6d4fe"},{url:"dist/css/dialog.css",revision:"3e8702ca71777e66906e3dc22849a939"},{url:"dist/css/style.css",revision:"abb63c7558e4992a7a564f49fed6cb5b"},{url:"dist/img/comment.svg",revision:"cf81234a1b071209679c45bbd3dc9387"},{url:"dist/img/cross.svg",revision:"4c3674ef6903e069f1b6c6efde31f6b3"},{url:"dist/img/dropdown.svg",revision:"db7892ac8bfb1eea5d33be9983a693d6"},{url:"dist/img/edit.svg",revision:"ccca019c70faf2fd5d5e210c726efb80"},{url:"dist/img/ios-install.svg",revision:"db3836d7587a60d7032f6d94409c6ead"},{url:"dist/img/ios-safari.svg",revision:"3651103f7f60bad2c5c986ca4b0a4159"},{url:"dist/img/menu.svg",revision:"ae4726ff9e70e5c1c3ff20cadd1cc30d"},{url:"dist/img/minus.svg",revision:"e1819ee922a11e62043281aa497017be"},{url:"dist/img/name.svg",revision:"856e58e6dcc830eb8f42c1d76b13e47e"},{url:"dist/img/plus.svg",revision:"80ada9a35541fa1677adfbebfe78e6d8"},{url:"dist/img/swap.svg",revision:"e9cd84ae27f279ad5b200f25c6f6ca59"},{url:"dist/img/theme.svg",revision:"4b0c252c56e3c01ef884f96ffc51150a"},{url:"dist/img/trash.svg",revision:"492b51e7308c6d964f09ac00edfe77ce"},{url:"dist/img/update-found.svg",revision:"6321c93921d90314c9d2288f3179c898"},{url:"dist/img/whatshot.svg",revision:"674f6f0bdba379f59f0eb82061b65cc5"},{url:"dist/js/script.js",revision:"d4abbc892633bea00893d4cf84faa241"},{url:"favicon/android-chrome-192x192.png",revision:"ce29a1d879431317dedb35ed6167fac7"},{url:"favicon/android-chrome-512x512.png",revision:"e255612ab3ff796d96f285cc472351d9"},{url:"favicon/favicon-16x16.png",revision:"50094c6c27dfb3db8d4ae84377631da5"},{url:"favicon/favicon-32x32.png",revision:"a377742adb4f088bdfd40412f80b4e3e"},{url:"favicon/favicon.ico",revision:"99f2bce0de4ea9d103eaafdf5b870237"},{url:"favicon/iPadIcon.png",revision:"0e2832cc38a8638849e7337a769654d4"},{url:"favicon/iPadProIcon.png",revision:"cd313f28e110bc97b5f3956f3d20892f"},{url:"favicon/iPhoneLargeIcon.png",revision:"8b7ef4b264b78cf3be8885947417dd3c"},{url:"favicon/iPhoneSmallIcon.png",revision:"66e44e726d4eca2deeea4c4444810fd5"},{url:"favicon/mstile-150x150.png",revision:"2814595744b76d6fd88c760fc10c34b4"},{url:"favicon/safari-pinned-tab.svg",revision:"f596ff1b7fe5269b120f9b2eff901896"},{url:"splash/iPad.png",revision:"83429402290a17aa7144ed46a63b4d8f"},{url:"splash/iPadProBig.png",revision:"831ae8204c2ceb28e2eb8057b23cc2b9"},{url:"splash/iPadProSmall.png",revision:"9b74a4e0f96541134068f85c8286a4a1"},{url:"splash/iPhone.png",revision:"196f1a429ad8c3f27d882538c78ce86b"},{url:"splash/iPhonePlus.png",revision:"b397e6612ddcaadec85f409dbd434078"},{url:"splash/iPhoneSE.png",revision:"6e60ed4b7cb57feb08b459276b648bd4"},{url:"splash/iPhoneX.png",revision:"a666cf3747af34d4aab8805c19e88083"}].concat(self.__precacheManifest||[]),workbox.precaching.precacheAndRoute(self.__precacheManifest,{}),workbox.routing.registerRoute(/gwa/,new workbox.strategies.StaleWhileRevalidate({cacheName:"GwaCache",plugins:[new workbox.backgroundSync.Plugin("GwaSyncQ",{maxRetentionTime:3600}),new workbox.broadcastUpdate.Plugin({channelName:"GwaUpdChan"})]}),"GET");var newPlugins=function(){return[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxAgeSeconds:31536e3,maxEntries:30})]},newSwrStrategy=function(e){return new workbox.strategies.StaleWhileRevalidate({cacheName:e,plugins:newPlugins()})},newCfStrategy=function(e){return new workbox.strategies.CacheFirst({cacheName:e,plugins:newPlugins()})};workbox.routing.registerRoute(/^https:\/\/storage\.googleapis\.com/,newSwrStrategy("google-storage")),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,newSwrStrategy("google-fonts-stylesheets")),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,newCfStrategy("google-fonts-webfonts")),workbox.routing.registerRoute(/^https:\/\/(?:cdnjs|cdn)\.(?:cloudflare|jsdelivr)\.(?:com|net)/,newCfStrategy("cdn-resources"));