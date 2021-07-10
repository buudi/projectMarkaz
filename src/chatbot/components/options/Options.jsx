import React from "react";

import "./options.css";

const Options = (props) => {
  const options = [
    {
      text: "مواعيد الدوام ؟",
      handler: props.actionProvider.handleTimings,
      id: 1,
    },
      { text: "كيفيه التسجيل",
       handler: props.actionProvider.handleRegistration,
      id: 2,
      },
    { text: "جنسيات المعلمات",
    handler: props.actionProvider.handleTeacherNation,
    id: 3,
    },
    { text: "متطلبات التسجيل",
    handler: props.actionProvider.handleRequirments,
    id: 4,
  },
    { text: "حلقات التحفيظ مباشر ام أفتراضي",
    handler: props.actionProvider.handleLiveClasses,
    id: 5,
},
    { text: "أدنى عمر للألتحاق بالمركز",
    handler: props.actionProvider.handleAge,
    id: 6,
},
    { text: "هل يوجد حلقات للرجال و ألاولاد",
    handler: props.actionProvider.handleMenBoys,
    id: 7,
},
    { text: "موقع المركز",
    handler: props.actionProvider.handleLocation,
    id: 8,
},
    { text: "المؤهلات العلميه للمعلمات",
    handler: props.actionProvider.handleDegree,
    id: 9,
},
    { text: "عدد أفرع المركز",
    handler: props.actionProvider.handleBranches,
    id: 10,
},
    { text: "هل توجد خطه تعليميه لختك المصحف الكريم",
    handler: props.actionProvider.handlePlan,
    id: 11,
},
    { text: "الأجازه السنويه للمركز",
    handler: props.actionProvider.handleHoliday,
    id: 12,
},
    { text: "هل يوجد رسوم للتسجيل",
    handler: props.actionProvider.handleFees,
    id: 13,
    },
    { text: "عدد الدارسات في الحلقات المباشره",
    handler: props.actionProvider.handleStudents,
    id: 14,
  },
    { text: "نوع الحلقات (مغلقه ام مفتوحه)",
    handler: props.actionProvider.handleClassType,
    id: 15,
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