(self.webpackChunkmega_manipulator=self.webpackChunkmega_manipulator||[]).push([[683],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,h=f["".concat(c,".").concat(m)]||f[m]||l[m]||a;return t?n.createElement(h,i(i({ref:r},p),{},{components:t})):n.createElement(h,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9147:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i={sidebar_position:3},s={unversionedId:"Search hosts/etsy_hound",id:"Search hosts/etsy_hound",isDocsHomePage:!1,title:"Etsy/Hound search",description:"Quick easy setup with docker!",source:"@site/docs/Search hosts/etsy_hound.md",sourceDirName:"Search hosts",slug:"/Search hosts/etsy_hound",permalink:"/docs/Search hosts/etsy_hound",editUrl:"https://github.com/mega-manipulator/mega-manipulator.github.io/tree/docsrc/docs/Search hosts/etsy_hound.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sourcegraph search",permalink:"/docs/Search hosts/sourcegraph"},next:{title:"Contributing",permalink:"/docs/contributing"}},c=[{value:"Transfer search from sourcegraph to plugin",id:"transfer-search-from-sourcegraph-to-plugin",children:[]}],u={toc:c};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Quick easy setup with docker!",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/docker/v/etsy/hound?label=etsy%2Fhound%20version&sort=semver",alt:"Docker Image Version (latest semver)"}),(0,a.kt)("br",{parentName:"p"}),"\n","No real ",(0,a.kt)("em",{parentName:"p"},"bells and whistles"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Takes some admin effort for every repo to be inserted in config.json, but that might not be an issue if you have a few huge mono-repos."),(0,a.kt)("h2",{id:"transfer-search-from-sourcegraph-to-plugin"},"Transfer search from sourcegraph to plugin"),(0,a.kt)("p",null,"Copy and paste search string from search field. Basic search will be applied."))}p.isMDXComponent=!0}}]);