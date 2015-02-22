$(document).ready(function() {
            startGrid(16);
            $('#container > div').on('click', function() {
                $(this).fadeOut();
            });
});

        function startGrid(n) {
            for (i = 1; i <= n; i++) {
                $('#container').append('<div class="basic"></div>');
            };
	}
