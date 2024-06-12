export const data = [
  {
    title : 'Pull Through Rate',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        abbreviation: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        abbreviation: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        abbreviation: null,
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        abbreviation: 'PTR',
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        abbreviation: 'AdMNPVs',
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'Average Monthly New Patient',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        abbreviation: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        abbreviation: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        abbreviation: null,
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        abbreviation: 'PTR',
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        abbreviation: 'AdMNPVs',
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'Average Monthly Bariatric Surgeries',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        abbreviation: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        abbreviation: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        abbreviation: null,
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        abbreviation: 'PTR',
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        abbreviation: 'AdMNPVs',
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'AvMNPVs',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        abbreviation: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        abbreviation: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        abbreviation: null,
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        abbreviation: 'PTR',
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        abbreviation: 'AdMNPVs',
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'Estimate AvMBSs',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        abbreviation: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        abbreviation: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        abbreviation: null,
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        abbreviation: 'PTR',
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        abbreviation: 'AdMNPVs',
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'Estimate F',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        abbreviation: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        abbreviation: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        abbreviation: null,
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        abbreviation: 'PTR',
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        abbreviation: 'AdMNPVs',
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'Estimate G',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        abbreviation: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        abbreviation: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        abbreviation: null,
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        abbreviation: 'PTR',
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        abbreviation: 'AdMNPVs',
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'Estimate H',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        abbreviation: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        abbreviation: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        abbreviation: null,
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        abbreviation: 'PTR',
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        abbreviation: 'AdMNPVs',
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
]