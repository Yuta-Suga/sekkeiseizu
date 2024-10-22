document.addEventListener('DOMContentLoaded', function() {
    const classDayInput = document.getElementById('class-day');
    const subjectNameInput = document.getElementById('subject-name');

    // layer1
    // ==================================================================
    // 授業日付の反映
    const today = new Date();
    // 月・日・曜日を取得
    const month = today.getMonth() + 1; // 月は0から始まるので+1する
    const date = today.getDate(); // 日付を取得

    classDayInput.value = month + "月" + date + "日";

    // 科目名の表示
    subjectNameInput.value = "設計製図"
    // ==================================================================
});