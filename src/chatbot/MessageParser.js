class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        console.log(message);
        const lowercase = message.toLowerCase();

        if (lowercase.includes("هلا") || lowercase.includes("سلام")) {
            this.actionProvider.greet();
        }

        if (lowercase.includes("وقت") || lowercase.includes("موعد") || lowercase.includes("مواعيد") || lowercase.includes("اوقات") || lowercase.includes("time")) {
            this.actionProvider.handleTimings();
        }

        if (lowercase.includes("تسجيل") || lowercase.includes("سجل")) {
            this.actionProvider.handleRegistration();
        }

        if (lowercase.includes("جنسية")){
            this.actionProvider.handleTeacherNation();
        }

        if (lowercase.includes("متطلبات")) {
            this.actionProvider.handleRequirments();
        }

        if (lowercase.includes("حلقات") || lowercase.includes("حلقه")) {
            this.actionProvider.handleLiveClasses();
        }

        if (lowercase.includes("عمر") || lowercase.includes("اعمار")) {
            this.actionProvider.handleAge();
        }
    }
}

export default MessageParser;