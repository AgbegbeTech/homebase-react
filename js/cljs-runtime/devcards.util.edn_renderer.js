goog.provide('devcards.util.edn_renderer');
if((typeof devcards !== 'undefined') && (typeof devcards.util !== 'undefined') && (typeof devcards.util.edn_renderer !== 'undefined') && (typeof devcards.util.edn_renderer._STAR_key_counter_STAR_ !== 'undefined')){
} else {
devcards.util.edn_renderer._STAR_key_counter_STAR_ = null;
}
devcards.util.edn_renderer.get_key = (function devcards$util$edn_renderer$get_key(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer._STAR_key_counter_STAR_,cljs.core.inc);

return ["k-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(devcards.util.edn_renderer._STAR_key_counter_STAR_))].join('');
});
devcards.util.edn_renderer.literal_QMARK_ = (function devcards$util$edn_renderer$literal_QMARK_(x){
return (((!(cljs.core.map_entry_QMARK_(x)))) && ((!(cljs.core.seq_QMARK_(x)))) && ((!(cljs.core.coll_QMARK_(x)))));
});
devcards.util.edn_renderer.separator_STAR_ = (function devcards$util$edn_renderer$separator_STAR_(s){
var G__17069 = "span";
var G__17070 = ({"key": devcards.util.edn_renderer.get_key(), "className": "seperator"});
var G__17071 = sablono.interpreter.interpret(s);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17069,G__17070,G__17071) : sablono.core.create_element.call(null,G__17069,G__17070,G__17071));
});
devcards.util.edn_renderer.clearfix_separator_STAR_ = (function devcards$util$edn_renderer$clearfix_separator_STAR_(s){
var G__17075 = "span";
var G__17076 = ({"key": devcards.util.edn_renderer.get_key()});
var G__17077 = sablono.interpreter.interpret(devcards.util.edn_renderer.separator_STAR_(s));
var G__17078 = (function (){var G__17079 = "span";
var G__17080 = ({"className": "clearfix"});
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$2 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$2(G__17079,G__17080) : sablono.core.create_element.call(null,G__17079,G__17080));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17075,G__17076,G__17077,G__17078) : sablono.core.create_element.call(null,G__17075,G__17076,G__17077,G__17078));
});
devcards.util.edn_renderer.separate_fn = (function devcards$util$edn_renderer$separate_fn(coll){
try{if((!(cljs.core.every_QMARK_(devcards.util.edn_renderer.literal_QMARK_,coll)))){
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
return devcards.util.edn_renderer.separator_STAR_;
}
}catch (e17081){if((e17081 instanceof Error)){
var e = e17081;
return devcards.util.edn_renderer.clearfix_separator_STAR_;
} else {
throw e17081;

}
}});
devcards.util.edn_renderer.interpose_separator = (function devcards$util$edn_renderer$interpose_separator(rct_coll,s,sep_fn){
return cljs.core.to_array(cljs.core.cons(cljs.core.first(rct_coll),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (sep_fn.cljs$core$IFn$_invoke$arity$1 ? sep_fn.cljs$core$IFn$_invoke$arity$1(s) : sep_fn.call(null,s));
})),cljs.core.rest(rct_coll))));
});
devcards.util.edn_renderer.literal = (function devcards$util$edn_renderer$literal(class$,x){
var G__17083 = "span";
var G__17084 = ({"className": class$, "key": devcards.util.edn_renderer.get_key()});
var G__17085 = sablono.interpreter.interpret(devcards.util.utils.pprint_str(x));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17083,G__17084,G__17085) : sablono.core.create_element.call(null,G__17083,G__17084,G__17085));
});
devcards.util.edn_renderer.html_val = (function devcards$util$edn_renderer$html_val(index,v){
var G__17086 = "span";
var G__17087 = ({"key": index});
var G__17088 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17086,G__17087,G__17088) : sablono.core.create_element.call(null,G__17086,G__17087,G__17088));
});
devcards.util.edn_renderer.join_html = (function devcards$util$edn_renderer$join_html(separator,coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_val,coll)),separator,devcards.util.edn_renderer.separate_fn(coll));
});
devcards.util.edn_renderer.html_keyval = (function devcards$util$edn_renderer$html_keyval(p__17089){
var vec__17090 = p__17089;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17090,(1),null);
var G__17094 = "span";
var G__17095 = ({"key": cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0)), "className": "keyval"});
var G__17096 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(k) : devcards.util.edn_renderer.html.call(null,k)));
var G__17097 = sablono.interpreter.interpret((devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1 ? devcards.util.edn_renderer.html.cljs$core$IFn$_invoke$arity$1(v) : devcards.util.edn_renderer.html.call(null,v)));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$4 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$4(G__17094,G__17095,G__17096,G__17097) : sablono.core.create_element.call(null,G__17094,G__17095,G__17096,G__17097));
});
devcards.util.edn_renderer.html_keyvals = (function devcards$util$edn_renderer$html_keyvals(coll){
return devcards.util.edn_renderer.interpose_separator(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(devcards.util.edn_renderer.html_keyval,coll)," ",devcards.util.edn_renderer.separate_fn(cljs.core.vals(coll)));
});
devcards.util.edn_renderer.open_close = (function devcards$util$edn_renderer$open_close(class_str,opener,closer,rct_coll){
var G__17098 = "span";
var G__17099 = ({"className": class_str, "key": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(rct_coll))});
var G__17100 = (function (){var G__17103 = "span";
var G__17104 = ({"key": (1), "className": "opener"});
var G__17105 = sablono.interpreter.interpret(opener);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17103,G__17104,G__17105) : sablono.core.create_element.call(null,G__17103,G__17104,G__17105));
})();
var G__17101 = (function (){var G__17106 = "span";
var G__17107 = ({"key": (2), "className": "contents"});
var G__17108 = sablono.interpreter.interpret(rct_coll);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17106,G__17107,G__17108) : sablono.core.create_element.call(null,G__17106,G__17107,G__17108));
})();
var G__17102 = (function (){var G__17109 = "span";
var G__17110 = ({"key": (3), "className": "closer"});
var G__17111 = sablono.interpreter.interpret(closer);
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17109,G__17110,G__17111) : sablono.core.create_element.call(null,G__17109,G__17110,G__17111));
})();
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$5 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$5(G__17098,G__17099,G__17100,G__17101,G__17102) : sablono.core.create_element.call(null,G__17098,G__17099,G__17100,G__17101,G__17102));
});
devcards.util.edn_renderer.html_collection = (function devcards$util$edn_renderer$html_collection(class$,opener,closer,coll){
return devcards.util.edn_renderer.open_close(["collection ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),opener,closer,devcards.util.edn_renderer.join_html(" ",coll));
});
devcards.util.edn_renderer.html_map = (function devcards$util$edn_renderer$html_map(coll){
return devcards.util.edn_renderer.open_close("collection map","{","}",devcards.util.edn_renderer.html_keyvals(coll));
});
devcards.util.edn_renderer.html_string = (function devcards$util$edn_renderer$html_string(s){
return devcards.util.edn_renderer.open_close("string","\"","\"",s);
});
devcards.util.edn_renderer.html = (function devcards$util$edn_renderer$html(x){
if(typeof x === 'number'){
return devcards.util.edn_renderer.literal("number",x);
} else {
if((x instanceof cljs.core.Keyword)){
return devcards.util.edn_renderer.literal("keyword",x);
} else {
if((x instanceof cljs.core.Symbol)){
return devcards.util.edn_renderer.literal("symbol",x);
} else {
if(typeof x === 'string'){
return devcards.util.edn_renderer.html_string(x);
} else {
if(cljs.core.map_QMARK_(x)){
return devcards.util.edn_renderer.html_map(x);
} else {
if(cljs.core.set_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("set","#{","}",x);
} else {
if(cljs.core.vector_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("vector","[","]",x);
} else {
if(cljs.core.seq_QMARK_(x)){
return devcards.util.edn_renderer.html_collection("seq","(",")",x);
} else {
return devcards.util.edn_renderer.literal("literal",x);

}
}
}
}
}
}
}
}
});
devcards.util.edn_renderer.html_edn = (function devcards$util$edn_renderer$html_edn(e){
var _STAR_key_counter_STAR__orig_val__17118 = devcards.util.edn_renderer._STAR_key_counter_STAR_;
var _STAR_key_counter_STAR__temp_val__17119 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
(devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR__temp_val__17119);

try{var G__17120 = "div";
var G__17121 = ({"key": "devcards-edn-block", "className": "com-rigsomelight-rendered-edn com-rigsomelight-devcards-typog"});
var G__17122 = sablono.interpreter.interpret(devcards.util.edn_renderer.html(e));
return (sablono.core.create_element.cljs$core$IFn$_invoke$arity$3 ? sablono.core.create_element.cljs$core$IFn$_invoke$arity$3(G__17120,G__17121,G__17122) : sablono.core.create_element.call(null,G__17120,G__17121,G__17122));
}finally {(devcards.util.edn_renderer._STAR_key_counter_STAR_ = _STAR_key_counter_STAR__orig_val__17118);
}});

//# sourceMappingURL=devcards.util.edn_renderer.js.map
