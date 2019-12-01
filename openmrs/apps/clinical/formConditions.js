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
        if (determiningAnswers.some(ans => ans == value)) {
            conditions.show.push(otherQuestion);
        } else {
            conditions.hide.push(otherQuestion);
        }
        return conditions;
    }
};

Bahmni.ConceptSet.FormConditions.rules = {};

[{
        question: 'forms.assessment.woundSpecific.woundLocation',
        determiningAnswers: ['clinical.woundSpecific.woundLocation.arm',
            'clinical.woundSpecific.woundLocation.hand',
            'clinical.woundSpecific.woundLocation.leg',
            'clinical.woundSpecific.woundLocation.foot'
        ],
        otherQuestion: 'forms.assessment.woundSpecific.woundLocation.leftRight'
    },
    {
        question: 'forms.assessment.woundSpecific.woundLocation',
        determiningAnswers: ['clinical.woundSpecific.woundLocation.arm',
            'clinical.woundSpecific.woundLocation.hand',
            'clinical.woundSpecific.woundLocation.leg',
            'clinical.woundSpecific.woundLocation.foot',
            'clinical.woundSpecific.woundLocation.thorax'
        ],
        otherQuestion: 'forms.assessment.woundSpecific.woundLocation.frontBack'
    },
    {
        question: 'forms.discharge.reasonLostFU',
        determiningAnswers: ['forms.discharge.reasonLostFU.other'],
        otherQuestion: 'forms.discharge.reasonLostFU.otherDetail'
    },
    {
        question: 'forms.follow_up.woundSpecific.painBeforDressing.treatment',
        determiningAnswers: ['clinical.painBeforDressing.treatment.other'],
        otherQuestion: 'clinical.painBeforeDressing.treatment.other_details'
    },
    {
        question: 'forms.follow_up.woundSpecific.painAfterDressing.treatment',
        determiningAnswers: ['clinical.painAfterDressing.treatment.other'],
        otherQuestion: 'clinical.painAfterDressing.treatment.other_details'
    },
    {
        question: 'forms.assessment.woundSpecific.type',
        determiningAnswers: ['clinical.woundSpecific.type.otherAnswer'],
        otherQuestion: 'clinical.woundSpecific.type.other'
    },
    {
        question: 'forms.assessment.woundSpecific.periwound',
        determiningAnswers: ['clinical.woundSpecific.periwound.otherAnswer'],
        otherQuestion: 'clinical.woundSpecific.periwound.other'
    },
    {
        question: 'forms.follow_up.woundSpecific.periwound',
        determiningAnswers: ['clinical.woundSpecific.periwound.otherAnswer'],
        otherQuestion: 'clinical.woundSpecific.periwound.other'
    },
    {
        question: 'forms.follow_up.woundSpecific.wound_disinfection',
        determiningAnswers: ['clinical.woundSpecific.wound_disinfection.other'],
        otherQuestion: 'clinical.woundSpecific.wound_disinfection.otherDetail'
    },
    {
        question: 'forms.follow_up.woundSpecific.periwound_protection',
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