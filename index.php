<!DOCTYPE html>
<html>
    <div id="sideMenu">
	<b>Share:</b>

	<ul class="share-buttons">
  <li>
  <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fyuzhengwen.github.io%2F&t=" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;"><img src="Images/flat_web_icon_set/color/Facebook.png" height="35"></a></li>
  <li><a href="https://twitter.com/intent/tweet?source=http%3A%2F%2Fyuzhengwen.github.io%2F&text=:%20http%3A%2F%2Fyuzhengwen.github.io%2F&via=yuzhengwen" target="_blank" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL)); return false;"><img src="Images/flat_web_icon_set/color/Twitter.png"height="35"></a></li>
  <li><a href="https://plus.google.com/share?url=http%3A%2F%2Fyuzhengwen.github.io%2F" target="_blank" title="Share on Google+" onclick="window.open('https://plus.google.com/share?url=' + encodeURIComponent(document.URL)); return false;"><img src="Images/flat_web_icon_set/color/GooglePlus.png"height="35"></a></li>
  <li><a href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fyuzhengwen.github.io%2F&description=" target="_blank" title="Pin it" onclick="window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&description=' +  encodeURIComponent(document.title)); return false;"><img src="Images/flat_web_icon_set/color/Pinterest.png"height="35"></a></li>
  <li><a href="https://getpocket.com/save?url=http%3A%2F%2Fyuzhengwen.github.io%2F&title=" target="_blank" title="Add to Pocket" onclick="window.open('https://getpocket.com/save?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"><img src="Images/flat_web_icon_set/color/Pocket.png"height="35"></a></li>
  <li><a href="http://www.reddit.com/submit?url=http%3A%2F%2Fyuzhengwen.github.io%2F&title=" target="_blank" title="Submit to Reddit" onclick="window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"><img src="Images/flat_web_icon_set/color/Reddit.png"height="35"></a></li>
  <li><a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fyuzhengwen.github.io%2F&title=&summary=&source=http%3A%2F%2Fyuzhengwen.github.io%2F" target="_blank" title="Share on LinkedIn" onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title)); return false;"><img src="Images/flat_web_icon_set/color/LinkedIn.png"height="35"></a></li>
  <li><a href="mailto:?subject=&body=:%20http%3A%2F%2Fyuzhengwen.github.io%2F" target="_blank" title="Email" onclick="window.open('mailto:?subject=' + encodeURIComponent(document.title) + '&body=' +  encodeURIComponent(document.URL)); return false;"><img src="Images/flat_web_icon_set/color/Email.png"height="35"></a>
  </li>
