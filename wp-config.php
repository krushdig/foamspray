<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

# Database Configuration
define( 'DB_NAME', 'krushdig_foamspray' );
define( 'DB_USER', 'krushdig_foams' );
define( 'DB_PASSWORD', 'bov0)?A}{sVW' );
define( 'DB_HOST', 'localhost' );
define( 'DB_HOST_SLAVE', 'localhost' );
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
$table_prefix = 'wp_';

# Security Salts, Keys, Etc
define('AUTH_KEY',         'Y5Ddo.pJxf]j&lZc0Q%b7!<SCX2B%qzH!02+;?5n7knv)UQYG:9,|yUmQTCVsJ0M');
define('SECURE_AUTH_KEY',  'Sc@#.}%AYb_h6Iq0CE@0lAeW[mI-lG}Yg;fa<vSYp1(W3#:2RLDejmr%8,F<^o+4');
define('LOGGED_IN_KEY',    ':xevPyx%+YL=C@dbb(Q-No>|O|&t3c(:#XmU+g1 QrlYH(4tp=ur$rE`BD#0shE#');
define('NONCE_KEY',        '_-CJcV]1+sd30QwRcYxSe,,S[.p8n|.Q<_,kp|cS{76[?U:o_bY||%$OJ$`]xQS`');
define('AUTH_SALT',        '>QI#1S.U$,AToT=We|%y5H3xQTi{%G9#fxce.{CyURr)G|55EaPWGJjr5@ToS#-l');
define('SECURE_AUTH_SALT', 'pxjC|m)a7p6DaaX|ny{|@rgLhtdf9M+=&)-_#><xsa}Zx;L+}.zhSHneoDdTw0n~');
define('LOGGED_IN_SALT',   '+N~ct5Fq|<-K^+7SPuoy$^Q]s ;aP:&`%){je-/Ni(K}hu-]L4+8kla}RBT/(TC#');
define('NONCE_SALT',       'g ocNo`9<p3f|fq(2i#~If=wFGQr.^evvfB{<xFxFNNwF7>G yCy: :?TZ<7H;0o');


# Localized Language Stuff


define( 'WP_AUTO_UPDATE_CORE', false );

define( 'PWP_NAME', 'foamspray' );

define( 'FS_METHOD', 'direct' );

define( 'FS_CHMOD_DIR', 0775 );

define( 'FS_CHMOD_FILE', 0664 );

define( 'PWP_ROOT_DIR', '/nas/wp' );

define( 'WPE_APIKEY', '771d6e76f02f15183a0a190b64353612b9f3854d' );

define( 'WPE_CLUSTER_ID', '112743' );

define( 'WPE_CLUSTER_TYPE', 'pod' );

define( 'WPE_ISP', true );

define( 'WPE_BPOD', false );

define( 'WPE_RO_FILESYSTEM', false );

define( 'WPE_LARGEFS_BUCKET', 'largefs.wpengine' );

define( 'WPE_SFTP_PORT', 2222 );

define( 'WPE_LBMASTER_IP', '' );

define( 'WPE_CDN_DISABLE_ALLOWED', false );

define( 'DISALLOW_FILE_MODS', FALSE );

define( 'DISALLOW_FILE_EDIT', FALSE );

define( 'DISABLE_WP_CRON', false );

define( 'WPE_FORCE_SSL_LOGIN', true );

define( 'FORCE_SSL_LOGIN', true );

/*SSLSTART*/ if ( isset($_SERVER['HTTP_X_WPE_SSL']) && $_SERVER['HTTP_X_WPE_SSL'] ) $_SERVER['HTTPS'] = 'on'; /*SSLEND*/

define( 'WPE_EXTERNAL_URL', false );

define( 'WP_POST_REVISIONS', FALSE );

define( 'WPE_WHITELABEL', 'wpengine' );

define( 'WP_TURN_OFF_ADMIN_BAR', false );

define( 'WPE_BETA_TESTER', false );

umask(0002);

$wpe_cdn_uris=array ( );

$wpe_no_cdn_uris=array ( );

$wpe_content_regexs=array ( );

$wpe_all_domains=array ( 0 => 'www.foamspray.co.uk', 1 => 'foamspray.co.uk', 2 => 'foamspray.wpengine.com', );

$wpe_varnish_servers=array ( 0 => 'pod-112743', );

$wpe_special_ips=array ( 0 => '35.187.22.146', );

$wpe_ec_servers=array ( );

$wpe_largefs=array ( );

$wpe_netdna_domains=array ( 0 =>  array ( 'zone' => '42gk0j48f5jr12bsdi4cuanp', 'match' => 'www.foamspray.co.uk', 'enabled' => true, ), );

$wpe_netdna_domains_secure=array ( );

$wpe_netdna_push_domains=array ( );

$wpe_domain_mappings=array ( );

$memcached_servers=array ( 'default' =>  array ( 0 => 'unix:///tmp/memcached.sock', ), );
define('WPLANG','');

# WP Engine ID


# WP Engine Settings






# That's It. Pencils down
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
require_once(ABSPATH . 'wp-settings.php');

$_wpe_preamble_path = null; if(false){}
