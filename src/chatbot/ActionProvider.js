// ActionProvider starter code
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    greet = () => {
        const message = this.createChatBotMessage("اهلا وسهلا كيف يمكنني مساعدتك؟ لديك اختيارات , اختار الاسئله التي تناسب استفسارك");
        this.addMessageToState(message);
    };

    handleTimings = () => {
        const message = this.createChatBotMessage("اشكرك علا تفاعلك معنا.. مواعيد الدوام من الثامنه صباحا الي الرابعه مسائا(4:00--8:00)");
        this.addMessageToState(message);
    };

    handleRegistration = () => {
        const message = this.createChatBotMessage("التسجيل على موقعنا اضغط على \"قدم الأن\" او Apply Now");
        this.addMessageToState(message);
    };

    handleTeacherNation = () => {
        const message = this.createChatBotMessage("مصر");
        this.addMessageToState(message);
    };

    handleRequirments = () => {
        const message = this.createChatBotMessage("هنا متطلبات التسجيل");
        this.addMessageToState(message);
    };
    handleLiveClasses = () => {
        const message = this.createChatBotMessage("هنا حلقات التحفيظ مباشر ام أفتراضي");
        this.addMessageToState(message);
    };
    handleAge = () => {
        const message = this.createChatBotMessage("هنا ادنى عمر");
        this.addMessageToState(message);
    };

    handleMenBoys = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    handleLocation = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    handleDegree = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    handleBranches = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    handlePlan = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    handleHoliday = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };
    
    handleFees = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    handleStudents = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    handleClassType = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    addMessageToState = (message) => {
        this.setState(prevState => ({
            ...prevState,
            messages: [...prevState.messages, message],
        }));
    };

}

export default ActionProvider;