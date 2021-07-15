import React from "react";

import "./options.css";

const Options = (props) => {
  const options = [
    {
      text: "مواعيد الدوام - working days ?",
      handler: props.actionProvider.handleTimings,
      id: 1,
    },
      { text: "أنواع الحلقات - Types of courses",
       handler: props.actionProvider.handleRegistration,
      id: 2,
      },
    
    { text: "خطوات التسجيل - Registration steps    ",
    handler: props.actionProvider.handleRequirments,
    id: 3,
  },
    { text: "way of education - طريقه التعليم",
    handler: props.actionProvider.handleLiveClasses,
    id: 4,
},
    { text: "الأوراق ألمطلوبه للتسجيل من خارج الدوله - Documents required for registration from outside the country    ",
    handler: props.actionProvider.handleAge,
    id: 5,
},
    { text: "ألاوراق ألمطلوبه للتسجيل من داخل ألامارات - Documents required for registration from within the UAE",
    handler: props.actionProvider.handleMenBoys,
    id: 6,
},
    { text: "Head office location  -  موقع المركز الرئيسي",
    handler: props.actionProvider.handleLocation,
    id: 7,
},
    { text: "عدد أفرع المركز - The number of branches of the center",
    handler: props.actionProvider.handleBranches,
    id: 10,
},
    { text: "طريقه التعليم - way of education",
    handler: props.actionProvider.handlePlan,
    id: 11,
},
    { text: "الأجازه السنويه للمركز - Center annual leave",
    handler: props.actionProvider.handleHoliday,
    id: 12,
},
    { text: "معلومات عن فريق العمل  - Information about the staff    ",
    handler: props.actionProvider.handleFees,
    id: 13,
    },
    { text: "عدد الدارسات  - number of students    ",
    handler: props.actionProvider.handleStudents,
    id: 14,
  },
    { text: "فريق عمل المركز - Center work team    ",
    handler: props.actionProvider.handleClassType,
    id: 15,
},
{ text: "أقسام المركز - Center departments",
    handler: props.actionProvider.handlego,
    id: 16,
    },
    { text: "ألوظائف الشاغره - job opportunities    ",
    handler: props.actionProvider.handlejobs,
    id: 17,
    },
    { text: "جنسيات الدارسين - Students' nationalities    ",
    handler: props.actionProvider.handleen,
    id: 18,
    },
    { text: "ألترخيص -  License",
    handler: props.actionProvider.handleDegree,
    id: 19,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;