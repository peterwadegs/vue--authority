webpackJsonp([7],{312:function(t,e,r){function n(t){r(393)}var i=r(2)(r(369),r(409),n,"data-v-1db85ee6",null);t.exports=i.exports},320:function(t,e,r){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"记录",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"永久删除";return new o.a(function(n,i){a.MessageBox.confirm("此操作将"+e+t+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){n()}).catch(function(){r.i(a.Message)({type:"info",message:"已取消此操作"})})})}e.a=n;var i=r(26),o=r.n(i),a=r(38);r.n(a)},369:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(120),i=r.n(n),o=r(122),a=r.n(o),s=r(26),c=r.n(s),l=r(377),u=r.n(l),h=r(376),d=r.n(h),f=r(320);e.default={data:function(){return{tableData:[],menuIdOptions:[],tabActiveName:"0",tabActiveIndex:0,formTitle:null,formVisible:!1,formSubmiting:!1,createdItem:{id:null,parentId:null,url:null,description:null},deletedForm:{id:null},batchFormTitle:null,batchFormVisible:!1,batchFormSubmiting:!1,classLists:[],controller:"",resList:[],expandedKeys:[],checkedKeys:[],methodsList:{},defaultProps:{label:"title"}}},computed:{sonList:function(){return Array.isArray(this.tableData)&&0==this.tableData.length?[]:this.tableData[this.tabActiveIndex].children}},watch:{tabActiveName:function(){this.tabActiveIndex=Number(this.tabActiveName)}},mounted:function(){this.dataInit(),this.classList()},methods:{classList:function(){var t=this;this.$api.system.action.getClasses({}).then(function(e){t.classLists=e.data.data})},dataInit:function(){var t=this;return d()(u.a.mark(function e(){var r,n,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getMenuList().catch(function(t){console.log(t)});case 2:return r=e.sent,e.next=5,t.getResourceList().catch(function(t){console.log(t)});case 5:n=e.sent,n.forEach(function(t){var e=r.map(function(t){return t.id}).indexOf(t.parentId);e<0||(void 0===r[e].children&&(r[e].children=[]),r[e].children.push(t))}),i=r.filter(function(t){return 0==t.parentId}),r.forEach(function(t){var e=i.map(function(t){return t.id}).indexOf(t.parentId);e<0||(void 0===i[e].children&&(i[e].children=[]),i[e].children.push(t))}),t.tableData=i,console.log(t.tableData);case 11:case"end":return e.stop()}},e,t)}))()},getMenuList:function(){var t=this;return new c.a(function(e,r){t.$api.system.menu.list({data:{limit:100,current_page:1,parentId:null}}).then(function(r){var n=r.data.data;t.menuIdOptions=a()(n).map(function(t){return{label:n[t].title,value:n[t].id}}),e(r.data.data)}).catch(function(t){r(t)})})},getResourceList:function(){var t=this;return new c.a(function(e,r){t.$api.system.action.all({}).then(function(t){e(t.data.data)}).catch(function(t){r(t)})})},clearDialog:function(){console.log(this.resList),this.createdItem.id=null,this.createdItem.parentId=null,this.createdItem.url=null,this.createdItem.description=null,this.controller="",this.resList=[],this.checkedKeys=[]},showDialog:function(t,e){"create"===t?(this.batchFormVisible=!0,this.clearDialog(),this.batchFormTitle="新建URI资源",this.createdItem.parentId=e.id,this.getAlreadyChecked(e)):(this.formVisible=!0,this.clearDialog(),this.formTitle="修改URI资源",i()(this.createdItem,e))},commitForm:function(){var t=this;this.formSubmiting=!0,this.$api.system.action.save({data:this.createdItem}).then(function(e){t.formSubmiting=!1,t.formVisible=!1,t.$notify({title:"成功",message:"保存成功",type:"success",duration:1500}),console.log(e),t.dataInit()}).catch(function(e){t.formSubmiting=!1,t.$notify({title:"错误",message:"保存失败",type:"error",duration:3e3}),console.log(e)})},batchCommitForm:function(){var t=this,e=this.$refs.tree.getCheckedKeys();console.log(e),this.batchFormSubmiting=!0,this.$api.system.action.batchSave({data:{parentId:this.createdItem.parentId,resources:e,class_name:this.controller}}).then(function(e){t.batchFormSubmiting=!1,t.batchFormVisible=!1,t.$notify({title:"成功",message:"保存成功",type:"success",duration:1500}),t.dataInit(),t.$refs.tree.setCheckedKeys([]),console.log(e)}).catch(function(e){t.batchFormSubmiting=!1,t.$notify({title:"错误",message:"保存失败",type:"error",duration:3e3}),t.$refs.tree.setCheckedKeys([]),console.log(e)})},deleteRecord:function(t){var e=this;r.i(f.a)(" uri资源 "+t.url).then(function(){e.deletedForm.id=t.id,e.$api.system.action.delete({data:e.deletedForm}).then(function(t){e.$notify({title:"成功",message:"删除成功",type:"success",duration:1500}),e.dataInit(),console.log(t)}).catch(function(t){e.formSubmiting=!1,e.$notify({title:"错误",message:"删除失败",type:"error",duration:3e3}),console.log(t)})})},getResources:function(t){var e=this;if(!t)return!1;this.$api.system.action.getResources({data:{str:t}}).then(function(t){e.methodsList=t.data.data;var r=[];for(var n in e.methodsList)e.methodsList.hasOwnProperty(n)&&r.push({title:e.methodsList[n].url+" 【"+e.methodsList[n].desc+"】",url:e.methodsList[n].url});e.resList=r})},getAlreadyChecked:function(t){var e=[];if(t.hasOwnProperty("children")&&t.children.constructor===Array)for(var r=0;r<t.children.length;r++)e.push(t.children[r].url);this.checkedKeys=e},cancel:function(){this.batchFormVisible=!1,console.log(this.$refs.tree.getCheckedKeys()),this.$refs.tree.setCheckedKeys([])},handleClose:function(){this.cancel()}}}},376:function(t,e,r){"use strict";e.__esModule=!0;var n=r(26),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){return function(){var e=t.apply(this,arguments);return new i.default(function(t,r){function n(o,a){try{var s=e[o](a),c=s.value}catch(t){return void r(t)}if(!s.done)return i.default.resolve(c).then(function(t){n("next",t)},function(t){n("throw",t)});t(c)}return n("next")})}}},377:function(t,e,r){t.exports=r(401)},385:function(t,e,r){e=t.exports=r(301)(!0),e.push([t.i,".el-menu[data-v-1db85ee6]{background-color:#fff}.is-active[data-v-1db85ee6]{font-weight:600}.box-card[data-v-1db85ee6]{margin:10px;max-height:200px;overflow:auto}.pull-right[data-v-1db85ee6]{float:right}.list-item[data-v-1db85ee6]{margin:5px 0}.item-content[data-v-1db85ee6]{line-height:22px;font-size:12px}","",{version:3,sources:["G:/tmp/vue--authority/src/views/system/action.vue"],names:[],mappings:"AACA,0BACI,qBAAuB,CAC1B,AACD,4BACI,eAAiB,CACpB,AACD,2BACI,YAAa,AACb,iBAAkB,AAClB,aAAe,CAClB,AACD,6BACI,WAAa,CAChB,AACD,4BACI,YAAgB,CACnB,AACD,+BACI,iBAAkB,AAClB,cAAgB,CACnB",file:"action.vue",sourcesContent:["\n.el-menu[data-v-1db85ee6] {\r\n    background-color: #fff;\n}\n.is-active[data-v-1db85ee6] {\r\n    font-weight: 600;\n}\n.box-card[data-v-1db85ee6] {\r\n    margin: 10px;\r\n    max-height: 200px;\r\n    overflow: auto;\n}\n.pull-right[data-v-1db85ee6] {\r\n    float: right;\n}\n.list-item[data-v-1db85ee6] {\r\n    margin: 5px 0px;\n}\n.item-content[data-v-1db85ee6] {\r\n    line-height: 22px;\r\n    font-size: 12px;\n}\r\n\r\n"],sourceRoot:""}])},393:function(t,e,r){var n=r(385);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(302)("7796b3be",n,!0)},401:function(t,e,r){var n=function(){return this}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=r(402),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},402:function(t,e){!function(e){"use strict";function r(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,a=Object.create(o.prototype),s=new f(n||[]);return a._invoke=l(t,r,s),a}function n(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(r,i,o,a){var s=n(t[r],t,i);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&y.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},a)}a(s.arg)}function r(t,r){function n(){return new Promise(function(n,i){e(t,r,n,i)})}return i=i?i.then(n,n):n()}var i;this._invoke=r}function l(t,e,r){var i=C;return function(o,a){if(i===k)throw new Error("Generator is already running");if(i===F){if("throw"===o)throw a;return p()}for(r.method=o,r.arg=a;;){var s=r.delegate;if(s){var c=u(s,r);if(c){if(c===B)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===C)throw i=F,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=k;var l=n(t,e,r);if("normal"===l.type){if(i=r.done?F:L,l.arg===B)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(i=F,r.method="throw",r.arg=l.arg)}}}function u(t,e){var r=t.iterator[e.method];if(r===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,u(t,e),"throw"===e.method))return B;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return B}var i=n(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,B;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,B):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,B)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function f(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function m(t){if(t){var e=t[x];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(y.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=v,e.done=!0,e};return n.next=n}}return{next:p}}function p(){return{value:v,done:!0}}var v,g=Object.prototype,y=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},x=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",A=b.toStringTag||"@@toStringTag",I="object"==typeof t,_=e.regeneratorRuntime;if(_)return void(I&&(t.exports=_));_=e.regeneratorRuntime=I?t.exports:{},_.wrap=r;var C="suspendedStart",L="suspendedYield",k="executing",F="completed",B={},E={};E[x]=function(){return this};var O=Object.getPrototypeOf,$=O&&O(O(m([])));$&&$!==g&&y.call($,x)&&(E=$);var R=a.prototype=i.prototype=Object.create(E);o.prototype=R.constructor=a,a.constructor=o,a[A]=o.displayName="GeneratorFunction",_.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===o||"GeneratorFunction"===(e.displayName||e.name))},_.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,A in t||(t[A]="GeneratorFunction")),t.prototype=Object.create(R),t},_.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[w]=function(){return this},_.AsyncIterator=c,_.async=function(t,e,n,i){var o=new c(r(t,e,n,i));return _.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},s(R),R[A]="Generator",R[x]=function(){return this},R.toString=function(){return"[object Generator]"},_.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},_.values=m,f.prototype={constructor:f,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&y.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,n){return o.type="throw",o.arg=t,r.next=e,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var a=y.call(i,"catchLoc"),s=y.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&y.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,B):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),B},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),d(r),B}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;d(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:m(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=v),B}}}(function(){return this}()||Function("return this")())},409:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"components-container"},[r("el-tabs",{model:{value:t.tabActiveName,callback:function(e){t.tabActiveName=e},expression:"tabActiveName"}},t._l(t.tableData,function(t,e){return r("el-tab-pane",{key:e,attrs:{label:t.title,name:String(e)}})}),1),t._v(" "),r("el-row",t._l(t.sonList,function(e,n){return r("el-col",{key:n,attrs:{sm:12,md:8}},[r("el-card",{staticClass:"box-card"},[r("div",{attrs:{slot:"header"},slot:"header"},[r("span",[t._v(t._s(e.title))]),t._v(" "),r("el-button",{staticClass:"pull-right",attrs:{size:"small",type:"primary"},on:{click:function(r){t.showDialog("create",e)}}},[t._v("新增配置")])],1),t._v(" "),t._l(e.children,function(e,n){return r("div",{key:n,staticClass:"list-item"},[r("el-tag",{attrs:{type:"gray"}},[t._v("\n                        "+t._s(e.url)+"\n                    ")]),t._v(" "),r("span",{staticClass:"item-content"},[t._v(t._s(e.description))]),t._v(" "),r("el-button",{staticClass:"pull-right",staticStyle:{"margin-left":"10px"},attrs:{size:"mini",type:"primary",icon:"delete"},on:{click:function(r){t.deleteRecord(e)}}},[r("i",{staticClass:"el-icon-delete"})]),t._v(" "),r("el-button",{staticClass:"pull-right",attrs:{size:"mini",type:"primary",icon:"edit"},on:{click:function(r){t.showDialog("update",e)}}},[r("i",{staticClass:"el-icon-edit"})])],1)})],2)],1)}),1),t._v(" "),r("el-dialog",{attrs:{title:t.formTitle,visible:t.formVisible},on:{"update:visible":function(e){t.formVisible=e}}},[r("el-form",{staticStyle:{width:"80%","margin-left":"0px"},attrs:{"label-position":"left","label-width":"70px"}},[r("el-form-item",{attrs:{label:"父菜单"}},[r("el-select",{attrs:{clearable:"",disabled:!0,placeholder:"请选择父菜单"},model:{value:t.createdItem.parentId,callback:function(e){t.$set(t.createdItem,"parentId",e)},expression:"createdItem.parentId"}},t._l(t.menuIdOptions,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"资源URI"}},[r("el-input",{attrs:{placeholder:"请填写URI"},model:{value:t.createdItem.url,callback:function(e){t.$set(t.createdItem,"url",e)},expression:"createdItem.url"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"资源说明"}},[r("el-input",{attrs:{placeholder:"请填写资源说明"},model:{value:t.createdItem.description,callback:function(e){t.$set(t.createdItem,"description",e)},expression:"createdItem.description"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.formVisible=!1}}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary",loading:t.formSubmiting},on:{click:t.commitForm}},[t._v("确 定")])],1)],1),t._v(" "),r("el-dialog",{attrs:{title:t.batchFormTitle,visible:t.batchFormVisible,"before-close":t.handleClose},on:{"update:visible":function(e){t.batchFormVisible=e}}},[r("el-form",{staticStyle:{width:"80%","margin-left":"0px"},attrs:{"label-position":"left","label-width":"70px"}},[r("el-form-item",{attrs:{label:"父菜单"}},[r("el-select",{attrs:{clearable:"",disabled:!0,placeholder:"请选择父菜单"},model:{value:t.createdItem.parentId,callback:function(e){t.$set(t.createdItem,"parentId",e)},expression:"createdItem.parentId"}},t._l(t.menuIdOptions,function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"控制器"}},[r("el-select",{attrs:{placeholder:"选择控制器"},on:{change:function(e){t.getResources(t.controller)}},model:{value:t.controller,callback:function(e){t.controller=e},expression:"controller"}},t._l(t.classLists,function(t,e){return r("el-option",{key:e,attrs:{label:e,value:t}})}),1)],1),t._v(" "),r("el-tree",{ref:"tree",attrs:{data:t.resList,"show-checkbox":"","node-key":"url","default-expanded-keys":t.expandedKeys,"default-checked-keys":t.checkedKeys,props:t.defaultProps}})],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),r("el-button",{attrs:{type:"primary",loading:t.batchFormSubmiting},on:{click:t.batchCommitForm}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.880d02cf9a7abb3abbb7.js.map