(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{923:function(t,e,r){"use strict";r.r(e);r(16),r(10),r(8),r(5),r(14);var n=r(2),o=(r(91),r(29));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{filter:{type:Object,default:function(){}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,r=t.options,r.sortBy,r.sortDesc,n=r.page,r.itemsPerPage,e.next=4,t.$api.Users.retrieveQuery(l({limit:t.options.itemsPerPage,first:t.itemIndex[n-1]?t.itemIndex[n-1].start_id:null,show:["names"]},t.filter));case 4:p=e.sent,t.items=p.body[0],t.itemIndex=p.body[1][0].index,t.totalItems=p.body[1][0].entities,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{items:[],loading:!0,options:{itemsPerPage:10},itemsPerPageOptions:[10,20,50],totalItems:0,itemIndex:[],headers:[{text:"Title",align:"start",sortable:!0,value:"features[0].properties.title",width:"400px"},{text:"Description",value:"features[0].description[0].value",width:"500px"},{text:"Class",value:"features[0].crmClass",width:"150px"}]}},watch:{options:{handler:function(){this.$fetch()},deep:!0},filter:{handler:function(){this.$fetch()},deep:!0}}},f=r(92),m=r(120),h=r.n(m),v=r(929),O=r(951),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-data-table",{attrs:{headers:t.headers,items:t.items,options:t.options,"server-items-length":t.totalItems,loading:t.loading,"calculate-widths":!0,"footer-props":{showFirstLastPage:!0,"items-per-page-options":t.itemsPerPageOptions}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(e){var n=e.pagination,o=e.options,c=e.updateOptions;return[r("v-data-footer",{attrs:{pagination:n,options:o,"items-per-page-options":t.itemsPerPageOptions,showFirstLastPage:""},on:{"update:options":c}})]}},{key:"item.features[0].description[0].value",fn:function(e){var n=e.item;return[n.features[0].description?r("div",{staticClass:"tablecolumndesc"},[t._v("\n      "+t._s(n.features[0].description[0].value)+"\n    ")]):r("div",[t._v("\n      n/a\n    ")])]}}])})}),[],!1,null,null,null);e.default=component.exports;h()(component,{VDataFooter:v.a,VDataTable:O.a})},953:function(t,e,r){"use strict";r.r(e);var n=r(21),o={components:{list:r(923).default},data:function(){return{viewdial:!1,transition:"slide-y-reverse-transition",query:{},view:"list"}},watch:{"$route.params":{handler:function(s){this.parseQuery(s.q)},immediate:!0,deep:!0}},methods:{parseQuery:function(t){try{var q=JSON.parse(t);if("object"!==Object(n.a)(q))throw new Error("faulty list object");this.query=q}catch(t){this.$router.push({name:"list-q",params:{q:"{}"}})}}}},c=r(92),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("list",{attrs:{filter:this.query}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{List:r(923).default})}}]);