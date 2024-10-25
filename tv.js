// Giả lập dữ liệu sách
let books = [
    { title: 'Sách A', author: 'Tác giả A', category: 'Khoa học', image: 'https://via.placeholder.com/60x80', available: 3 },
    { title: 'Sách B', author: 'Tác giả B', category: 'Văn học', image: 'https://via.placeholder.com/60x80', available: 5 },
    { title: 'Sách C', author: 'Tác giả C', category: 'Kỹ thuật', image: 'https://via.placeholder.com/60x80', available: 2 }
];

// Xử lý tìm kiếm sách
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form reload trang
    const query = document.getElementById('search-query').value.toLowerCase();
    const searchResults = books.filter(book => book.title.toLowerCase().includes(query));
    displaySearchResults(searchResults);
});

// Hiển thị kết quả tìm kiếm
function displaySearchResults(books) {
    const results = document.getElementById('search-results');
    results.innerHTML = ''; // Xóa kết quả cũ
    if (books.length > 0) {
        books.forEach(book => {
            const li = document.createElement('div');
            li.className = 'book-item'; // Thêm class cho từng sách
            li.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <div class="book-details">
                    <strong>${book.title}</strong> - ${book.author} <br>
                    Thể loại: ${book.category} <br>
                    Còn lại: ${book.available} quyển
                </div>
                <button onclick="borrowBook('${book.title}')">Mượn sách</button>
            `;
            results.appendChild(li);
        });
    } else {
        results.innerHTML = '<p>Không tìm thấy sách nào</p>';
    }
}

// Xử lý mượn sách
function borrowBook(bookTitle) {
    alert(`Bạn đã chọn mượn sách: ${bookTitle}`);
}

// Mở form đăng nhập
function openLoginForm() {
    document.getElementById('loginForm').style.display = 'flex';
}

// Đóng form đăng nhập
function closeLoginForm() {
    document.getElementById('loginForm').style.display = 'none';
}

// Dữ liệu tài khoản giả lập
const users = [
    { username: "admin", password: "admin123" },
    { username: "user1", password: "password1" }
];

// Xử lý đăng nhập
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tài khoản và mật khẩu
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        alert("Đăng nhập thành công!");
        closeLoginForm();
        document.querySelector('.login-button button').textContent = `Xin chào, ${user.username}`;
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}
