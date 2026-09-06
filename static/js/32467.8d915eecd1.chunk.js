/*! For license information please see 32467.8d915eecd1.chunk.js.LICENSE.txt */
!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=(new t.Error).stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="d0503826-387a-4d8c-a163-2ba1632809a8",t._sentryDebugIdIdentifier="sentry-dbid-d0503826-387a-4d8c-a163-2ba1632809a8")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.16.0 (2026090623)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[32467],{943723:(t,a,l)=>{var d=l(859929),w=l(563528),p=l(380181),u=l(270367),g=l(775430);class s{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class i{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise((t=>this.Z=t))}resume(){this.Z?.(),this.Y=this.Z=void 0}}var v=l(16655);const n=t=>!(0,u.sO)(t)&&"function"==typeof t.then,m=1073741823;class c extends g.Kq{constructor(){super(...arguments),this._$Cwt=m,this._$Cbt=[],this._$CK=new s(this),this._$CX=new i}render(...t){return t.find((t=>!n(t)))??p.c0}update(t,a){const l=this._$Cbt;let d=l.length;this._$Cbt=a;const w=this._$CK,u=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<a.length&&!(t>this._$Cwt);t++){const p=a[t];if(!n(p))return this._$Cwt=t,p;t<d&&p===l[t]||(this._$Cwt=m,d=0,Promise.resolve(p).then((async t=>{for(;u.get();)await u.get();const a=w.deref();if(void 0!==a){const l=a._$Cbt.indexOf(p);l>-1&&l<a._$Cwt&&(a._$Cwt=l,a.setValue(t))}})))}return p.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const y=(0,v.u$)(c);const b=new class CacheUtil{constructor(){this.cache=new Map}set(t,a){this.cache.set(t,a)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var k=l(572649),x=l(416282);const C=d.AH`
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
`;var __decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};const S={add:async()=>(await l.e(79984).then(l.bind(l,979984))).addSvg,allWallets:async()=>(await l.e(89399).then(l.bind(l,489399))).allWalletsSvg,arrowBottomCircle:async()=>(await l.e(52705).then(l.bind(l,852705))).arrowBottomCircleSvg,appStore:async()=>(await l.e(91984).then(l.bind(l,991984))).appStoreSvg,apple:async()=>(await l.e(75991).then(l.bind(l,675991))).appleSvg,arrowBottom:async()=>(await l.e(48820).then(l.bind(l,548820))).arrowBottomSvg,arrowLeft:async()=>(await l.e(72406).then(l.bind(l,272406))).arrowLeftSvg,arrowRight:async()=>(await l.e(48737).then(l.bind(l,348737))).arrowRightSvg,arrowTop:async()=>(await l.e(69740).then(l.bind(l,969740))).arrowTopSvg,bank:async()=>(await l.e(85713).then(l.bind(l,985713))).bankSvg,browser:async()=>(await l.e(15991).then(l.bind(l,215991))).browserSvg,card:async()=>(await l.e(40481).then(l.bind(l,240481))).cardSvg,checkmark:async()=>(await l.e(65114).then(l.bind(l,865114))).checkmarkSvg,checkmarkBold:async()=>(await l.e(47572).then(l.bind(l,947572))).checkmarkBoldSvg,chevronBottom:async()=>(await l.e(84018).then(l.bind(l,484018))).chevronBottomSvg,chevronLeft:async()=>(await l.e(30252).then(l.bind(l,530252))).chevronLeftSvg,chevronRight:async()=>(await l.e(8615).then(l.bind(l,908615))).chevronRightSvg,chevronTop:async()=>(await l.e(97966).then(l.bind(l,997966))).chevronTopSvg,chromeStore:async()=>(await l.e(98753).then(l.bind(l,898753))).chromeStoreSvg,clock:async()=>(await l.e(1641).then(l.bind(l,301641))).clockSvg,close:async()=>(await l.e(1595).then(l.bind(l,701595))).closeSvg,compass:async()=>(await l.e(72439).then(l.bind(l,772439))).compassSvg,coinPlaceholder:async()=>(await l.e(11453).then(l.bind(l,111453))).coinPlaceholderSvg,copy:async()=>(await l.e(35366).then(l.bind(l,635366))).copySvg,cursor:async()=>(await l.e(61813).then(l.bind(l,61813))).cursorSvg,cursorTransparent:async()=>(await l.e(69442).then(l.bind(l,69442))).cursorTransparentSvg,desktop:async()=>(await l.e(27503).then(l.bind(l,727503))).desktopSvg,disconnect:async()=>(await l.e(38093).then(l.bind(l,638093))).disconnectSvg,discord:async()=>(await l.e(54703).then(l.bind(l,254703))).discordSvg,etherscan:async()=>(await l.e(28674).then(l.bind(l,728674))).etherscanSvg,extension:async()=>(await l.e(91654).then(l.bind(l,791654))).extensionSvg,externalLink:async()=>(await l.e(72473).then(l.bind(l,672473))).externalLinkSvg,facebook:async()=>(await l.e(12203).then(l.bind(l,612203))).facebookSvg,farcaster:async()=>(await l.e(4470).then(l.bind(l,904470))).farcasterSvg,filters:async()=>(await l.e(88960).then(l.bind(l,888960))).filtersSvg,github:async()=>(await l.e(96244).then(l.bind(l,596244))).githubSvg,google:async()=>(await l.e(94732).then(l.bind(l,194732))).googleSvg,helpCircle:async()=>(await l.e(68597).then(l.bind(l,368597))).helpCircleSvg,image:async()=>(await l.e(13886).then(l.bind(l,413886))).imageSvg,id:async()=>(await l.e(24598).then(l.bind(l,324598))).idSvg,infoCircle:async()=>(await l.e(59496).then(l.bind(l,59496))).infoCircleSvg,lightbulb:async()=>(await l.e(16528).then(l.bind(l,716528))).lightbulbSvg,mail:async()=>(await l.e(37572).then(l.bind(l,337572))).mailSvg,mobile:async()=>(await l.e(6445).then(l.bind(l,306445))).mobileSvg,more:async()=>(await l.e(10354).then(l.bind(l,610354))).moreSvg,networkPlaceholder:async()=>(await l.e(60385).then(l.bind(l,460385))).networkPlaceholderSvg,nftPlaceholder:async()=>(await l.e(19694).then(l.bind(l,519694))).nftPlaceholderSvg,off:async()=>(await l.e(49094).then(l.bind(l,549094))).offSvg,playStore:async()=>(await l.e(52345).then(l.bind(l,752345))).playStoreSvg,plus:async()=>(await l.e(75935).then(l.bind(l,575935))).plusSvg,qrCode:async()=>(await l.e(3756).then(l.bind(l,803756))).qrCodeIcon,recycleHorizontal:async()=>(await l.e(36295).then(l.bind(l,136295))).recycleHorizontalSvg,refresh:async()=>(await l.e(96816).then(l.bind(l,896816))).refreshSvg,search:async()=>(await l.e(30907).then(l.bind(l,130907))).searchSvg,send:async()=>(await l.e(9713).then(l.bind(l,809713))).sendSvg,swapHorizontal:async()=>(await l.e(74640).then(l.bind(l,874640))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await l.e(77155).then(l.bind(l,77155))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await l.e(23595).then(l.bind(l,23595))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await l.e(75728).then(l.bind(l,375728))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await l.e(8302).then(l.bind(l,108302))).swapVerticalSvg,telegram:async()=>(await l.e(84280).then(l.bind(l,884280))).telegramSvg,threeDots:async()=>(await l.e(66696).then(l.bind(l,166696))).threeDotsSvg,twitch:async()=>(await l.e(63724).then(l.bind(l,963724))).twitchSvg,twitter:async()=>(await l.e(28255).then(l.bind(l,628255))).xSvg,twitterIcon:async()=>(await l.e(54497).then(l.bind(l,854497))).twitterIconSvg,verify:async()=>(await l.e(7414).then(l.bind(l,907414))).verifySvg,verifyFilled:async()=>(await l.e(47751).then(l.bind(l,47751))).verifyFilledSvg,wallet:async()=>(await l.e(38622).then(l.bind(l,238622))).walletSvg,walletConnect:async()=>(await l.e(38298).then(l.bind(l,438298))).walletConnectSvg,walletConnectLightBrown:async()=>(await l.e(38298).then(l.bind(l,438298))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await l.e(38298).then(l.bind(l,438298))).walletConnectBrownSvg,walletPlaceholder:async()=>(await l.e(91422).then(l.bind(l,191422))).walletPlaceholderSvg,warningCircle:async()=>(await l.e(7352).then(l.bind(l,707352))).warningCircleSvg,x:async()=>(await l.e(28255).then(l.bind(l,628255))).xSvg,info:async()=>(await l.e(27963).then(l.bind(l,227963))).infoSvg,exclamationTriangle:async()=>(await l.e(13999).then(l.bind(l,236380))).exclamationTriangleSvg,reown:async()=>(await l.e(27366).then(l.bind(l,27366))).reownSvg};let $=class WuiIcon extends d.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,d.qy`${y(async function getSvg(t){if(b.has(t))return b.get(t);const a=(S[t]??S.copy)();return b.set(t,a),a}(this.name),d.qy`<div class="fallback"></div>`)}`}};$.styles=[k.W5,k.ck,C],__decorate([(0,w.MZ)()],$.prototype,"size",void 0),__decorate([(0,w.MZ)()],$.prototype,"name",void 0),__decorate([(0,w.MZ)()],$.prototype,"color",void 0),__decorate([(0,w.MZ)()],$.prototype,"aspectRatio",void 0),$=__decorate([(0,x.E)("wui-icon")],$)},160563:(t,a,l)=>{var d=l(859929),w=l(563528),p=l(572649),u=l(416282);const g=d.AH`
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
`;var __decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let v=class WuiImage extends d.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,d.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};v.styles=[p.W5,p.ck,g],__decorate([(0,w.MZ)()],v.prototype,"src",void 0),__decorate([(0,w.MZ)()],v.prototype,"alt",void 0),__decorate([(0,w.MZ)()],v.prototype,"size",void 0),v=__decorate([(0,u.E)("wui-image")],v)},516172:(t,a,l)=>{var d=l(859929),w=l(563528),p=l(572649),u=l(416282);const g=d.AH`
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
`;var __decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let v=class WuiLoadingSpinner extends d.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,d.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};v.styles=[p.W5,g],__decorate([(0,w.MZ)()],v.prototype,"color",void 0),__decorate([(0,w.MZ)()],v.prototype,"size",void 0),v=__decorate([(0,u.E)("wui-loading-spinner")],v)},536797:(t,a,l)=>{var d=l(859929),w=l(563528),p=l(79309),u=l(572649),g=l(416282);const v=d.AH`
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
`;var __decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let m=class WuiText extends d.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,d.qy`<slot class=${(0,p.H)(t)}></slot>`}};m.styles=[u.W5,v],__decorate([(0,w.MZ)()],m.prototype,"variant",void 0),__decorate([(0,w.MZ)()],m.prototype,"color",void 0),__decorate([(0,w.MZ)()],m.prototype,"align",void 0),__decorate([(0,w.MZ)()],m.prototype,"lineClamp",void 0),m=__decorate([(0,g.E)("wui-text")],m)},167071:(t,a,l)=>{var d=l(859929),w=l(563528),p=(l(943723),l(572649)),u=l(416282);const g=d.AH`
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
`;var __decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let v=class WuiIconBox extends d.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,a="lg"===this.size,l="xl"===this.size,w=a?"12%":"16%",p=a?"xxs":l?"s":"3xl",u="gray"===this.background,g="opaque"===this.background,v="accent-100"===this.backgroundColor&&g||"success-100"===this.backgroundColor&&g||"error-100"===this.backgroundColor&&g||"inverse-100"===this.backgroundColor&&g;let m=`var(--wui-color-${this.backgroundColor})`;return v?m=`var(--wui-icon-box-bg-${this.backgroundColor})`:u&&(m=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${m};\n       --local-bg-mix: ${v||u?"100%":w};\n       --local-border-radius: var(--wui-border-radius-${p});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,d.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};v.styles=[p.W5,p.fD,g],__decorate([(0,w.MZ)()],v.prototype,"size",void 0),__decorate([(0,w.MZ)()],v.prototype,"backgroundColor",void 0),__decorate([(0,w.MZ)()],v.prototype,"iconColor",void 0),__decorate([(0,w.MZ)()],v.prototype,"iconSize",void 0),__decorate([(0,w.MZ)()],v.prototype,"background",void 0),__decorate([(0,w.MZ)({type:Boolean})],v.prototype,"border",void 0),__decorate([(0,w.MZ)()],v.prototype,"borderColor",void 0),__decorate([(0,w.MZ)()],v.prototype,"icon",void 0),v=__decorate([(0,u.E)("wui-icon-box")],v)},80204:(t,a,l)=>{var d=l(859929),w=l(563528),p=(l(536797),l(572649)),u=l(416282);const g=d.AH`
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
`;var __decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let v=class WuiTag extends d.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"mini-700":"micro-700";return d.qy`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};v.styles=[p.W5,g],__decorate([(0,w.MZ)()],v.prototype,"variant",void 0),__decorate([(0,w.MZ)()],v.prototype,"size",void 0),v=__decorate([(0,u.E)("wui-tag")],v)},110587:(t,a,l)=>{var d=l(859929),w=l(563528),p=l(572649),u=l(55504),g=l(416282);const v=d.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var __decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let m=class WuiFlex extends d.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&u.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&u.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&u.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&u.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&u.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&u.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&u.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&u.Z.getSpacingStyles(this.margin,3)};\n    `,d.qy`<slot></slot>`}};m.styles=[p.W5,v],__decorate([(0,w.MZ)()],m.prototype,"flexDirection",void 0),__decorate([(0,w.MZ)()],m.prototype,"flexWrap",void 0),__decorate([(0,w.MZ)()],m.prototype,"flexBasis",void 0),__decorate([(0,w.MZ)()],m.prototype,"flexGrow",void 0),__decorate([(0,w.MZ)()],m.prototype,"flexShrink",void 0),__decorate([(0,w.MZ)()],m.prototype,"alignItems",void 0),__decorate([(0,w.MZ)()],m.prototype,"justifyContent",void 0),__decorate([(0,w.MZ)()],m.prototype,"columnGap",void 0),__decorate([(0,w.MZ)()],m.prototype,"rowGap",void 0),__decorate([(0,w.MZ)()],m.prototype,"gap",void 0),__decorate([(0,w.MZ)()],m.prototype,"padding",void 0),__decorate([(0,w.MZ)()],m.prototype,"margin",void 0),m=__decorate([(0,g.E)("wui-flex")],m)},532467:(t,a,l)=>{l.r(a),l.d(a,{AppKitModal:()=>ue,W3mModal:()=>pe,W3mModalBase:()=>W3mModalBase});var d=l(859929),w=l(563528),p=l(31216),u=l(42732),g=l(896673),v=l(195925),m=l(18788),y=l(427374),b=l(405069),k=l(734200),x=l(690118);const C={isUnsupportedChainView:()=>"UnsupportedChain"===k.I.state.view||"SwitchNetwork"===k.I.state.view&&k.I.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void v.W.shake();await x.U.isSIWXCloseDisabled()?v.W.shake():v.W.close()}};var S=l(121096),$=l(394907),W=l(86234),A=l(800655),R=l(572649),O=l(416282);const z=d.AH`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`;var __decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let I=class WuiCard extends d.WF{render(){return d.qy`<slot></slot>`}};I.styles=[R.W5,z],I=__decorate([(0,O.E)("wui-card")],I);l(994752);var T=l(747091);l(943723),l(536797),l(110587);const E=d.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var wui_alertbar_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let q=class WuiAlertBar extends d.WF{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `,d.qy`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){T.h.close()}};q.styles=[R.W5,E],wui_alertbar_decorate([(0,w.MZ)()],q.prototype,"message",void 0),wui_alertbar_decorate([(0,w.MZ)()],q.prototype,"backgroundColor",void 0),wui_alertbar_decorate([(0,w.MZ)()],q.prototype,"iconColor",void 0),wui_alertbar_decorate([(0,w.MZ)()],q.prototype,"icon",void 0),q=wui_alertbar_decorate([(0,O.E)("wui-alertbar")],q);const M=d.AH`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var w3m_alertbar_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};const P={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let N=class W3mAlertBar extends d.WF{constructor(){super(),this.unsubscribe=[],this.open=T.h.state.open,this.onOpen(!0),this.unsubscribe.push(T.h.subscribeKey("open",(t=>{this.open=t,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){const{message:t,variant:a}=T.h.state,l=P[a];return d.qy`
      <wui-alertbar
        message=${t}
        backgroundColor=${l?.backgroundColor}
        iconColor=${l?.iconColor}
        icon=${l?.icon}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};N.styles=M,w3m_alertbar_decorate([(0,w.wk)()],N.prototype,"open",void 0),N=w3m_alertbar_decorate([(0,A.EM)("w3m-alertbar")],N);var j=l(682366),B=l(344725),_=l(634861),Z=l(105996);const H=d.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var wui_icon_link_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let D=class WuiIconLink extends d.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",a="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${t});\n    --local-padding: var(${a});\n`,d.qy`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};D.styles=[R.W5,R.fD,R.ck,H],wui_icon_link_decorate([(0,w.MZ)()],D.prototype,"size",void 0),wui_icon_link_decorate([(0,w.MZ)({type:Boolean})],D.prototype,"disabled",void 0),wui_icon_link_decorate([(0,w.MZ)()],D.prototype,"icon",void 0),wui_icon_link_decorate([(0,w.MZ)()],D.prototype,"iconColor",void 0),D=wui_icon_link_decorate([(0,O.E)("wui-icon-link")],D);l(160563),l(167071);const L=d.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var wui_select_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let U=class WuiSelect extends d.WF{constructor(){super(...arguments),this.imageSrc=""}render(){return d.qy`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?d.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:d.qy`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};U.styles=[R.W5,R.fD,R.ck,L],wui_select_decorate([(0,w.MZ)()],U.prototype,"imageSrc",void 0),U=wui_select_decorate([(0,O.E)("wui-select")],U);l(80204),l(136408);var K=l(823510);const F=d.AH`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var w3m_header_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};const X=["SmartSessionList"];function headings(){const t=k.I.state.data?.connector?.name,a=k.I.state.data?.wallet?.name,l=k.I.state.data?.network?.name,d=a??t,w=y.a.getConnectors();return{Connect:`Connect ${1===w.length&&"w3m-email"===w[0]?.id?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:d??"Connect Wallet",ConnectingWalletConnect:d??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:d?`Get ${d}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",Profile:void 0,SwitchNetwork:l??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:j.U.state.socialProvider?j.U.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in progress"}}let Y=class W3mHeader extends d.WF{constructor(){super(),this.unsubscribe=[],this.heading=headings()[k.I.state.view],this.network=m.W.state.activeCaipNetwork,this.networkImage=B.$.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=k.I.state.view,this.viewDirection="",this.headerText=headings()[k.I.state.view],this.unsubscribe.push(_.j.subscribeNetworkImages((()=>{this.networkImage=B.$.getNetworkImage(this.network)})),k.I.subscribeKey("view",(t=>{setTimeout((()=>{this.view=t,this.headerText=headings()[t]}),K.o.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),m.W.subscribeKey("activeCaipNetwork",(t=>{this.network=t,this.networkImage=B.$.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((t=>t()))}render(){return d.qy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){Z.E.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),k.I.push("WhatIsAWallet")}async onClose(){await C.safeClose()}rightHeaderTemplate(){const t=g.H?.state?.features?.smartSessions;return"Account"===k.I.state.view&&t?d.qy`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>k.I.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return d.qy`
      <wui-icon-link
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const t=X.includes(this.view);return d.qy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${t?d.qy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:t}=k.I.state,a="Connect"===t,l=g.H.state.enableEmbedded,w="ApproveTransaction"===t,u="ConnectingSiwe"===t,v="Account"===t,m=g.H.state.enableNetworkSwitch,y=w||u||a&&l;return v&&m?d.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,p.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,p.J)(this.networkImage)}
      ></wui-select>`:this.showBack&&!y?d.qy`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:d.qy`<wui-icon-link
      data-hidden=${!a}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(Z.E.sendEvent({type:"track",event:"CLICK_NETWORKS"}),k.I.push("Networks"))}isAllowedNetworkSwitch(){const t=m.W.getAllRequestedCaipNetworks(),a=!!t&&t.length>1,l=t?.find((({id:t})=>t===this.network?.id));return a||!l}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:t}=k.I.state;let a=K.o.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(a=K.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=a}async onHistoryChange(){const{history:t}=k.I.state,a=this.shadowRoot?.querySelector("#dynamic");t.length>1&&!this.showBack&&a?(await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&a&&(await a.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,a.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){k.I.goBack()}};Y.styles=F,w3m_header_decorate([(0,w.wk)()],Y.prototype,"heading",void 0),w3m_header_decorate([(0,w.wk)()],Y.prototype,"network",void 0),w3m_header_decorate([(0,w.wk)()],Y.prototype,"networkImage",void 0),w3m_header_decorate([(0,w.wk)()],Y.prototype,"showBack",void 0),w3m_header_decorate([(0,w.wk)()],Y.prototype,"prevHistoryLength",void 0),w3m_header_decorate([(0,w.wk)()],Y.prototype,"view",void 0),w3m_header_decorate([(0,w.wk)()],Y.prototype,"viewDirection",void 0),w3m_header_decorate([(0,w.wk)()],Y.prototype,"headerText",void 0),Y=w3m_header_decorate([(0,A.EM)("w3m-header")],Y);l(516172);const V=d.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var wui_snackbar_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let G=class WuiSnackbar extends d.WF{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return d.qy`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?d.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?d.qy`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:d.qy`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};G.styles=[R.W5,V],wui_snackbar_decorate([(0,w.MZ)()],G.prototype,"backgroundColor",void 0),wui_snackbar_decorate([(0,w.MZ)()],G.prototype,"iconColor",void 0),wui_snackbar_decorate([(0,w.MZ)()],G.prototype,"icon",void 0),wui_snackbar_decorate([(0,w.MZ)()],G.prototype,"message",void 0),wui_snackbar_decorate([(0,w.MZ)()],G.prototype,"loading",void 0),wui_snackbar_decorate([(0,w.MZ)()],G.prototype,"iconType",void 0),G=wui_snackbar_decorate([(0,O.E)("wui-snackbar")],G);const J=d.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var w3m_snackbar_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};const Q={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let ee=class W3mSnackBar extends d.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=$.P.state.open,this.unsubscribe.push($.P.subscribeKey("open",(t=>{this.open=t,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((t=>t()))}render(){const{message:t,variant:a,svg:l}=$.P.state,w=Q[a],{icon:p,iconColor:u}=l??w??{};return d.qy`
      <wui-snackbar
        message=${t}
        backgroundColor=${w?.backgroundColor}
        iconColor=${u}
        icon=${p}
        .loading=${"loading"===a}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),$.P.state.autoClose&&(this.timeout=setTimeout((()=>$.P.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ee.styles=J,w3m_snackbar_decorate([(0,w.wk)()],ee.prototype,"open",void 0),ee=w3m_snackbar_decorate([(0,A.EM)("w3m-snackbar")],ee);var te=l(56963),ie=l(658085),oe=l(644104);const ae=(0,te.BX)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),re={state:ae,subscribe:t=>(0,te.B1)(ae,(()=>t(ae))),subscribeKey:(t,a)=>(0,ie.u$)(ae,t,a),showTooltip({message:t,triggerRect:a,variant:l}){ae.open=!0,ae.message=t,ae.triggerRect=a,ae.variant=l},hide(){ae.open=!1,ae.message="",ae.triggerRect={width:0,height:0,top:0,left:0}}},ne=(0,oe.X)(re);l(535550);const se=d.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var w3m_tooltip_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let ce=class W3mTooltip extends d.WF{constructor(){super(),this.unsubscribe=[],this.open=ne.state.open,this.message=ne.state.message,this.triggerRect=ne.state.triggerRect,this.variant=ne.state.variant,this.unsubscribe.push(ne.subscribe((t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,a=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${t}px;\n    --w3m-tooltip-left: ${a}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,d.qy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};ce.styles=[se],w3m_tooltip_decorate([(0,w.wk)()],ce.prototype,"open",void 0),w3m_tooltip_decorate([(0,w.wk)()],ce.prototype,"message",void 0),w3m_tooltip_decorate([(0,w.wk)()],ce.prototype,"triggerRect",void 0),w3m_tooltip_decorate([(0,w.wk)()],ce.prototype,"variant",void 0),ce=w3m_tooltip_decorate([(0,A.EM)("w3m-tooltip"),(0,A.EM)("w3m-tooltip")],ce);const le=d.AH`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var w3m_router_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};let de=class W3mRouter extends d.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=k.I.state.view,this.viewDirection="",this.unsubscribe.push(k.I.subscribeKey("view",(t=>this.onViewChange(t))))}firstUpdated(){this.resizeObserver=new ResizeObserver((([t])=>{const a=`${t?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",a),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout((()=>{this.prevHeight=a,this.style.animation="unset"}),K.o.ANIMATION_DURATIONS.ModalHeight)})),this.resizeObserver?.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((t=>t()))}render(){return d.qy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return d.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return d.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return d.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return d.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return d.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return d.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return d.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return d.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return d.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return d.qy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return d.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return d.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return d.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return d.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return d.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return d.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return d.qy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return d.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return d.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return d.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return d.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return d.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return d.qy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return d.qy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return d.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return d.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return d.qy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return d.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return d.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return d.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return d.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return d.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return d.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return d.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return d.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return d.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return d.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return d.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return d.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return d.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return d.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return d.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return d.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return d.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return d.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return d.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return d.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return d.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return d.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return d.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return d.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return d.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return d.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return d.qy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return d.qy`<w3m-pay-loading-view></w3m-pay-loading-view>`}}onViewChange(t){ne.hide();let a=K.o.VIEW_DIRECTION.Next;const{history:l}=k.I.state;l.length<this.prevHistoryLength&&(a=K.o.VIEW_DIRECTION.Prev),this.prevHistoryLength=l.length,this.viewDirection=a,setTimeout((()=>{this.view=t}),K.o.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};de.styles=le,w3m_router_decorate([(0,w.wk)()],de.prototype,"view",void 0),w3m_router_decorate([(0,w.wk)()],de.prototype,"viewDirection",void 0),de=w3m_router_decorate([(0,A.EM)("w3m-router")],de);const we=d.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.appkit-modal) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var w3m_modal_decorate=function(t,a,l,d){var w,p=arguments.length,u=p<3?a:null===d?d=Object.getOwnPropertyDescriptor(a,l):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,a,l,d);else for(var g=t.length-1;g>=0;g--)(w=t[g])&&(u=(p<3?w(u):p>3?w(a,l,u):w(a,l))||u);return p>3&&u&&Object.defineProperty(a,l,u),u};const he="scroll-lock";class W3mModalBase extends d.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=g.H.state.enableEmbedded,this.open=v.W.state.open,this.caipAddress=m.W.state.activeCaipAddress,this.caipNetwork=m.W.state.activeCaipNetwork,this.shake=v.W.state.shake,this.filterByNamespace=y.a.state.filterByNamespace,this.initializeTheming(),b.N.prefetchAnalyticsConfig(),this.unsubscribe.push(v.W.subscribeKey("open",(t=>t?this.onOpen():this.onClose())),v.W.subscribeKey("shake",(t=>this.shake=t)),m.W.subscribeKey("activeCaipNetwork",(t=>this.onNewNetwork(t))),m.W.subscribeKey("activeCaipAddress",(t=>this.onNewAddress(t))),g.H.subscribeKey("enableEmbedded",(t=>this.enableEmbedded=t)),y.a.subscribeKey("filterByNamespace",(t=>{this.filterByNamespace===t||m.W.getAccountData(t)?.caipAddress||(b.N.fetchRecommendedWallets(),this.filterByNamespace=t)})))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded)return v.W.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((t=>t())),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`\n      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};\n    `,this.enableEmbedded?d.qy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?d.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return d.qy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,p.J)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){t.target===t.currentTarget&&await this.handleClose()}async handleClose(){await C.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:a}=S.W.state,l=A.Zv.getColorTheme(a);(0,A.RF)(t,l)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),$.P.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=he,t.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${he}"]`);t&&t.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const t=this.shadowRoot?.querySelector("wui-card");t?.focus(),window.addEventListener("keydown",(a=>{if("Escape"===a.key)this.handleClose();else if("Tab"===a.key){const{tagName:l}=a.target;!l||l.includes("W3M-")||l.includes("WUI-")||t?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(t){const a=m.W.state.isSwitchingNamespace,l=W.w.getPlainAddress(t),d=a&&l;!l&&!a?v.W.close():d&&k.I.goBack(),await x.U.initializeIfEnabled(),this.caipAddress=t,m.W.setIsSwitchingNamespace(!1)}onNewNetwork(t){const a=this.caipNetwork,l=a?.caipNetworkId?.toString(),d=a?.chainNamespace,w=t?.caipNetworkId?.toString(),p=t?.chainNamespace,g=l!==w,y=g&&!(d!==p),b=a?.name===u.o.UNSUPPORTED_NETWORK_NAME,x="ConnectingExternal"===k.I.state.view,C=!m.W.getAccountData(t?.chainNamespace)?.caipAddress,S="UnsupportedChain"===k.I.state.view;let $=!1;v.W.state.open&&!x&&(C?g&&($=!0):(S||y&&!b)&&($=!0)),$&&"SIWXSignMessage"!==k.I.state.view&&k.I.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(b.N.prefetch(),b.N.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}W3mModalBase.styles=we,w3m_modal_decorate([(0,w.MZ)({type:Boolean})],W3mModalBase.prototype,"enableEmbedded",void 0),w3m_modal_decorate([(0,w.wk)()],W3mModalBase.prototype,"open",void 0),w3m_modal_decorate([(0,w.wk)()],W3mModalBase.prototype,"caipAddress",void 0),w3m_modal_decorate([(0,w.wk)()],W3mModalBase.prototype,"caipNetwork",void 0),w3m_modal_decorate([(0,w.wk)()],W3mModalBase.prototype,"shake",void 0),w3m_modal_decorate([(0,w.wk)()],W3mModalBase.prototype,"filterByNamespace",void 0);let pe=class W3mModal extends W3mModalBase{};pe=w3m_modal_decorate([(0,A.EM)("w3m-modal")],pe);let ue=class AppKitModal extends W3mModalBase{};ue=w3m_modal_decorate([(0,A.EM)("appkit-modal")],ue)},994752:(t,a,l)=>{l(110587)},535550:(t,a,l)=>{l(943723)},136408:(t,a,l)=>{l(536797)},775430:(t,a,l)=>{l.d(a,{Kq:()=>f});var d=l(270367),w=l(16655);const s=(t,a)=>{const l=t._$AN;if(void 0===l)return!1;for(const t of l)t._$AO?.(a,!1),s(t,a);return!0},o=t=>{let a,l;do{if(void 0===(a=t._$AM))break;l=a._$AN,l.delete(t),t=a}while(0===l?.size)},r=t=>{for(let a;a=t._$AM;t=a){let l=a._$AN;if(void 0===l)a._$AN=l=new Set;else if(l.has(t))break;l.add(t),c(a)}};function h(t){void 0!==this._$AN?(o(this),this._$AM=t,r(this)):this._$AM=t}function n(t,a=!1,l=0){const d=this._$AH,w=this._$AN;if(void 0!==w&&0!==w.size)if(a)if(Array.isArray(d))for(let t=l;t<d.length;t++)s(d[t],!1),o(d[t]);else null!=d&&(s(d,!1),o(d));else s(this,t)}const c=t=>{t.type==w.OA.CHILD&&(t._$AP??=n,t._$AQ??=h)};class f extends w.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,l){super._$AT(t,a,l),r(this),this.isConnected=t._$AU}_$AO(t,a=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),a&&(s(this,t),o(this))}setValue(t){if((0,d.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}},270367:(t,a,l)=>{l.d(a,{Rt:()=>f,sO:()=>i});var d=l(380181);const{I:w}=d.ge,i=t=>null===t||"object"!=typeof t&&"function"!=typeof t,f=t=>void 0===t.strings},16655:(t,a,l)=>{l.d(a,{OA:()=>d,WL:()=>i,u$:()=>e});const d={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...a)=>({_$litDirective$:t,values:a});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,l){this._$Ct=t,this._$AM=a,this._$Ci=l}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}}},563528:(t,a,l)=>{l.d(a,{MZ:()=>n,wk:()=>state_r});var d=l(172803);const w={attribute:!0,type:String,converter:d.W3,reflect:!1,hasChanged:d.Ec},r=(t=w,a,l)=>{const{kind:d,metadata:p}=l;let u=globalThis.litPropertyMetadata.get(p);if(void 0===u&&globalThis.litPropertyMetadata.set(p,u=new Map),"setter"===d&&((t=Object.create(t)).wrapped=!0),u.set(l.name,t),"accessor"===d){const{name:d}=l;return{set(l){const w=a.get.call(this);a.set.call(this,l),this.requestUpdate(d,w,t)},init(a){return void 0!==a&&this.C(d,void 0,t,a),a}}}if("setter"===d){const{name:d}=l;return function(l){const w=this[d];a.call(this,l),this.requestUpdate(d,w,t)}}throw Error("Unsupported decorator location: "+d)};function n(t){return(a,l)=>"object"==typeof l?r(t,a,l):((t,a,l)=>{const d=a.hasOwnProperty(l);return a.constructor.createProperty(l,t),d?Object.getOwnPropertyDescriptor(a,l):void 0})(t,a,l)}function state_r(t){return n({...t,state:!0,attribute:!1})}},79309:(t,a,l)=>{l.d(a,{H:()=>p});var d=l(380181),w=l(16655);const p=(0,w.u$)(class extends w.WL{constructor(t){if(super(t),t.type!==w.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((a=>t[a])).join(" ")+" "}update(t,[a]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in a)a[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(a)}const l=t.element.classList;for(const t of this.st)t in a||(l.remove(t),this.st.delete(t));for(const t in a){const d=!!a[t];d===this.st.has(t)||this.nt?.has(t)||(d?(l.add(t),this.st.add(t)):(l.remove(t),this.st.delete(t)))}return d.c0}})},31216:(t,a,l)=>{l.d(a,{J:()=>o});var d=l(380181);const o=t=>t??d.s6}}]);
//# sourceMappingURL=32467.8d915eecd1.chunk.js.map