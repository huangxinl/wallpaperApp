(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index","pages/tag/tag"],{"47fd":function(t,e,n){"use strict";n.r(e);var i=n("718f"),a=n("c73b");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("57e2");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"57e2":function(t,e,n){"use strict";var i=n("c715"),a=n.n(i);a.a},5855:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"58e0":function(t,e,n){"use strict";n.r(e);var i=n("5855"),a=n("7383");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("61e2");var o=n("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},"61e2":function(t,e,n){"use strict";var i=n("a354"),a=n.n(i);a.a},"6bbd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{imgRoot:"https://jp.9188u.com/jp_wallpaper_files/",list:[]}},created:function(){this._getClassify()},methods:{goList:function(e){console.log(e.classifyName," at pages\\tag\\tag.vue:26"),console.log("-------",e.id," at pages\\tag\\tag.vue:27"),t.navigateTo({url:"../list/list?id=".concat(e.id,"&name=").concat(e.classifyName)})},_getClassify:function(){var e=this;t.request({url:"https://jp.9188u.com/cl/getClassifyByClassifyName?classify=%E5%88%86%E7%B1%BB",success:function(t){e.list=t.data.list.slice(0,8),console.log("---list----",e.list," at pages\\tag\\tag.vue:39")}})}}};e.default=n}).call(this,n("6e42")["default"])},"718f":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},7383:function(t,e,n){"use strict";n.r(e);var i=n("6bbd"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},9769:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("58e0"));function a(t){return t&&t.__esModule?t:{default:t}}var s=function(){return n.e("components/jing-swiper").then(n.bind(null,"4138"))},o={components:{Tag:i.default,NavSwipper:s},data:function(){return{refreshing:!1,lists:[],imgList:[],fetchPageNum:1,img_root:"https://jp.9188u.com/jp_wallpaper_files/",swipperList:["http://jp.9188u.com/jp_wallpaper_files/img/专辑/情侣/15625534967361.jpg","http://jp.9188u.com/jp_wallpaper_files/classify_img/1557126562671.jpg","http://jp.9188u.com/jp_wallpaper_files/img/专辑/古典美人/15571256849831.jpg","http://jp.9188u.com/jp_wallpaper_files/img/专辑/创意多格拼接/15571260899725.jpg","http://jp.9188u.com/jp_wallpaper_files/img/专辑/情侣/15625539376411.jpg","http://jp.9188u.com/jp_wallpaper_files/img/专辑/情侣/15625537095161.jpg"]}},onLoad:function(){this.getData()},onPullDownRefresh:function(){console.log("下拉刷新"," at pages\\index\\index.vue:52"),this.refreshing=!0,this.getData()},onReachBottom:function(){console.log("滑动到页面底部"," at pages\\index\\index.vue:57"),this.getData()},methods:{change:function(t){this.current=t.detail.current},getData:function(){var e=this;t.request({url:"https://jp.9188u.com/getImg?size=5&classify=每日精选&page="+(this.refreshing?1:this.fetchPageNum),success:function(n){var i=n.data.list.slice(0,5),a=[];if(console.log(n.data.list.slice(0,5)," at pages\\index\\index.vue:70"),i.forEach(function(t){a.push(e.img_root+t.imgPath)}),200!==n.statusCode)console.log("请求失败。"," at pages\\index\\index.vue:76");else{if(e.refreshing&&n.data.list[0].id===e.imgList[0].id)return t.showToast({title:"已是最新列表",icon:"none"}),e.refreshing=!1,void t.stopPullDownRefresh();e.refreshing?(e.refreshing=!1,t.stopPullDownRefresh(),e.imgList=n.data.list,e.fetchPageNum=2):(e.imgList=e.imgList.concat(n.data.list),console.log("imglist-----------**************",e.imgList," at pages\\index\\index.vue:95"),e.fetchPageNum+=1)}},fail:function(){t.showModal({content:"请求失败，请重试!",showCancel:!1})}})},goDetail:function(e){t.navigateTo({url:"../detail/detailindex?data="+encodeURIComponent(JSON.stringify(e))})}}};e.default=o}).call(this,n("6e42")["default"])},a354:function(t,e,n){},c715:function(t,e,n){},c73b:function(t,e,n){"use strict";n.r(e);var i=n("9769"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a}},[["718a","common/runtime","common/vendor"]]]);