</ul>

	</div>
    <div id="scrolling">
        <div id="scrollUp" onclick="scrollUp();">
            <img src="https://dl.dropbox.com/s/lg7d366zcahrjc8/up-arrow.png?dl=0">
        </div>
        <!--https://www.iconfinder.com/icons/186407/arrow%2Cup%2Carrow_up_icon#size=48 -->
        <div id="scrollDown" onclick="scrollDown();">
            <img
            src="https://dl.dropbox.com/s/99q78t8hv1vbc8r/down-arrow.png?dl=0">
        </div>
        <!--https://www.iconfinder.com/icons/186411/arrow%2Cdown_icon#size=48 -->
    </div>

    <div id="popup" class="fixed">
        <b>Welcome to my site</b>
        <br>
        <br>
		This is where I upload all my works
		<br>
		Enjoy :)
        <button onclick="closePopup()" class="fixed" id="closePopup">
            X
        </button>
    </div>

    <head><script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript" src="http://s.sharethis.com/loader.js"></script>
	<script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript" src="http://s.sharethis.com/loader.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <title>Yuzhengwen</title>
        <link rel="stylesheet" type="text/css" href="CSS/index.css">
        <link rel="stylesheet" type="text/css" href="Slider/slider.css">
        <link rel="stylesheet" type="text/css" href="CSS/responsive.css"
        media="screen and (max-width:960px)">
        <link rel="shortcut icon" href="/favicon.ico" type="image/icon">
        <link rel="icon" href="/favicon.ico" type="image/icon">
    </head>
    <body onload="setUpSlider(); autoSlide();">
        <script type="text/javascript" src="Javascript/main.js"></script>
        <script type="text/javascript" src="Javascript/Animation.js"></script>
        <script type="text/javascript" src="Slider/slider.js"></script>
        <div id="wrapper">
            <header>
                <h1><a href="index.html">YUZHENGWEN</a></h1>
                <nav>
                    <div id="mobile-nav-icon">
                        <img src="https://dl.dropbox.com/s/fpv0smfjfcu9gvj/nav-icon.png?dl=0" onclick="showNav()">
                    </div>
                    <ul>
                        <li class="dropdownMenu">
                            <a href="#">Follow ></a>
                            <ul>
                                <li>
                                    <a href="follow-email.html">Email</a>
                                </li>
                                <li>
                                    <a href="follow-socialmedia.html">Social Media</a>
                                </li>
                                <li>
                                    <a href="follow-rss.html">RSS</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.php">Contact</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a id="onLink" href="index.html">Home</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <br>
            <div id="callToAction">
                <!-- Slider -->
                <div id="slider-container">
                    <img id="slider-img" alt="Slider-Image">
                    <div id="prev">
                        <img onclick="prevSlide();"
                        src="https:/dl.dropbox.com/s/zpuv07xh30g8nff/left-arrow.png?dl=0">
                    </div>
                    <div id="next">
                        <img onclick="nextSlide();"
                        src="https://dl.dropbox.com/s/erps8ew8ra547ub/right-arrow.png?dl=0">
                    </div>
                    <div id="play" onclick="play();">
                        Play
                    </div>
                    <div id="stop" onclick="stop();">
                        Stop
                    </div>
                </div>
                <!-- Slider end -->

            </div>
            <br>
            <div id="content">
                <h2>INTRODUCTION</h2>
				<p>
				Hello, guys. I do many projects, such as:
				<OL>
					<LI>Android
					<UL>
						<li>ROMs</li>
						<li>Mods</li>
						<li>Themes</li>
					</UL>
						<li>Random Java programs</li>
						<li>Minecraft mods</li>
				</OL>
				<br>
				Do poke around this website as there will be links for all of my projects.
				</p>
            </div>
            <div id="sidebar">
				<script>
				  (function() {
					var cx = '011944775746643820447:snsiumxaltw';
					var gcse = document.createElement('script');
					gcse.type = 'text/javascript';
					gcse.async = true;
					gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
						'//cse.google.com/cse.js?cx=' + cx;
					var s = document.getElementsByTagName('script')[0];
					s.parentNode.insertBefore(gcse, s);
				  })();
				</script>
				<gcse:search></gcse:search>

				<ul>
					<li>Android</li>
					<ul>
					    <li><a href="yrompower.html">[XperiaZ3] [ROM] YRom POWER Edition: Release the POWER!</a></li>
					</ul>
					<li>Minecraft Mods</li>
					<ul>
					    <li> Minecraft [1.7] YCraft</li>
					</ul>
				</ul>
            </div>
            <footer>
                <ul>
                    <li>
                        <a href="contact.php">Contact</a>
                    </li>
                    <!--  <li>
                           <a href="about.html">About</a>
                       </li>
                       <li>
                           <a href="terms-and-conditions.html">Terms And Conditions</a>
                       </li>
                       <li>
                           <a href="blog.html">Blog</a>
                       </li>
                       <li>
                           <a href="sitemap.html">Sitemap</a>
                       </li>  There aren't such sites here -->
                </ul>
                <a id="copyright" href="yuzhengwen.html">@Copyright Yuzhengwen <?php echo date('Y', time()); ?></a>
            </footer>
        </div>

    </body>
</html>
