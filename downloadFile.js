function downloadFile(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename || "downloaded_file";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(error => console.error("Lỗi tải file:", error));
}

document.querySelectorAll(".download-link").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của trình duyệt
        const url = this.href;
        const filename = url.split('/').pop(); // Lấy tên file từ URL
        downloadFile(url, filename);
    });
});