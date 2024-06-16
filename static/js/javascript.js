$(document).ready(function() {
    $('#questionForm').on('submit', function(event) {
        event.preventDefault();

        // フォームの各入力値を取得
        var name = $('#name').val();
        var gender = $('#gender').val();
        var age = $('#age').val();
        var wantToDo = $('#wantToDo').val();
        var currentStatus = $('#currentStatus').val();

        // フォームデータをオブジェクトとして作成
        var formData = {
            name: name,
            gender: gender,
            age: age,
            wantToDo: wantToDo,
            currentStatus: currentStatus
        };

        // レスポンスを表示するエリアを空にする
        $('#response').empty();

        // Flaskアプリケーションの'/ask'エンドポイントにAjaxリクエストを送信
        $.ajax({
            url: '/ask',
            type: 'POST',
            data: formData, // フォームデータを送信
            dataType: 'json', // レスポンスのデータ形式をJSONとして期待
            success: function() {
                var response = data.response; // レスポンスデータから回答を取得

                // 文字列全体をアニメーション表示する処理
                var i = 0;
                var interval = setInterval(function() {
                    if (i < response.length) {
                        // 改行文字の処理
                        if (response[i] === '\n') {
                            $('#response').append('<br>');
                        } else {
                            $('#response').append(response[i]);
                        }
                        i++;
                    } else {
                        clearInterval(interval); // 表示完了後にインターバルをクリア
                    }
                }, 25); // 50ミリ秒ごとに1文字表示（アニメーション効果）
            },
            error: function(xhr, status, error) {
                console.error('Error:', error); // エラーハンドリング（必要に応じて）
            }
        });
    });
});
