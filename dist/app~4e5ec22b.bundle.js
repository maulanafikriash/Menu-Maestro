(()=>{"use strict";var A,n={570:(A,n,t)=>{t.d(n,{Z:()=>a});var e=t(537),i=t.n(e),r=t(645),o=t.n(r)()(i());o.push([A.id,"@media screen and (max-width: 768px){.menu{display:none}.mobile-menu-toggle{display:flex;background-color:#333;border:none}.menu.active{display:flex;flex-direction:column;position:absolute;top:70px;left:0;background-color:#333;width:100%;padding:5px;z-index:9999}.menu.active li{padding:5px 0}.menu.active ul{list-style:none;display:flex;flex-direction:column;align-items:center}.resto{grid-template-columns:1fr 1fr}.content{padding:22px}.aboutUs{margin-top:25%;margin-bottom:2%}.navbar{background-color:#333;color:#fff;padding:17px 17px}}@media screen and (max-width: 500px){.hero-text h1{font-size:45px}}@media screen and (min-width: 720px){.restaurant{grid-template-columns:auto 1fr}.restaurant .restaurant__title,.restaurant .restaurant__description{grid-column:1/3}.content{padding:22px}.resto{grid-template-columns:1fr 1fr}.form-review{padding:22px}}@media(max-width: 2560px){.resto{grid-template-columns:repeat(4, 1fr)}}@media(max-width: 1024px){.resto{grid-template-columns:repeat(3, 1fr)}}@media(max-width: 768px){.resto{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 550px){.resto{grid-template-columns:repeat(1, 1fr)}}","",{version:3,sources:["webpack://./src/styles/responsive.scss"],names:[],mappings:"AAGA,qCACI,MACI,YAAA,CAGJ,oBACI,YARG,CASH,qBAAA,CACA,WAAA,CAIJ,aACI,YAfG,CAgBH,qBAAA,CACA,iBAAA,CACA,QAAA,CACA,MAAA,CACA,qBArBQ,CAsBR,UAAA,CACA,WAAA,CACA,YAAA,CACA,gBACI,aAAA,CAEJ,gBACE,eAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CAIN,OACE,6BAAA,CAGF,SACE,YAAA,CAGF,SACE,cAAA,CACA,gBAAA,CAIF,QACE,qBAnDU,CAoDV,UAAA,CACA,iBAAA,CAAA,CAKJ,qCAEI,cACE,cAAA,CAAA,CAKR,qCACE,YACE,8BAAA,CACA,oEAEE,eAAA,CAGJ,SACE,YAAA,CAGF,OACE,6BAAA,CAGF,aACE,YAAA,CAAA,CAKJ,0BACI,OACE,oCAAA,CAAA,CAIN,0BACI,OACE,oCAAA,CAAA,CAIJ,yBACE,OACE,oCAAA,CAAA,CAIJ,yBACE,OACE,oCAAA,CAAA",sourcesContent:["$primary-color: #333;\r\n$flexible: flex;\r\n\r\n@media screen and (max-width: 768px) {\r\n    .menu {\r\n        display: none;\r\n    }\r\n  \r\n    .mobile-menu-toggle {\r\n        display: $flexible;\r\n        background-color: #333;\r\n        border: none;\r\n        \r\n    }\r\n  \r\n    .menu.active {\r\n        display: $flexible;\r\n        flex-direction: column;\r\n        position: absolute;\r\n        top: 70px;\r\n        left: 0;\r\n        background-color: $primary-color;\r\n        width: 100%;\r\n        padding: 5px;     \r\n        z-index: 9999;\r\n        li {\r\n            padding: 5px 0;\r\n        }\r\n        ul {\r\n          list-style: none;\r\n          display: flex;\r\n          flex-direction: column;\r\n          align-items: center;\r\n        }        \r\n    }\r\n\r\n    .resto {\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .content{\r\n      padding: 22px;\r\n    }  \r\n\r\n    .aboutUs {\r\n      margin-top: 25%;\r\n      margin-bottom: 2%;\r\n    }\r\n\r\n\r\n    .navbar {\r\n      background-color: $primary-color;\r\n      color: #fff;\r\n      padding: 17px 17px;\r\n    }\r\n    \r\n  }\r\n\r\n  @media screen and (max-width: 500px){\r\n    .hero-text{\r\n      h1{\r\n        font-size: 45px;\r\n      }\r\n    }\r\n  }\r\n\r\n@media screen and (min-width: 720px) {\r\n  .restaurant {\r\n    grid-template-columns: auto 1fr;\r\n    .restaurant__title,\r\n    .restaurant__description {\r\n      grid-column: 1 / 3; \r\n    }\r\n  }\r\n  .content{\r\n    padding: 22px;\r\n  }\r\n  \r\n  .resto {\r\n    grid-template-columns: 1fr 1fr;\r\n  }\r\n\r\n  .form-review {\r\n    padding: 22px;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 2560px) {\r\n    .resto {\r\n      grid-template-columns: repeat(4, 1fr); \r\n    }\r\n  }\r\n\r\n@media (max-width: 1024px) {\r\n    .resto {\r\n      grid-template-columns: repeat(3, 1fr); \r\n    }\r\n  }\r\n  \r\n  @media (max-width: 768px) {\r\n    .resto {\r\n      grid-template-columns: repeat(2, 1fr); \r\n    }\r\n  }\r\n  \r\n  @media (max-width: 550px) {\r\n    .resto {\r\n      grid-template-columns: repeat(1, 1fr); \r\n    }\r\n  }"],sourceRoot:""}]);const a=o},90:(A,n,t)=>{t.d(n,{Z:()=>a});var e=t(537),i=t.n(e),r=t(645),o=t.n(r)()(i());o.push([A.id,".skeleton-ui{margin:0 auto;width:80%;max-width:800px;display:grid;grid-template-columns:1fr;gap:18px 16px;padding:22px}.skeleton-ui__poster{flex:1;padding:20px;height:250px;width:80%;border:none;max-width:500px;border-radius:10px;background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}.skeleton-ui__info h4{margin-top:17px;width:70%;height:18px;background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}.skeleton-ui__info p{padding:5px 3px;width:90%;height:12px;background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}.skeleton-ui__description p{padding:5px 0;width:80%;height:12px;background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}@keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}","",{version:3,sources:["webpack://./src/styles/skeleton.scss"],names:[],mappings:"AAAA,aACE,aAAA,CACA,SAAA,CACA,eAAA,CACA,YAAA,CACA,yBAAA,CACA,aAAA,CACA,YAAA,CAEA,qBACE,MAAA,CACA,YAAA,CACA,YAAA,CACA,SAAA,CACA,WAAA,CACA,eAAA,CACA,kBAAA,CACA,wEAAA,CACA,yBAAA,CACA,+BAAA,CAIA,sBACE,eAAA,CACA,SAAA,CACA,WAAA,CACA,wEAAA,CACA,yBAAA,CACA,+BAAA,CAEF,qBACE,eAAA,CACA,SAAA,CACA,WAAA,CACA,wEAAA,CACA,yBAAA,CACA,+BAAA,CAKF,4BACE,aAAA,CACA,SAAA,CACA,WAAA,CACA,wEAAA,CACA,yBAAA,CACA,+BAAA,CAKN,mBACE,GACE,0BAAA,CAEF,KACE,2BAAA,CAAA",sourcesContent:[".skeleton-ui {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n  max-width: 800px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 18px 16px;\r\n  padding: 22px;\r\n  \r\n  &__poster {\r\n    flex: 1;\r\n    padding: 20px;\r\n    height: 250px;\r\n    width: 80%;\r\n    border: none;\r\n    max-width: 500px;\r\n    border-radius: 10px;\r\n    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\r\n    background-size: 200% 100%;\r\n    animation: loading 1.5s infinite;\r\n  }\r\n  \r\n  &__info {\r\n    h4 {\r\n      margin-top: 17px;\r\n      width: 70%;\r\n      height: 18px;\r\n      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\r\n      background-size: 200% 100%;\r\n      animation: loading 1.5s infinite;\r\n    }\r\n    p {\r\n      padding: 5px 3px;\r\n      width: 90%;\r\n      height: 12px;\r\n      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\r\n      background-size: 200% 100%;\r\n      animation: loading 1.5s infinite;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    p {\r\n      padding: 5px 0;\r\n      width: 80%;\r\n      height: 12px;\r\n      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\r\n      background-size: 200% 100%;\r\n      animation: loading 1.5s infinite;\r\n    }\r\n  }\r\n}\r\n\r\n@keyframes loading {\r\n  0% {\r\n    background-position: 200% 0;\r\n  }\r\n  100% {\r\n    background-position: -200% 0;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const a=o},315:(A,n,t)=>{t.d(n,{Z:()=>a});var e=t(537),i=t.n(e),r=t(645),o=t.n(r)()(i());o.push([A.id,'*{margin:0;padding:0;box-sizing:border-box;font-family:"Roboto",sans-serif}p{font-family:"Quicksand",sans-serif}h1,h2{font-family:"Roboto",sans-serif}button,a,input[type=text],textarea{min-width:44px;min-height:44px;padding:10px}.navbar{background-color:#333;color:#fff;padding:17px 17px}.hero{position:relative}.hero img{width:100%;height:300px;object-fit:cover;object-position:center}.hero .overlay{position:absolute;top:0;left:0;width:100%;height:300px;background:rgba(0,0,0,.5)}.hero-text{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;color:#fff;text-align:center}.hero-text h1{margin:0;font-size:55px;font-family:"Quicksand";text-shadow:5px 4px 1px rgba(0,0,0,.5)}.container{display:flex;justify-content:space-between;align-items:center}.brand{font-size:24px;padding-left:20px}.bar{width:30px;height:3px;background-color:#fff;margin:3px 0;transition:transform .5s,opacity .3s}.mobile-menu-toggle{display:none;flex-direction:column;cursor:pointer;padding:5px;margin-right:10px}.mobile-menu-toggle.active .bar:nth-child(1){transform:rotate(-45deg) translate(-5px, 6px)}.mobile-menu-toggle.active .bar:nth-child(2){opacity:0}.mobile-menu-toggle.active .bar:nth-child(3){transform:rotate(45deg) translate(-5px, -6px)}.menu ul{list-style:none;display:flex}.menu li{padding-right:35px;width:auto}.menu a{text-decoration:none;color:#fff;font-weight:bold;transition:font-size .3s ease;display:block}.menu ul li a:hover{font-size:1.2em}.restaurant-list h2{margin-top:0px;text-align:center}.content{padding:32px;flex:1;margin:0 auto;min-height:100%}.content-heading{margin-top:35px;text-align:center}.resto{display:grid;grid-template-columns:1fr;gap:15px;margin:32px 0}.resto img{max-width:100%;height:auto}.restaurant-item{width:100%;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);border-radius:8px;overflow:hidden}.restaurant-item__header{position:relative}.restaurant-item__header__poster{width:100%}.restaurant-item__header__rating{position:absolute;padding:8px;bottom:20px;left:0;display:inline-block;background-color:#000;color:#fff}.restaurant-item__header__rating__score{margin-left:10px}.restaurant-item__content{padding:16px}.restaurant-item__content h3{margin:0 0 10px 0}.restaurant-item__content h3 a{color:#333;text-decoration:none;display:inline-block}.restaurant-item__content p{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;margin:0 0 10px 0}.restaurant-item__content p i{display:inline;color:#333}.restaurant{margin:0 auto;width:100%;max-width:800px;display:grid;grid-template-columns:1fr;gap:18px 16px;padding:22px}.restaurant__poster{width:100%;max-width:500px;border-radius:10px}.restaurant__info h4{margin-top:17px}.restaurant__info p{padding:5px 3px}.restaurant__description p{padding:5px 0}.restaurant__menu{border:2px solid #ccc;border-radius:10px;padding:10px;margin:10px}.restaurant__menu h3{margin-bottom:10px;text-align:center;border-bottom:2px solid #ccc}.restaurant__menu h4{margin-top:30px}.restaurant__menu ul{list-style-type:disc;margin-left:20px}.restaurant__menu ul li{margin:5px 0}.customer-review{border:2px solid #ccc;border-radius:10px;padding:10px;margin:10px}.customer-review h3{text-align:center;margin-bottom:10px;border-bottom:2px solid #ccc}.customer-review__container{margin:10px 0}.customer-review__container h4{font-weight:bold;margin:5px 0}.customer-review__container p{font-size:14px;margin:5px 0}.form-review{align-items:center;width:80%;max-width:800px;margin:0 auto;padding:22px;background-color:#f4f4f4;border:1px solid #ccc;border-radius:10px;box-shadow:0 0 10px rgba(0,0,0,.1)}.form-review h3{margin-bottom:20px;text-align:center}.form-review label{display:block;font-weight:bold;margin-top:10px}.form-review input,.form-review textarea{width:100%;padding:10px;margin-top:5px;margin-bottom:15px;border:1px solid #ccc;border-radius:5px}.form-review button{display:block;width:100%;padding:10px;background-color:#333;color:#fff;border:none;border-radius:5px;cursor:pointer}.form-review button:hover{background-color:#000}.like{width:55px;height:55px;background-color:#e81717;display:flex;align-items:center;justify-content:center;position:fixed;border-radius:50%;bottom:16px;right:16px;border:0;font-size:18px;cursor:pointer;color:#fff}.container-loader{height:100vh;width:100vw}.loader{height:20px;width:250px;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.loader-dot{animation-name:loader;animation-timing-function:ease-in-out;animation-duration:3s;animation-iteration-count:infinite;height:20px;width:20px;border-radius:100%;background-color:#000;position:absolute;border:2px solid #fff}.loader-dot:nth-child(1){background-color:#8cc759;animation-delay:.1s}.loader-dot:nth-child(2){background-color:#8c6daf;animation-delay:.2s}.loader-dot:nth-child(3){background-color:#ef5d74;animation-delay:.3s}.loader-dot:nth-child(4){background-color:#f9a74b;animation-delay:.4s}.loader-dot:nth-child(5){background-color:#60beeb;animation-delay:.5s}.loader-dot:nth-child(6){background-color:#fbef5a;animation-delay:.6s}.loader-text{position:absolute;top:200%;left:0;right:0;width:4rem;margin:auto;font-family:"Quicksand",sans-serif}.loader-text:after{content:"Loading";font-weight:bold;animation-name:loading-text;animation-duration:3s;animation-iteration-count:infinite}@keyframes loader{15%{transform:translateX(0)}45%{transform:translateX(230px)}65%{transform:translateX(230px)}95%{transform:translateX(0)}}@keyframes loading-text{0%{content:"Loading"}25%{content:"Loading."}50%{content:"Loading.."}75%{content:"Loading..."}}.hidden{display:none}#error-notification{text-align:center;font-size:18px;color:red;display:none;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-family:"Quicksand",sans-serif}.aboutUs{margin-top:13%;margin-bottom:2%;text-align:center}.aboutUs h2{font-size:1.5rem}.aboutUs p{margin-top:10px;font-size:1rem}.aboutUs a{display:inline-block}.icons i{color:#333;margin:0 15px;padding:15px 0}:focus{outline:2px solid #007bff}.hide-focus:focus{outline:none}.skip-link{background-color:#000;position:absolute;display:inline;font-size:11px;top:-40px;left:0;color:#fff;padding:7px;text-decoration:none;opacity:0;transition:opacity .3s ease-in-out;z-index:999}.skip-link:focus{top:0;opacity:1}footer{background-color:#333;padding:10px 0}footer p{color:#fff;text-align:center}',"",{version:3,sources:["webpack://./src/styles/style.scss"],names:[],mappings:"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",sourcesContent:['$primary-color: #333;\n$flexible: flex;\n$min-touch-target-size: 44px;\n$loader-background-colors: #8cc759, #8c6daf, #ef5d74, #f9a74b, #60beeb, #fbef5a;\n$animation-duration: 3s;\n$animation-delay-step: 0.1s;\n\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \'Roboto\', sans-serif;\n}\n\np {\n  font-family: \'Quicksand\', sans-serif;\n}\n\nh1, h2 {\n  font-family: \'Roboto\', sans-serif;\n}\n\nbutton, a, input[type="text"], textarea {\n  min-width: $min-touch-target-size;\n  min-height: $min-touch-target-size;\n  padding: 10px;\n}\n\n\n.navbar {\n  background-color: $primary-color;\n  color: #fff;\n  padding: 17px 17px;\n}\n\n.hero {\n  position: relative;\n\n  img {\n    width: 100%;\n    height: 300px;\n    object-fit: cover;\n    object-position: center;\n  }\n  .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 300px;\n    background: rgba(0, 0, 0, 0.5); \n  }\n}\n\n  .hero-text {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); \n    padding: 20px;\n    color: white;\n    text-align: center;\n\n    h1 {\n      margin: 0;\n      font-size: 55px;\n      font-family: \'Quicksand\';\n      text-shadow: 5px 4px 1px rgba(0, 0, 0, 0.5);\n    }\n  }\n\n.container {\n  display: $flexible;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.brand {\n  font-size: 24px;\n  padding-left: 20px;\n}\n\n.bar {\n  width: 30px;\n  height: 3px;\n  background-color: #fff;\n  margin: 3px 0;\n  transition: transform 0.5s, opacity 0.3s;\n}\n\n.mobile-menu-toggle {\n  display: none;\n  flex-direction: column;\n  cursor: pointer;\n  padding: 5px;\n  margin-right: 10px;\n\n  &.active .bar:nth-child(1) {\n    transform: rotate(-45deg) translate(-5px, 6px);\n  }\n\n  &.active .bar:nth-child(2) {\n    opacity: 0;\n  }\n\n  &.active .bar:nth-child(3) {\n    transform: rotate(45deg) translate(-5px, -6px);\n  }\n}\n\n.menu {\n ul {\n   list-style: none;\n   display: $flexible;\n }\n li {\n   padding-right: 35px;\n   width: auto;\n }\n a {\n   text-decoration: none;\n   color: #fff;\n   font-weight: bold;\n   transition: font-size 0.3s ease;\n   display: block;\n }\n}\n\n.menu ul li a:hover {\n  font-size: 1.2em; \n}\n  \n.restaurant-list h2 {\n  margin-top: 0px ;\n  text-align: center;\n}\n\n// main\n.content {\n  padding: 32px;\n  flex: 1;\n  margin: 0 auto;\n  min-height: 100%;\n\n  &-heading {\n    margin-top: 35px;\n    text-align: center;\n  }\n}\n\n// restaurant\n.resto {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 15px;\n  margin: 32px 0;\n  img{\n    max-width: 100%; \n    height: auto; \n  }\n}\n\n// Resto Item\n.restaurant-item {\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n\n  &__header {\n    position: relative;\n\n    &__poster {\n      width: 100%;\n    }\n\n    &__rating {\n      position: absolute;\n      padding: 8px;\n      bottom: 20px;\n      left: 0;\n      display: inline-block;\n      background-color: black;\n      color: white;\n\n      &__score {\n        margin-left: 10px;\n      }\n    }\n  }\n\n  &__content {\n    padding: 16px;\n\n    h3 {\n      margin: 0 0 10px 0;\n\n      a {\n        color: $primary-color;\n        text-decoration: none;\n        display: inline-block;\n      }\n    }\n\n    p {\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: 4;\n      -webkit-box-orient: vertical;\n      margin: 0 0 10px 0;   \n      i{\n        display: inline;\n        color: $primary-color;     \n      }\n    }\n  }\n}\n\n// Restaurant-detail\n.restaurant {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 800px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n  padding: 22px;\n\n  &__poster {\n    width: 100%;\n    max-width: 500px;\n    border-radius: 10px;\n  }\n\n  &__info {\n    h4 {\n      margin-top: 17px;\n    } p {\n      padding: 5px 3px;\n    }\n  }\n\n  &__description{\n    p{\n      padding: 5px 0;\n    }\n  }\n\n  &__menu {\n    border: 2px solid #ccc;\n    border-radius: 10px;\n    padding: 10px;\n    margin: 10px;\n  \n    h3 {\n      margin-bottom: 10px;\n      text-align: center;\n      border-bottom: 2px solid #ccc;\n    }\n  \n    h4 {\n      margin-top: 30px;\n    }\n  \n    ul {\n      list-style-type: disc;\n      margin-left: 20px;\n  \n      li {\n        margin: 5px 0;\n      }\n    }\n  }\n}\n\n// customer\n.customer-review {\n  border: 2px solid #ccc;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px;\n\n  h3 {\n    text-align: center;\n    margin-bottom: 10px;\n    border-bottom: 2px solid #ccc;\n  }\n\n  &__container {\n    margin: 10px 0;\n\n    h4 {\n      font-weight: bold;\n      margin: 5px 0;\n    }\n\n    p {\n      font-size: 14px;\n      margin: 5px 0;\n    }\n  }\n}\n\n// Form review\n.form-review {\n  align-items: center;\n  width: 80%;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 22px;\n  background-color: #f4f4f4;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\n  h3 {\n    margin-bottom: 20px;\n    text-align: center;\n  }\n\n  /* Style the form labels */\n  label {\n    display: block;\n    font-weight: bold;\n    margin-top: 10px;\n  }\n\n  /* Style the input and textarea fields */\n  input, textarea {\n    width: 100%;\n    padding: 10px;\n    margin-top: 5px;\n    margin-bottom: 15px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n  }\n\n  /* Style the submit button */\n  button {\n    display: block;\n    width: 100%;\n    padding: 10px;\n    background-color: $primary-color;\n    color: #fff;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n\n    /* Style the submit button on hover */\n    &:hover {\n      background-color: black;\n    }\n  }\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  background-color: #e81717;\n  display: flex;\n  align-items: center;\n  justify-content: center; \n  position: fixed;\n  border-radius: 50%;\n  bottom: 16px;\n  right: 16px;\n  border: 0; \n  font-size: 18px;\n  cursor: pointer;\n  color: white;\n}\n\n\n.container-loader {\n  height: 100vh;\n  width: 100vw;\n}\n\n.loader {\n  height: 20px;\n  width: 250px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.loader-dot {\n  animation-name: loader;\n  animation-timing-function: ease-in-out;\n  animation-duration: $animation-duration;\n  animation-iteration-count: infinite;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  background-color: black;\n  position: absolute;\n  border: 2px solid white;\n}\n\n@for $i from 1 through length($loader-background-colors) {\n  $color: nth($loader-background-colors, $i);\n  $delay: $i * $animation-delay-step;\n\n  .loader-dot:nth-child(#{$i}) {\n    background-color: $color;\n    animation-delay: $delay;\n  }\n}\n\n.loader-text {\n  position: absolute;\n  top: 200%;\n  left: 0;\n  right: 0;\n  width: 4rem;\n  margin: auto;\n  font-family: \'Quicksand\', sans-serif;\n\n  &:after {\n    content: "Loading";\n    font-weight: bold;\n    animation-name: loading-text;\n    animation-duration: $animation-duration;\n    animation-iteration-count: infinite;\n  }\n}\n\n@keyframes loader {\n  15% {\n    transform: translateX(0);\n  }\n  45% {\n    transform: translateX(230px);\n  }\n  65% {\n    transform: translateX(230px);\n  }\n  95% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes loading-text {\n  0% {\n    content: "Loading";\n  }\n  25% {\n    content: "Loading.";\n  }\n  50% {\n    content: "Loading..";\n  }\n  75% {\n    content: "Loading...";\n  }\n  // 100% {\n  //   content: "Loading...";\n  // }\n}\n\n.hidden{\n  display: none;\n}\n\n#error-notification {\n  text-align: center;\n  font-size: 18px;\n  color: red;\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: \'Quicksand\', sans-serif;\n\n}\n\n.aboutUs {\n  margin-top: 13%;\n  margin-bottom: 2%;\n  text-align: center;\n  h2 {\n    font-size: 1.5rem;\n  }\n  p {\n    margin-top: 10px;\n    font-size: 1rem;\n  }\n  a {\n    display: inline-block;\n  }\n  \n}\n\n.icons {\n  i {\n    color: #333;\n    margin: 0 15px;\n    padding: 15px 0;\n  }\n}\n\n:focus {\n  outline: 2px solid #007bff; \n}\n\n.hide-focus:focus {\n  outline: none;\n}\n\n.skip-link {\n  background-color: #000;\n  position: absolute;\n  display: inline;\n  font-size: 11px;\n  top: -40px;\n  left: 0;\n  color: #fff;\n  padding: 7px;\n  text-decoration: none;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  z-index: 999;\n  &:focus {\n    top: 0;\n    opacity: 1;  \n  }\n}\n\nfooter {\n  background-color: $primary-color;\n  padding: 10px 0;\n  p {\n    color: #fff;\n    text-align: center;\n  } \n}\n\n'],sourceRoot:""}]);const a=o},181:(A,n,t)=>{var e=t(379),i=t.n(e),r=t(795),o=t.n(r),a=t(569),C=t.n(a),d=t(565),p=t.n(d),s=t(216),l=t.n(s),c=t(589),g=t.n(c),m=t(570),x={};x.styleTagTransform=g(),x.setAttributes=p(),x.insert=C().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals},957:(A,n,t)=>{var e=t(379),i=t.n(e),r=t(795),o=t.n(r),a=t(569),C=t.n(a),d=t(565),p=t.n(d),s=t(216),l=t.n(s),c=t(589),g=t.n(c),m=t(90),x={};x.styleTagTransform=g(),x.setAttributes=p(),x.insert=C().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals},873:(A,n,t)=>{var e=t(379),i=t.n(e),r=t(795),o=t.n(r),a=t(569),C=t.n(a),d=t(565),p=t.n(d),s=t(216),l=t.n(s),c=t(589),g=t.n(c),m=t(315),x={};x.styleTagTransform=g(),x.setAttributes=p(),x.insert=C().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=l(),i()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals}},t={};function e(A){var i=t[A];if(void 0!==i)return i.exports;var r=t[A]={id:A,exports:{}};return n[A](r,r.exports,e),r.exports}e.m=n,A=[],e.O=(n,t,i,r)=>{if(!t){var o=1/0;for(p=0;p<A.length;p++){for(var[t,i,r]=A[p],a=!0,C=0;C<t.length;C++)(!1&r||o>=r)&&Object.keys(e.O).every((A=>e.O[A](t[C])))?t.splice(C--,1):(a=!1,r<o&&(o=r));if(a){A.splice(p--,1);var d=i();void 0!==d&&(n=d)}}return n}r=r||0;for(var p=A.length;p>0&&A[p-1][2]>r;p--)A[p]=A[p-1];A[p]=[t,i,r]},e.n=A=>{var n=A&&A.__esModule?()=>A.default:()=>A;return e.d(n,{a:n}),n},e.d=(A,n)=>{for(var t in n)e.o(n,t)&&!e.o(A,t)&&Object.defineProperty(A,t,{enumerable:!0,get:n[t]})},e.o=(A,n)=>Object.prototype.hasOwnProperty.call(A,n),(()=>{var A={400:0};e.O.j=n=>0===A[n];var n=(n,t)=>{var i,r,[o,a,C]=t,d=0;if(o.some((n=>0!==A[n]))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(C)var p=C(e)}for(n&&n(t);d<o.length;d++)r=o[d],e.o(A,r)&&A[r]&&A[r][0](),A[r]=0;return e.O(p)},t=self.webpackChunkmenu_maestro=self.webpackChunkmenu_maestro||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),e.nc=void 0;var i=e.O(void 0,[946,2,495,337,268,695],(()=>e(253)));i=e.O(i)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map