(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{913:function(t,e,n){},915:function(t,e,n){"use strict";var r=n(913);n.n(r).a},916:function(t,e,n){},919:function(t,e,n){"use strict";var r={props:{options:{type:Array,default:function(){}},geojsonitems:{type:Array,default:function(){return[]}},markeritems:{type:Array,default:function(){return[]}}},data:function(){return{loading:!1,show:!0,enableTooltip:!0,zoom:6,center:[48.2082,16.3738],url:"https://tile.jawg.io/jawg-light/{z}/{x}/{y}.png?access-token=TUhizWedCN04NDjuRQtXfgE0HSuYwHzro3NRUDa3LMUlLbymREaTyUW2lpuoNnMz",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},methods:{setBounds:function(){var t=this;this.$nextTick((function(){if(t.$refs.features){var e=t.$refs.features.mapObject.getBounds();e._northEast&&t.$refs.map.mapObject.fitBounds(e)}}))}},watch:{geojsonitems:{handler:function(){this.setBounds()},deep:!0,immediate:!0}},beforeDestroy:function(){this.$nextTick((function(){}))}},o=(n(915),n(92)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("no-ssr",[e("div",{staticClass:"mapcontainer"},[e("l-map",{ref:"map",attrs:{zoom:13,center:this.center,options:this.options}},[e("l-tile-layer",{attrs:{url:this.url}}),this._v(" "),e("l-feature-group",{ref:"features"},this._l(this.geojsonitems,(function(t){return e("l-geo-json",{key:t.features[0]["@id"],attrs:{geojson:t}})})),1)],1)],1)])}),[],!1,null,null,null);e.a=component.exports},924:function(t,e,n){"use strict";n.r(e);n(16),n(10),n(8),n(5),n(14);var r=n(2),o=(n(91),n(29)),map=n(919);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{filter:{type:Object,default:function(){}}},components:{qmap:map.a},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.options,n.sortBy,n.sortDesc,r=n.page,n.itemsPerPage,e.next=4,t.$api.Users.retrieveQuery(l({limit:t.options.itemsPerPage,first:t.itemIndex[r-1]?t.itemIndex[r-1].start_id:null,show:["detailed"]},t.filter));case 4:p=e.sent,t.items=p.body[0],t.itemIndex=p.body[1][0].index,t.totalItems=p.body[1][0].entities,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{items:[],loading:!0,options:{itemsPerPage:50},itemsPerPageOptions:[10,20,50],totalItems:0,itemIndex:[],headers:[{text:"Class",value:"features[0].crmClass",width:"150px"},{text:"Title",align:"start",sortable:!0,value:"features[0].properties.title",width:"200px"}]}},watch:{options:{handler:function(){this.$fetch()},deep:!0},filter:{handler:function(){this.$fetch()},deep:!0}}},d=(n(938),n(92)),m=n(120),h=n.n(m),v=n(907),y=n(929),w=n(951),j=n(909),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{xs:"0",lg:"9"}},[n("div",{staticClass:"fullheight"},[this.loading?t._e():n("qmap",{attrs:{geojsonitems:t.items}})],1)]),t._v(" "),n("v-col",{attrs:{xs:"12",lg:"3"}},[n("v-data-table",{attrs:{headers:t.headers,items:t.items,options:t.options,"server-items-length":t.totalItems,loading:t.loading,"calculate-widths":!0,"hide-default-footer":!0},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(e){var r=e.pagination,o=e.options,c=e.updateOptions;return[n("v-data-footer",{attrs:{pagination:r,options:o,"items-per-page-options":t.itemsPerPageOptions,showFirstLastPage:""},on:{"update:options":c}})]}},{key:"item.features[0].description[0].value",fn:function(e){var r=e.item;return[r.features[0].description?n("div",{staticClass:"tablecolumndesc"},[t._v("\n        "+t._s(r.features[0].description[0].value)+"\n      ")]):n("div",[t._v("\n        n/a\n      ")])]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCol:v.a,VDataFooter:y.a,VDataTable:w.a,VRow:j.a})},938:function(t,e,n){"use strict";var r=n(916);n.n(r).a},954:function(t,e,n){"use strict";n.r(e);var r=n(21),o={components:{maplist:n(924).default},data:function(){return{viewdial:!1,transition:"slide-y-reverse-transition",query:{},view:"list"}},watch:{"$route.params":{handler:function(s){this.parseQuery(s.q)},immediate:!0,deep:!0}},methods:{parseQuery:function(t){try{var q=JSON.parse(t);if("object"!==Object(r.a)(q))throw new Error("faulty list object");this.query=q}catch(t){console.log(t),this.$router.push({name:"map-q",params:{q:"{}"}})}}}},c=n(92),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("maplist",{attrs:{filter:this.query}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Maplist:n(924).default})}}]);