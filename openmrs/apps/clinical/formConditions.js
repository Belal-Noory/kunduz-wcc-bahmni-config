const makeCondition = (question, determiningAnswer, otherQuestion) => {
  Bahmni.ConceptSet.FormConditions.rules[question] = (formName, formFieldValues) => {
    var conditions = {
      show: [],
      hide: []
    };

    const value = formFieldValues[question];
    if (value == determiningAnswer) {
      conditions.show.push(otherQuestion);
    } else {
      conditions.hide.push(otherQuestion);
    }
    return conditions;
  }
};

Bahmni.ConceptSet.FormConditions.rules = {};

[
  {
    question: 'forms.discharge.reasonLostFU',
    determiningAnswer: 'forms.discharge.reasonLostFU.other',
    otherQuestion: 'forms.discharge.reasonLostFU.otherDetail'
  },
  {
    question: 'clinical.pain.treatment',
    determiningAnswer: 'clinical.pain.treatment.other',
    otherQuestion: 'clinical.pain.treatment.other_details'
  },
  {
    question: 'clinical.woundSpecific.type',
    determiningAnswer: 'clinical.woundSpecific.type.otherAnswer',
    otherQuestion: 'clinical.woundSpecific.type.other'
  },
  {
    question: 'clinical.woundSpecific.periwound',
    determiningAnswer: 'clinical.woundSpecific.periwound.otherAnswer',
    otherQuestion: 'clinical.woundSpecific.periwound.other'
  },
  {
    question: 'clinical.woundSpecific.wound_disinfection',
    determiningAnswer: 'clinical.woundSpecific.wound_disinfection.other',
    otherQuestion: 'clinical.woundSpecific.wound_disinfection.otherDetail'
  },
  {
    question: 'clinical.woundSpecific.periwound_protection',
    determiningAnswer: 'clinical.woundSpecific.periwound_protection.other',
    otherQuestion: 'clinical.woundSpecific.periwound_protection.other_detail'
  }
].forEach(field => {
  makeCondition(field.question, field.determiningAnswer, field.otherQuestion)
})

