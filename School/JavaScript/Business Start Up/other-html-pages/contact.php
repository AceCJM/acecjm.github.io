<?php


if($_POST["message"]) {


mail("your@email.address", "Here is the subject line",


$_POST["insert your message here"]. "From: an@email.address");


}


?>
<html>
  <head>
    <title>Web Development Company</title>
    <link rel="stylesheet" type="text/css" href="../CSS/style.css" />
    <script src="script.js"></script>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.php">Contact</a></li>
        </ul>
      </nav>
      <img src="../images/company-logo.png" alt="Company logo" />
    </header>
    <main>
      <h2>Contact Us</h2>
      <p>
        Need to get in touch with us? Fill out the form below and we'll get back
        to you as soon as possible.
      </p>
      <form method="post" action="../scripts/contact.php">
        <input type="submit" value="Contact Us"/>
      </form>
    </main>
    <footer>
      <p>Copyright Sgithi SgigiGtat</p>
      <p>Created by Cody Miller</p>
    </footer>
  </body>
</html>
``