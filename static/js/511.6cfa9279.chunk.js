"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[511],{6511:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(2791),a=n(3855),o=n(5934),i=n(9439),s=n(184),l=function(e){var t=e.title,n=e.styles;return(0,s.jsx)("h1",{style:n,children:t})},c=n(1771),u=n(5523),d=n(9878),m=function(){var e=(0,a.I0)(),t=(0,r.useState)(""),n=(0,i.Z)(t,2),o=n[0],m=n[1],f=(0,r.useState)(""),v=(0,i.Z)(f,2),h=v[0],x=v[1],p=(0,a.v9)((function(e){return e.contacts.contacts}));console.log("ContactForm contacts => ",p);var g=function(e){var t=e.target,n=t.name,r=t.value;"name"===n?m(r):"number"===n&&x(r)};return(0,s.jsx)("div",{className:"contact_form",children:(0,s.jsxs)("form",{onSubmit:function(t,n){t.preventDefault();var r=p.some((function(e){return e.name===o.toLowerCase()}));if(r)alert('Contact with name "'.concat(o,'" already exists.'));else{if(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/.test(o)){if(/^(\+?\d{1,4}([ .-]?)\(?\d{1,3}(\))?([ .-]?)\d{1,4}([ .-]?)\d{1,4}([ .-]?)\d{1,9})$/.test(h)){var a={name:o,number:h};e((0,c.BN)(a,n)),m(""),x("")}else alert("Please enter a valid phone number.")}else alert("Please enter a valid name.")}},className:"form",children:[(0,s.jsx)(l,{title:"Name",styles:{fontSize:20,marginBottom:0}}),(0,s.jsx)(u.ZP,{color:"neutral",size:"md",variant:"solid",type:"text",name:"name",value:o,onChange:g,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",required:!0}),(0,s.jsx)(l,{title:"Phone number",styles:{fontSize:20,marginBottom:0}}),(0,s.jsx)(u.ZP,{color:"neutral",size:"md",variant:"solid",type:"tel",name:"number",value:h,onChange:g,pattern:"\\\\+?\\\\d{1,4}?[ .-]?\\\\(?\\d{1,3}(\\))?([ .-]?)\\d{1,4}([ .-]?)\\d{1,4}([ .-]?)\\d{1,9}",required:!0}),(0,s.jsx)(d.Z,{color:"neutral",type:"submit",style:{marginTop:15},children:"Add Contact"})]})})},f=n(4808),v=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.contacts.filter}));return(0,s.jsxs)("div",{style:{width:200,marginLeft:"auto",marginRight:"auto",marginTop:20},children:[(0,s.jsx)(l,{title:"Contacts",styles:{fontSize:20,textAlign:"center "}}),(0,s.jsx)(u.ZP,{color:"neutral",size:"md",variant:"solid",type:"text",placeholder:"Search contacts",value:t,onChange:function(t){var n=t.target.value;e((0,f.T)(n))},styles:{width:250}})]})},h=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.contacts.contacts})),n=(0,a.v9)((function(e){return e.contacts.error})),r=(0,a.v9)((function(e){return e.filter.filter})),o=t.filter((function(e){return e.name.toLowerCase().includes(r)}));return n||(console.log("contacts:",t),(0,s.jsx)("ul",{style:{display:"flex",flexDirection:"column",gap:10,justifyContent:"center"},children:o.map((function(t){return(0,s.jsxs)("li",{style:{fontSize:16},children:[t.name,": ",t.number||t.phone,(0,s.jsx)(d.Z,{color:"neutral",type:"button",style:{marginLeft:20,height:15},onClick:function(){return n=t.id,void e((0,c.QZ)(n));var n},children:"Delete contact"})]},t.id)}))}))},x=n(8269),p=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.contacts.isLoading}));return(0,r.useEffect)((function(){e((0,o.m$)())}),[e]),(0,s.jsxs)("div",{className:"general__positioning",children:[(0,s.jsx)("div",{className:"border__style",children:(0,s.jsx)(m,{})}),(0,s.jsx)(v,{}),t?(0,s.jsx)(x.Z,{}):(0,s.jsx)(h,{})]})}}}]);
//# sourceMappingURL=511.6cfa9279.chunk.js.map