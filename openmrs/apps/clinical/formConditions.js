const makeCondition = (question, determiningAnswers, otherQuestion) => {
  Bahmni.ConceptSet.FormConditions.rules[question] = (formName, formFieldValues) => {
    var conditions = {
      show: [],
      hide: []
    };

    // Careful: if a coded question is shared between forms, and those forms are
    // opened at the same time, formFieldValues contains an array with the
    // answer from every form for that question, with no way to distinguish which
    // value is coming from which form.
    // Therefore we should not share any coded questions between forms.
    const value = formFieldValues[question];
    if (determiningAnswers.some( ans => ans == value )) {
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
    determiningAnswers: ['forms.discharge.reasonLostFU.other'],
    otherQuestion: 'forms.discharge.reasonLostFU.otherDetail'
  },
  {
    question: 'clinical.pain.treatment',
    determiningAnswers: ['clinical.pain.treatment.other'],
    otherQuestion: 'clinical.pain.treatment.other_details'
  },
  {
    question: 'clinical.woundSpecific.type',
    determiningAnswers: ['clinical.woundSpecific.type.otherAnswer'],
    otherQuestion: 'clinical.woundSpecific.type.other'
  },
  {
    question: 'clinical.woundSpecific.periwound',
    determiningAnswers: ['clinical.woundSpecific.periwound.otherAnswer'],
    otherQuestion: 'clinical.woundSpecific.periwound.other'
  },
  {
    question: 'clinical.woundSpecific.wound_disinfection',
    determiningAnswers: ['clinical.woundSpecific.wound_disinfection.other'],
    otherQuestion: 'clinical.woundSpecific.wound_disinfection.otherDetail'
  },
  {
    question: 'clinical.woundSpecific.periwound_protection',
    determiningAnswers: ['clinical.woundSpecific.periwound_protection.other'],
    otherQuestion: 'clinical.woundSpecific.periwound_protection.other_detail'
  },
  {
    question: 'forms.discharge.outcome',
    determiningAnswers: ['forms.discharge.outcome.lostFU'],
    otherQuestion: 'forms.discharge.reasonLostFU'
  },
].forEach(field => {
  makeCondition(field.question, field.determiningAnswers, field.otherQuestion)
})

