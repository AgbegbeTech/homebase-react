goog.provide('devcards.system');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id(devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"]"].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"cardpath","cardpath",-1078069311),path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
(el.id = id);

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__5733__auto__ = node.firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var first_child = temp__5733__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__5733__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__5733__auto__)){
var heads = temp__5733__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-code-highlight-css","/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-devcards-css","body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild(devcards.system.create_style_element("com-rigsomelight-devcards-addons-css","/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n"));
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-edn-css"))){
return null;
} else {
return head.appendChild(devcards.system.create_style_element("com-rigsomelight-edn-css",".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n"));
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_();

if(cljs.core.truth_(devcards.system.devcards_app_node())){
return null;
} else {
var el = document.createElement("div");
(el.id = devcards.system.devcards_app_element_id);

return devcards.system.prepend_child(document.body,el);
}
});

if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.history !== 'undefined')){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return ["!/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,path))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token(path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
goog.events.listen(devcards.system.history,goog.history.EventType.NAVIGATE,(function (p1__17210_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__17210_SHARP_.token));
}));

var temp__5735__auto__ = goog.object.get(location,"hash");
if(cljs.core.truth_(temp__5735__auto__)){
var token = temp__5735__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
if(cljs.core.map_QMARK_(d)){
var and__4115__auto__ = new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__4115__auto____$2)){
return d;
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
} else {
return false;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351).cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__5733__auto__)){
var c = temp__5733__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.vec(path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(cljs.core.last(path)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),path], null),cljs.core.inc);
});
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.dev_trans !== 'undefined')){
} else {
devcards.system.dev_trans = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17211 = cljs.core.get_global_hierarchy;
return (fexpr__17211.cljs$core$IFn$_invoke$arity$0 ? fexpr__17211.cljs$core$IFn$_invoke$arity$0() : fexpr__17211.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"register-card","register-card",-1375971588),(function (p__17212,state){
var vec__17213 = p__17212;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17213,(0),null);
var map__17216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17213,(1),null);
var map__17216__$1 = (((((!((map__17216 == null))))?(((((map__17216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17216):map__17216);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17216__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17216__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17216__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision(state,path);
return devcards.system.register_collision(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912)], null),cljs.core.inc),cljs.core.cons(new cljs.core.Keyword(null,"cards","cards",169174038),new_path),(function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new_path,new cljs.core.Keyword(null,"func","func",-238706040),func,new cljs.core.Keyword(null,"position","position",-2011731912),position], null);
})),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),(0),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),true,new cljs.core.Keyword(null,"padding","padding",1660304693),true,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),true,new cljs.core.Keyword(null,"history","history",-247395220),false], null)], null);
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.app_state !== 'undefined')){
} else {
devcards.system.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(devcards.system.devcard_initial_data);
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,path);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec((cljs.core.truth_(devcards.system.valid_path_QMARK_(state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__17218,path){
var map__17219 = p__17218;
var map__17219__$1 = (((((!((map__17219 == null))))?(((((map__17219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17219):map__17219);
var state = map__17219__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17219__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__17224,path){
var map__17225 = p__17224;
var map__17225__$1 = (((((!((map__17225 == null))))?(((((map__17225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17225):map__17225);
var state = map__17225__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17225__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var path__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,path__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-path","current-path",-113759954),devcards.system.enforce_valid_path(state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate(path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__4115__auto__ = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_(devcards.system.current_page(state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page(state);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__17227_SHARP_){
if(cljs.core.not(new cljs.core.Keyword(null,"delete-card","delete-card",1559096851).cljs$core$IFn$_invoke$arity$1(p1__17227_SHARP_))){
return devcards.system.devcard_QMARK_(p1__17227_SHARP_);
} else {
return false;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__17228){
var map__17229 = p__17228;
var map__17229__$1 = (((((!((map__17229 == null))))?(((((map__17229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17229):map__17229);
var card = map__17229__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17229__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17229__$1,new cljs.core.Keyword(null,"options","options",99638489));
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17229__$1,new cljs.core.Keyword(null,"func","func",-238706040));
var G__17237 = "div";
var G__17238 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__17239 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR__orig_val__17240 = devcards.system._STAR_devcard_data_STAR_;
var _STAR_devcard_data_STAR__temp_val__17241 = card;
(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__temp_val__17241);

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {(devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR__orig_val__17240);
}})());
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17237,G__17238,G__17239) : sablono.core.create_element.call(null,G__17237,G__17238,G__17239));
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = cljs.core.deref(state_atom);
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))){
return devcards.system.card_template(state_atom,devcards.system.current_page(data));
} else {
return devcards.system.render_cards(devcards.system.display_cards(devcards.system.current_page(data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__17242){
var map__17243 = p__17242;
var map__17243__$1 = (((((!((map__17243 == null))))?(((((map__17243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17243):map__17243);
var state = map__17243__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17243__$1,new cljs.core.Keyword(null,"current-path","current-path",-113759954));
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(new cljs.core.Keyword(null,"devcards","devcards",365747130),current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var sep_fn = (function (_){
var G__17245 = "span";
var G__17246 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return cljs.core.deref(counter);
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__17247 = "/";
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17245,G__17246,G__17247) : sablono.core.create_element.call(null,G__17245,G__17246,G__17247));
});
var G__17248 = "div";
var G__17249 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__17250 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17252){
var vec__17253 = p__17252;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17253,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17253,(1),null);
var G__17256 = "span";
var G__17257 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__17258 = (function (){var G__17259 = "a";
var G__17260 = ({"href": "#", "onClick": devcards.system.prevent__GT_((function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
})), "className": "com-rigsomelight-devcards_set-current-path"});
var G__17261 = sablono.interpreter.interpret(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17259,G__17260,G__17261) : sablono.core.create_element.call(null,G__17259,G__17260,G__17261));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17256,G__17257,G__17258) : sablono.core.create_element.call(null,G__17256,G__17257,G__17258));
}),crumbs))));
var G__17251 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17248,G__17249,G__17250,G__17251) : sablono.core.create_element.call(null,G__17248,G__17249,G__17250,G__17251));
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (s){
var new_s = devcards.system.add_to_current_path(s,key);
devcards.system.hash_navigate(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_(dirs)){
return null;
} else {
var attrs17269 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17270){
var vec__17271 = p__17270;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17271,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17271,(1),null);
var G__17274 = "a";
var G__17275 = ({"href": "#", "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(key), "onClick": devcards.system.prevent__GT_((function (e){
return devcards.system.navigate_to_path(key,state_atom);
})), "className": "com-rigsomelight-devcards-list-group-item"});
var G__17276 = (function (){var G__17278 = "span";
var G__17279 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__17280 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17278,G__17279,G__17280) : sablono.core.create_element.call(null,G__17278,G__17279,G__17280));
})();
var G__17277 = (function (){var G__17281 = "span";
var G__17282 = null;
var G__17283 = " ";
var G__17284 = sablono.interpreter.interpret(cljs.core.name(key));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17281,G__17282,G__17283,G__17284) : sablono.core.create_element.call(null,G__17281,G__17282,G__17283,G__17284));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17274,G__17275,G__17276,G__17277) : sablono.core.create_element.call(null,G__17274,G__17275,G__17276,G__17277));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__17285){
var vec__17286 = p__17285;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17286,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17286,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs17269))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs17269], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs17269))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17269)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = cljs.core.deref(state_atom);
var G__17292 = "div";
var G__17293 = ({"className": ["com-rigsomelight-devcards-base ",(function (){var temp__5735__auto__ = cljs.core.first(new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})()].join('')});
var G__17294 = (function (){var attrs17289 = (function (){var temp__5735__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__5735__auto__)){
var crumbs = temp__5735__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs17289))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs17289], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs17289))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs17290 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs17290))?sablono.interpreter.attributes(attrs17290):null),((cljs.core.map_QMARK_(attrs17290))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17290)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17289),(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return sablono.interpreter.interpret(devcards.system.dir_links(dir_paths,state_atom));
})()),(function (){var attrs17291 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sablono.core.create_element,"div",((cljs.core.map_QMARK_(attrs17291))?sablono.interpreter.attributes(attrs17291):null),((cljs.core.map_QMARK_(attrs17291))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs17291)], null)));
})()], null)));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17292,G__17293,G__17294) : sablono.core.create_element.call(null,G__17292,G__17293,G__17294));
});
devcards.system.DevcardsRoot = (function (){var ctor__17006__auto__ = (function (props__17003__auto__){
var this__17004__auto__ = this;
devcards.util.utils.react_holder.Component.call(this__17004__auto__,props__17003__auto__);

return this__17004__auto__;
});
goog.inherits(ctor__17006__auto__,devcards.util.utils.react_holder.Component);

var x17295_17540 = ctor__17006__auto__.prototype;
(x17295_17540.componentDidMount = (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"renderer-watch","renderer-watch",542998517),(function (_,___$1,___$2,___$3){
return this$.forceUpdate();
}));
}));

