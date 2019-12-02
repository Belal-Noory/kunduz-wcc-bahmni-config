const makeCondition = (question, conds) => {
    return (formName, formFieldValues) => {
        // Careful: if a coded question is shared between forms, and those forms are
        // opened at the same time, formFieldValues contains an array with the
        // answer from every form for that question, with no way to distinguish which
        // value is coming from which form.
        // Therefore we should not share any coded questions between forms.
        const value = formFieldValues[question];
        return conds.reduce((conditions, condition) => {
            if (condition.determiningAnswers.some(ans => ans == value)) {
                conditions.show.push(condition.otherQuestion);
            } else {
                conditions.hide.push(condition.otherQuestion);
            }
            return conditions;
        }, { show: [], hide: [] })
    }
};

Bahmni.ConceptSet.FormConditions.rules = [{
        question: 'forms.assessment.woundSpecific.woundLocation',
        conditions: [{
                determiningAnswers: [
                    'clinical.woundSpecific.woundLocation.arm',
                    'clinical.woundSpecific.woundLocation.hand',
                    'clinical.woundSpecific.woundLocation.leg',
                    'clinical.woundSpecific.woundLocation.foot'
                ],
                otherQuestion: 'forms.assessment.woundSpecific.woundLocation.leftRight'
            },
            {
                determiningAnswers: [
                    'clinical.woundSpecific.woundLocation.arm',
                    'clinical.woundSpecific.woundLocation.hand',
                    'clinical.woundSpecific.woundLocation.leg',
                    'clinical.woundSpecific.woundLocation.foot',
                    'clinical.woundSpecific.woundLocation.thorax',
                    'clinical.woundSpecific.woundLocation.head'
                ],
                otherQuestion: 'forms.assessment.woundSpecific.woundLocation.frontBack'
            }
        ]
    },
    {
        question: 'forms.discharge.reasonLostFU',
        conditions: [{
            determiningAnswers: ['forms.discharge.reasonLostFU.other'],
            otherQuestion: 'forms.discharge.reasonLostFU.otherDetail'
        }]
    },
    {
        question: 'forms.triage.pain.treatment',
        conditions: [{
            determiningAnswers: ['clinical.pain.treatment.other'],
            otherQuestion: 'clinical.pain.treatment.other_details'
        }]
    },
    {
        question: 'forms.follow_up.woundSpecific.painBeforDressing.treatment',
        conditions: [{
            determiningAnswers: ['clinical.pain.treatment.other'],
            otherQuestion: 'clinical.painBeforDressing.treatment.other_details'
        }]
    },
    {
        question: 'forms.follow_up.painAfterDressing.treatment',
        conditions: [{
            determiningAnswers: ['clinical.pain.treatment.other'],
            otherQuestion: 'clinical.painAfterDressing.treatment.other_details'
        }]
    },
    {
        question: 'forms.assessment.woundSpecific.type',
        conditions: [{
            determiningAnswers: ['clinical.woundSpecific.type.otherAnswer'],
            otherQuestion: 'clinical.woundSpecific.type.other'
        }]
    },
    {
        question: 'forms.assessment.woundSpecific.periwound',
        conditions: [{
            determiningAnswers: ['clinical.woundSpecific.periwound.otherAnswer'],
            otherQuestion: 'clinical.woundSpecific.periwound.other'
        }]
    },
    {
        question: 'forms.follow_up.woundSpecific.periwound',
        conditions: [{
            determiningAnswers: ['clinical.woundSpecific.periwound.otherAnswer'],
            otherQuestion: 'clinical.woundSpecific.periwound.other'
        }]
    },
    {
        question: 'forms.follow_up.woundSpecific.wound_disinfection',
        conditions: [{
            determiningAnswers: ['clinical.woundSpecific.wound_disinfection.other'],
            otherQuestion: 'clinical.woundSpecific.wound_disinfection.otherDetail'
        }]
    },
    {
        question: 'forms.follow_up.woundSpecific.periwound_protection',
        conditions: [{
            determiningAnswers: ['clinical.woundSpecific.periwound_protection.other'],
            otherQuestion: 'clinical.woundSpecific.periwound_protection.other_detail'
        }]
    },
    {
        question: 'forms.discharge.outcome',
        conditions: [{
            determiningAnswers: ['forms.discharge.outcome.lostFU'],
            otherQuestion: 'forms.discharge.reasonLostFU'
        }]
    },
    {
        question: 'forms.triage.tews.refer',
        conditions: [{
            determiningAnswers: ['forms.triage.tews.refer'],
            otherQuestion: 'forms.triage.tews.diagnose'
        }]
    }
].reduce((rules, config) => {
    rules[config.question] = makeCondition(config.question, config.conditions)
    return rules
}, {})