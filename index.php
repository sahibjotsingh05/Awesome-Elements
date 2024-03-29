<!DOCTYPE html>
<html>
    <head>
        <title>Awesome Elements | Understand Periodic Table | By sahibjot singh</title>
        <link rel="stylesheet" href="includes/css/style.css">
        <link rel="icon" href="includes/media/favicon.png">
        <script src="includes/js/data.js"></script>
        <script src="includes/js/script.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <nav>
            <div class="logo">
                <img src="includes/media/logo.png">
            </div>
            <input type="checkbox" id="menu-check">
            <label for="menu-check" id="menu-label">
                <img src="includes/media/menu_bars.svg" id="menu-btn">
            </label>
            <ul class="menu">
                <li><a href="index.php" onclick="closeMenu()">HOME</a></li>
                <li><a href="#history-area" onclick="closeMenu()">HISTORY</a></li>
                <li><a href="#area-periodic-table" onclick="closeMenu()">PERIODIC TABLE</a></li>
                <li><a href="#mnemonics-area" onclick="closeMenu()">MNEMONICS</a></li>
            </ul>
        </nav>
        <div class="banner">
            <img src="includes/media/banner.jpg">
                <h1 class="banner-heading">
                    <center>
                        Making Chemistry Simple and Easy to Understand!
                    </center>
                </h1>
        </div>
        <div class="history" id="history-area">
            <h1 class="history-heading">HISTORY OF PERIODIC TABLE</h1>
            <div class="history-row">
                <div class="history-image">
                    <img src="includes/media/mendeleev.jpg" class="history-img">
                </div>
                <div class="history-text">
                    <h2 class="history-sub-text">Dmitri Ivanovich Mendeleev</h2>
                    <p class="history-para">
                        Dmitri Ivanovich Mendeleev is known as the most important contributor
                        to the early development of a Periodic Table of elements wherein the
                        elements were arranged on the basis of their fundamental property, the
                        atomic mass, and also on the similarity of chemical properties.
                        When Mendeleev started his work, 63 elements were known.
                        The formulae
                        of the hydrides and oxides formed by an element were treated as one of
                        the basic properties of an element for its classification. He then took 63
                        cards and on each card he wrote down the properties of one element. He
                        sorted out the elements with similar properties and pinned the cards
                        together on a wall. He observed that most of the elements got a place in
                        a Periodic Table and were arranged in the order of their increasing atomic
                        masses. It was also observed that there occurs a periodic recurrence of
                        elements with similar physical and chemical properties.
                    </p>
                </div>
            </div>
            <div class="history-row mosley-row">
                <div class="history-text">
                    <h2 class="history-sub-text mosley-text">Henry Mosley</h2>
                    <p class="mosley-para">
                        In 1913, Henry Moseley showed that the atomic number of an element
                        is a more fundamental property than its atomic mass. Mosley bombarded different metal targets with 
                        high speed electrons and measured frequencies of X rays emitted. He observed
                        regularities in the characteristic X-ray spectra
                        of the elements. A plot of √ν (where ν is
                        frequency of X-rays emitted) against atomic
                        number (Z) gave a straight line and not the
                        plot of √ν vs atomic mass. He thereby showed
                        that the atomic number is a more fundamental
                        property of an element than its atomic mass.
                        Mendeleev’s Periodic Law was, therefore,
                        accordingly modified.
                    </p>
                </div>
                <div class="history-image">
                    <img src="includes/media/mosley.jpg" class="history-img">
                </div>
            </div>
        </div>
        <div class="mosley-quotation">
            <h1><b>“The Physical and Chemical properties of the elements are Periodic functions of their Atomic Numbers”</b></h1>
            <h2>~Henry Mosley</h2>
        </div>
        <div class="periodic-table-area" id="area-periodic-table">
            <h1>PERIODIC TABLE</h1>
            <div class="periodic-table-widget">
                <div class="periodic-text">
                    <p>
                        Click On Your Favorite Element And We've Got You Fun Facts About That!
                    </p>
                </div>
                <div class="periodic-selection-area">
                    <h5>Choose Color Theme</h5>
                    <select onchange="changeColor(this.value)">
                        <option value="default" selected>Default</option>
                        <option value="atomic_mass">Atomic Mass</option>
                        <option value="e_config">Electronic Configuration</option>
                        <option value="ionization-energy">Ionization Energy</option>
                    </select>
                </div>
            </div>
            <div class="periodic-table">
                <script>
                    printPeriodicTable();
                    changeColor("default");
                </script>
            </div>
            <div class="block-info" id="block-info">
                <div class="block-col">
                    <div class="block-bar bg-sblock">

                    </div>
                    <h3>
                        S-block
                    </h3>
                </div>
                <div class="block-col">
                    <div class="block-bar bg-pblock">

                    </div>
                    <h3>
                        P-block
                    </h3>
                </div>
                <div class="block-col">
                    <div class="block-bar bg-dblock">

                    </div>
                    <h3>
                        D-block
                    </h3>
                </div>
                <div class="block-col">
                    <div class="block-bar bg-fblock">

                    </div>
                    <h3>
                        F-block
                    </h3>
                </div>
            </div>
            <div class="trends-facts" id="facts-area-gradient">
                <center>
                    <div class="gradient">Min&nbsp;&nbsp;&nbsp;<div class="gradient-fact" id="bar-gradient"></div>&nbsp;&nbsp;&nbsp;Max</div>
                </center>
                <center><span id="label-gradient">Atomic Mass</span></center>
            </div>
        </div>
        <div class="element-facts-area" id="facts-area">
            <h1 id="facts-heading">Awesome Facts About Rutherfordium</h1>
            <div class="element-facts-sub-area">
                <div class="element-facts" id="table-area">
                    
                </div>
                <div class="element-card">
                    <div class="card" id="card">
                        <span class="card-number" id="card-number">1</span>
                        <span class="card-symbol" id="card-symbol">Rf</span>
                        <span class="card-name" id="card-name">Rutherfordium</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mnemonics-area" id="mnemonics-area">
            <h1>MNEMONICS FOR PERIODIC TABLE</h1>
            <p class="info-why-mnemonics">Various scientific and psychological studies have proven the actual result of memorization 
                techniques on children’s memory. According to the results of tests performed, scientists witnessed a guaranteed 
                increase in the speed of reading and memorization at a minimum of 50% after these techniques have been adopted. 
                It can improve young children’s cognitive development, memory retention skills, and the results they achieve in school.</p>
            <p class="mnemonics-intro">Here Are Some Mnemonics For Periodic Table</p>
            <div class="mnemonics-list">
                <h3>Periods 1, 2 and 3</h3>
                <p><b>H</b>appy <b>He</b>lina <b>Li</b>stens <b>B B C</b> <b>N</b>etwork <b>O</b>ver <b>Fr</b>ance <b>Ne</b>vertheless
                     <b>N</b>othing <b>M</b>ore <b>A</b>rose <b>S</b>o <b>P</b>eter <b>S</b>topped <b>Cl</b>eaning <b>A</b>i<b>r</b>gun</p>
                <h3>Period 4</h3>
                <p><b>K</b>indly <b>Ca</b>nnibals <b>Sc</b>are <b>Ti</b>mid <b>V</b>isitors, 'n' <b>Cr</b>uelly <b>M</b>e<b>n</b>ace <b>Fe</b>male
                     <b>Co</b>mmunist <b>Ni</b>twits <b>Cu</b>ddling <b>Z</b>a<b>n</b>y <b>Ga</b>bbling <b>Ge</b>ese <b>As</b>tride <b>S</b>everal 
                     <b>B</b>rutal <b>K</b>angaroos.</p>
                <h3>Period 5</h3>
                <p><b>R</b>u<b>b</b>y, <b>S</b>i<b>r</b>, <b>Y</b>ells "<b>Z</b>i<b>r</b>con <b>N</b>e<b>b</b>ulas !". <b>Mo</b>st
                     <b>T</b>e<b>c</b>hnicians <b>Ru</b>le <b>Rh</b>odes and <b>P</b>a<b>d</b>dle <b>Ag</b>ainst <b>C</b>a<b>d</b>ence". 
                     <b>In</b>dia <b>S</b>e<b>n</b>t <b>S</b>e<b>b</b>astian to <b>Te</b>ll "<b>I</b>o <b>Xe</b>.</p>
                <h3>3d Series</h3>
                <p><b>La</b>te <b>H</b>arry <b>T</b>ook <b>W</b>alk, <b>R</b>eached <b>O</b>ffice <b>I</b>n <b>P</b>ajamas, <b>A</b>fter an
                     <b>H</b>Hour.</p>
                <h3>Lanthanides</h3>
                <p><b>La</b>nguid <b>Ce</b>ntaurs <b>Pr</b>aise <b>N</b>e<b>d</b>'s <b>P</b>ro<b>m</b>ise of <b>Sm</b>all <b>Eu</b>ropean
                     <b>G</b>ar<b>d</b>en <b>T</b>u<b>b</b>s; <b>D</b>inosaurs <b>Ho</b>bble <b>Er</b>ratically <b>T</b>hru<b>m</b>ming <b>Y</b>ellow
                      <b>Lu</b>tes.</p>
                <h3>Actinides</h3>
                <p><b>Ac</b>cording to <b>Th</b>or <b>P</b>rotects: <b>U</b>ranus, <b>N</b>e<b>p</b>tune, and <b>P</b>l<b>u</b>to. <b>Am</b>y
                     <b>C</b>ured <b>B</b>er<b>k</b>eley, <b>C</b>ali<b>f</b>ornia. <b>E</b>in<b>s</b>tein and <b>F</b>er<b>m</b>i <b>M</b>a<b>d</b>e 
                     <b>No</b>ble <b>L</b>aws.</p>
                <h3>Group 1</h3>
                <p><b>H</b>ey! <b>Li</b>ttle <b>Na</b>sty <b>K</b>ids <b>R</b>u<b>b</b> <b>C</b>at<b>s</b> <b>F</b>u<b>r</b></p>
                <h3>Group 2</h3>
                <p><b>Be</b>er <b>M</b>u<b>g</b>s <b>Ca</b>n <b>S</b>e<b>r</b>ve <b>Ba</b>r <b>Ra</b>ts</p>
                <h3>Group 13</h3>
                <p><b>BAG IT</b></p>
                <h3>Group 14</h3>
                <p><b>C</b>an <b>Si</b>mple <b>Ge</b>rmans <b>Sn</b>are (<b>Tin</b>y) <b>P</b>u<b>b</b>lic (<b>Lead</b>)?</p>
                <h3>Group 16</h3>
                <p><b>O</b>ttoman <b>S</b>ultan <b>Se</b>nds <b>Te</b>xtiles to <b>Po</b>or <b>La</b>dies.</p>
                <h3>Group 17</h3>
                <p><b>F</b>irst <b>Cl</b>ass <b>Br</b>iyani <b>I</b>n <b>A</b>us<b>t</b>ralia</p>
                <h3>Group 18</h3>
                <p><b>He</b> <b>Ne</b>ver <b>Ar</b>rived; <b>K</b>a<b>r</b>en e<b>X</b>ited with <b>R</b>o<b>n</b>.</p>
            </div>
        </div>
        <div class="footer">
            <div class="footer-row">
                <div class="about-section">
                    <h2>About Us</h2>
                    <p>
                        Awesome Elements helps aspiring Chemists and students to excel in understanding the Periodic Table.
                    </p>
                </div>
                <div class="footer-links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="index.php">Home</a></li>
                        <li><a href="#history-area">History</a></li>
                        <li><a href="#area-periodic-table">Periodic Table</a></li> 
                        <li><a href="#mnemonics-area">Mnemonics</a></li>
                    </ul>
                </div>
            </div>
            <hr>
            <?php
                $myfile = fopen("includes/users.txt", "r") or die("Unable to open file!");
                $numUsersStr = fgets($myfile);
                $num = $numUsersStr + 1;
                fclose($myfile);
                $myfile = fopen("includes/users.txt", "w") or die("Unable to open file!");
                fwrite($myfile, $num);
                fclose($myfile);
            ?>
            <div class="copyright">
                &copy;2021 Awesome Elements - All Rights Reserved || Total Users - 
                <?php echo($num); ?>
            </div>
        </div>
    </body>
</html>