const { ipcRenderer } = require('electron')
let $ = require('jquery')
$.fn.chromeTabs = require('x-chrome-tabs')

$(document).ready(() => {
    // chrome tabs
    var $chromeTabs = $('.chrome-tabs').chromeTabs({
        defaultProps: {
            title: 'untitled',
            favicon: 'build/icon.png'
        }
    })
    $chromeTabs._ = $chromeTabs.data('chromeTabs')
    $("#new_tab").on("click", function() {
        $chromeTabs._.addTab()
    })
    $("#close_tab").on("click", function() {
        $chromeTabs._.removeCurrentTab()
    })


    // menu
    $(".quit").on("click", function() {
        ipcRenderer.sendSync('close-win')
    })
})