(x17295_17540.render = (function (){
var this$ = this;
return devcards.system.main_template(devcards.system.app_state);
}));


return ctor__17006__auto__;
})();

(devcards.system.DevcardsRoot.displayName = cljs.core.name(new cljs.core.Symbol(null,"DevcardsRoot","DevcardsRoot",-655621301,null)));
devcards.system.renderer = (function devcards$system$renderer(state_atom){
return module$node_modules$react_dom$index.render(module$node_modules$react$index.createElement(devcards.system.DevcardsRoot),devcards.system.devcards_app_node());
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new_state),new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(new_state)], 0))], 0));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start_data,new cljs.core.Keyword(null,"path-collision-count","path-collision-count",-425032351),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"cards","cards",169174038));
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_17350){
var state_val_17351 = (state_17350[(1)]);
if((state_val_17351 === (7))){
var inst_17346 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17352_17541 = state_17350__$1;
(statearr_17352_17541[(2)] = inst_17346);

(statearr_17352_17541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (1))){
var inst_17303 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data);
var inst_17304 = inst_17303;
var state_17350__$1 = (function (){var statearr_17353 = state_17350;
(statearr_17353[(7)] = inst_17304);

return statearr_17353;
})();
var statearr_17354_17542 = state_17350__$1;
(statearr_17354_17542[(2)] = null);

(statearr_17354_17542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (4))){
var inst_17311 = (state_17350[(8)]);
var inst_17311__$1 = (state_17350[(2)]);
var state_17350__$1 = (function (){var statearr_17355 = state_17350;
(statearr_17355[(8)] = inst_17311__$1);

return statearr_17355;
})();
if(cljs.core.truth_(inst_17311__$1)){
var statearr_17356_17543 = state_17350__$1;
(statearr_17356_17543[(1)] = (5));

} else {
var statearr_17357_17544 = state_17350__$1;
(statearr_17357_17544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (15))){
var state_17350__$1 = state_17350;
var statearr_17358_17545 = state_17350__$1;
(statearr_17358_17545[(2)] = null);

(statearr_17358_17545[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (13))){
var inst_17341 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17359_17546 = state_17350__$1;
(statearr_17359_17546[(2)] = inst_17341);

(statearr_17359_17546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (6))){
var state_17350__$1 = state_17350;
var statearr_17360_17547 = state_17350__$1;
(statearr_17360_17547[(2)] = null);

(statearr_17360_17547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (3))){
var inst_17348 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17350__$1,inst_17348);
} else {
if((state_val_17351 === (12))){
var state_17350__$1 = state_17350;
var statearr_17361_17548 = state_17350__$1;
(statearr_17361_17548[(1)] = (14));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (2))){
var inst_17306 = (state_17350[(9)]);
var inst_17306__$1 = cljs.core.async.timeout((500));
var inst_17307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17308 = [channel,inst_17306__$1];
var inst_17309 = (new cljs.core.PersistentVector(null,2,(5),inst_17307,inst_17308,null));
var state_17350__$1 = (function (){var statearr_17363 = state_17350;
(statearr_17363[(9)] = inst_17306__$1);

return statearr_17363;
})();
return cljs.core.async.ioc_alts_BANG_(state_17350__$1,(4),inst_17309);
} else {
if((state_val_17351 === (11))){
var inst_17304 = (state_17350[(7)]);
var inst_17329 = devcards.system.merge_in_new_data(start_data,inst_17304);
var state_17350__$1 = state_17350;
var statearr_17364_17549 = state_17350__$1;
(statearr_17364_17549[(2)] = inst_17329);

(statearr_17364_17549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (9))){
var inst_17320 = (state_17350[(10)]);
var inst_17327 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17320,new cljs.core.Keyword(null,"jsreload","jsreload",331693051));
var state_17350__$1 = state_17350;
if(inst_17327){
var statearr_17365_17550 = state_17350__$1;
(statearr_17365_17550[(1)] = (11));

} else {
var statearr_17366_17551 = state_17350__$1;
(statearr_17366_17551[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (5))){
var inst_17311 = (state_17350[(8)]);
var inst_17306 = (state_17350[(9)]);
var inst_17319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17311,(0),null);
var inst_17320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17319,(0),null);
var inst_17321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17319,(1),null);
var inst_17322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17311,(1),null);
var inst_17323 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17322,inst_17306);
var state_17350__$1 = (function (){var statearr_17367 = state_17350;
(statearr_17367[(11)] = inst_17321);

(statearr_17367[(10)] = inst_17320);

return statearr_17367;
})();
if(inst_17323){
var statearr_17368_17552 = state_17350__$1;
(statearr_17368_17552[(1)] = (8));

} else {
var statearr_17369_17553 = state_17350__$1;
(statearr_17369_17553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (14))){
var inst_17321 = (state_17350[(11)]);
var inst_17304 = (state_17350[(7)]);
var inst_17320 = (state_17350[(10)]);
var inst_17332 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17333 = [inst_17320,inst_17321];
var inst_17334 = (new cljs.core.PersistentVector(null,2,(5),inst_17332,inst_17333,null));
var inst_17335 = devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_17334,inst_17304);
var inst_17304__$1 = inst_17335;
var state_17350__$1 = (function (){var statearr_17370 = state_17350;
(statearr_17370[(7)] = inst_17304__$1);

return statearr_17370;
})();
var statearr_17371_17554 = state_17350__$1;
(statearr_17371_17554[(2)] = null);

