<?php
    defined('ABSPATH') or exit;
    add_action('wp_enqueue_scripts', 'live2d_scripts');
    function live2d_scripts()
    {
        if (!wp_is_mobile()) {
            wp_enqueue_style('live2d-base', LIVE2D_URL . '/live2d/css/live2d.css', array(), LIVE2D_VERSION, 'all');
            wp_enqueue_script('live2d-base', LIVE2D_URL . '/live2d/js/live2d.js', array(), LIVE2D_VERSION, true);
            wp_enqueue_script('live2d-message', LIVE2D_URL . '/live2d/js/message.js', array(), LIVE2D_VERSION, true);
            wp_enqueue_script('live2d-run', LIVE2D_URL . '/live2d/js/run_local.js', array(), LIVE2D_VERSION, true);
        }
    }

    add_action('wp_head', 'live2d_head');
    function live2d_head()
    {
        if (!wp_is_mobile()) {
            $nohitokoto = "var nohitokoto = false;";
            $nospecialtip = "var nospecialtip = false;";
            echo '<script type="text/javascript">var live2d_Path = "' . LIVE2D_URL . '/live2d/model/pio/";var message_Path = "' . LIVE2D_URL . '/live2d/";var home_Path = "' . home_url() . '/";'.$nohitokoto.$nospecialtip.'</script>';
        }
    }

    add_action('wp_footer', 'live2d_footer');
    function live2d_footer()
    {
        if (!wp_is_mobile()) {
            ?>
            <div id="landlord">
                <div class="message" style="opacity:0"></div>
                <canvas id="live2d" width="280" height="250" class="live2d" style="opacity:0;"></canvas>
                <div class="hide-button">隐藏</div>
                <div class="switch-button">变装</div>
            </div>
        <?php
        }
    }

    function hex2rgb($hexColor)
    {
        $color = str_replace('#', '', $hexColor);
        if (strlen($color) > 3) {
            $rgb = (string)(hexdec(substr($color, 0, 2))).','.(string)(hexdec(substr($color, 2, 2))).','.(string)(hexdec(substr($color, 4, 2)));
        } else {
            $color = $hexColor;
            $r = substr($color, 0, 1) . substr($color, 0, 1);
            $g = substr($color, 1, 1) . substr($color, 1, 1);
            $b = substr($color, 2, 1) . substr($color, 2, 1);
            $rgb = (string)hexdec($r).','.(string)hexdec($g).','.(string)hexdec($b);
        }
        return $rgb;
    }
?>