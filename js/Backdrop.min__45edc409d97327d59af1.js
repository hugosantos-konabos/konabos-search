webpackJsonpCoveo__temporary([21,25,63],{185:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(26),s=o(3),l=o(1),r=o(16),u=o(12),a=o(4),p=o(7),c=o(8),d=o(2),h=o(30),f=o(92),m=o(220),b=function(t){function e(o,n,s,h,b,v){void 0===b&&(b=i.ModalBox);var y=t.call(this,o,e.ID,s)||this;y.element=o,y.options=n,y.bindings=s,y.result=h,y.origin=v,y.options=c.ComponentOptions.initComponentOptions(o,e,n),y.resultLink=l.$$("a",{className:p.Component.computeCssClassName(f.ResultLink)}),v||(y.origin=y.resultLink.el);var g=l.$$("div",{className:"coveo-youtube-thumbnail-container"});y.resultLink.append(g.el);var O=l.$$("img",{src:a.Utils.getFieldValue(y.result,"ytthumbnailurl"),className:"coveo-youtube-thumbnail-img",alt:y.result.title,title:y.result.title});O.el.style.width=y.options.width,O.el.style.height=y.options.height,O.el.onerror=function(){var t=l.$$("div",{},u.SVGIcons.icons.video).el;r.SVGDom.addStyleToSVGInContainer(t,{width:y.options.width}),l.$$(O).remove(),g.append(t)},g.append(O.el);var k=l.$$("span",{className:"coveo-youtube-thumbnail-play-button"});return g.append(k.el),l.$$(y.element).append(y.resultLink.el),d.Initialization.automaticallyCreateComponentsInsideResult(o,h,{ResultLink:y.options.embed?{onClick:function(){return y.openYoutubeIframe()}}:null}),y.modalbox=new m.AccessibleModal("coveo-youtube-player",y.searchInterface.options.modalContainer,b,{overlayClose:!0}),y}return n(e,t),e.prototype.openResultLink=function(){h.get(this.resultLink.el).openLinkAsConfigured()},e.prototype.openYoutubeIframe=function(){var t=this,e=l.$$("iframe",{src:"https://www.youtube.com/embed/"+this.extractVideoId()+"?autoplay=1",allowfullscreen:"allowfullscreen",width:"100%",height:"100%",title:this.result.title}),o=l.$$("div");o.append(e.el),this.modalbox.openResult({result:this.result,options:{showDate:!0,title:this.result.title},bindings:this.bindings,content:o.el,validation:function(){return!0},origin:this.origin}),l.$$(l.$$(this.modalbox.wrapper).find(".coveo-quickview-close-button")).on("click",function(){t.modalbox.close()})},e.prototype.extractVideoId=function(){return this.result.clickUri.split("watch?v=")[1]},e.ID="YouTubeThumbnail",e.doExport=function(){s.exportGlobally({YouTubeThumbnail:e})},e.options={width:c.ComponentOptions.buildStringOption({defaultValue:"200px"}),height:c.ComponentOptions.buildStringOption({defaultValue:"112px"}),embed:c.ComponentOptions.buildBooleanOption({defaultValue:!0})},e}(p.Component);e.YouTubeThumbnail=b,d.Initialization.registerAutoCreateComponent(b)},220:function(t,e,o){"use strict";var n=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};Object.defineProperty(e,"__esModule",{value:!0});var i=o(26),s=o(465),l=o(6),r=o(1),u=o(25),a=o(20),p=function(){function t(t,e,o,s){void 0===o&&(o=i.ModalBox),void 0===s&&(s={}),this.className=t,this.ownerElement=e,this.modalboxModule=o,this.options=n({sizeMod:"big"},s)}return Object.defineProperty(t.prototype,"isOpen",{get:function(){return!!this.focusTrap},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"element",{get:function(){return this.activeModal&&this.activeModal.modalBox},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"content",{get:function(){return this.activeModal&&this.activeModal.content},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"wrapper",{get:function(){return this.activeModal&&this.activeModal.wrapper},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"headerElement",{get:function(){return this.element&&this.element.querySelector(".coveo-modal-header h1")},enumerable:!0,configurable:!0}),t.prototype.openResult=function(t){this.isOpen||(this.openModalAndTrap({content:t.content,validation:t.validation,origin:t.origin,title:a.DomUtils.getQuickviewHeader(t.result,t.options,t.bindings).el}),this.makeAccessible(t.options.title||t.result.title))},t.prototype.open=function(t){this.isOpen||(this.openModalAndTrap(t),this.makeAccessible())},t.prototype.openModalAndTrap=function(t){var e=this;this.initiallyFocusedElement=t.origin||document.activeElement,this.activeModal=this.modalboxModule.open(t.content,{title:t.title,className:this.className,validation:function(){return e.onModalClose(),t.validation()},body:this.ownerElement,sizeMod:this.options.sizeMod,overlayClose:this.options.overlayClose}),this.focusTrap=new s.FocusTrap(this.element)},t.prototype.close=function(){this.isOpen&&(this.activeModal.close(),this.activeModal=null)},t.prototype.makeAccessible=function(t){this.element.setAttribute("aria-modal","true"),t&&this.headerElement.setAttribute("aria-label",t),this.makeCloseButtonAccessible()},t.prototype.makeCloseButtonAccessible=function(){var t=this.element.querySelector(".coveo-small-close");t.setAttribute("aria-label",l.l("Close")),t.setAttribute("role","button"),t.tabIndex=0,t.focus(),r.$$(t).on("keyup",u.KeyboardUtils.keypressAction(u.KEYBOARD.ENTER,function(){return t.click()}))},t.prototype.onModalClose=function(){this.focusTrap.disable(),this.focusTrap=null,this.initiallyFocusedElement&&document.body.contains(this.initiallyFocusedElement)&&this.initiallyFocusedElement.focus()},t}();e.AccessibleModal=p},237:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0}),o(596);var i=o(26),s=o(3),l=o(1),r=o(4),u=o(7),a=o(8),p=o(2),c=o(185),d=o(15),h=function(t){function e(o,n,s,l,u,c){void 0===c&&(c=i.ModalBox);var d=t.call(this,o,e.ID,s)||this;d.element=o,d.options=n,d.result=l,d._window=u,d.ModalBox=c,d.options=a.ComponentOptions.initComponentOptions(o,e,n),d._window=d._window||window;var h="";return d.options.overlayColor&&(h+="linear-gradient("+d.options.overlayColor+", "+(d.options.overlayGradient?"rgba(0,0,0,0)":d.options.overlayColor)+"), "),h+="url('"+(d.options.imageUrl||r.Utils.getFieldValue(l,d.options.imageField))+"') center center",d.element.style.background=h,d.element.style.backgroundSize="cover",p.Initialization.automaticallyCreateComponentsInsideResult(o,l),d.configureSpecialBackdropActions(),d}return n(e,t),e.prototype.configureSpecialBackdropActions=function(){if(r.Utils.getFieldValue(this.result,"ytthumbnailurl")){var t=new c.YouTubeThumbnail(l.$$("div").el,{embed:!0},this.getBindings(),this.result,this.ModalBox,this.element);(new d.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){l.$$(e.target).hasClass("CoveoResultLink")||t.openResultLink()}).build()}},e.ID="Backdrop",e.doExport=function(){s.exportGlobally({Backdrop:e})},e.options={imageUrl:a.ComponentOptions.buildStringOption(),imageField:a.ComponentOptions.buildFieldOption(),overlayColor:a.ComponentOptions.buildColorOption(),overlayGradient:a.ComponentOptions.buildBooleanOption({defaultValue:!1,depend:"overlayColor"})},e}(u.Component);e.Backdrop=h,p.Initialization.registerAutoCreateComponent(h)},465:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(31),i=o(0),s=o(1),l=function(){function t(t){this.container=t,this.hiddenElements=[],this.enable()}return Object.defineProperty(t.prototype,"focusableElements",{get:function(){return i.sortBy(this.container.querySelectorAll("[tabindex]"),function(t){return t.tabIndex})},enumerable:!0,configurable:!0}),t.prototype.disable=function(){document.removeEventListener("focusin",this.focusInEvent),document.removeEventListener("focusout",this.focusOutEvent),this.showHiddenElements(),this.enabled=!1},t.prototype.enable=function(){var t=this;document.addEventListener("focusin",this.focusInEvent=function(e){return t.onFocusIn(e)}),document.addEventListener("focusout",this.focusOutEvent=function(e){return t.onFocusOut(e)}),this.hideAllExcept(this.container),this.enabled=!0},t.prototype.showHiddenElements=function(){for(;this.hiddenElements.length;)this.hiddenElements.pop().removeAttribute("aria-hidden")},t.prototype.hideElement=function(t){t.getAttribute("aria-hidden")||(this.hiddenElements.push(t),t.setAttribute("aria-hidden",""+!0))},t.prototype.hideSiblings=function(t){var e=this,o=t.parentElement;o&&i.without(s.$$(o).children(),t).forEach(function(t){e.hideElement(t)})},t.prototype.hideAllExcept=function(t){this.hideSiblings(t);var e=t.parentElement;e&&e!==document.body&&this.hideAllExcept(e)},t.prototype.getFocusableSibling=function(t,e){void 0===e&&(e=!1);var o=this.focusableElements,n=o.indexOf(t);return-1===n?null:o[(n+(e?-1:1)+o.length)%o.length]},t.prototype.focusSibling=function(t,e){void 0===e&&(e=!1);var o=this.getFocusableSibling(t,e);o&&o.focus()},t.prototype.focusFirstElement=function(){var t=this.focusableElements;t.length&&t[0].focus()},t.prototype.elementIsBefore=function(t,e){return!!e&&t.compareDocumentPosition(e)===Node.DOCUMENT_POSITION_PRECEDING},t.prototype.onLosingFocus=function(t,e){var o=this;n.Defer.defer(function(){o.enabled&&(o.enabled=!1,t&&o.focusIsAllowed(t)?o.focusSibling(t,o.elementIsBefore(t,e)):o.focusFirstElement(),o.enabled=!0)})},t.prototype.focusIsAllowed=function(t){return this.container.contains(t)},t.prototype.elementIsInPage=function(t){return t&&t!==document.body.parentElement},t.prototype.onFocusIn=function(t){if(this.enabled){var e=t.relatedTarget;if(!this.elementIsInPage(e)){var o=t.target;this.elementIsInPage(o)&&(this.focusIsAllowed(o)||this.onLosingFocus(null,o))}}},t.prototype.onFocusOut=function(t){if(this.enabled){var e=t.relatedTarget;this.elementIsInPage(e)&&(e&&this.focusIsAllowed(e)||this.onLosingFocus(t.target,e))}},t}();e.FocusTrap=l},532:function(t,e){},596:function(t,e){},92:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(7),s=o(8),l=o(28),r=o(10),u=o(29),a=o(68),p=o(24),c=o(181),d=o(2),h=o(21),f=o(5),m=o(4),b=o(31),v=o(1),y=o(114),g=o(22),O=o(0),k=o(3);o(532);var w=o(15),C=function(t){function e(o,n,i,u,a){var c=t.call(this,o,e.ID,i)||this;c.element=o,c.options=n,c.bindings=i,c.result=u,c.os=a,c.logOpenDocument=O.debounce(function(){c.queryController.saveLastQuery();var t=v.$$(c.element).getAttribute("href");void 0!=t&&""!=t||(t=c.escapedClickUri),c.usageAnalytics.logClickEvent(r.analyticsActionCauseList.documentOpen,{documentURL:t,documentTitle:c.result.title,author:m.Utils.getFieldValue(c.result,"author")},c.result,c.root),b.Defer.flush()},1500,!0);var d=s.ComponentOptions.initComponentOptions(o,e,n),h=c.componentOptionsModel.get(l.ComponentOptionsModel.attributesEnum.resultLink);if(c.options=O.extend({},d,h),c.result=u||c.resolveResult(),null==c.options.openQuickview&&(c.options.openQuickview="ExchangeCrawler"==u.raw.connectortype&&p.DeviceUtils.isMobileDevice()),c.element.setAttribute("tabindex","0"),f.Assert.exists(c.componentOptionsModel),f.Assert.exists(c.result),!c.quickviewShouldBeOpened()){var y=O.once(function(){return c.logOpenDocument()});v.$$(o).on(["contextmenu","click","mousedown","mouseup"],y);var g;v.$$(o).on("touchstart",function(){g=window.setTimeout(y,1e3)}),v.$$(o).on("touchend",function(){g&&clearTimeout(g)})}return c.renderUri(o,u),c.bindEventToOpen(),c}return n(e,t),e.prototype.renderUri=function(t,e){if(/^\s*$/.test(this.element.innerHTML)){var o=this.getDisplayedTitle();this.element.innerHTML=o,this.element.title||(this.element.title=this.getDisplayedTitleAsText())}},e.prototype.openLink=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.location.href=this.getResultUri()},e.prototype.openLinkInNewWindow=function(t){void 0===t&&(t=!0),t&&this.logOpenDocument(),window.open(this.getResultUri(),"_blank")},e.prototype.openLinkInOutlook=function(t){void 0===t&&(t=!0),this.hasOutlookField()&&(t&&this.logOpenDocument(),this.openLink())},e.prototype.openLinkAsConfigured=function(t){void 0===t&&(t=!0),this.toExecuteOnOpen&&(t&&this.logOpenDocument(),this.toExecuteOnOpen())},e.prototype.bindEventToOpen=function(){return this.bindOnClickIfNotUndefined()||this.bindOpenQuickviewIfNotUndefined()||this.setHrefIfNotAlready()||this.openLinkThatIsNotAnAnchor()},e.prototype.getDisplayedTitle=function(){if(this.options.titleTemplate){var t=g.StringUtils.buildStringTemplateFromResult(this.options.titleTemplate,this.result);return t?y.StreamHighlightUtils.highlightStreamText(t,this.result.termsToHighlight,this.result.phrasesToHighlight):this.escapedClickUri}return this.result.title?a.HighlightUtils.highlightString(this.result.title,this.result.titleHighlights,null,"coveo-highlight"):this.escapedClickUri},e.prototype.getDisplayedTitleAsText=function(){var t=v.$$("div");return t.setHtml(this.getDisplayedTitle()),t.text()},Object.defineProperty(e.prototype,"escapedClickUri",{get:function(){return O.escape(this.result.clickUri)},enumerable:!0,configurable:!0}),e.prototype.bindOnClickIfNotUndefined=function(){var t=this;return void 0!=this.options.onClick&&(this.toExecuteOnOpen=function(e){t.options.onClick.call(t,e,t.result)},(new w.AccessibleButton).withElement(this.element).withLabel(this.result.title).withSelectAction(function(e){return t.toExecuteOnOpen(e)}).build(),!0)},e.prototype.bindOpenQuickviewIfNotUndefined=function(){var t=this;return!!this.quickviewShouldBeOpened()&&(this.toExecuteOnOpen=function(){v.$$(t.bindings.resultElement).trigger(u.ResultListEvents.openQuickview)},v.$$(this.element).on("click",function(e){e.preventDefault(),t.toExecuteOnOpen()}),!0)},e.prototype.openLinkThatIsNotAnAnchor=function(){var t=this;return!this.elementIsAnAnchor()&&(this.toExecuteOnOpen=function(){t.options.alwaysOpenInNewWindow?t.options.openInOutlook?t.openLinkInOutlook():t.openLinkInNewWindow():t.openLink()},v.$$(this.element).on("click",function(){t.toExecuteOnOpen()}),!0)},e.prototype.setHrefIfNotAlready=function(){return!(!this.elementIsAnAnchor()||m.Utils.isNonEmptyString(v.$$(this.element).getAttribute("href")))&&(v.$$(this.element).setAttribute("href",this.getResultUri()),!this.options.alwaysOpenInNewWindow||this.options.openInOutlook&&this.hasOutlookField()||v.$$(this.element).setAttribute("target","_blank"),!0)},e.prototype.filterProtocol=function(t){var e=/^(https?|ftp|file|mailto|tel):/i.test(t),o=/^\//.test(t);return e||o?t:""},e.prototype.getResultUri=function(){if(this.options.hrefTemplate){var t=g.StringUtils.buildStringTemplateFromResult(this.options.hrefTemplate,this.result);return this.filterProtocol(t)}return void 0==this.options.field&&this.options.openInOutlook&&this.setField(),void 0!=this.options.field?this.filterProtocol(m.Utils.getFieldValue(this.result,this.options.field)):this.filterProtocol(this.result.clickUri)},e.prototype.elementIsAnAnchor=function(){return"A"==this.element.tagName},e.prototype.setField=function(){var t=m.Utils.exists(this.os)?this.os:c.OSUtils.get();t==c.OS_NAME.MACOSX&&this.hasOutlookField()?this.options.field="@outlookformacuri":t==c.OS_NAME.WINDOWS&&this.hasOutlookField()&&(this.options.field="@outlookuri")},e.prototype.hasOutlookField=function(){var t=m.Utils.exists(this.os)?this.os:c.OSUtils.get();return t==c.OS_NAME.MACOSX&&void 0!=this.result.raw.outlookformacuri||t==c.OS_NAME.WINDOWS&&void 0!=this.result.raw.outlookuri},e.prototype.isUriThatMustBeOpenedInQuickview=function(){return 0==this.escapedClickUri.toLowerCase().indexOf("ldap://")},e.prototype.quickviewShouldBeOpened=function(){return(this.options.openQuickview||this.isUriThatMustBeOpenedInQuickview())&&h.QueryUtils.hasHTMLVersion(this.result)},e.ID="ResultLink",e.doExport=function(){k.exportGlobally({ResultLink:e})},e.options={field:s.ComponentOptions.buildFieldOption(),openInOutlook:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),openQuickview:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),alwaysOpenInNewWindow:s.ComponentOptions.buildBooleanOption({defaultValue:!1}),hrefTemplate:s.ComponentOptions.buildStringOption(),titleTemplate:s.ComponentOptions.buildStringOption(),onClick:s.ComponentOptions.buildCustomOption(function(){return null})},e}(i.Component);e.ResultLink=C,d.Initialization.registerAutoCreateComponent(C)}});
//# sourceMappingURL=Backdrop.min__45edc409d97327d59af1.js.map