(statearr_17371_17554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (16))){
var inst_17339 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17372_17555 = state_17350__$1;
(statearr_17372_17555[(2)] = inst_17339);

(statearr_17372_17555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (10))){
var inst_17343 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17373_17556 = state_17350__$1;
(statearr_17373_17556[(2)] = inst_17343);

(statearr_17373_17556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (8))){
var inst_17304 = (state_17350[(7)]);
var inst_17325 = devcards.system.merge_in_new_data(start_data,inst_17304);
var state_17350__$1 = state_17350;
var statearr_17374_17557 = state_17350__$1;
(statearr_17374_17557[(2)] = inst_17325);

(statearr_17374_17557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$off_the_books_$_state_machine__12072__auto__ = null;
var devcards$system$off_the_books_$_state_machine__12072__auto____0 = (function (){
var statearr_17375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17375[(0)] = devcards$system$off_the_books_$_state_machine__12072__auto__);

(statearr_17375[(1)] = (1));

return statearr_17375;
});
var devcards$system$off_the_books_$_state_machine__12072__auto____1 = (function (state_17350){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_17350);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e17386){var ex__12075__auto__ = e17386;
var statearr_17387_17558 = state_17350;
(statearr_17387_17558[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_17350[(4)]))){
var statearr_17388_17559 = state_17350;
(statearr_17388_17559[(1)] = cljs.core.first((state_17350[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17560 = state_17350;
state_17350 = G__17560;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__12072__auto__ = function(state_17350){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__12072__auto____1.call(this,state_17350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$off_the_books_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__12072__auto____0;
devcards$system$off_the_books_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__12072__auto____1;
return devcards$system$off_the_books_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_17389 = f__12108__auto__();
(statearr_17389[(6)] = c__12107__auto__);

return statearr_17389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__12107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_17397){
var state_val_17398 = (state_17397[(1)]);
if((state_val_17398 === (1))){
var inst_17390 = cljs.core.deref(devcards.system.app_state);
var inst_17391 = cljs.core.PersistentVector.EMPTY;
var inst_17392 = devcards.system.off_the_books(channel,inst_17390,inst_17391);
var state_17397__$1 = state_17397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17397__$1,(2),inst_17392);
} else {
if((state_val_17398 === (2))){
var inst_17394 = (state_17397[(2)]);
var inst_17395 = cljs.core.reset_BANG_(devcards.system.app_state,inst_17394);
var state_17397__$1 = state_17397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17397__$1,inst_17395);
} else {
return null;
}
}
});
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____0 = (function (){
var statearr_17399 = [null,null,null,null,null,null,null];
(statearr_17399[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__);

(statearr_17399[(1)] = (1));

return statearr_17399;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____1 = (function (state_17397){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_17397);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e17400){var ex__12075__auto__ = e17400;
var statearr_17401_17561 = state_17397;
(statearr_17401_17561[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_17397[(4)]))){
var statearr_17402_17562 = state_17397;
(statearr_17402_17562[(1)] = cljs.core.first((state_17397[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17563 = state_17397;
state_17397 = G__17563;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__ = function(state_17397){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____1.call(this,state_17397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_17403 = f__12108__auto__();
(statearr_17403[(6)] = c__12107__auto__);

return statearr_17403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));

return c__12107__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof js !== 'undefined') && (typeof js.module$node_modules$react$index !== 'undefined') && (typeof js.module$node_modules$react$index.initializeTouchEvents !== 'undefined')){
module$node_modules$react$index.initializeTouchEvents(true);
} else {
}

var c__12107__auto___17564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_17428){
var state_val_17429 = (state_17428[(1)]);
if((state_val_17429 === (7))){
var state_17428__$1 = state_17428;
var statearr_17446_17565 = state_17428__$1;
(statearr_17446_17565[(2)] = null);

(statearr_17446_17565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (1))){
var inst_17404 = devcards.system.load_data_from_channel_BANG_(channel);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17428__$1,(2),inst_17404);
} else {
if((state_val_17429 === (4))){
var inst_17426 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17428__$1,inst_17426);
} else {
if((state_val_17429 === (6))){
var inst_17413 = (state_17428[(7)]);
var inst_17415 = cljs.core.deref(devcards.system.app_state);
var inst_17416 = devcards.system.off_the_books(channel,inst_17415,inst_17413);
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17428__$1,(9),inst_17416);
} else {
if((state_val_17429 === (3))){
var state_17428__$1 = state_17428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17428__$1,(5),channel);
} else {
if((state_val_17429 === (2))){
var inst_17406 = (state_17428[(2)]);
var inst_17407 = (function (){return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
})();
var inst_17408 = setTimeout(inst_17407,(0));
var inst_17409 = (function (){return (function (){
return cljs.core.add_watch(devcards.system.app_state,new cljs.core.Keyword(null,"devcards-render","devcards-render",592502782),(function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
}));
});
})();
var inst_17410 = setTimeout(inst_17409,(0));
var state_17428__$1 = (function (){var statearr_17447 = state_17428;
(statearr_17447[(8)] = inst_17408);

(statearr_17447[(9)] = inst_17410);

(statearr_17447[(10)] = inst_17406);

return statearr_17447;
})();
var statearr_17448_17566 = state_17428__$1;
(statearr_17448_17566[(2)] = null);

(statearr_17448_17566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (9))){
var inst_17413 = (state_17428[(7)]);
var inst_17418 = (state_17428[(2)]);
var inst_17419 = (function (){var temp__5735__auto__ = inst_17413;
var v = inst_17413;
var new_state = inst_17418;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_17420 = setTimeout(inst_17419,(0));
var state_17428__$1 = (function (){var statearr_17449 = state_17428;
(statearr_17449[(11)] = inst_17420);

return statearr_17449;
})();
var statearr_17450_17567 = state_17428__$1;
(statearr_17450_17567[(2)] = null);

(statearr_17450_17567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (5))){
var inst_17413 = (state_17428[(7)]);
var inst_17413__$1 = (state_17428[(2)]);
var state_17428__$1 = (function (){var statearr_17451 = state_17428;
(statearr_17451[(7)] = inst_17413__$1);

return statearr_17451;
})();
if(cljs.core.truth_(inst_17413__$1)){
var statearr_17452_17568 = state_17428__$1;
(statearr_17452_17568[(1)] = (6));

} else {
var statearr_17453_17569 = state_17428__$1;
(statearr_17453_17569[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17429 === (8))){
var inst_17424 = (state_17428[(2)]);
var state_17428__$1 = state_17428;
var statearr_17454_17570 = state_17428__$1;
(statearr_17454_17570[(2)] = inst_17424);

(statearr_17454_17570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____0 = (function (){
var statearr_17455 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17455[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__);

(statearr_17455[(1)] = (1));

return statearr_17455;
});
var devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____1 = (function (state_17428){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_17428);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e17456){var ex__12075__auto__ = e17456;
var statearr_17457_17571 = state_17428;
(statearr_17457_17571[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_17428[(4)]))){
var statearr_17458_17572 = state_17428;
(statearr_17458_17572[(1)] = cljs.core.first((state_17428[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17573 = state_17428;
state_17428 = G__17573;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__ = function(state_17428){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____1.call(this,state_17428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__12072__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_17459 = f__12108__auto__();
(statearr_17459[(6)] = c__12107__auto___17564);

return statearr_17459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if((typeof devcards !== 'undefined') && (typeof devcards.system !== 'undefined') && (typeof devcards.system.devcards_ui_setup !== 'undefined')){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if((typeof js !== 'undefined') && (typeof js.module$node_modules$react$index !== 'undefined') && (typeof js.module$node_modules$react$index.initializeTouchEvents !== 'undefined')){
module$node_modules$react$index.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_();

var c__12107__auto___17577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__12108__auto__ = (function (){var switch__12071__auto__ = (function (state_17484){
var state_val_17485 = (state_17484[(1)]);
if((state_val_17485 === (7))){
var state_17484__$1 = state_17484;
var statearr_17486_17578 = state_17484__$1;
(statearr_17486_17578[(2)] = null);

(statearr_17486_17578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (1))){
var inst_17460 = devcards.system.load_data_from_channel_BANG_(channel);
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17484__$1,(2),inst_17460);
} else {
if((state_val_17485 === (4))){
var inst_17482 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17484__$1,inst_17482);
} else {
if((state_val_17485 === (6))){
var inst_17469 = (state_17484[(7)]);
var inst_17471 = cljs.core.deref(devcards.system.app_state);
var inst_17472 = devcards.system.off_the_books(channel,inst_17471,inst_17469);
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17484__$1,(9),inst_17472);
} else {
if((state_val_17485 === (3))){
var state_17484__$1 = state_17484;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17484__$1,(5),channel);
} else {
if((state_val_17485 === (2))){
var inst_17462 = (state_17484[(2)]);
var inst_17463 = (function (){return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
})();
var inst_17464 = setTimeout(inst_17463,(0));
var inst_17465 = (function (){return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
})();
var inst_17466 = setTimeout(inst_17465,(0));
var state_17484__$1 = (function (){var statearr_17488 = state_17484;
(statearr_17488[(8)] = inst_17466);

(statearr_17488[(9)] = inst_17462);

(statearr_17488[(10)] = inst_17464);

return statearr_17488;
})();
var statearr_17489_17579 = state_17484__$1;
(statearr_17489_17579[(2)] = null);

(statearr_17489_17579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (9))){
var inst_17469 = (state_17484[(7)]);
var inst_17474 = (state_17484[(2)]);
var inst_17475 = (function (){var temp__5735__auto__ = inst_17469;
var v = inst_17469;
var new_state = inst_17474;
return (function (){
return cljs.core.reset_BANG_(devcards.system.app_state,new_state);
});
})();
var inst_17476 = setTimeout(inst_17475,(0));
var state_17484__$1 = (function (){var statearr_17490 = state_17484;
(statearr_17490[(11)] = inst_17476);

return statearr_17490;
})();
var statearr_17491_17580 = state_17484__$1;
(statearr_17491_17580[(2)] = null);

(statearr_17491_17580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (5))){
var inst_17469 = (state_17484[(7)]);
var inst_17469__$1 = (state_17484[(2)]);
var state_17484__$1 = (function (){var statearr_17492 = state_17484;
(statearr_17492[(7)] = inst_17469__$1);

return statearr_17492;
})();
if(cljs.core.truth_(inst_17469__$1)){
var statearr_17493_17581 = state_17484__$1;
(statearr_17493_17581[(1)] = (6));

} else {
var statearr_17494_17582 = state_17484__$1;
(statearr_17494_17582[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (8))){
var inst_17480 = (state_17484[(2)]);
var state_17484__$1 = state_17484;
var statearr_17495_17583 = state_17484__$1;
(statearr_17495_17583[(2)] = inst_17480);

(statearr_17495_17583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var devcards$system$start_ui_$_state_machine__12072__auto__ = null;
var devcards$system$start_ui_$_state_machine__12072__auto____0 = (function (){
var statearr_17496 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17496[(0)] = devcards$system$start_ui_$_state_machine__12072__auto__);

(statearr_17496[(1)] = (1));

return statearr_17496;
});
var devcards$system$start_ui_$_state_machine__12072__auto____1 = (function (state_17484){
while(true){
var ret_value__12073__auto__ = (function (){try{while(true){
var result__12074__auto__ = switch__12071__auto__(state_17484);
if(cljs.core.keyword_identical_QMARK_(result__12074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12074__auto__;
}
break;
}
}catch (e17497){var ex__12075__auto__ = e17497;
var statearr_17498_17584 = state_17484;
(statearr_17498_17584[(2)] = ex__12075__auto__);


if(cljs.core.seq((state_17484[(4)]))){
var statearr_17499_17585 = state_17484;
(statearr_17499_17585[(1)] = cljs.core.first((state_17484[(4)])));

} else {
throw ex__12075__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17586 = state_17484;
state_17484 = G__17586;
continue;
} else {
return ret_value__12073__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__12072__auto__ = function(state_17484){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__12072__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__12072__auto____1.call(this,state_17484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$system$start_ui_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__12072__auto____0;
devcards$system$start_ui_$_state_machine__12072__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__12072__auto____1;
return devcards$system$start_ui_$_state_machine__12072__auto__;
})()
})();
var state__12109__auto__ = (function (){var statearr_17500 = f__12108__auto__();
(statearr_17500[(6)] = c__12107__auto___17577);

return statearr_17500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__12109__auto__);
}));


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return module$node_modules$react$index.createElement("span",({"key": "cljs-logo", "dangerouslySetInnerHTML": ({"__html": devcards.system.cljs_logo_svg})}));
});

//# sourceMappingURL=devcards.system.js.map
