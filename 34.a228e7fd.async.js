webpackJsonp([34],{973:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var u=a(3),r=n(u),s=a(108),c=n(s),o=a(359),i=a(220);e.default={namespace:"login",state:{status:void 0},effects:{accountSubmit:c.default.mark(function t(e,a){var n,u=e.payload,r=a.call,s=a.put;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s({type:"changeSubmitting",payload:!0});case 2:return t.next=4,r(i.fakeAccountLogin,u);case 4:return n=t.sent,t.next=7,s({type:"changeLoginStatus",payload:n});case 7:return t.next=9,s({type:"changeSubmitting",payload:!1});case 9:case"end":return t.stop()}},t,this)}),mobileSubmit:c.default.mark(function t(e,a){var n,u=a.call,r=a.put;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r({type:"changeSubmitting",payload:!0});case 2:return t.next=4,u(i.fakeMobileLogin);case 4:return n=t.sent,t.next=7,r({type:"changeLoginStatus",payload:n});case 7:return t.next=9,r({type:"changeSubmitting",payload:!1});case 9:case"end":return t.stop()}},t,this)}),logout:c.default.mark(function t(e,a){var n=a.put;return c.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n({type:"changeLoginStatus",payload:{status:!1}});case 2:return t.next=4,n(o.routerRedux.push("/user/login"));case 4:case"end":return t.stop()}},t,this)})},reducers:{changeLoginStatus:function(t,e){var a=e.payload;return(0,r.default)({},t,{status:a.status,type:a.type})},changeSubmitting:function(t,e){var a=e.payload;return(0,r.default)({},t,{submitting:a})}}},t.exports=e.default}});