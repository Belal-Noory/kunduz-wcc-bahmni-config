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

[{
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
        determiningAnswer: 'clinical.woundSpecific.type.other',
        otherQuestion: 'clinical.woundSpecific.type.otherAnswer'
    }
].forEach(field => {
    makeCondition(field.question, field.determiningAnswer, field.otherQuestion)
})