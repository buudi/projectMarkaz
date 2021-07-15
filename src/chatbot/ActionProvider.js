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
        const message = this.createChatBotMessage("اشكرك علا تفاعلك معنا , الدوام المباشر من 8 صباحاً الي 8 مسائاُ بتوقيت الامارات ,الدوام عن بعد على مدار الساعه-Thank you for your interaction with us, direct work from 8 am to 8 pm UAE time, working remotely around the clock ");
        this.addMessageToState(message);
    };

    handleRegistration = () => {
        const message = this.createChatBotMessage("التلقين - التحفيظ - فردي - تصحيح - تثبيت - قراءات- Memorization - individual - correction - fixation - readings");
        this.addMessageToState(message);
    };

    handleRequirments = () => {
        const message = this.createChatBotMessage("تسجيل");
        this.addMessageToState(message);
    };
    handleLiveClasses = () => {
        const message = this.createChatBotMessage("  remotely - self - virtual  -  عن بعد - ذاتي - افتراضي ");
        this.addMessageToState(message);
    };
    handleAge = () => {
        const message = this.createChatBotMessage("المتطلبات هيا : صوره شخصيه بخلفيه بيضاء - صوره جواز السفر - صوره الهويه الوطنيه الخاصه بالدوله المقيم بها- The requirements are: a personal photo with a white background - a copy of the passport - a copy of the national identity of the country in which he resides");
        this.addMessageToState(message);
    };

    handleMenBoys = () => {
        const message = this.createChatBotMessage("أشكرك علي تفاعلك معنا , المتطلبات هيا : صوره شخصيه حديثه و الخلفيه بيضاء - صوره للاقامه لغير مواطنى دوله الامارات العربيه المتحده - صوره للهويه الوطنيه - صوره لجواز السفر- Thank you for your interaction with us, the requirements are: a recent personal photo with a white background - a photo for residence for non-UAE nationals - a copy of the national identity - a copy of the passport");
        this.addMessageToState(message);
    };

    handleLocation = () => {
        const message = this.createChatBotMessage("United Arab Emirates - Dubai - The main branch Al Mamzar area Website link (---) The second branch Al Muzhar area Website link (---)-دوله الامارات العربيه المتحده - دبي - الفرع الرئيسي منطقه الممزر رابط الموقع (---) الفرع الثاني منطقه المزهر رابط الموقع (---) ");
        this.addMessageToState(message);
    };

    handleDegree = () => {
        const message = this.createChatBotMessage("ggggg");
        this.addMessageToState(message);
    };

    handleBranches = () => {
        const message = this.createChatBotMessage("3 branches - 3 افرع ");
        this.addMessageToState(message);
    };

    handlePlan = () => {
        const message = this.createChatBotMessage("gggg");
        this.addMessageToState(message);
    };

    handleHoliday = () => {
        const message = this.createChatBotMessage("الاجازه السنويه للمركز هي شهر  8 - The annual leave for the center is 8 months");
        this.addMessageToState(message);
    };
    
    handleFees = () => {
        const message = this.createChatBotMessage("رابط (---) - link (---)");
        this.addMessageToState(message);
    };

    handleStudents = () => {
        const message = this.createChatBotMessage("Individual - small groups - 8 people - 12 people - open number of events and training programs - age of enrollment in the center from 6 years - a specific number in training or education workshops- فردي - مجموعات مصغره - 8 افراد - 12 فرد - عدد مفتوح في الفاعليات و البرامج التدريبيه - عمر الالتحاق بالمركز من 6 سنوات - عدد محدد في ورش التدريب او التعليم ");
        this.addMessageToState(message);
    };

    handleClassType = () => {
        const message = this.createChatBotMessage("All employees of the center are citizens and residents of the United Arab Emirates-جميع العاملين بالمركز من مواطنى و مقيمين بدوله الامارات العربيه المتحده ");
        this.addMessageToState(message);
    };
    handlejobs = () => {
        const message = this.createChatBotMessage("رابط التوظيف - Recruitment link ");
        this.addMessageToState(message);
    };
    handlego = () => {
        const message = this.createChatBotMessage("Women's and Girls' Section - Boys' and Men's Section - قصم النساء و الفتيات - قسم الاولاد و الرجال ");
        this.addMessageToState(message);
    };
    handleen = () => {
        const message = this.createChatBotMessage("جميع الجنسيات - All nationalities");
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