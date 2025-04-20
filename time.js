function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("vi-VN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const time = now.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    document.getElementById("datetime").textContent = `📅 ${date} - ⏰ ${time}`;
}

// Cập nhật thời gian mỗi giây
setInterval(updateDateTime, 1000);

// Gọi hàm ngay khi trang tải
updateDateTime();