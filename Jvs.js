$(document).ready(function () {
            startGrid(16);
            $('#container).on('
                click ',function(){
                $(this).fadeIn();
            });
        function startGrid(n) {
            for (i = 1; i <= n; i++) {
                $('#container').append('<div class="basic"></div>');
            };