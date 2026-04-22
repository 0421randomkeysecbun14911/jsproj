document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトの送信を防ぐ
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // ここではダミーの処理（実際の認証はサーバーサイドで）
    if (username && password) {
        alert('ログイン成功！');
        // 実際のアプリではリダイレクトなど
    } else {
        alert('ユーザー名とパスワードを入力してください。');
    }
});