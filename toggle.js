function toggleMode() {
    const body = document.body;
    const toggleSwitch = document.getElementById('mode-toggle');

    body.classList.toggle('dark');
    body.classList.toggle('light');

    // Cập nhật trạng thái của nút toggle
    toggleSwitch.classList.toggle('active');
}


function toggleMenu(id) {
    const section = document.getElementById(id);
    if (section) {
        section.classList.toggle("open");
        // Kiểm tra nếu có thẻ <pre> bên trong, mở rộng nó
        const preElement = section.querySelector("pre");
        if (preElement) {
            preElement.style.display = "block";

        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    ocument.documentElement.scrollTop = 0;
}