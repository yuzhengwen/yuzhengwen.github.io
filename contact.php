<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <title>Contact</title>
        <link rel="stylesheet" type="text/css" href="CSS/index.css">
        <link rel="stylesheet" type="text/css" href="CSS/responsive.css"
        media="screen and (max-width:960px)">
        <link rel="stylesheet" type="text/css" href="ContactForm/contactform.css">
        <link rel="shortcut icon" href="/favicon.ico" type="image/icon">
        <link rel="icon" href="/favicon.ico" type="image/icon">
    </head>
    <body>
        <script type="text/javascript" src="ContactForm/contactform.js"></script>
        <script type="text/javascript" src="Javascript/main.js"></script>
    <div id="sideMenu">
        Side
    </div>
    <div id="scrolling">
        <div id="scrollUp" onclick="scrollUp();">
            <img src="Images/up-arrow.png">
        </div>
        <!--https://www.iconfinder.com/icons/186407/arrow%2Cup%2Carrow_up_icon#size=48 -->
        <div id="scrollDown" onclick="scrollDown();">
            <img src="Images/down-arrow.png">
        </div>
        <!--https://www.iconfinder.com/icons/186411/arrow%2Cdown_icon#size=48 -->
    </div>

        <div id="wrapper">
            <header>
                <nav>
                    <div id="mobile-nav-icon">
                        <img src="Images/nav-icon.png" onclick="showNav()">
                    </div>
                    <ul>
                        <li>
                            <a href="private.html">Private</a>
                        </li>
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
                            <a id="onLink" href="contact.php">Contact</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                    </ul>
                </nav>
                <h1><a href="index.html">Yuzhengwen</a></h1>
            </header>

            <br>
            <div id="content">
                <!-- Insert content here -->
                <?php
                //include contact form
                include "ContactForm/contactform.html";
                ?>
                <br>
                <br>
                <br>
                <b>OR</b>
                <p>
                    Tweet to me
                </p>
            </div>
            <div id="sidebar">
                <p>
                    Sidebar
                </p>
            </div>
            <footer>
                <ul>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                    <li>
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
                    </li>
                </ul>
                <a id="copyright" href="yuzhengwen.html">@Copyright Yuzhengwen <?php echo date(Y, time()); ?></a>
            </footer>
        </div>
    </body>
</html>