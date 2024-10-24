$(document).ready(function() {
    
    // Head
    $.get('components/head.html', function(data) {
        $('head').append(data);

        // Title
        var pageKey = $('body').data('page-key');
        var pageTitle = pageConfig.pageTitles[pageKey] || pageConfig.defaultTitle;
        document.title + pageConfig.titelPrefix + pageTitle;
    });

    // Header
    $('body').prepend($('<header>').load('components/header.html'));

    // Footer
    $('body').append($('<footer>').load('components/footer.html'));
});