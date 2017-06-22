<!doctype html>
<html lang="ru">
<head>
    <?php

    $title = 'Новости';
    include('includes/head.php');

    ?>
</head>
<body class="fon-2">
<div id="page">
    <div id="page_header">
        <div class="container">
            <?php include('includes/block-header.php') ?>
        </div>
    </div>
    <div id="page_body">
        <div class="container">
            <?php include('includes/block-slider.php') ?>
            <div class="block-main">
                <div class="sidebar">
                    <?php include('includes/sidebar-index.php') ?>
                </div>
                <div class="content">
                    <?php include('includes/content-news.php') ?>
                </div>
            </div>
        </div>
    </div>
    <div id="page_footer">
        <div class="container">
            <?php include('includes/block-footer.php') ?>
        </div>
    </div>
</div>
</body>
</html>
