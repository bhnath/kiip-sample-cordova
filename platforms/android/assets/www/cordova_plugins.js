cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "KiipSampleCordovaPlugin.HackerNews",
        "file": "plugins/KiipSampleCordovaPlugin/www/KiipSampleCordovaPlugin.js",
        "pluginId": "KiipSampleCordovaPlugin",
        "clobbers": [
            "com.bhnath.kiip.cordova.KiipSampleCordovaPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "KiipSampleCordovaPlugin": "0.1.0"
};
// BOTTOM OF METADATA
});