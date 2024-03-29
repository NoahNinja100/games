// ==UserScript==
// @name          Chess.com Chicago Bulls
// @namespace     http://userstyles.org
// @description	  Custom chess.com Chicago bulls Board
// @author        Moisés Henriques
// @homepage      https://userstyles.org/styles/247489
// @include       http://chess.com/*
// @include       https://chess.com/*
// @include       http://*.chess.com/*
// @include       https://*.chess.com/*
// @run-at        document-start
// @version       0.20220731185442
// ==/UserScript==
(function() {var css = [
	"div[class^=\"daily-puzzle-board\"],",
	"div[class^=\"game-preview\"],",
	"div[class^=\"board chessboard-component\"],",
	"div[class^=\"board v-board chessboard-component\"],",
	"div[class^=\"board rounded\"],",
	"div[class^=\"board rounded fippled\"],",
	"div[class^=\"board fippled rounded\"],",
	"div[class^=\"board v-board rounded\"],",
	"div[class^=\"board v-board fippled rounded\"],",
	"div[class^=\"board disabled rounded\"],",
	"div[id$=\"_ChessBoard_boardarea\"],",
	"div[id^=\"chess_com_openingboard_1\"],",
	"div[id^=\"board_training\"],",
	"div[id^=\"divBoard_boardarea\"],",
	"div[id^=\"chess_com_tactics_board\"],",
	"div[id^=\"chessboard_\"],",
	"div[id*=\"chessboard_\"],",
	"div[id^=\"chess_com_chessmentorboard_\"],",
	"div[id*=\"chess_com_chessmentorboard_\"],",
	"div[id*=\"chess_com_chessmentor_board_1_boardarea\"],",
	"div[id^=\"chess_com_emailboard_\"],",
	"div[id=\"board\"],",
	"chess-board[class^=\"board\"],",
	"chess-board[class^=\"board flipped\"],",
	"chess-board[id^=\"board-blank\"],",
	"div[id*=\"chess_com_emailboard_\"]",
	"  {",
	"    background-image: url(\"https://i.imgur.com/Dnj2hbW.png\")!important;",
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
