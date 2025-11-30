
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CxAH3j_U.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.76UPHFNf.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.B6-FeG6D.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.CEO7cTZu.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.DEZUgQO9.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.DIhDavvU.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.C5etGRAR.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.CnmeFzxK.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.B34j8ze-.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.BmMfEh8A.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.C_IeuctI.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.C9gHFWIM.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.mAA0opuQ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.DWWCHN07.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.D0jo2kc6.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.BoDkCw64.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.BaU1dqBW.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.y1zAxOlP.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.CNf1wTcT.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.I8h2ZypO.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0651/6119/9813/files/fluffnglaze-logo-temp_x320.png?v=1714674815","https://cdn.shopify.com/s/files/1/0651/6119/9813/files/Two_Food_Photograhers-143_1_2000x.jpg?v=1721423203"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  