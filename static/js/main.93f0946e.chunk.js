(this["webpackJsonpgoit-hw-03-image-finder"]=this["webpackJsonpgoit-hw-03-image-finder"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),o=n.n(r),c=n(8),i=n.n(c),s=(n(14),n(6)),l=n(2),u=n(3),h=n(5),p=n(4),d=(n(15),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).openModal=function(){e.props.openModal(e.props.largeImageURL)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,n=e.id;return Object(a.jsx)("li",{className:"ImageGalleryItem",id:n,children:Object(a.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image",onClick:this.openModal})})}}]),n}(r.Component));d.propDefault={webformatURL:"https://cdn.icon-icons.com/icons2/1489/PNG/512/loadingcircles_102612.png"};var j=d,f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).removeListener=function(t){"Escape"===t.key&&e.props.onClose()},e.clickToOverlay=function(){e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.removeListener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.removeListener)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"Overlay",onClick:this.clickToOverlay,children:Object(a.jsx)("div",{className:"Modal",children:Object(a.jsx)("img",{src:this.props.url,alt:"loading"})})})}}]),n}(r.Component);f.propDefault={url:"https://cdn.icon-icons.com/icons2/1489/PNG/512/loadingcircles_102612.png"};var b=f,m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1,url:""},e.openModal=function(t){e.setState((function(e){return{isOpen:!e.isOpen,url:t}}))},e.closeModal=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("ul",{className:"ImageGallery",children:this.props.picture.map((function(t,n){return Object(a.jsx)(j,{id:t.id,webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,openModal:e.openModal},n)}))}),this.state.isOpen&&Object(a.jsx)(b,{url:this.state.url,onClose:this.closeModal})]})}}]),n}(r.Component),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={qwery:""},e.handleChange=function(t){e.setState({qwery:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.qwery&&e.props.getQwery(e.state.qwery),e.claerForm()},e.claerForm=function(){e.setState({qwery:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.qwery,onChange:this.handleChange})]})})}}]),n}(r.Component),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).clickToBtn=function(){e.props.getMore()},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("button",{className:"Button",onClick:this.clickToBtn,children:"Load More"})})}}]),n}(r.Component),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("svg",{className:"Loader",width:"80",height:"80",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#00BFFF","aria-label":"audio-loading",children:Object(a.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(a.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(a.jsx)("circle",{strokeOpacity:".4",cx:"10",cy:"10",r:"10"}),Object(a.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(a.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 10 10",to:"150 10 10",dur:"1s",repeatCount:"indefinite"})})]})})})})}}]),n}(r.Component),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={info:{qwery:"",page:1},content:[],isOpenLoader:!1},e.goToBootm=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.handleGetQwery=function(t){e.setState({info:{qwery:t,page:2}}),e.changeLoader(!0),e.callToServer(t,1).then((function(t){e.setState({content:Object(s.a)(t.hits)})})).finally((function(){e.changeLoader(!1)}))},e.callToServer=function(e,t){var n="https://pixabay.com/api/?q=".concat(e,"&page=1&key=").concat("18650833-a90d8ca1012121c54ee062bd0","&image_type=photo&orientation=horizontal&per_page=12&page=").concat(t);return fetch(n).then((function(e){return e.json()})).then((function(e){return e}))},e.handleGetMore=function(){var t=e.state.info,n=t.qwery,a=t.page;e.setState((function(e){return{info:{page:e.info.page+1,qwery:e.info.qwery}}})),e.changeLoader(!0),e.callToServer(n,a).then((function(t){e.setState((function(e){return{content:[].concat(Object(s.a)(e.content),Object(s.a)(t.hits))}}))})).finally((function(){e.changeLoader(!1)}))},e.changeLoader=function(t){t&&e.goToBootm(),e.setState({isOpenLoader:t})},e}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(e,t){return t.content!==this.state.content&&this.goToBootm(),t.content!==this.state.content}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O,{getQwery:this.handleGetQwery}),Object(a.jsx)(m,{picture:this.state.content}),0!==this.state.content.length&&Object(a.jsx)(g,{getMore:this.handleGetMore}),this.state.isOpenLoader&&Object(a.jsx)(v,{})]})}}]),n}(r.Component);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.93f0946e.chunk.js.map