// ==UserScript==
// @name          Custom Christmas Chess Set
// @namespace     http://userstyles.org
// @description	  A cool Christmas Chess Set made for Chess.com
// @author        OS_009
// @homepage      https://userstyles.org/styles/255344
// @include       http://chess.com/*
// @include       https://chess.com/*
// @include       http://*.chess.com/*
// @include       https://*.chess.com/*
// @run-at        document-start
// @version       0.20221127234519
// ==/UserScript==
(function() {var css = [
	"/* White Pieces */ ",
	"  .piece.wp, .promotion-piece.wp",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046533829755666502/S__2_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.wn, .promotion-piece.wn",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046542621889269870/S__3_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.wb, .promotion-piece.wb",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046563537981546536/S__11_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.wr, .promotion-piece.wr",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046532890852339774/S__1_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.wq, .promotion-piece.wq",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046563537335631974/S__9_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.wk, .promotion-piece.wk",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046563625130790932/S__7_-removebg-preview_1.png\") !important;",
	"  }",
	"",
	"/* Black Pieces */",
	"  .piece.bp, .promotion-piece.bp",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046549883970138132/S__5_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.bn, .promotion-piece.bn",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046549417416728687/S__4_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.bb, .promotion-piece.bb",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046563538300321914/S__12_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.br, .promotion-piece.br",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046550154079129680/S__6_-removebg-preview.png\") !important;",
	"  }",
	"",
	"  .piece.bq, .promotion-piece.bq",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046564915093176370/S__10_-removebg-preview_4.png\") !important;",
	"  }",
	"",
	"  .piece.bk, .promotion-piece.bk",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046560731350450226/S__8_-removebg-preview.png\") !important;",
	"  }",
	"",
	"/* Background */ ",
	"  .board, .game-preview-component",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/716092225423147018/1046570521619345408/glow_5.png\") !important;",
	"    background-position: center !important;",
	"  }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
