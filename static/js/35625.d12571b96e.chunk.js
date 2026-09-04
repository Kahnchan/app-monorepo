/*! For license information please see 35625.d12571b96e.chunk.js.LICENSE.txt */
!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=(new t.Error).stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="46a3e673-dbe3-4b22-a29b-90afe6a4a130",t._sentryDebugIdIdentifier="sentry-dbid-46a3e673-dbe3-4b22-a29b-90afe6a4a130")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.16.0 (2026090421)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[35625],{943723:(t,a,l)=>{var d=l(859929),u=l(563528),p=l(380181),w=l(270367),g=l(775430);class s{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((t=>this.Z=t))}resume(){this.Z?.(),this.Y=this.Z=void 0}}var b=l(16655);const n=t=>!(0,w.sO)(t)&&"function"==typeof t.then,v=1073741823;class c extends g.Kq{constructor(){super(...arguments),this._$Cwt=v,this._$Cbt=[],this._$CK=new s(this),this._$CX=new i}render(...t){return t.find((t=>!n(t)))??p.c0}update(t,a){const l=this._$Cbt;let d=l.length;this._$Cbt=a;const u=this._$CK,w=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<a.length&&!(t>this._$Cwt);t++){const p=a[t];if(!n(p))return this._$Cwt=t,p;t<d&&p===l[t]||(this._$Cwt=v,d=0,Promise.resolve(p).then((async t=>{for(;w.get();)await w.get();const a=u.deref();if(void 0!==a){const l=a._$Cbt.indexOf(p);l>-1&&l<a._$Cwt&&(a._$Cwt=l,a.setValue(t))}})))}return p.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const m=(0,b.u$)(c);const y=new class CacheUtil{constructor(){this.cache=new Map}set(t,a){this.cache.set(t,a)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var x=l(572649),$=l(416282);const k=d.AH`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var __decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};const C={add:async()=>(await l.e(79984).then(l.bind(l,979984))).addSvg,allWallets:async()=>(await l.e(89399).then(l.bind(l,489399))).allWalletsSvg,arrowBottomCircle:async()=>(await l.e(52705).then(l.bind(l,852705))).arrowBottomCircleSvg,appStore:async()=>(await l.e(91984).then(l.bind(l,991984))).appStoreSvg,apple:async()=>(await l.e(75991).then(l.bind(l,675991))).appleSvg,arrowBottom:async()=>(await l.e(48820).then(l.bind(l,548820))).arrowBottomSvg,arrowLeft:async()=>(await l.e(72406).then(l.bind(l,272406))).arrowLeftSvg,arrowRight:async()=>(await l.e(48737).then(l.bind(l,348737))).arrowRightSvg,arrowTop:async()=>(await l.e(69740).then(l.bind(l,969740))).arrowTopSvg,bank:async()=>(await l.e(85713).then(l.bind(l,985713))).bankSvg,browser:async()=>(await l.e(15991).then(l.bind(l,215991))).browserSvg,card:async()=>(await l.e(40481).then(l.bind(l,240481))).cardSvg,checkmark:async()=>(await l.e(65114).then(l.bind(l,865114))).checkmarkSvg,checkmarkBold:async()=>(await l.e(47572).then(l.bind(l,947572))).checkmarkBoldSvg,chevronBottom:async()=>(await l.e(84018).then(l.bind(l,484018))).chevronBottomSvg,chevronLeft:async()=>(await l.e(30252).then(l.bind(l,530252))).chevronLeftSvg,chevronRight:async()=>(await l.e(8615).then(l.bind(l,908615))).chevronRightSvg,chevronTop:async()=>(await l.e(97966).then(l.bind(l,997966))).chevronTopSvg,chromeStore:async()=>(await l.e(98753).then(l.bind(l,898753))).chromeStoreSvg,clock:async()=>(await l.e(1641).then(l.bind(l,301641))).clockSvg,close:async()=>(await l.e(1595).then(l.bind(l,701595))).closeSvg,compass:async()=>(await l.e(72439).then(l.bind(l,772439))).compassSvg,coinPlaceholder:async()=>(await l.e(11453).then(l.bind(l,111453))).coinPlaceholderSvg,copy:async()=>(await l.e(35366).then(l.bind(l,635366))).copySvg,cursor:async()=>(await l.e(61813).then(l.bind(l,61813))).cursorSvg,cursorTransparent:async()=>(await l.e(69442).then(l.bind(l,69442))).cursorTransparentSvg,desktop:async()=>(await l.e(27503).then(l.bind(l,727503))).desktopSvg,disconnect:async()=>(await l.e(38093).then(l.bind(l,638093))).disconnectSvg,discord:async()=>(await l.e(54703).then(l.bind(l,254703))).discordSvg,etherscan:async()=>(await l.e(28674).then(l.bind(l,728674))).etherscanSvg,extension:async()=>(await l.e(91654).then(l.bind(l,791654))).extensionSvg,externalLink:async()=>(await l.e(72473).then(l.bind(l,672473))).externalLinkSvg,facebook:async()=>(await l.e(12203).then(l.bind(l,612203))).facebookSvg,farcaster:async()=>(await l.e(4470).then(l.bind(l,904470))).farcasterSvg,filters:async()=>(await l.e(88960).then(l.bind(l,888960))).filtersSvg,github:async()=>(await l.e(96244).then(l.bind(l,596244))).githubSvg,google:async()=>(await l.e(94732).then(l.bind(l,194732))).googleSvg,helpCircle:async()=>(await l.e(68597).then(l.bind(l,368597))).helpCircleSvg,image:async()=>(await l.e(13886).then(l.bind(l,413886))).imageSvg,id:async()=>(await l.e(24598).then(l.bind(l,324598))).idSvg,infoCircle:async()=>(await l.e(59496).then(l.bind(l,59496))).infoCircleSvg,lightbulb:async()=>(await l.e(16528).then(l.bind(l,716528))).lightbulbSvg,mail:async()=>(await l.e(37572).then(l.bind(l,337572))).mailSvg,mobile:async()=>(await l.e(6445).then(l.bind(l,306445))).mobileSvg,more:async()=>(await l.e(10354).then(l.bind(l,610354))).moreSvg,networkPlaceholder:async()=>(await l.e(60385).then(l.bind(l,460385))).networkPlaceholderSvg,nftPlaceholder:async()=>(await l.e(19694).then(l.bind(l,519694))).nftPlaceholderSvg,off:async()=>(await l.e(49094).then(l.bind(l,549094))).offSvg,playStore:async()=>(await l.e(52345).then(l.bind(l,752345))).playStoreSvg,plus:async()=>(await l.e(75935).then(l.bind(l,575935))).plusSvg,qrCode:async()=>(await l.e(3756).then(l.bind(l,803756))).qrCodeIcon,recycleHorizontal:async()=>(await l.e(36295).then(l.bind(l,136295))).recycleHorizontalSvg,refresh:async()=>(await l.e(96816).then(l.bind(l,896816))).refreshSvg,search:async()=>(await l.e(30907).then(l.bind(l,130907))).searchSvg,send:async()=>(await l.e(9713).then(l.bind(l,809713))).sendSvg,swapHorizontal:async()=>(await l.e(74640).then(l.bind(l,874640))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await l.e(77155).then(l.bind(l,77155))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await l.e(23595).then(l.bind(l,23595))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await l.e(75728).then(l.bind(l,375728))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await l.e(8302).then(l.bind(l,108302))).swapVerticalSvg,telegram:async()=>(await l.e(84280).then(l.bind(l,884280))).telegramSvg,threeDots:async()=>(await l.e(66696).then(l.bind(l,166696))).threeDotsSvg,twitch:async()=>(await l.e(63724).then(l.bind(l,963724))).twitchSvg,twitter:async()=>(await l.e(28255).then(l.bind(l,628255))).xSvg,twitterIcon:async()=>(await l.e(54497).then(l.bind(l,854497))).twitterIconSvg,verify:async()=>(await l.e(7414).then(l.bind(l,907414))).verifySvg,verifyFilled:async()=>(await l.e(47751).then(l.bind(l,47751))).verifyFilledSvg,wallet:async()=>(await l.e(38622).then(l.bind(l,238622))).walletSvg,walletConnect:async()=>(await l.e(38298).then(l.bind(l,438298))).walletConnectSvg,walletConnectLightBrown:async()=>(await l.e(38298).then(l.bind(l,438298))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await l.e(38298).then(l.bind(l,438298))).walletConnectBrownSvg,walletPlaceholder:async()=>(await l.e(91422).then(l.bind(l,191422))).walletPlaceholderSvg,warningCircle:async()=>(await l.e(7352).then(l.bind(l,707352))).warningCircleSvg,x:async()=>(await l.e(28255).then(l.bind(l,628255))).xSvg,info:async()=>(await l.e(27963).then(l.bind(l,227963))).infoSvg,exclamationTriangle:async()=>(await l.e(13999).then(l.bind(l,236380))).exclamationTriangleSvg,reown:async()=>(await l.e(27366).then(l.bind(l,27366))).reownSvg};let W=class WuiIcon extends d.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,d.qy`${m(async function getSvg(t){if(y.has(t))return y.get(t);const a=(C[t]??C.copy)();return y.set(t,a),a}(this.name),d.qy`<div class="fallback"></div>`)}`}};W.styles=[x.W5,x.ck,k],__decorate([(0,u.MZ)()],W.prototype,"size",void 0),__decorate([(0,u.MZ)()],W.prototype,"name",void 0),__decorate([(0,u.MZ)()],W.prototype,"color",void 0),__decorate([(0,u.MZ)()],W.prototype,"aspectRatio",void 0),W=__decorate([(0,$.E)("wui-icon")],W)},160563:(t,a,l)=>{var d=l(859929),u=l(563528),p=l(572649),w=l(416282);const g=d.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var __decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let b=class WuiImage extends d.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,d.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};b.styles=[p.W5,p.ck,g],__decorate([(0,u.MZ)()],b.prototype,"src",void 0),__decorate([(0,u.MZ)()],b.prototype,"alt",void 0),__decorate([(0,u.MZ)()],b.prototype,"size",void 0),b=__decorate([(0,w.E)("wui-image")],b)},516172:(t,a,l)=>{var d=l(859929),u=l(563528),p=l(572649),w=l(416282);const g=d.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var __decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let b=class WuiLoadingSpinner extends d.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,d.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};b.styles=[p.W5,g],__decorate([(0,u.MZ)()],b.prototype,"color",void 0),__decorate([(0,u.MZ)()],b.prototype,"size",void 0),b=__decorate([(0,w.E)("wui-loading-spinner")],b)},536797:(t,a,l)=>{var d=l(859929),u=l(563528),p=l(79309),w=l(572649),g=l(416282);const b=d.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var __decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let v=class WuiText extends d.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,d.qy`<slot class=${(0,p.H)(t)}></slot>`}};v.styles=[w.W5,b],__decorate([(0,u.MZ)()],v.prototype,"variant",void 0),__decorate([(0,u.MZ)()],v.prototype,"color",void 0),__decorate([(0,u.MZ)()],v.prototype,"align",void 0),__decorate([(0,u.MZ)()],v.prototype,"lineClamp",void 0),v=__decorate([(0,g.E)("wui-text")],v)},167071:(t,a,l)=>{var d=l(859929),u=l(563528),p=(l(943723),l(572649)),w=l(416282);const g=d.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var __decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let b=class WuiIconBox extends d.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,a="lg"===this.size,l="xl"===this.size,u=a?"12%":"16%",p=a?"xxs":l?"s":"3xl",w="gray"===this.background,g="opaque"===this.background,b="accent-100"===this.backgroundColor&&g||"success-100"===this.backgroundColor&&g||"error-100"===this.backgroundColor&&g||"inverse-100"===this.backgroundColor&&g;let v=`var(--wui-color-${this.backgroundColor})`;return b?v=`var(--wui-icon-box-bg-${this.backgroundColor})`:w&&(v=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${v};\n       --local-bg-mix: ${b||w?"100%":u};\n       --local-border-radius: var(--wui-border-radius-${p});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,d.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};b.styles=[p.W5,p.fD,g],__decorate([(0,u.MZ)()],b.prototype,"size",void 0),__decorate([(0,u.MZ)()],b.prototype,"backgroundColor",void 0),__decorate([(0,u.MZ)()],b.prototype,"iconColor",void 0),__decorate([(0,u.MZ)()],b.prototype,"iconSize",void 0),__decorate([(0,u.MZ)()],b.prototype,"background",void 0),__decorate([(0,u.MZ)({type:Boolean})],b.prototype,"border",void 0),__decorate([(0,u.MZ)()],b.prototype,"borderColor",void 0),__decorate([(0,u.MZ)()],b.prototype,"icon",void 0),b=__decorate([(0,w.E)("wui-icon-box")],b)},80204:(t,a,l)=>{var d=l(859929),u=l(563528),p=(l(536797),l(572649)),w=l(416282);const g=d.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var __decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let b=class WuiTag extends d.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"mini-700":"micro-700";return d.qy`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};b.styles=[p.W5,g],__decorate([(0,u.MZ)()],b.prototype,"variant",void 0),__decorate([(0,u.MZ)()],b.prototype,"size",void 0),b=__decorate([(0,w.E)("wui-tag")],b)},110587:(t,a,l)=>{var d=l(859929),u=l(563528),p=l(572649),w=l(55504),g=l(416282);const b=d.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var __decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let v=class WuiFlex extends d.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&w.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&w.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&w.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&w.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&w.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&w.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&w.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&w.Z.getSpacingStyles(this.margin,3)};\n    `,d.qy`<slot></slot>`}};v.styles=[p.W5,b],__decorate([(0,u.MZ)()],v.prototype,"flexDirection",void 0),__decorate([(0,u.MZ)()],v.prototype,"flexWrap",void 0),__decorate([(0,u.MZ)()],v.prototype,"flexBasis",void 0),__decorate([(0,u.MZ)()],v.prototype,"flexGrow",void 0),__decorate([(0,u.MZ)()],v.prototype,"flexShrink",void 0),__decorate([(0,u.MZ)()],v.prototype,"alignItems",void 0),__decorate([(0,u.MZ)()],v.prototype,"justifyContent",void 0),__decorate([(0,u.MZ)()],v.prototype,"columnGap",void 0),__decorate([(0,u.MZ)()],v.prototype,"rowGap",void 0),__decorate([(0,u.MZ)()],v.prototype,"gap",void 0),__decorate([(0,u.MZ)()],v.prototype,"padding",void 0),__decorate([(0,u.MZ)()],v.prototype,"margin",void 0),v=__decorate([(0,g.E)("wui-flex")],v)},135625:(t,a,l)=>{l.r(a),l.d(a,{W3mAllWalletsView:()=>se,W3mConnectingWcBasicView:()=>Tt,W3mDownloadsView:()=>de});var d=l(859929),u=l(563528),p=l(86234),w=l(405069),g=l(896673),b=l(369912),v=l(800655),m=(l(994752),l(31216)),y=l(427374),x=l(105996),$=l(734200),k=(l(943723),l(536797),l(167071),l(572649)),C=l(416282);l(110587),l(160563);const W=d.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var __decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let R=class WuiWalletImage extends d.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return t="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${t});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),d.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?d.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?d.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:d.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};R.styles=[k.fD,k.W5,W],__decorate([(0,u.MZ)()],R.prototype,"size",void 0),__decorate([(0,u.MZ)()],R.prototype,"name",void 0),__decorate([(0,u.MZ)()],R.prototype,"imageSrc",void 0),__decorate([(0,u.MZ)()],R.prototype,"walletIcon",void 0),__decorate([(0,u.MZ)({type:Boolean})],R.prototype,"installed",void 0),__decorate([(0,u.MZ)()],R.prototype,"badgeSize",void 0),R=__decorate([(0,C.E)("wui-wallet-image")],R);const S=d.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var wui_all_wallets_image_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let I=class WuiAllWalletsImage extends d.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<4;return d.qy`${this.walletImages.slice(0,4).map((({src:t,walletName:a})=>d.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${(0,m.J)(a)}
            ></wui-wallet-image>
          `))}
      ${t?[...Array(4-this.walletImages.length)].map((()=>d.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};I.styles=[k.W5,S],wui_all_wallets_image_decorate([(0,u.MZ)({type:Array})],I.prototype,"walletImages",void 0),I=wui_all_wallets_image_decorate([(0,C.E)("wui-all-wallets-image")],I);l(80204);const M=d.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var wui_list_wallet_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let j=class WuiListWallet extends d.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return d.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,m.J)(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?d.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?d.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?d.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:d.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.loading?d.qy`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?d.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?d.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};j.styles=[k.W5,k.fD,M],wui_list_wallet_decorate([(0,u.MZ)({type:Array})],j.prototype,"walletImages",void 0),wui_list_wallet_decorate([(0,u.MZ)()],j.prototype,"imageSrc",void 0),wui_list_wallet_decorate([(0,u.MZ)()],j.prototype,"name",void 0),wui_list_wallet_decorate([(0,u.MZ)()],j.prototype,"tagLabel",void 0),wui_list_wallet_decorate([(0,u.MZ)()],j.prototype,"tagVariant",void 0),wui_list_wallet_decorate([(0,u.MZ)()],j.prototype,"icon",void 0),wui_list_wallet_decorate([(0,u.MZ)()],j.prototype,"walletIcon",void 0),wui_list_wallet_decorate([(0,u.MZ)()],j.prototype,"tabIdx",void 0),wui_list_wallet_decorate([(0,u.MZ)({type:Boolean})],j.prototype,"installed",void 0),wui_list_wallet_decorate([(0,u.MZ)({type:Boolean})],j.prototype,"disabled",void 0),wui_list_wallet_decorate([(0,u.MZ)({type:Boolean})],j.prototype,"showAllWallets",void 0),wui_list_wallet_decorate([(0,u.MZ)({type:Boolean})],j.prototype,"loading",void 0),wui_list_wallet_decorate([(0,u.MZ)({type:String})],j.prototype,"loadingSpinnerColor",void 0),j=wui_list_wallet_decorate([(0,C.E)("wui-list-wallet")],j);var w3m_all_wallets_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let O=class W3mAllWalletsWidget extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.a.state.connectors,this.count=w.N.state.count,this.filteredCount=w.N.state.filteredWallets.length,this.isFetchingRecommendedWallets=w.N.state.isFetchingRecommendedWallets,this.unsubscribe.push(y.a.subscribeKey("connectors",(t=>this.connectors=t)),w.N.subscribeKey("count",(t=>this.count=t)),w.N.subscribeKey("filteredWallets",(t=>this.filteredCount=t.length)),w.N.subscribeKey("isFetchingRecommendedWallets",(t=>this.isFetchingRecommendedWallets=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.find((t=>"walletConnect"===t.id)),{allWallets:a}=g.H.state;if(!t||"HIDE"===a)return null;if("ONLY_MOBILE"===a&&!p.w.isMobile())return null;const l=w.N.state.featured.length,u=this.count+l,b=u<10?u:10*Math.floor(u/10),v=this.filteredCount>0?this.filteredCount:b;let y=`${v}`;return this.filteredCount>0?y=`${this.filteredCount}`:v<u&&(y=`${v}+`),d.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${y}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,m.J)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){x.E.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),$.I.push("AllWallets")}};w3m_all_wallets_widget_decorate([(0,u.MZ)()],O.prototype,"tabIdx",void 0),w3m_all_wallets_widget_decorate([(0,u.wk)()],O.prototype,"connectors",void 0),w3m_all_wallets_widget_decorate([(0,u.wk)()],O.prototype,"count",void 0),w3m_all_wallets_widget_decorate([(0,u.wk)()],O.prototype,"filteredCount",void 0),w3m_all_wallets_widget_decorate([(0,u.wk)()],O.prototype,"isFetchingRecommendedWallets",void 0),O=w3m_all_wallets_widget_decorate([(0,v.EM)("w3m-all-wallets-widget")],O);var E=l(344725),z=l(905840),w3m_connect_announced_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let q=class W3mConnectAnnouncedWidget extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.a.state.connectors,this.unsubscribe.push(y.a.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"ANNOUNCED"===t.type));return t?.length?d.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(z.g.showConnector).map((t=>d.qy`
              <wui-list-wallet
                imageSrc=${(0,m.J)(E.$.getConnectorImage(t))}
                name=${t.name??"Unknown"}
                @click=${()=>this.onConnector(t)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${t.id}`}
                .installed=${!0}
                tabIdx=${(0,m.J)(this.tabIdx)}
              >
              </wui-list-wallet>
            `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){"walletConnect"===t.id?p.w.isMobile()?$.I.push("AllWallets"):$.I.push("ConnectingWalletConnect"):$.I.push("ConnectingExternal",{connector:t})}};w3m_connect_announced_widget_decorate([(0,u.MZ)()],q.prototype,"tabIdx",void 0),w3m_connect_announced_widget_decorate([(0,u.wk)()],q.prototype,"connectors",void 0),q=w3m_connect_announced_widget_decorate([(0,v.EM)("w3m-connect-announced-widget")],q);var T=l(942131),w3m_connect_custom_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Z=class W3mConnectCustomWidget extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.a.state.connectors,this.loading=!1,this.unsubscribe.push(y.a.subscribeKey("connectors",(t=>this.connectors=t))),p.w.isTelegram()&&p.w.isIos()&&(this.loading=!T.x.state.wcUri,this.unsubscribe.push(T.x.subscribeKey("wcUri",(t=>this.loading=!t))))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const{customWallets:t}=g.H.state;if(!t?.length)return this.style.cssText="display: none",null;const a=this.filterOutDuplicateWallets(t);return d.qy`<wui-flex flexDirection="column" gap="xs">
      ${a.map((t=>d.qy`
          <wui-list-wallet
            imageSrc=${(0,m.J)(E.$.getWalletImage(t))}
            name=${t.name??"Unknown"}
            @click=${()=>this.onConnectWallet(t)}
            data-testid=${`wallet-selector-${t.id}`}
            tabIdx=${(0,m.J)(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(t){const a=b.i.getRecentWallets(),l=this.connectors.map((t=>t.info?.rdns)).filter(Boolean),d=a.map((t=>t.rdns)).filter(Boolean),u=l.concat(d);if(u.includes("io.metamask.mobile")&&p.w.isMobile()){const t=u.indexOf("io.metamask.mobile");u[t]="io.metamask"}return t.filter((t=>!u.includes(String(t?.rdns))))}onConnectWallet(t){this.loading||$.I.push("ConnectingWalletConnect",{wallet:t})}};w3m_connect_custom_widget_decorate([(0,u.MZ)()],Z.prototype,"tabIdx",void 0),w3m_connect_custom_widget_decorate([(0,u.wk)()],Z.prototype,"connectors",void 0),w3m_connect_custom_widget_decorate([(0,u.wk)()],Z.prototype,"loading",void 0),Z=w3m_connect_custom_widget_decorate([(0,v.EM)("w3m-connect-custom-widget")],Z);var P=l(42732),w3m_connect_external_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let A=class W3mConnectExternalWidget extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.a.state.connectors,this.unsubscribe.push(y.a.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"EXTERNAL"===t.type)).filter(z.g.showConnector).filter((t=>t.id!==P.o.CONNECTOR_ID.COINBASE_SDK));return t?.length?d.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>d.qy`
            <wui-list-wallet
              imageSrc=${(0,m.J)(E.$.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              data-testid=${`wallet-selector-external-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,m.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){$.I.push("ConnectingExternal",{connector:t})}};w3m_connect_external_widget_decorate([(0,u.MZ)()],A.prototype,"tabIdx",void 0),w3m_connect_external_widget_decorate([(0,u.wk)()],A.prototype,"connectors",void 0),A=w3m_connect_external_widget_decorate([(0,v.EM)("w3m-connect-external-widget")],A);var w3m_connect_featured_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let L=class W3mConnectFeaturedWidget extends d.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?d.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map((t=>d.qy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${(0,m.J)(E.$.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,m.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){y.a.selectWalletConnector(t)}};w3m_connect_featured_widget_decorate([(0,u.MZ)()],L.prototype,"tabIdx",void 0),w3m_connect_featured_widget_decorate([(0,u.MZ)()],L.prototype,"wallets",void 0),L=w3m_connect_featured_widget_decorate([(0,v.EM)("w3m-connect-featured-widget")],L);var w3m_connect_injected_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let D=class W3mConnectInjectedWidget extends d.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){const t=this.connectors.filter(z.g.showConnector);return 0===t.length?(this.style.cssText="display: none",null):d.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>d.qy`
            <wui-list-wallet
              imageSrc=${(0,m.J)(E.$.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,m.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnector(t){y.a.setActiveConnector(t),$.I.push("ConnectingExternal",{connector:t})}};w3m_connect_injected_widget_decorate([(0,u.MZ)()],D.prototype,"tabIdx",void 0),w3m_connect_injected_widget_decorate([(0,u.MZ)()],D.prototype,"connectors",void 0),D=w3m_connect_injected_widget_decorate([(0,v.EM)("w3m-connect-injected-widget")],D);var w3m_connect_multi_chain_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let _=class W3mConnectMultiChainWidget extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.a.state.connectors,this.unsubscribe.push(y.a.subscribeKey("connectors",(t=>this.connectors=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.connectors.filter((t=>"MULTI_CHAIN"===t.type&&"WalletConnect"!==t.name));return t?.length?d.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>d.qy`
            <wui-list-wallet
              imageSrc=${(0,m.J)(E.$.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${(0,m.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){y.a.setActiveConnector(t),$.I.push("ConnectingMultiChain")}};w3m_connect_multi_chain_widget_decorate([(0,u.MZ)()],_.prototype,"tabIdx",void 0),w3m_connect_multi_chain_widget_decorate([(0,u.wk)()],_.prototype,"connectors",void 0),_=w3m_connect_multi_chain_widget_decorate([(0,v.EM)("w3m-connect-multi-chain-widget")],_);var B=l(18788),H=l(876262),w3m_connect_recent_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let N=class W3mConnectRecentWidget extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.a.state.connectors,this.loading=!1,this.unsubscribe.push(y.a.subscribeKey("connectors",(t=>this.connectors=t))),p.w.isTelegram()&&p.w.isIos()&&(this.loading=!T.x.state.wcUri,this.unsubscribe.push(T.x.subscribeKey("wcUri",(t=>this.loading=!t))))}render(){const t=b.i.getRecentWallets().filter((t=>!H.A.isExcluded(t))).filter((t=>!this.hasWalletConnector(t))).filter((t=>this.isWalletCompatibleWithCurrentChain(t)));return t.length?d.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((t=>d.qy`
            <wui-list-wallet
              imageSrc=${(0,m.J)(E.$.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,m.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||y.a.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some((a=>a.id===t.id||a.name===t.name))}isWalletCompatibleWithCurrentChain(t){const a=B.W.state.activeChain;return!a||!t.chains||t.chains.some((t=>{const l=t.split(":")[0];return a===l}))}};w3m_connect_recent_widget_decorate([(0,u.MZ)()],N.prototype,"tabIdx",void 0),w3m_connect_recent_widget_decorate([(0,u.wk)()],N.prototype,"connectors",void 0),w3m_connect_recent_widget_decorate([(0,u.wk)()],N.prototype,"loading",void 0),N=w3m_connect_recent_widget_decorate([(0,v.EM)("w3m-connect-recent-widget")],N);var w3m_connect_recommended_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let U=class W3mConnectRecommendedWidget extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,p.w.isTelegram()&&p.w.isIos()&&(this.loading=!T.x.state.wcUri,this.unsubscribe.push(T.x.subscribeKey("wcUri",(t=>this.loading=!t))))}render(){const{connectors:t}=y.a.state,{customWallets:a,featuredWalletIds:l}=g.H.state,u=b.i.getRecentWallets(),p=t.find((t=>"walletConnect"===t.id)),w=t.filter((t=>"INJECTED"===t.type||"ANNOUNCED"===t.type||"MULTI_CHAIN"===t.type)).filter((t=>"Browser Wallet"!==t.name));if(!p)return null;if(l||a||!this.wallets.length)return this.style.cssText="display: none",null;const v=w.length+u.length,x=Math.max(0,2-v),$=H.A.filterOutDuplicateWallets(this.wallets).slice(0,x);return $.length?d.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${$.map((t=>d.qy`
            <wui-list-wallet
              imageSrc=${(0,m.J)(E.$.getWalletImage(t))}
              name=${t?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${(0,m.J)(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const a=y.a.getConnector(t.id,t.rdns);a?$.I.push("ConnectingExternal",{connector:a}):$.I.push("ConnectingWalletConnect",{wallet:t})}};w3m_connect_recommended_widget_decorate([(0,u.MZ)()],U.prototype,"tabIdx",void 0),w3m_connect_recommended_widget_decorate([(0,u.MZ)()],U.prototype,"wallets",void 0),w3m_connect_recommended_widget_decorate([(0,u.wk)()],U.prototype,"loading",void 0),U=w3m_connect_recommended_widget_decorate([(0,v.EM)("w3m-connect-recommended-widget")],U);var F=l(634861),w3m_connect_walletconnect_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let J=class W3mConnectWalletConnectWidget extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.a.state.connectors,this.connectorImages=F.j.state.connectorImages,this.unsubscribe.push(y.a.subscribeKey("connectors",(t=>this.connectors=t)),F.j.subscribeKey("connectorImages",(t=>this.connectorImages=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){if(p.w.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find((t=>"walletConnect"===t.id));if(!t)return this.style.cssText="display: none",null;const a=t.imageUrl||this.connectorImages[t?.imageId??""];return d.qy`
      <wui-list-wallet
        imageSrc=${(0,m.J)(a)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,m.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){y.a.setActiveConnector(t),$.I.push("ConnectingWalletConnect")}};w3m_connect_walletconnect_widget_decorate([(0,u.MZ)()],J.prototype,"tabIdx",void 0),w3m_connect_walletconnect_widget_decorate([(0,u.wk)()],J.prototype,"connectors",void 0),w3m_connect_walletconnect_widget_decorate([(0,u.wk)()],J.prototype,"connectorImages",void 0),J=w3m_connect_walletconnect_widget_decorate([(0,v.EM)("w3m-connect-walletconnect-widget")],J);const V=d.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var w3m_connector_list_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let K=class W3mConnectorList extends d.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.a.state.connectors,this.recommended=w.N.state.recommended,this.featured=w.N.state.featured,this.unsubscribe.push(y.a.subscribeKey("connectors",(t=>this.connectors=t)),w.N.subscribeKey("recommended",(t=>this.recommended=t)),w.N.subscribeKey("featured",(t=>this.featured=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return d.qy`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:a,announced:l,injected:u,multiChain:p,recommended:w,featured:g,external:b}=z.g.getConnectorsByType(this.connectors,this.recommended,this.featured);return z.g.getConnectorTypeOrder({custom:t,recent:a,announced:l,injected:u,multiChain:p,recommended:w,featured:g,external:b}).map((t=>{switch(t){case"injected":return d.qy`
            ${p.length?d.qy`<w3m-connect-multi-chain-widget
                  tabIdx=${(0,m.J)(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${l.length?d.qy`<w3m-connect-announced-widget
                  tabIdx=${(0,m.J)(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${u.length?d.qy`<w3m-connect-injected-widget
                  .connectors=${u}
                  tabIdx=${(0,m.J)(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return d.qy`<w3m-connect-walletconnect-widget
            tabIdx=${(0,m.J)(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return d.qy`<w3m-connect-recent-widget
            tabIdx=${(0,m.J)(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return d.qy`<w3m-connect-featured-widget
            .wallets=${g}
            tabIdx=${(0,m.J)(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return d.qy`<w3m-connect-custom-widget
            tabIdx=${(0,m.J)(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return d.qy`<w3m-connect-external-widget
            tabIdx=${(0,m.J)(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return d.qy`<w3m-connect-recommended-widget
            .wallets=${w}
            tabIdx=${(0,m.J)(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${t}`),null}}))}};K.styles=V,w3m_connector_list_decorate([(0,u.MZ)()],K.prototype,"tabIdx",void 0),w3m_connector_list_decorate([(0,u.wk)()],K.prototype,"connectors",void 0),w3m_connector_list_decorate([(0,u.wk)()],K.prototype,"recommended",void 0),w3m_connector_list_decorate([(0,u.wk)()],K.prototype,"featured",void 0),K=w3m_connector_list_decorate([(0,v.EM)("w3m-connector-list")],K);var G=l(195925),X=l(394907);const Y=d.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var wui_tabs_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Q=class WuiTabs extends d.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((t,a)=>{const l=a===this.activeTab;return d.qy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(a)}
          data-active=${l}
          data-testid="tab-${t.label?.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(t){return t.icon?d.qy`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,a){const l=this.buttons[this.activeTab],d=this.buttons[t],u=l?.querySelector("wui-text"),p=d?.querySelector("wui-text"),w=d?.getBoundingClientRect(),g=p?.getBoundingClientRect();l&&u&&!a&&t!==this.activeTab&&(u.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),l.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),d&&w&&g&&p&&(t!==this.activeTab||a)&&(this.localTabWidth=`${Math.round(w.width+g.width)+6}px`,d.animate([{width:`${w.width+g.width}px`}],{duration:a?0:500,fill:"forwards",easing:"ease"}),p.animate([{opacity:1}],{duration:a?0:125,delay:a?0:200,fill:"forwards",easing:"ease"}))}};Q.styles=[k.W5,k.fD,Y],wui_tabs_decorate([(0,u.MZ)({type:Array})],Q.prototype,"tabs",void 0),wui_tabs_decorate([(0,u.MZ)()],Q.prototype,"onTabChange",void 0),wui_tabs_decorate([(0,u.MZ)({type:Array})],Q.prototype,"buttons",void 0),wui_tabs_decorate([(0,u.MZ)({type:Boolean})],Q.prototype,"disabled",void 0),wui_tabs_decorate([(0,u.MZ)()],Q.prototype,"localTabWidth",void 0),wui_tabs_decorate([(0,u.wk)()],Q.prototype,"activeTab",void 0),wui_tabs_decorate([(0,u.wk)()],Q.prototype,"isDense",void 0),Q=wui_tabs_decorate([(0,C.E)("wui-tabs")],Q);var w3m_connecting_header_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let tt=class W3mConnectingHeader extends d.WF{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((t=>t()))}render(){const t=this.generateTabs();return d.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map((t=>"browser"===t?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===t?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===t?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===t?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===t?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=t.map((({platform:t})=>t)),t}onTabChange(t){const a=this.platformTabs[t];a&&this.onSelectPlatfrom?.(a)}};w3m_connecting_header_decorate([(0,u.MZ)({type:Array})],tt.prototype,"platforms",void 0),w3m_connecting_header_decorate([(0,u.MZ)()],tt.prototype,"onSelectPlatfrom",void 0),tt=w3m_connecting_header_decorate([(0,v.EM)("w3m-connecting-header")],tt);var et=l(121096);l(516172);const it=d.AH`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var wui_button_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};const ot={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},rt={lg:"paragraph-600",md:"small-600"},nt={lg:"md",md:"md"};let at=class WuiButton extends d.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const t=this.textVariant??rt[this.size];return d.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=nt[this.size],a=this.disabled?ot.disabled:ot[this.variant];return d.qy`<wui-loading-spinner color=${a} size=${t}></wui-loading-spinner>`}return d.qy``}};at.styles=[k.W5,k.fD,it],wui_button_decorate([(0,u.MZ)()],at.prototype,"size",void 0),wui_button_decorate([(0,u.MZ)({type:Boolean})],at.prototype,"disabled",void 0),wui_button_decorate([(0,u.MZ)({type:Boolean})],at.prototype,"fullWidth",void 0),wui_button_decorate([(0,u.MZ)({type:Boolean})],at.prototype,"loading",void 0),wui_button_decorate([(0,u.MZ)()],at.prototype,"variant",void 0),wui_button_decorate([(0,u.MZ)({type:Boolean})],at.prototype,"hasIconLeft",void 0),wui_button_decorate([(0,u.MZ)({type:Boolean})],at.prototype,"hasIconRight",void 0),wui_button_decorate([(0,u.MZ)()],at.prototype,"borderRadius",void 0),wui_button_decorate([(0,u.MZ)()],at.prototype,"textVariant",void 0),at=wui_button_decorate([(0,C.E)("wui-button")],at);l(535550);const st=d.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var wui_link_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let lt=class WuiLink extends d.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return d.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,m.J)(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};lt.styles=[k.W5,k.fD,st],wui_link_decorate([(0,u.MZ)()],lt.prototype,"tabIdx",void 0),wui_link_decorate([(0,u.MZ)({type:Boolean})],lt.prototype,"disabled",void 0),wui_link_decorate([(0,u.MZ)()],lt.prototype,"color",void 0),lt=wui_link_decorate([(0,C.E)("wui-link")],lt);const ct=d.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var wui_loading_thumbnail_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let dt=class WuiLoadingThumbnail extends d.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,a=36-t,l=116+a,u=245+a,p=360+1.75*a;return d.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${l} ${u}"
          stroke-dashoffset=${p}
        />
      </svg>
    `}};dt.styles=[k.W5,ct],wui_loading_thumbnail_decorate([(0,u.MZ)({type:Number})],dt.prototype,"radius",void 0),dt=wui_loading_thumbnail_decorate([(0,C.E)("wui-loading-thumbnail")],dt);l(136408);const ut=d.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var wui_chip_button_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let ht=class WuiChipButton extends d.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t="sm"===this.size?"small-600":"paragraph-600";return d.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?d.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};ht.styles=[k.W5,k.fD,ut],wui_chip_button_decorate([(0,u.MZ)()],ht.prototype,"variant",void 0),wui_chip_button_decorate([(0,u.MZ)()],ht.prototype,"imageSrc",void 0),wui_chip_button_decorate([(0,u.MZ)({type:Boolean})],ht.prototype,"disabled",void 0),wui_chip_button_decorate([(0,u.MZ)()],ht.prototype,"icon",void 0),wui_chip_button_decorate([(0,u.MZ)()],ht.prototype,"size",void 0),wui_chip_button_decorate([(0,u.MZ)()],ht.prototype,"text",void 0),ht=wui_chip_button_decorate([(0,C.E)("wui-chip-button")],ht);const pt=d.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wui_cta_button_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let wt=class WuiCtaButton extends d.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return d.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};wt.styles=[k.W5,k.fD,pt],wui_cta_button_decorate([(0,u.MZ)({type:Boolean})],wt.prototype,"disabled",void 0),wui_cta_button_decorate([(0,u.MZ)()],wt.prototype,"label",void 0),wui_cta_button_decorate([(0,u.MZ)()],wt.prototype,"buttonLabel",void 0),wt=wui_cta_button_decorate([(0,C.E)("wui-cta-button")],wt);const gt=d.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var w3m_mobile_download_links_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let bt=class W3mMobileDownloadLinks extends d.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:a,play_store:l,chrome_store:u,homepage:w}=this.wallet,g=p.w.isMobile(),b=p.w.isIos(),m=p.w.isAndroid(),y=[a,l,w,u].filter(Boolean).length>1,x=v.Zv.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return y&&!g?d.qy`
        <wui-cta-button
          label=${`Don't have ${x}?`}
          buttonLabel="Get"
          @click=${()=>$.I.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!y&&w?d.qy`
        <wui-cta-button
          label=${`Don't have ${x}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:a&&b?d.qy`
        <wui-cta-button
          label=${`Don't have ${x}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:l&&m?d.qy`
        <wui-cta-button
          label=${`Don't have ${x}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&p.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&p.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&p.w.openHref(this.wallet.homepage,"_blank")}};bt.styles=[gt],w3m_mobile_download_links_decorate([(0,u.MZ)({type:Object})],bt.prototype,"wallet",void 0),bt=w3m_mobile_download_links_decorate([(0,v.EM)("w3m-mobile-download-links")],bt);const ft=d.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var w3m_connecting_widget_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};class W3mConnectingWidget extends d.WF{constructor(){super(),this.wallet=$.I.state.data?.wallet,this.connector=$.I.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=E.$.getWalletImage(this.wallet)??E.$.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=T.x.state.wcUri,this.error=T.x.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(T.x.subscribeKey("wcUri",(t=>{this.uri=t,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),T.x.subscribeKey("wcError",(t=>this.error=t))),(p.w.isTelegram()||p.w.isSafari())&&p.w.isIos()&&T.x.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),T.x.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let a=`Continue in ${this.name}`;return this.error&&(a="Connection declined"),d.qy`
      <wui-flex
        data-error=${(0,m.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,m.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${a}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?d.qy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?d.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const t=this.shadowRoot?.querySelector("wui-button");t?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){T.x.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){const t=et.W.state.themeVariables["--w3m-border-radius-master"],a=t?parseInt(t.replace("px",""),10):4;return d.qy`<wui-loading-thumbnail radius=${9*a}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(p.w.copyToClopboard(this.uri),X.P.showSuccess("Link copied"))}catch{X.P.showError("Failed to copy")}}}W3mConnectingWidget.styles=ft,w3m_connecting_widget_decorate([(0,u.wk)()],W3mConnectingWidget.prototype,"isRetrying",void 0),w3m_connecting_widget_decorate([(0,u.wk)()],W3mConnectingWidget.prototype,"uri",void 0),w3m_connecting_widget_decorate([(0,u.wk)()],W3mConnectingWidget.prototype,"error",void 0),w3m_connecting_widget_decorate([(0,u.wk)()],W3mConnectingWidget.prototype,"ready",void 0),w3m_connecting_widget_decorate([(0,u.wk)()],W3mConnectingWidget.prototype,"showRetry",void 0),w3m_connecting_widget_decorate([(0,u.wk)()],W3mConnectingWidget.prototype,"secondaryBtnLabel",void 0),w3m_connecting_widget_decorate([(0,u.wk)()],W3mConnectingWidget.prototype,"secondaryLabel",void 0),w3m_connecting_widget_decorate([(0,u.wk)()],W3mConnectingWidget.prototype,"isLoading",void 0),w3m_connecting_widget_decorate([(0,u.MZ)({type:Boolean})],W3mConnectingWidget.prototype,"isMobile",void 0),w3m_connecting_widget_decorate([(0,u.MZ)()],W3mConnectingWidget.prototype,"onRetry",void 0);var w3m_connecting_wc_browser_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let vt=class W3mConnectingWcBrowser extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),x.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=y.a.state,a=t.find((t=>"ANNOUNCED"===t.type&&t.info?.rdns===this.wallet?.rdns||"INJECTED"===t.type||t.name===this.wallet?.name));if(!a)throw new Error("w3m-connecting-wc-browser: No connector found");await T.x.connectExternal(a,a.chain),G.W.close(),x.E.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(t){x.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),this.error=!0}}};vt=w3m_connecting_wc_browser_decorate([(0,v.EM)("w3m-connecting-wc-browser")],vt);var w3m_connecting_wc_desktop_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let mt=class W3mConnectingWcDesktop extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),x.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:a}=this.wallet,{redirect:l,href:d}=p.w.formatNativeUrl(t,this.uri);T.x.setWcLinking({name:a,href:d}),T.x.setRecentWallet(this.wallet),p.w.openHref(l,"_blank")}catch{this.error=!0}}};mt=w3m_connecting_wc_desktop_decorate([(0,v.EM)("w3m-connecting-wc-desktop")],mt);var yt=l(741644),w3m_connecting_wc_mobile_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let xt=class W3mConnectingWcMobile extends W3mConnectingWidget{constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=g.H.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,link_mode:a,name:l}=this.wallet,{redirect:d,redirectUniversalLink:u,href:w}=p.w.formatNativeUrl(t,this.uri,a);this.redirectDeeplink=d,this.redirectUniversalLink=u,this.target=p.w.isIframe()?"_top":"_self",T.x.setWcLinking({name:l,href:w}),T.x.setRecentWallet(this.wallet),this.preferUniversalLinks&&this.redirectUniversalLink?p.w.openHref(this.redirectUniversalLink,this.target):p.w.openHref(this.redirectDeeplink,this.target)}catch(t){x.E.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=yt.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(T.x.subscribeKey("wcUri",(()=>{this.onHandleURI()}))),x.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){T.x.setWcError(!1),this.onConnect?.()}};w3m_connecting_wc_mobile_decorate([(0,u.wk)()],xt.prototype,"redirectDeeplink",void 0),w3m_connecting_wc_mobile_decorate([(0,u.wk)()],xt.prototype,"redirectUniversalLink",void 0),w3m_connecting_wc_mobile_decorate([(0,u.wk)()],xt.prototype,"target",void 0),w3m_connecting_wc_mobile_decorate([(0,u.wk)()],xt.prototype,"preferUniversalLinks",void 0),w3m_connecting_wc_mobile_decorate([(0,u.wk)()],xt.prototype,"isLoading",void 0),xt=w3m_connecting_wc_mobile_decorate([(0,v.EM)("w3m-connecting-wc-mobile")],xt);var $t=l(966484);function isAdjecentDots(t,a,l){if(t===a)return!1;return(t-a<0?a-t:t-a)<=l+.1}const kt={generate({uri:t,size:a,logoSize:l,dotColor:u="#141414"}){const p=[],w=function getMatrix(t,a){const l=Array.prototype.slice.call($t.create(t,{errorCorrectionLevel:a}).modules.data,0),d=Math.sqrt(l.length);return l.reduce(((t,a,l)=>(l%d==0?t.push([a]):t[t.length-1].push(a))&&t),[])}(t,"Q"),g=a/w.length,b=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];b.forEach((({x:t,y:a})=>{const l=(w.length-7)*g*t,v=(w.length-7)*g*a,m=.45;for(let t=0;t<b.length;t+=1){const a=g*(7-2*t);p.push(d.JW`
            <rect
              fill=${2===t?u:"transparent"}
              width=${0===t?a-5:a}
              rx= ${0===t?(a-5)*m:a*m}
              ry= ${0===t?(a-5)*m:a*m}
              stroke=${u}
              stroke-width=${0===t?5:0}
              height=${0===t?a-5:a}
              x= ${0===t?v+g*t+2.5:v+g*t}
              y= ${0===t?l+g*t+2.5:l+g*t}
            />
          `)}}));const v=Math.floor((l+25)/g),m=w.length/2-v/2,y=w.length/2+v/2-1,x=[];w.forEach(((t,a)=>{t.forEach(((t,l)=>{if(w[a][l]&&!(a<7&&l<7||a>w.length-8&&l<7||a<7&&l>w.length-8||a>m&&a<y&&l>m&&l<y)){const t=a*g+g/2,d=l*g+g/2;x.push([t,d])}}))}));const $={};return x.forEach((([t,a])=>{$[t]?$[t]?.push(a):$[t]=[a]})),Object.entries($).map((([t,a])=>{const l=a.filter((t=>a.every((a=>!isAdjecentDots(t,a,g)))));return[Number(t),l]})).forEach((([t,a])=>{a.forEach((a=>{p.push(d.JW`<circle cx=${t} cy=${a} fill=${u} r=${g/2.5} />`)}))})),Object.entries($).filter((([t,a])=>a.length>1)).map((([t,a])=>{const l=a.filter((t=>a.some((a=>isAdjecentDots(t,a,g)))));return[Number(t),l]})).map((([t,a])=>{a.sort(((t,a)=>t<a?-1:1));const l=[];for(const t of a){const a=l.find((a=>a.some((a=>isAdjecentDots(t,a,g)))));a?a.push(t):l.push([t])}return[t,l.map((t=>[t[0],t[t.length-1]]))]})).forEach((([t,a])=>{a.forEach((([a,l])=>{p.push(d.JW`
              <line
                x1=${t}
                x2=${t}
                y1=${a}
                y2=${l}
                stroke=${u}
                stroke-width=${g/1.25}
                stroke-linecap="round"
              />
            `)}))})),p}},Ct=d.AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var wui_qr_code_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Wt=class WuiQrCode extends d.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`\n     --local-size: ${this.size}px;\n     --local-icon-color: ${this.color??"#3396ff"}\n    `,d.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t="light"===this.theme?this.size:this.size-32;return d.JW`
      <svg height=${t} width=${t}>
        ${kt.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?d.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?d.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:d.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Wt.styles=[k.W5,Ct],wui_qr_code_decorate([(0,u.MZ)()],Wt.prototype,"uri",void 0),wui_qr_code_decorate([(0,u.MZ)({type:Number})],Wt.prototype,"size",void 0),wui_qr_code_decorate([(0,u.MZ)()],Wt.prototype,"theme",void 0),wui_qr_code_decorate([(0,u.MZ)()],Wt.prototype,"imageSrc",void 0),wui_qr_code_decorate([(0,u.MZ)()],Wt.prototype,"alt",void 0),wui_qr_code_decorate([(0,u.MZ)()],Wt.prototype,"color",void 0),wui_qr_code_decorate([(0,u.MZ)({type:Boolean})],Wt.prototype,"arenaClear",void 0),wui_qr_code_decorate([(0,u.MZ)({type:Boolean})],Wt.prototype,"farcaster",void 0),Wt=wui_qr_code_decorate([(0,C.E)("wui-qr-code")],Wt);const Rt=d.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var wui_shimmer_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let St=class WuiShimmer extends d.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,d.qy`<slot></slot>`}};St.styles=[Rt],wui_shimmer_decorate([(0,u.MZ)()],St.prototype,"width",void 0),wui_shimmer_decorate([(0,u.MZ)()],St.prototype,"height",void 0),wui_shimmer_decorate([(0,u.MZ)()],St.prototype,"borderRadius",void 0),wui_shimmer_decorate([(0,u.MZ)()],St.prototype,"variant",void 0),St=wui_shimmer_decorate([(0,C.E)("wui-shimmer")],St);const It=d.AH`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;var wui_ux_by_reown_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Mt=class WuiUxByReown extends d.WF{render(){return d.qy`
      <a
        data-testid="ux-branding-reown"
        href=${"https://reown.com"}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};Mt.styles=[k.W5,k.fD,It],Mt=wui_ux_by_reown_decorate([(0,C.E)("wui-ux-by-reown")],Mt);const jt=d.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var w3m_connecting_wc_qrcode_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Ot=class W3mConnectingWcQrcode extends W3mConnectingWidget{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),x.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach((t=>t())),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),d.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,a=this.wallet?this.wallet.name:void 0;return T.x.setWcLinking(void 0),T.x.setRecentWallet(this.wallet),d.qy` <wui-qr-code
      size=${t}
      theme=${et.W.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,m.J)(E.$.getWalletImage(this.wallet))}
      color=${(0,m.J)(et.W.state.themeVariables["--w3m-qr-color"])}
      alt=${(0,m.J)(a)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return d.qy`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Ot.styles=jt,Ot=w3m_connecting_wc_qrcode_decorate([(0,v.EM)("w3m-connecting-wc-qrcode")],Ot);var w3m_connecting_wc_unsupported_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Et=class W3mConnectingWcUnsupported extends d.WF{constructor(){if(super(),this.wallet=$.I.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");x.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return d.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,m.J)(E.$.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Et=w3m_connecting_wc_unsupported_decorate([(0,v.EM)("w3m-connecting-wc-unsupported")],Et);var w3m_connecting_wc_web_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let zt=class W3mConnectingWcWeb extends W3mConnectingWidget{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=yt.oU.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(T.x.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),x.E.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:a}=this.wallet,{redirect:l,href:d}=p.w.formatUniversalUrl(t,this.uri);T.x.setWcLinking({name:a,href:d}),T.x.setRecentWallet(this.wallet),p.w.openHref(l,"_blank")}catch{this.error=!0}}};w3m_connecting_wc_web_decorate([(0,u.wk)()],zt.prototype,"isLoading",void 0),zt=w3m_connecting_wc_web_decorate([(0,v.EM)("w3m-connecting-wc-web")],zt);var w3m_connecting_wc_view_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let qt=class W3mConnectingWcView extends d.WF{constructor(){super(),this.wallet=$.I.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(g.H.state.siwx),this.remoteFeatures=g.H.state.remoteFeatures,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(g.H.subscribeKey("remoteFeatures",(t=>this.remoteFeatures=t)))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return d.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?d.qy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(t=!1){if("browser"!==this.platform&&(!g.H.state.manualWCControl||t))try{const{wcPairingExpiry:a,status:l}=T.x.state;(t||g.H.state.enableEmbedded||p.w.isPairingExpired(a)||"connecting"===l)&&(await T.x.connectWalletConnect(),this.isSiwxEnabled||G.W.close())}catch(t){x.E.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:t?.message??"Unknown"}}),T.x.setWcError(!0),X.P.showError(t.message??"Connection error"),T.x.resetWcConnection(),$.I.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:t,desktop_link:a,webapp_link:l,injected:d,rdns:u}=this.wallet,w=d?.map((({injected_id:t})=>t)).filter(Boolean),b=[...u?[u]:w??[]],v=!g.H.state.isUniversalProvider&&b.length,m=t,y=l,x=T.x.checkInstalled(b),$=v&&x,k=a&&!p.w.isMobile();$&&!B.W.state.noAdapters&&this.platforms.push("browser"),m&&this.platforms.push(p.w.isMobile()?"mobile":"qrcode"),y&&this.platforms.push("web"),k&&this.platforms.push("desktop"),$||!v||B.W.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return d.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return d.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return d.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return d.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return d.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return d.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?d.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){const a=this.shadowRoot?.querySelector("div");a&&(await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};w3m_connecting_wc_view_decorate([(0,u.wk)()],qt.prototype,"platform",void 0),w3m_connecting_wc_view_decorate([(0,u.wk)()],qt.prototype,"platforms",void 0),w3m_connecting_wc_view_decorate([(0,u.wk)()],qt.prototype,"isSiwxEnabled",void 0),w3m_connecting_wc_view_decorate([(0,u.wk)()],qt.prototype,"remoteFeatures",void 0),qt=w3m_connecting_wc_view_decorate([(0,v.EM)("w3m-connecting-wc-view")],qt);var w3m_connecting_wc_basic_view_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Tt=class W3mConnectingWcBasicView extends d.WF{constructor(){super(...arguments),this.isMobile=p.w.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:a}=w.N.state,{customWallets:l}=g.H.state,u=b.i.getRecentWallets(),p=t.length||a.length||l?.length||u.length;return d.qy`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${p?d.qy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return d.qy`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};w3m_connecting_wc_basic_view_decorate([(0,u.wk)()],Tt.prototype,"isMobile",void 0),Tt=w3m_connecting_wc_basic_view_decorate([(0,v.EM)("w3m-connecting-wc-basic-view")],Tt);var Zt=l(66995);const Pt=d.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`;var wui_switch_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let At=class WuiSwitch extends d.WF{constructor(){super(...arguments),this.inputElementRef=(0,Zt._)(),this.checked=void 0}render(){return d.qy`
      <label>
        <input
          ${(0,Zt.K)(this.inputElementRef)}
          type="checkbox"
          ?checked=${(0,m.J)(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("switchChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};At.styles=[k.W5,k.fD,k.ck,Pt],wui_switch_decorate([(0,u.MZ)({type:Boolean})],At.prototype,"checked",void 0),At=wui_switch_decorate([(0,C.E)("wui-switch")],At);const Lt=d.AH`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var wui_certified_switch_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Dt=class WuiCertifiedSwitch extends d.WF{constructor(){super(...arguments),this.checked=void 0}render(){return d.qy`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${(0,m.J)(this.checked)}></wui-switch>
      </button>
    `}};Dt.styles=[k.W5,k.fD,Lt],wui_certified_switch_decorate([(0,u.MZ)({type:Boolean})],Dt.prototype,"checked",void 0),Dt=wui_certified_switch_decorate([(0,C.E)("wui-certified-switch")],Dt);const _t=d.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var wui_input_element_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Bt=class WuiInputElement extends d.WF{constructor(){super(...arguments),this.icon="copy"}render(){return d.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Bt.styles=[k.W5,k.fD,_t],wui_input_element_decorate([(0,u.MZ)()],Bt.prototype,"icon",void 0),Bt=wui_input_element_decorate([(0,C.E)("wui-input-element")],Bt);var Ht=l(79309);const Nt=d.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var wui_input_text_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Ut=class WuiInputText extends d.WF{constructor(){super(...arguments),this.inputElementRef=(0,Zt._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,a={[`wui-size-${this.size}`]:!0,[t]:Boolean(this.inputRightPadding)};return d.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,Zt.K)(this.inputElementRef)}
        class=${(0,Ht.H)(a)}
        type=${this.type}
        enterkeyhint=${(0,m.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,m.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?d.qy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Ut.styles=[k.W5,k.fD,Nt],wui_input_text_decorate([(0,u.MZ)()],Ut.prototype,"size",void 0),wui_input_text_decorate([(0,u.MZ)()],Ut.prototype,"icon",void 0),wui_input_text_decorate([(0,u.MZ)({type:Boolean})],Ut.prototype,"disabled",void 0),wui_input_text_decorate([(0,u.MZ)()],Ut.prototype,"placeholder",void 0),wui_input_text_decorate([(0,u.MZ)()],Ut.prototype,"type",void 0),wui_input_text_decorate([(0,u.MZ)()],Ut.prototype,"keyHint",void 0),wui_input_text_decorate([(0,u.MZ)()],Ut.prototype,"value",void 0),wui_input_text_decorate([(0,u.MZ)()],Ut.prototype,"inputRightPadding",void 0),wui_input_text_decorate([(0,u.MZ)()],Ut.prototype,"tabIdx",void 0),Ut=wui_input_text_decorate([(0,C.E)("wui-input-text")],Ut);const Ft=d.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var wui_search_bar_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Jt=class WuiSearchBar extends d.WF{constructor(){super(...arguments),this.inputComponentRef=(0,Zt._)()}render(){return d.qy`
      <wui-input-text
        ${(0,Zt.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,a=t?.inputElementRef.value;a&&(a.value="",a.focus(),a.dispatchEvent(new Event("input")))}};Jt.styles=[k.W5,Ft],Jt=wui_search_bar_decorate([(0,C.E)("wui-search-bar")],Jt);const Vt=d.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Kt=d.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var wui_card_select_loader_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Gt=class WuiCardSelectLoader extends d.WF{constructor(){super(...arguments),this.type="wallet"}render(){return d.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?d.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Vt}`:d.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Gt.styles=[k.W5,k.fD,Kt],wui_card_select_loader_decorate([(0,u.MZ)()],Gt.prototype,"type",void 0),Gt=wui_card_select_loader_decorate([(0,C.E)("wui-card-select-loader")],Gt);var Xt=l(55504);const Yt=d.AH`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var wui_grid_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let Qt=class WuiGrid extends d.WF{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Xt.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Xt.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Xt.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Xt.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Xt.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Xt.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Xt.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Xt.Z.getSpacingStyles(this.margin,3)};\n    `,d.qy`<slot></slot>`}};Qt.styles=[k.W5,Yt],wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"gridTemplateRows",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"gridTemplateColumns",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"justifyItems",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"alignItems",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"justifyContent",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"alignContent",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"columnGap",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"rowGap",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"gap",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"padding",void 0),wui_grid_decorate([(0,u.MZ)()],Qt.prototype,"margin",void 0),Qt=wui_grid_decorate([(0,C.E)("wui-grid")],Qt);const te=d.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var w3m_all_wallets_list_item_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let ee=class W3mAllWalletsListItem extends d.WF{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const t="certified"===this.wallet?.badge_type;return d.qy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,m.J)(t?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${t?d.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():d.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,m.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return d.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=E.$.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await E.$.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};ee.styles=te,w3m_all_wallets_list_item_decorate([(0,u.wk)()],ee.prototype,"visible",void 0),w3m_all_wallets_list_item_decorate([(0,u.wk)()],ee.prototype,"imageSrc",void 0),w3m_all_wallets_list_item_decorate([(0,u.wk)()],ee.prototype,"imageLoading",void 0),w3m_all_wallets_list_item_decorate([(0,u.MZ)()],ee.prototype,"wallet",void 0),ee=w3m_all_wallets_list_item_decorate([(0,v.EM)("w3m-all-wallets-list-item")],ee);const ie=d.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var w3m_all_wallets_list_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};const oe="local-paginator";let re=class W3mAllWalletsList extends d.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!w.N.state.wallets.length,this.wallets=w.N.state.wallets,this.recommended=w.N.state.recommended,this.featured=w.N.state.featured,this.filteredWallets=w.N.state.filteredWallets,this.unsubscribe.push(w.N.subscribeKey("wallets",(t=>this.wallets=t)),w.N.subscribeKey("recommended",(t=>this.recommended=t)),w.N.subscribeKey("featured",(t=>this.featured=t)),w.N.subscribeKey("filteredWallets",(t=>this.filteredWallets=t)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),this.paginationObserver?.disconnect()}render(){return d.qy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;const t=this.shadowRoot?.querySelector("wui-grid");t&&(await w.N.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,a){return[...Array(t)].map((()=>d.qy`
        <wui-card-select-loader type="wallet" id=${(0,m.J)(a)}></wui-card-select-loader>
      `))}walletsTemplate(){const t=this.filteredWallets?.length>0?p.w.uniqueBy([...this.featured,...this.recommended,...this.filteredWallets],"id"):p.w.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return H.A.markWalletsAsInstalled(t).map((t=>d.qy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:t,recommended:a,featured:l,count:d}=w.N.state,u=window.innerWidth<352?3:4,p=t.length+a.length;let g=Math.ceil(p/u)*u-p+u;return g-=t.length?l.length%u:0,0===d&&l.length>0?null:0===d||[...l,...t,...a].length<d?this.shimmerTemplate(g,oe):null}createPaginationObserver(){const t=this.shadowRoot?.querySelector(`#${oe}`);t&&(this.paginationObserver=new IntersectionObserver((([t])=>{if(t?.isIntersecting&&!this.loading){const{page:t,count:a,wallets:l}=w.N.state;l.length<a&&w.N.fetchWalletsByPage({page:t+1})}})),this.paginationObserver.observe(t))}onConnectWallet(t){y.a.selectWalletConnector(t)}};re.styles=ie,w3m_all_wallets_list_decorate([(0,u.wk)()],re.prototype,"loading",void 0),w3m_all_wallets_list_decorate([(0,u.wk)()],re.prototype,"wallets",void 0),w3m_all_wallets_list_decorate([(0,u.wk)()],re.prototype,"recommended",void 0),w3m_all_wallets_list_decorate([(0,u.wk)()],re.prototype,"featured",void 0),w3m_all_wallets_list_decorate([(0,u.wk)()],re.prototype,"filteredWallets",void 0),re=w3m_all_wallets_list_decorate([(0,v.EM)("w3m-all-wallets-list")],re);const ne=d.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var w3m_all_wallets_search_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let ae=class W3mAllWalletsSearch extends d.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?d.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await w.N.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=w.N.state,a=H.A.markWalletsAsInstalled(t);return t.length?d.qy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${a.map((t=>d.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(t)}
              .wallet=${t}
              data-testid="wallet-search-item-${t.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:d.qy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){y.a.selectWalletConnector(t)}};ae.styles=ne,w3m_all_wallets_search_decorate([(0,u.wk)()],ae.prototype,"loading",void 0),w3m_all_wallets_search_decorate([(0,u.MZ)()],ae.prototype,"query",void 0),w3m_all_wallets_search_decorate([(0,u.MZ)()],ae.prototype,"badge",void 0),ae=w3m_all_wallets_search_decorate([(0,v.EM)("w3m-all-wallets-search")],ae);var w3m_all_wallets_view_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let se=class W3mAllWalletsView extends d.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=p.w.debounce((t=>{this.search=t}))}render(){const t=this.search.length>=2;return d.qy`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?d.qy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,m.J)(this.badge)}
          ></w3m-all-wallets-search>`:d.qy`<w3m-all-wallets-list badge=${(0,m.J)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",X.P.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return p.w.isMobile()?d.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){$.I.push("ConnectingWalletConnect")}};w3m_all_wallets_view_decorate([(0,u.wk)()],se.prototype,"search",void 0),w3m_all_wallets_view_decorate([(0,u.wk)()],se.prototype,"badge",void 0),se=w3m_all_wallets_view_decorate([(0,v.EM)("w3m-all-wallets-view")],se);const le=d.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var wui_list_item_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let ce=class WuiListItem extends d.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return d.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,m.J)(this.iconVariant)}
        tabindex=${(0,m.J)(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return d.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return d.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",a="square-blue"===this.iconVariant?"mdl":"md",l=this.iconSize?this.iconSize:a;return d.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${l}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${a}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?d.qy`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:d.qy``}chevronTemplate(){return this.chevron?d.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};ce.styles=[k.W5,k.fD,le],wui_list_item_decorate([(0,u.MZ)()],ce.prototype,"icon",void 0),wui_list_item_decorate([(0,u.MZ)()],ce.prototype,"iconSize",void 0),wui_list_item_decorate([(0,u.MZ)()],ce.prototype,"tabIdx",void 0),wui_list_item_decorate([(0,u.MZ)()],ce.prototype,"variant",void 0),wui_list_item_decorate([(0,u.MZ)()],ce.prototype,"iconVariant",void 0),wui_list_item_decorate([(0,u.MZ)({type:Boolean})],ce.prototype,"disabled",void 0),wui_list_item_decorate([(0,u.MZ)()],ce.prototype,"imageSrc",void 0),wui_list_item_decorate([(0,u.MZ)()],ce.prototype,"alt",void 0),wui_list_item_decorate([(0,u.MZ)({type:Boolean})],ce.prototype,"chevron",void 0),wui_list_item_decorate([(0,u.MZ)({type:Boolean})],ce.prototype,"loading",void 0),ce=wui_list_item_decorate([(0,C.E)("wui-list-item")],ce);var w3m_downloads_view_decorate=function(t,a,l,d){var u,p=arguments.length,w=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)w=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(u=t[g])&&(w=(p<3?u(w):p>3?u(a,l,w):u(a,l))||w);return p>3&&w&&Object.defineProperty(a,l,w),w};let de=class W3mDownloadsView extends d.WF{constructor(){super(...arguments),this.wallet=$.I.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return d.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?d.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?d.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?d.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?d.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&p.w.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&p.w.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&p.w.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&p.w.openHref(this.wallet.homepage,"_blank")}};de=w3m_downloads_view_decorate([(0,v.EM)("w3m-downloads-view")],de)},994752:(t,a,l)=>{l(110587)},535550:(t,a,l)=>{l(943723)},136408:(t,a,l)=>{l(536797)},775430:(t,a,l)=>{l.d(a,{Kq:()=>f});var d=l(270367),u=l(16655);const s=(t,a)=>{const l=t._$AN;if(void 0===l)return!1;for(const t of l)t._$AO?.(a,!1),s(t,a);return!0},o=t=>{let a,l;do{if(void 0===(a=t._$AM))break;l=a._$AN,l.delete(t),t=a}while(0===l?.size)},r=t=>{for(let a;a=t._$AM;t=a){let l=a._$AN;if(void 0===l)a._$AN=l=new Set;else if(l.has(t))break;l.add(t),c(a)}};function h(t){void 0!==this._$AN?(o(this),this._$AM=t,r(this)):this._$AM=t}function n(t,a=!1,l=0){const d=this._$AH,u=this._$AN;if(void 0!==u&&0!==u.size)if(a)if(Array.isArray(d))for(let t=l;t<d.length;t++)s(d[t],!1),o(d[t]);else null!=d&&(s(d,!1),o(d));else s(this,t)}const c=t=>{t.type==u.OA.CHILD&&(t._$AP??=n,t._$AQ??=h)};class f extends u.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,l){super._$AT(t,a,l),r(this),this.isConnected=t._$AU}_$AO(t,a=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),a&&(s(this,t),o(this))}setValue(t){if((0,d.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}},270367:(t,a,l)=>{l.d(a,{Rt:()=>f,sO:()=>i});var d=l(380181);const{I:u}=d.ge,i=t=>null===t||"object"!=typeof t&&"function"!=typeof t,f=t=>void 0===t.strings},16655:(t,a,l)=>{l.d(a,{OA:()=>d,WL:()=>i,u$:()=>e});const d={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...a)=>({_$litDirective$:t,values:a});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,l){this._$Ct=t,this._$AM=a,this._$Ci=l}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}}},563528:(t,a,l)=>{l.d(a,{MZ:()=>n,wk:()=>state_r});var d=l(172803);const u={attribute:!0,type:String,converter:d.W3,reflect:!1,hasChanged:d.Ec},r=(t=u,a,l)=>{const{kind:d,metadata:p}=l;let w=globalThis.litPropertyMetadata.get(p);if(void 0===w&&globalThis.litPropertyMetadata.set(p,w=new Map),"setter"===d&&((t=Object.create(t)).wrapped=!0),w.set(l.name,t),"accessor"===d){const{name:d}=l;return{set(l){const u=a.get.call(this);a.set.call(this,l),this.requestUpdate(d,u,t)},init(a){return void 0!==a&&this.C(d,void 0,t,a),a}}}if("setter"===d){const{name:d}=l;return function(l){const u=this[d];a.call(this,l),this.requestUpdate(d,u,t)}}throw Error("Unsupported decorator location: "+d)};function n(t){return(a,l)=>"object"==typeof l?r(t,a,l):((t,a,l)=>{const d=a.hasOwnProperty(l);return a.constructor.createProperty(l,t),d?Object.getOwnPropertyDescriptor(a,l):void 0})(t,a,l)}function state_r(t){return n({...t,state:!0,attribute:!1})}},79309:(t,a,l)=>{l.d(a,{H:()=>p});var d=l(380181),u=l(16655);const p=(0,u.u$)(class extends u.WL{constructor(t){if(super(t),t.type!==u.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((a=>t[a])).join(" ")+" "}update(t,[a]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in a)a[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(a)}const l=t.element.classList;for(const t of this.st)t in a||(l.remove(t),this.st.delete(t));for(const t in a){const d=!!a[t];d===this.st.has(t)||this.nt?.has(t)||(d?(l.add(t),this.st.add(t)):(l.remove(t),this.st.delete(t)))}return d.c0}})},31216:(t,a,l)=>{l.d(a,{J:()=>o});var d=l(380181);const o=t=>t??d.s6},66995:(t,a,l)=>{l.d(a,{_:()=>e,K:()=>g});var d=l(380181),u=l(775430),p=l(16655);const e=()=>new h;class h{}const w=new WeakMap,g=(0,p.u$)(class extends u.Kq{render(t){return d.s6}update(t,[a]){const l=a!==this.G;return l&&void 0!==this.G&&this.rt(void 0),(l||this.lt!==this.ct)&&(this.G=a,this.ht=t.options?.host,this.rt(this.ct=t.element)),d.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const a=this.ht??globalThis;let l=w.get(a);void 0===l&&(l=new WeakMap,w.set(a,l)),void 0!==l.get(this.G)&&this.G.call(this.ht,void 0),l.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?w.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})}}]);
//# sourceMappingURL=35625.d12571b96e.chunk.js.map