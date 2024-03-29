// ==UserScript==
// @name          Chess.com pieces: Ghost Set
// @namespace     http://userstyles.org
// @description	  Ghost pieces
// @author        Nova
// @homepage      https://userstyles.org/styles/241048
// @run-at        document-start
// @match         https://www.chess.com/play/online
// @version       0.20220610042027
// ==/UserScript==
(function() {var css = [
	"div [style*=\"bp.png\"],",
	"  div [class^=\"piece bp\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/FEHrZ6U.png\")!important;",
	"  }",
	"",
	"  div [style*=\"br.png\"],",
	"  div [class^=\"piece br\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/ZVVyJJi.png\")!important;",
	"  }",
	"",
	"  div [style*=\"bn.png\"],",
	"  div [class^=\"piece bn\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/d2UggRd.png\")!important;",
	"  }",
	"",
	"  div [style*=\"bb.png\"],",
	"  div [class^=\"piece bb\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/bFTF4c2.png\")!important;",
	"  }",
	"",
	"  div [style*=\"bq.png\"],",
	"  div [class^=\"piece bq\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/EUg7M7x.png\")!important;",
	"  }",
	"",
	"  div [style*=\"bk.png\"],",
	"  div [class^=\"piece bk\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/0vhNJZR.png\")!important;",
	"  }",
	"",
	"  div [style*=\"wp.png\"],",
	"  div [class^=\"piece wp\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/xsLrhyr.png\")!important;",
	"  }",
	"",
	"  div [style*=\"wr.png\"],",
	"  div [class^=\"piece wr\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/SRNtf2X.png\")!important;",
	"  }",
	"",
	"  div [style*=\"wn.png\"],",
	"  div [class^=\"piece wn\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/AVGXOFe.png\")!important;",
	"  }",
	"",
	"  div [style*=\"wb.png\"],",
	"  div [class^=\"piece wb\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/DhJGpC6.png\")!important;",
	"  }",
	"",
	"  div [style*=\"wq.png\"],",
	"  div [class^=\"piece wq\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/pt8gw2o.png\")!important;",
	"  }",
	"",
	"  div [style*=\"wk.png\"],",
	"  div [class^=\"piece wk\"]",
	"  {",
	"    background-image: url(\"https://imgur.com/lGZOYbc.png\")!important;",
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
