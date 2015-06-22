<!DOCTYPE html>
<html>
<head>
	<title>Impact Game</title>
	<style type="text/css">
		html,body {
            background: url(assets/images/walkingKegBg.png) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
			background-color: #000;
			color: #fff;
			font-family: helvetica, arial, sans-serif;
			margin: 0;
			padding: 0;
			font-size: 12pt;
		}

		#canvas {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;
		}
        .centerLogoCls
        {
            text-align: center;
            padding-top: 25px;
        }
	</style>

	<script type="text/javascript" src="lib/impact/impact.js"></script>
	<script type="text/javascript" src="lib/game/main.js"></script>
</head>
<body>
<div class="centerLogoCls">
    <img src="assets/images/walkingKegLogo02.png" alt=""/>
	<canvas id="canvas"></canvas>
</div>

</body>
</html>
