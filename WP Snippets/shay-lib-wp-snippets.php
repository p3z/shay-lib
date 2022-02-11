
/*
    Snippet source: https://wordpress.org/plugins/disable-block-editor-fullscreen-mode/ 
    // Was extracted from the plugin
*/
/* hook to disable the fullscreen mode in editor. */
add_action( 'enqueue_block_editor_assets','dbef_disable_editor_fullscreen_by_default' );
function dbef_disable_editor_fullscreen_by_default() {
	$script = "jQuery( window ).load(function() { const isFullscreenMode = wp.data.select( 'core/edit-post' ).isFeatureActive( 'fullscreenMode' ); if ( isFullscreenMode ) { wp.data.dispatch( 'core/edit-post' ).toggleFeature( 'fullscreenMode' ); } });";
	wp_add_inline_script( 'wp-blocks', $script );
}

/* Add custom REST route*/
add_action( 'rest_api_init', function () {
  register_rest_route( 'API_NAME/v1', '/ROUTE_NAME', array(
    'methods' => WP_REST_Server::READABLE,
    'callback' => 'FUNCTION_TO_RUN_WHEN_ROUTE_HIT'	  
  ) );
} );

function FUNCTION_TO_RUN_WHEN_ROUTE_HIT( WP_REST_Request $request ){
    // Whatever you like goes here
}
