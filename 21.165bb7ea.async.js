webpackJsonp([21,27,28,29,30,31,32,33,34,35,36,37],{1230:function(e,t,a){"use strict";function n(e){if(i)return void e(i);s.a.newInstance({prefixCls:y,transitionName:"move-up",style:{top:d},getContainer:f},function(t){if(i)return void e(i);i=t,e(t)})}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,a=arguments[2],r=arguments[3],s={info:"info-circle",success:"check-circle",error:"cross-circle",warning:"exclamation-circle",loading:"loading"}[a];"function"==typeof t&&(r=t,t=c);var d=l++;return n(function(n){n.notice({key:d,duration:t,style:{},content:u.createElement("div",{className:y+"-custom-content "+y+"-"+a},u.createElement(o.default,{type:s}),u.createElement("span",null,e)),onClose:r})}),function(){i&&i.removeNotice(d)}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(1),s=(a.n(u),a(389)),o=a(75),c=3,d=void 0,i=void 0,l=1,y="ant-message",f=void 0;t.default={info:function(e,t,a){return r(e,t,"info",a)},success:function(e,t,a){return r(e,t,"success",a)},error:function(e,t,a){return r(e,t,"error",a)},warn:function(e,t,a){return r(e,t,"warning",a)},warning:function(e,t,a){return r(e,t,"warning",a)},loading:function(e,t,a){return r(e,t,"loading",a)},config:function(e){void 0!==e.top&&(d=e.top,i=null),void 0!==e.duration&&(c=e.duration),void 0!==e.prefixCls&&(y=e.prefixCls),void 0!==e.getContainer&&(f=e.getContainer)},destroy:function(){i&&(i.destroy(),i=null)}}},1231:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(37),r=(a.n(n),a(1232));a.n(r)},1232:function(e,t){},1416:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.queryCurrent=t.query=void 0;var r=a(108),u=n(r),s=a(401),o=n(s),c=(t.query=function(){var e=(0,o.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.default)("/api/users"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),t.queryCurrent=function(){var e=(0,o.default)(u.default.mark(function e(){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,d.default)("/api/currentUser"));case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a(402)),d=n(c)},1604:function(e,t,a){function n(e){return a(r(e))}function r(e){var t=u[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var u={"./activities.js":969,"./chart.js":970,"./form.js":971,"./global.js":239,"./index.js":983,"./list.js":972,"./login.js":973,"./monitor.js":974,"./products.js":240,"./profile.js":975,"./project.js":976,"./register.js":977,"./rule.js":978,"./user.js":979};n.keys=function(){return Object.keys(u)},n.resolve=r,e.exports=n,n.id=1604},969:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(220);t.default={namespace:"activities",state:{list:[],loading:!0},effects:{fetchList:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(c.queryActivities);case 4:return n=e.sent,e.next=7,u({type:"saveList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{saveList:function(e,t){return(0,u.default)({},e,{list:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},970:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s);a(220);t.default={namespace:"chart",state:{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]},effects:{fetch:o.default.mark(function e(t,a){var n,r=(a.call,a.put);return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={visitData:[{x:"2017-12-01",y:7},{x:"2017-12-02",y:5},{x:"2017-12-03",y:4},{x:"2017-12-04",y:2},{x:"2017-12-05",y:4},{x:"2017-12-06",y:7},{x:"2017-12-07",y:5},{x:"2017-12-08",y:6},{x:"2017-12-09",y:5},{x:"2017-12-10",y:9},{x:"2017-12-11",y:6},{x:"2017-12-12",y:3},{x:"2017-12-13",y:1},{x:"2017-12-14",y:5},{x:"2017-12-15",y:3},{x:"2017-12-16",y:6},{x:"2017-12-17",y:5}],visitData2:[{x:"2017-12-01",y:1},{x:"2017-12-02",y:6},{x:"2017-12-03",y:4},{x:"2017-12-04",y:8},{x:"2017-12-05",y:3},{x:"2017-12-06",y:7},{x:"2017-12-07",y:2}],salesData:[{x:"1\u6708",y:791},{x:"2\u6708",y:789},{x:"3\u6708",y:607},{x:"4\u6708",y:465},{x:"5\u6708",y:896},{x:"6\u6708",y:824},{x:"7\u6708",y:769},{x:"8\u6708",y:969},{x:"9\u6708",y:736},{x:"10\u6708",y:1124},{x:"11\u6708",y:890},{x:"12\u6708",y:642}],searchData:[{index:1,keyword:"TEST-0",count:390,range:58,status:1},{index:2,keyword:"TEST-1",count:719,range:79,status:0},{index:3,keyword:"TEST-2",count:828,range:82,status:0},{index:4,keyword:"TEST-3",count:518,range:24,status:0},{index:5,keyword:"TEST-4",count:50,range:1,status:0},{index:6,keyword:"TEST-5",count:364,range:24,status:1},{index:7,keyword:"TEST-6",count:579,range:42,status:1},{index:8,keyword:"TEST-7",count:264,range:46,status:1},{index:9,keyword:"TEST-8",count:262,range:32,status:0},{index:10,keyword:"TEST-9",count:502,range:48,status:1},{index:11,keyword:"TEST-10",count:833,range:9,status:0},{index:12,keyword:"TEST-11",count:521,range:10,status:1},{index:13,keyword:"TEST-12",count:414,range:29,status:0},{index:14,keyword:"TEST-13",count:264,range:16,status:1},{index:15,keyword:"TEST-14",count:338,range:0,status:1},{index:16,keyword:"TEST-15",count:230,range:22,status:1},{index:17,keyword:"TEST-16",count:159,range:9,status:0},{index:18,keyword:"TEST-17",count:800,range:19,status:0},{index:19,keyword:"TEST-18",count:941,range:49,status:0},{index:20,keyword:"TEST-19",count:119,range:9,status:1},{index:21,keyword:"TEST-20",count:360,range:82,status:1},{index:22,keyword:"TEST-21",count:801,range:77,status:0},{index:23,keyword:"TEST-22",count:801,range:37,status:0},{index:24,keyword:"TEST-23",count:99,range:27,status:1},{index:25,keyword:"TEST-24",count:202,range:8,status:0},{index:26,keyword:"TEST-25",count:0,range:2,status:0},{index:27,keyword:"TEST-26",count:437,range:21,status:0},{index:28,keyword:"TEST-27",count:228,range:50,status:1},{index:29,keyword:"TEST-28",count:932,range:89,status:0},{index:30,keyword:"TEST-29",count:239,range:84,status:0},{index:31,keyword:"TEST-30",count:757,range:75,status:0},{index:32,keyword:"TEST-31",count:10,range:50,status:1},{index:33,keyword:"TEST-32",count:320,range:85,status:0},{index:34,keyword:"TEST-33",count:612,range:67,status:1},{index:35,keyword:"TEST-34",count:179,range:37,status:1},{index:36,keyword:"TEST-35",count:217,range:49,status:0},{index:37,keyword:"TEST-36",count:38,range:19,status:1},{index:38,keyword:"TEST-37",count:894,range:10,status:0},{index:39,keyword:"TEST-38",count:545,range:43,status:0},{index:40,keyword:"TEST-39",count:337,range:98,status:0},{index:41,keyword:"TEST-40",count:976,range:32,status:1},{index:42,keyword:"TEST-41",count:561,range:94,status:1},{index:43,keyword:"TEST-42",count:37,range:81,status:0},{index:44,keyword:"TEST-43",count:169,range:36,status:0},{index:45,keyword:"TEST-44",count:748,range:31,status:1},{index:46,keyword:"TEST-45",count:325,range:3,status:1},{index:47,keyword:"TEST-46",count:201,range:37,status:0},{index:48,keyword:"TEST-47",count:740,range:26,status:1},{index:49,keyword:"TEST-48",count:882,range:71,status:0},{index:50,keyword:"TEST-49",count:745,range:88,status:1}],offlineData:[{name:"Store 0",cvr:.4},{name:"Store 1",cvr:.5},{name:"Store 2",cvr:.1},{name:"Store 3",cvr:.3},{name:"Store 4",cvr:.5},{name:"Store 5",cvr:.6},{name:"Store 6",cvr:.8},{name:"Store 7",cvr:.2},{name:"Store 8",cvr:.8},{name:"Store 9",cvr:.9}],offlineChartData:[{x:1512136393826,y1:103,y2:77},{x:1512138193826,y1:40,y2:59},{x:1512139993826,y1:14,y2:55},{x:1512141793826,y1:107,y2:15},{x:1512143593826,y1:82,y2:29},{x:1512145393826,y1:56,y2:85},{x:1512147193826,y1:62,y2:97},{x:1512148993826,y1:59,y2:71},{x:1512150793826,y1:48,y2:98},{x:1512152593826,y1:77,y2:53},{x:1512154393826,y1:56,y2:54},{x:1512156193826,y1:35,y2:31},{x:1512157993826,y1:107,y2:41},{x:1512159793826,y1:43,y2:15},{x:1512161593826,y1:39,y2:91},{x:1512163393826,y1:20,y2:79},{x:1512165193826,y1:17,y2:56},{x:1512166993826,y1:39,y2:105},{x:1512168793826,y1:55,y2:11},{x:1512170593826,y1:28,y2:42}],salesTypeData:[{x:"A",y:4544},{x:"B",y:3321},{x:"C",y:3113},{x:"D",y:2341},{x:"E",y:1231},{x:"F",y:1231}],salesTypeDataOnline:[{x:"A",y:244},{x:"B",y:321},{x:"C",y:311},{x:"D",y:41},{x:"E",y:121},{x:"F",y:111}],salesTypeDataOffline:[{x:"A",y:99},{x:"C",y:188},{x:"D",y:344},{x:"E",y:255},{x:"F",y:65}],radarData:[{name:"Radar",label:"\u5f15\u7528",value:10},{name:"Radar",label:"\u53e3\u7891",value:8},{name:"Radar",label:"\u4ea7\u91cf",value:4},{name:"Radar",label:"\u8d21\u732e",value:5},{name:"Radar",label:"\u70ed\u5ea6",value:7},{name:"\u56e2\u961f",label:"\u5f15\u7528",value:3},{name:"\u56e2\u961f",label:"\u53e3\u7891",value:9},{name:"\u56e2\u961f",label:"\u4ea7\u91cf",value:6},{name:"\u56e2\u961f",label:"\u8d21\u732e",value:3},{name:"\u56e2\u961f",label:"\u70ed\u5ea6",value:1},{name:"\u90e8\u95e8",label:"\u5f15\u7528",value:4},{name:"\u90e8\u95e8",label:"\u53e3\u7891",value:1},{name:"\u90e8\u95e8",label:"\u4ea7\u91cf",value:6},{name:"\u90e8\u95e8",label:"\u8d21\u732e",value:5},{name:"\u90e8\u95e8",label:"\u70ed\u5ea6",value:7}]},e.next=3,r({type:"save",payload:n});case 3:case"end":return e.stop()}},e,this)}),fetchSalesData:o.default.mark(function e(t,a){var n,r=(a.call,a.put);return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={visitData:[{x:"2017-12-01",y:7},{x:"2017-12-02",y:5},{x:"2017-12-03",y:4},{x:"2017-12-04",y:2},{x:"2017-12-05",y:4},{x:"2017-12-06",y:7},{x:"2017-12-07",y:5},{x:"2017-12-08",y:6},{x:"2017-12-09",y:5},{x:"2017-12-10",y:9},{x:"2017-12-11",y:6},{x:"2017-12-12",y:3},{x:"2017-12-13",y:1},{x:"2017-12-14",y:5},{x:"2017-12-15",y:3},{x:"2017-12-16",y:6},{x:"2017-12-17",y:5}],visitData2:[{x:"2017-12-01",y:1},{x:"2017-12-02",y:6},{x:"2017-12-03",y:4},{x:"2017-12-04",y:8},{x:"2017-12-05",y:3},{x:"2017-12-06",y:7},{x:"2017-12-07",y:2}],salesData:[{x:"1\u6708",y:791},{x:"2\u6708",y:789},{x:"3\u6708",y:607},{x:"4\u6708",y:465},{x:"5\u6708",y:896},{x:"6\u6708",y:824},{x:"7\u6708",y:769},{x:"8\u6708",y:969},{x:"9\u6708",y:736},{x:"10\u6708",y:1124},{x:"11\u6708",y:890},{x:"12\u6708",y:642}],searchData:[{index:1,keyword:"TEST-0",count:390,range:58,status:1},{index:2,keyword:"TEST-1",count:719,range:79,status:0},{index:3,keyword:"TEST-2",count:828,range:82,status:0},{index:4,keyword:"TEST-3",count:518,range:24,status:0},{index:5,keyword:"TEST-4",count:50,range:1,status:0},{index:6,keyword:"TEST-5",count:364,range:24,status:1},{index:7,keyword:"TEST-6",count:579,range:42,status:1},{index:8,keyword:"TEST-7",count:264,range:46,status:1},{index:9,keyword:"TEST-8",count:262,range:32,status:0},{index:10,keyword:"TEST-9",count:502,range:48,status:1},{index:11,keyword:"TEST-10",count:833,range:9,status:0},{index:12,keyword:"TEST-11",count:521,range:10,status:1},{index:13,keyword:"TEST-12",count:414,range:29,status:0},{index:14,keyword:"TEST-13",count:264,range:16,status:1},{index:15,keyword:"TEST-14",count:338,range:0,status:1},{index:16,keyword:"TEST-15",count:230,range:22,status:1},{index:17,keyword:"TEST-16",count:159,range:9,status:0},{index:18,keyword:"TEST-17",count:800,range:19,status:0},{index:19,keyword:"TEST-18",count:941,range:49,status:0},{index:20,keyword:"TEST-19",count:119,range:9,status:1},{index:21,keyword:"TEST-20",count:360,range:82,status:1},{index:22,keyword:"TEST-21",count:801,range:77,status:0},{index:23,keyword:"TEST-22",count:801,range:37,status:0},{index:24,keyword:"TEST-23",count:99,range:27,status:1},{index:25,keyword:"TEST-24",count:202,range:8,status:0},{index:26,keyword:"TEST-25",count:0,range:2,status:0},{index:27,keyword:"TEST-26",count:437,range:21,status:0},{index:28,keyword:"TEST-27",count:228,range:50,status:1},{index:29,keyword:"TEST-28",count:932,range:89,status:0},{index:30,keyword:"TEST-29",count:239,range:84,status:0},{index:31,keyword:"TEST-30",count:757,range:75,status:0},{index:32,keyword:"TEST-31",count:10,range:50,status:1},{index:33,keyword:"TEST-32",count:320,range:85,status:0},{index:34,keyword:"TEST-33",count:612,range:67,status:1},{index:35,keyword:"TEST-34",count:179,range:37,status:1},{index:36,keyword:"TEST-35",count:217,range:49,status:0},{index:37,keyword:"TEST-36",count:38,range:19,status:1},{index:38,keyword:"TEST-37",count:894,range:10,status:0},{index:39,keyword:"TEST-38",count:545,range:43,status:0},{index:40,keyword:"TEST-39",count:337,range:98,status:0},{index:41,keyword:"TEST-40",count:976,range:32,status:1},{index:42,keyword:"TEST-41",count:561,range:94,status:1},{index:43,keyword:"TEST-42",count:37,range:81,status:0},{index:44,keyword:"TEST-43",count:169,range:36,status:0},{index:45,keyword:"TEST-44",count:748,range:31,status:1},{index:46,keyword:"TEST-45",count:325,range:3,status:1},{index:47,keyword:"TEST-46",count:201,range:37,status:0},{index:48,keyword:"TEST-47",count:740,range:26,status:1},{index:49,keyword:"TEST-48",count:882,range:71,status:0},{index:50,keyword:"TEST-49",count:745,range:88,status:1}],offlineData:[{name:"Store 0",cvr:.4},{name:"Store 1",cvr:.5},{name:"Store 2",cvr:.1},{name:"Store 3",cvr:.3},{name:"Store 4",cvr:.5},{name:"Store 5",cvr:.6},{name:"Store 6",cvr:.8},{name:"Store 7",cvr:.2},{name:"Store 8",cvr:.8},{name:"Store 9",cvr:.9}],offlineChartData:[{x:1512136393826,y1:103,y2:77},{x:1512138193826,y1:40,y2:59},{x:1512139993826,y1:14,y2:55},{x:1512141793826,y1:107,y2:15},{x:1512143593826,y1:82,y2:29},{x:1512145393826,y1:56,y2:85},{x:1512147193826,y1:62,y2:97},{x:1512148993826,y1:59,y2:71},{x:1512150793826,y1:48,y2:98},{x:1512152593826,y1:77,y2:53},{x:1512154393826,y1:56,y2:54},{x:1512156193826,y1:35,y2:31},{x:1512157993826,y1:107,y2:41},{x:1512159793826,y1:43,y2:15},{x:1512161593826,y1:39,y2:91},{x:1512163393826,y1:20,y2:79},{x:1512165193826,y1:17,y2:56},{x:1512166993826,y1:39,y2:105},{x:1512168793826,y1:55,y2:11},{x:1512170593826,y1:28,y2:42}],salesTypeData:[{x:"A",y:4544},{x:"B",y:3321},{x:"C",y:3113},{x:"D",y:2341},{x:"E",y:1231},{x:"F",y:1231}],salesTypeDataOnline:[{x:"A",y:244},{x:"B",y:321},{x:"C",y:311},{x:"D",y:41},{x:"E",y:121},{x:"F",y:111}],salesTypeDataOffline:[{x:"A",y:99},{x:"C",y:188},{x:"D",y:344},{x:"E",y:255},{x:"F",y:65}],radarData:[{name:"Radar",label:"\u5f15\u7528",value:10},{name:"Radar",label:"\u53e3\u7891",value:8},{name:"Radar",label:"\u4ea7\u91cf",value:4},{name:"Radar",label:"\u8d21\u732e",value:5},{name:"Radar",label:"\u70ed\u5ea6",value:7},{name:"\u56e2\u961f",label:"\u5f15\u7528",value:3},{name:"\u56e2\u961f",label:"\u53e3\u7891",value:9},{name:"\u56e2\u961f",label:"\u4ea7\u91cf",value:6},{name:"\u56e2\u961f",label:"\u8d21\u732e",value:3},{name:"\u56e2\u961f",label:"\u70ed\u5ea6",value:1},{name:"\u90e8\u95e8",label:"\u5f15\u7528",value:4},{name:"\u90e8\u95e8",label:"\u53e3\u7891",value:1},{name:"\u90e8\u95e8",label:"\u4ea7\u91cf",value:6},{name:"\u90e8\u95e8",label:"\u8d21\u732e",value:5},{name:"\u90e8\u95e8",label:"\u70ed\u5ea6",value:7}]},e.next=3,r({type:"save",payload:{salesData:n.salesData}});case 3:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},setter:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},clear:function(){return{visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]}}}},e.exports=t.default},971:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(1230),d=n(c);a(1231);var i=a(359),l=a(220);t.default={namespace:"form",state:{step:{},regularFormSubmitting:!1,stepFormSubmitting:!1,advancedFormSubmitting:!1},effects:{submitRegularForm:o.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeRegularFormSubmitting",payload:!0});case 2:return e.next=4,r(l.fakeSubmitForm,n);case 4:return e.next=6,u({type:"changeRegularFormSubmitting",payload:!1});case 6:d.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)}),submitStepForm:o.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeStepFormSubmitting",payload:!0});case 2:return e.next=4,r(l.fakeSubmitForm,n);case 4:return e.next=6,u({type:"saveStepFormData",payload:n});case 6:return e.next=8,u({type:"changeStepFormSubmitting",payload:!1});case 8:return e.next=10,u(i.routerRedux.push("/form/step-form/result"));case 10:case"end":return e.stop()}},e,this)}),submitAdvancedForm:o.default.mark(function e(t,a){var n=t.payload,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeAdvancedFormSubmitting",payload:!0});case 2:return e.next=4,r(l.fakeSubmitForm,n);case 4:return e.next=6,u({type:"changeAdvancedFormSubmitting",payload:!1});case 6:d.default.success("\u63d0\u4ea4\u6210\u529f");case 7:case"end":return e.stop()}},e,this)})},reducers:{saveStepFormData:function(e,t){var a=t.payload;return(0,u.default)({},e,{step:(0,u.default)({},e.step,a)})},changeRegularFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{regularFormSubmitting:a})},changeStepFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{stepFormSubmitting:a})},changeAdvancedFormSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{advancedFormSubmitting:a})}}},e.exports=t.default},972:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(220);t.default={namespace:"list",state:{list:[],loading:!1},effects:{fetch:o.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(c.queryFakeList,r);case 4:return n=e.sent,e.next=7,s({type:"appendList",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{appendList:function(e,t){return(0,u.default)({},e,{list:e.list.concat(t.payload)})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},973:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(359),d=a(220);t.default={namespace:"login",state:{status:void 0},effects:{accountSubmit:o.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeSubmitting",payload:!0});case 2:return e.next=4,u(d.fakeAccountLogin,r);case 4:return n=e.sent,e.next=7,s({type:"changeLoginStatus",payload:n});case 7:return e.next=9,s({type:"changeSubmitting",payload:!1});case 9:case"end":return e.stop()}},e,this)}),mobileSubmit:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeSubmitting",payload:!0});case 2:return e.next=4,r(d.fakeMobileLogin);case 4:return n=e.sent,e.next=7,u({type:"changeLoginStatus",payload:n});case 7:return e.next=9,u({type:"changeSubmitting",payload:!1});case 9:case"end":return e.stop()}},e,this)}),logout:o.default.mark(function e(t,a){var n=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:"changeLoginStatus",payload:{status:!1}});case 2:return e.next=4,n(c.routerRedux.push("/user/login"));case 4:case"end":return e.stop()}},e,this)})},reducers:{changeLoginStatus:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.status,type:a.type})},changeSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{submitting:a})}}},e.exports=t.default},974:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(220);t.default={namespace:"monitor",state:{tags:[]},effects:{fetchTags:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(c.queryTags);case 2:return n=e.sent,e.next=5,u({type:"saveTags",payload:n.list});case 5:case"end":return e.stop()}},e,this)})},reducers:{saveTags:function(e,t){return(0,u.default)({},e,{tags:t.payload})}}},e.exports=t.default},975:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(220);t.default={namespace:"profile",state:{basicGoods:[],basicLoading:!0,advancedOperation1:[],advancedOperation2:[],advancedOperation3:[],advancedLoading:!0},effects:{fetchBasic:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:{basicLoading:!0}});case 2:return e.next=4,r(c.queryBasicProfile);case 4:return n=e.sent,e.next=7,u({type:"show",payload:n});case 7:return e.next=9,u({type:"changeLoading",payload:{basicLoading:!1}});case 9:case"end":return e.stop()}},e,this)}),fetchAdvanced:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:{advancedLoading:!0}});case 2:return e.next=4,r(c.queryAdvancedProfile);case 4:return n=e.sent,e.next=7,u({type:"show",payload:n});case 7:return e.next=9,u({type:"changeLoading",payload:{advancedLoading:!1}});case 9:case"end":return e.stop()}},e,this)})},reducers:{show:function(e,t){var a=t.payload;return(0,u.default)({},e,a)},changeLoading:function(e,t){var a=t.payload;return(0,u.default)({},e,a)}}},e.exports=t.default},976:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(220);t.default={namespace:"project",state:{notice:[],loading:!0},effects:{fetchNotice:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(c.queryProjectNotice);case 4:return n=e.sent,e.next=7,u({type:"saveNotice",payload:Array.isArray(n)?n:[]});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{saveNotice:function(e,t){return(0,u.default)({},e,{notice:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},977:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(220);t.default={namespace:"register",state:{status:void 0},effects:{submit:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeSubmitting",payload:!0});case 2:return e.next=4,r(c.fakeRegister);case 4:return n=e.sent,e.next=7,u({type:"registerHandle",payload:n});case 7:return e.next=9,u({type:"changeSubmitting",payload:!1});case 9:case"end":return e.stop()}},e,this)})},reducers:{registerHandle:function(e,t){var a=t.payload;return(0,u.default)({},e,{status:a.status})},changeSubmitting:function(e,t){var a=t.payload;return(0,u.default)({},e,{submitting:a})}}},e.exports=t.default},978:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(220);t.default={namespace:"rule",state:{data:{list:[],pagination:{}},loading:!0},effects:{fetch:o.default.mark(function e(t,a){var n,r=t.payload,u=a.call,s=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({type:"changeLoading",payload:!0});case 2:return e.next=4,u(c.queryRule,r);case 4:return n=e.sent,e.next=7,s({type:"save",payload:n});case 7:return e.next=9,s({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),add:o.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,d=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({type:"changeLoading",payload:!0});case 2:return e.next=4,s(c.addRule,r);case 4:return n=e.sent,e.next=7,d({type:"save",payload:n});case 7:return e.next=9,d({type:"changeLoading",payload:!1});case 9:u&&u();case 10:case"end":return e.stop()}},e,this)}),remove:o.default.mark(function e(t,a){var n,r=t.payload,u=t.callback,s=a.call,d=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({type:"changeLoading",payload:!0});case 2:return e.next=4,s(c.removeRule,r);case 4:return n=e.sent,e.next=7,d({type:"save",payload:n});case 7:return e.next=9,d({type:"changeLoading",payload:!1});case 9:u&&u();case 10:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{data:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})}}},e.exports=t.default},979:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),u=n(r),s=a(108),o=n(s),c=a(1416);t.default={namespace:"user",state:{list:[],loading:!1,currentUser:{}},effects:{fetch:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({type:"changeLoading",payload:!0});case 2:return e.next=4,r(c.query);case 4:return n=e.sent,e.next=7,u({type:"save",payload:n});case 7:return e.next=9,u({type:"changeLoading",payload:!1});case 9:case"end":return e.stop()}},e,this)}),fetchCurrent:o.default.mark(function e(t,a){var n,r=a.call,u=a.put;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(c.queryCurrent);case 2:return n=e.sent,e.next=5,u({type:"saveCurrentUser",payload:n});case 5:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return(0,u.default)({},e,{list:t.payload})},changeLoading:function(e,t){return(0,u.default)({},e,{loading:t.payload})},saveCurrentUser:function(e,t){return(0,u.default)({},e,{currentUser:t.payload})},changeNotifyCount:function(e,t){return(0,u.default)({},e,{currentUser:(0,u.default)({},e.currentUser,{notifyCount:t.payload})})}}},e.exports=t.default},983:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});for(var n=a(1604),r=n.keys().filter(function(e){return"./index.js"!==e}),u=[],s=0;s<r.length;s+=1)u.push(n(r[s]));t.default=u,e.exports=t.default}});