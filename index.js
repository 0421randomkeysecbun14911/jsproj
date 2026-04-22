document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // デフォルトの送信を防ぐ
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log('お名前:', name);
    console.log('メールアドレス:', email);
    console.log('メッセージ:', message);
    
    alert('お問い合わせを受け付けました。ありがとうございます！');
    
    // フォームをリセット
    document.getElementById('contactForm').reset();
});