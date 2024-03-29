// ==UserScript==
// @name          Terrible Stickman Chess
// @namespace     http://userstyles.org
// @description	  Stickmen
// @author        Aslkois (Epicgamerboy549)
// @homepage      https://userstyles.org/styles/258105
// @include       http://chess.com/*
// @include       https://chess.com/*
// @include       http://*.chess.com/*
// @include       https://*.chess.com/*
// @run-at        document-start
// @version       0.20230123215641
// ==/UserScript==
(function() {var css = [
	"/* White Pieces */ ",
	"  .piece.wp, .promotion-piece.wp",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067194870512496730/White_Pawn.png\") !important;",
	"  }",
	"",
	"  .piece.wn, .promotion-piece.wn",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067196642777899070/White_Knight.png\") !important;",
	"  }",
	"",
	"  .piece.wb, .promotion-piece.wb",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067194869157736550/White_Bishop.png\") !important;",
	"  }",
	"",
	"  .piece.wr, .promotion-piece.wr",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067196642253607053/White_Rook.png\") !important;",
	"  }",
	"",
	"  .piece.wq, .promotion-piece.wq",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067194869614923796/White_Queen.png\") !important;",
	"  }",
	"",
	"  .piece.wk, .promotion-piece.wk",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067194870034333726/White_King.png\") !important;",
	"  }",
	"",
	"/* Black Pieces */",
	"  .piece.bp, .promotion-piece.bp",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067194870726393867/Black_Pawn.png\") !important;",
	"  }",
	"",
	"  .piece.bn, .promotion-piece.bn",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067196643037941861/Black_Knight.png\") !important;",
	"  }",
	"",
	"  .piece.bb, .promotion-piece.bb",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067194869375828168/Black_Bishop.png\") !important;",
	"  }",
	"",
	"  .piece.br, .promotion-piece.br",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067196642551414864/Black_Rook.png\") !important;",
	"  }",
	"",
	"  .piece.bq, .promotion-piece.bq",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067194869820436490/Black_Queen.png\") !important;",
	"  }",
	"",
	"  .piece.bk, .promotion-piece.bk",
	"  {",
	"    background-image: url(\"https://cdn.discordapp.com/attachments/910382029835759616/1067194870311178340/Black_King.png\") !important;",
	"  }",
	"",
	"/* Background */ ",
	"  .board, .game-preview-component",
	"  {",
	"    background-image: url(\"https://i.imgur.com/cuit8wg.jpg\") !important;",
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
