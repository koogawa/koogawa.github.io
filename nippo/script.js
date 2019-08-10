var app = new Vue({ 
    el: '#app',
    data: {
        todos: [
            { checked: true, start: '08:00', end: "09:00", task: "コードレビュータイム" },
            { checked: true, start: '09:00', end: "10:00", task: "" },
            { checked: false, start: '10:00', end: "11:00", task: "" },
            { checked: true, start: '10:10', end: "10:25", task: "デイリースクラム" },
            { checked: true, start: '10:25', end: "11:00", task: "" },
            { checked: true, start: '11:00', end: "12:00", task: "" },
            { checked: true, start: '12:00', end: "13:00", task: "昼休憩" },
            { checked: true, start: '13:00', end: "14:00", task: "" },
            { checked: true, start: '14:00', end: "15:00", task: "" },
            { checked: true, start: '15:00', end: "16:00", task: "" },
            { checked: true, start: '16:00', end: "17:00", task: "" },
            { checked: false, start: '17:00', end: "18:00", task: "" },
            { checked: false, start: '18:00', end: "19:00", task: "" },
            { checked: false, start: '19:00', end: "20:00", task: "" },
        ]
    },
    computed: {
        output: function() {
            var result = "```\n"
            result += "--------------\n"
            result += "今日の作業ログ\n"
            result += "--------------\n"
            for ( var i in this.todos ) {
                if ( !this.todos[i].checked ) { continue }
                result += this.todos[i].start + "-" + this.todos[i].end + ' ' + this.todos[i].task + "\n"
            }
            result += "```\n"
            return result
        }
    },
    methods: {
        copyToClipboard: function() {
            var copyTarget = document.getElementById("copyTarget");
            copyTarget.select();
            document.execCommand("Copy");
            alert("コピーできました！ : " + copyTarget.value);
        }
    }
});
