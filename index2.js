document.addEventListener('DOMContentLoaded', function() {
    // 各要素を取得
    const confirmNowLamp = document.getElementById('confirm-now-lamp');
    const classNowLamp = document.getElementById('class-now-lamp');
    const toggleSwitch = document.getElementById('cb_toggle_switch');

    // 全てのstudent-seat要素を取得
    const studentSeats = document.querySelectorAll('.student-seat');
    const resetButton = document.getElementById('reset-button');

    // 状態フラグ
    let isFunction2Active = false; // 機能2が作動しているかどうかを示すフラグ

    // 初期設定: デフォルト状態に戻す関数
    function resetToDefaultState() {
        // student-seatの背景色をデフォルトにリセット
        studentSeats.forEach(seat => {
            seat.style.backgroundColor = '#d3d3d3'; // デフォルトの背景色
        });

        // トグルスイッチをオフにリセット
        toggleSwitch.checked = false;
        isFunction2Active = false;

        // ランプの状態をデフォルトにリセット
        confirmNowLamp.style.backgroundColor = 'red';
        classNowLamp.style.backgroundColor = 'white';
    }

    // リセットボタン押下時の処理
    resetButton.addEventListener('click', function () {
        resetToDefaultState(); // デフォルト状態に戻す
    });

    // 機能1 (出欠確認中)
    studentSeats.forEach(seat => {
        seat.addEventListener('click', function() {
            // 機能2が有効な場合、機能1は無効にする
            if (isFunction2Active) return;

            // 現在の背景色を取得
            const currentColor = seat.style.backgroundColor;

            // 背景色を切り替える（機能1の動作）
            if (currentColor === 'rgb(211, 211, 211)') { // #d3d3d3のRGB表現
                seat.style.backgroundColor = '#00bfff'; // クリックされたら#00bfffに変更
            } else if (currentColor === 'rgb(0, 191, 255)') { // #00bfffのRGB表現
                seat.style.backgroundColor = '#d3d3d3'; // もう一度クリックで元に戻す
            }
        });
    });

    // 機能2 (トグルがオンの場合)
    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            // 機能2がオンの場合のランプの状態変更
            confirmNowLamp.style.backgroundColor = 'white';
            classNowLamp.style.backgroundColor = 'red';
            isFunction2Active = true; // 機能2を有効化
        } else {
            // 機能2がオフになった場合のランプの状態をデフォルトに戻す
            confirmNowLamp.style.backgroundColor = 'red';
            classNowLamp.style.backgroundColor = 'white';
            isFunction2Active = false; // 機能2を無効化
        }
    });

    // 機能2での動作: 背景色が#00bfffの要素のみクリック可能にする
    studentSeats.forEach(seat => {
        seat.addEventListener('click', function() {
            // 機能2が有効な場合のみ処理する
            if (!isFunction2Active) return;

            const currentColor = seat.style.backgroundColor;

            if (currentColor === 'rgb(0, 191, 255)') { // #00bfffのRGB表現
                seat.style.backgroundColor = 'yellow'; // クリックされたら黄色に変更
            } else if (currentColor === 'yellow') {
                seat.style.backgroundColor = '#00bfff'; // もう一度クリックで#00bfffに戻す
            }
            // 背景色が#d3d3d3の要素はクリックできないようにする
        });
    });

    // 初期状態としてリセットを実行
    resetToDefaultState();
});
