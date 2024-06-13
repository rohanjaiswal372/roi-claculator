export const data = [
  {
    title : 'Pull Through Rate',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        id: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        id: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        id: 'PNINPV',
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        id: 'PTR',
        arguments: ['AvMBSs', 'AvMNPVs'],
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        id: 'AdMNPVs',
        arguments: ['AvMNPVs', 'AvMNPVs'],
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
        name: 'Percentage of Medicare Reimbursement for Commercial Evaluation and Management Codes',
        id: 'CPctMCREM',
        type: 'number',
      },
      {
        name: 'Percentage of Medicare Reimbursement for Exchange Evaluation and Management Codes',
        id: 'EPctMcrEM',
        type: 'number',
      },
      {
        name: 'Percentage of Medicare Reimbursement for Medicaid Evaluation and Management Codes',
        id: 'McdPctMcrEM',
        type: 'number',
      },
      // {
      //   name: 'Percentage of Medicare Reimbursement for Medicare Evaluation and Management Codes',
      //   id: 'McrPctMcrEM',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Commercial',
      //   id: 'PctNPVsC',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Exchange',
      //   id: 'PctNPVsE',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Medicaid',
      //   id: 'PctNPVsMcd',
      //   type: 'number',
      // },
      {
        name: 'Percentage of New Patient Visits Medicare',
        id: 'PctNPVsMcr',
        type: 'number',
      },
      {
        name: 'Medicare Reimbursement for New Patient Visit',
        id: 'CPT99205',
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Commercial Reimbursement',
        id: 'CREM',
        arguments: ['CPctMCREM', 'CPT99205'],
        formula: (CPctMCREM : number, CPT99205 : number) => {
          return  CPctMCREM * CPT99205
        }
      },
      {
        name: 'Exchange Reimbursemen',
        id: 'EREM',
        arguments: ['EPctMcrEM', 'CPT99205'],
        formula: (EPctMcrEM : number, CPT99205 : number) => {
          return  EPctMcrEM * CPT99205
        }
      },
    ]
  },
  {
    title : 'Average Monthly Bariatric Surgeries',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        id: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        id: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        id: 'PNINPV',
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        id: 'PTR',
        arguments: ['AvMBSs', 'AvMNPVs'],
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        id: 'AdMNPVs',
        arguments: ['AvMBSs', 'AvMNPVs'],
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'Percentage of Medicare Reimbursement',
    input: [
      {
        name: 'Percentage of Medicare Reimbursement for Commercial Evaluation and Management Codes',
        id: 'CPctMCREM',
        type: 'number',
      },
      {
        name: 'Percentage of Medicare Reimbursement for Exchange Evaluation and Management Codes',
        id: 'EPctMcrEM',
        type: 'number',
      },
      {
        name: 'Percentage of Medicare Reimbursement for Medicaid Evaluation and Management Codes',
        id: 'McdPctMcrEM',
        type: 'number',
      },
      // {
      //   name: 'Percentage of Medicare Reimbursement for Medicare Evaluation and Management Codes',
      //   id: 'McrPctMcrEM',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Commercial',
      //   id: 'PctNPVsC',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Exchange',
      //   id: 'PctNPVsE',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Medicaid',
      //   id: 'PctNPVsMcd',
      //   type: 'number',
      // },
      {
        name: 'Percentage of New Patient Visits Medicare',
        id: 'PctNPVsMcr',
        type: 'number',
      },
      {
        name: 'Medicare Reimbursement for New Patient Visit',
        id: 'CPT99205',
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Commercial Reimbursement',
        id: 'CREM',
        arguments: ['CPctMCREM', 'CPT99205'],
        formula: (CPctMCREM : number, CPT99205 : number) => {
          return  CPctMCREM * CPT99205
        }
      },
      {
        name: 'Exchange Reimbursemen',
        id: 'EREM',
        arguments: ['EPctMcrEM', 'CPT99205'],
        formula: (EPctMcrEM : number, CPT99205 : number) => {
          return  EPctMcrEM * CPT99205
        }
      },
    ]
  },
  {
    title : 'Additional Monthly New Patient Visits',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        id: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        id: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        id: 'PNINPV',
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        id: 'PTR',
        arguments: ['AvMBSs', 'AvMNPVs'],
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        id: 'AdMNPVs',
        arguments: ['AvMBSs', 'AvMNPVs'],
        formula: (AvMNPVs : number, NewPatientVisits : number) => {
          return  AvMNPVs * NewPatientVisits
        }
      },
    ]
  },
  {
    title : 'Medicare Reimbursement for New Patient Visit',
    input: [
      {
        name: 'Percentage of Medicare Reimbursement for Commercial Evaluation and Management Codes',
        id: 'CPctMCREM',
        type: 'number',
      },
      {
        name: 'Percentage of Medicare Reimbursement for Exchange Evaluation and Management Codes',
        id: 'EPctMcrEM',
        type: 'number',
      },
      {
        name: 'Percentage of Medicare Reimbursement for Medicaid Evaluation and Management Codes',
        id: 'McdPctMcrEM',
        type: 'number',
      },
      // {
      //   name: 'Percentage of Medicare Reimbursement for Medicare Evaluation and Management Codes',
      //   id: 'McrPctMcrEM',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Commercial',
      //   id: 'PctNPVsC',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Exchange',
      //   id: 'PctNPVsE',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Medicaid',
      //   id: 'PctNPVsMcd',
      //   type: 'number',
      // },
      {
        name: 'Percentage of New Patient Visits Medicare',
        id: 'PctNPVsMcr',
        type: 'number',
      },
      {
        name: 'Medicare Reimbursement for New Patient Visit',
        id: 'CPT99205',
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Commercial Reimbursement',
        id: 'CREM',
        arguments: ['CPctMCREM', 'CPT99205'],
        formula: (CPctMCREM : number, CPT99205 : number) => {
          return  CPctMCREM * CPT99205
        }
      },
      {
        name: 'Exchange Reimbursemen',
        id: 'EREM',
        arguments: ['EPctMcrEM', 'CPT99205'],
        formula: (EPctMcrEM : number, CPT99205 : number) => {
          return  EPctMcrEM * CPT99205
        }
      },
    ]
  },
  {
    title : 'Pull Through Rate',
    input: [
      {
        name: 'Average Monthly New Patient Visits',
        id: 'AvMNPVs',
        type: 'number',
      },
      {
        name: 'Average Monthly Bariatric Surgeries',
        id: 'AvMBSs',
        type: 'number',
      },
      {
        name: 'Percentage or Number Increase in New Patient Visits',
        id: 'PNINPV',
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Pull Through Rate',
        id: 'PTR',
        arguments: ['AvMBSs', 'AvMNPVs'],
        formula: (AvMBSs : number, AvMNPVs : number) => {
          return  AvMBSs/AvMNPVs
        }
      },
      {
        name: 'Additional Monthly New Patient Visits',
        id: 'AdMNPVs',
        arguments: ['AvMBSs', 'AvMNPVs'],
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
        name: 'Percentage of Medicare Reimbursement for Commercial Evaluation and Management Codes',
        id: 'CPctMCREM',
        type: 'number',
      },
      {
        name: 'Percentage of Medicare Reimbursement for Exchange Evaluation and Management Codes',
        id: 'EPctMcrEM',
        type: 'number',
      },
      {
        name: 'Percentage of Medicare Reimbursement for Medicaid Evaluation and Management Codes',
        id: 'McdPctMcrEM',
        type: 'number',
      },
      // {
      //   name: 'Percentage of Medicare Reimbursement for Medicare Evaluation and Management Codes',
      //   id: 'McrPctMcrEM',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Commercial',
      //   id: 'PctNPVsC',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Exchange',
      //   id: 'PctNPVsE',
      //   type: 'number',
      // },
      // {
      //   name: 'Percentage of New Patient Visits Medicaid',
      //   id: 'PctNPVsMcd',
      //   type: 'number',
      // },
      {
        name: 'Percentage of New Patient Visits Medicare',
        id: 'PctNPVsMcr',
        type: 'number',
      },
      {
        name: 'Medicare Reimbursement for New Patient Visit',
        id: 'CPT99205',
        type: 'number',
      },
    ],
    estimate: [
      {
        name: 'Commercial Reimbursement',
        id: 'CREM',
        arguments: ['CPctMCREM', 'CPT99205'],
        formula: (CPctMCREM : number, CPT99205 : number) => {
          return  CPctMCREM * CPT99205
        }
      },
      {
        name: 'Exchange Reimbursemen',
        id: 'EREM',
        arguments: ['EPctMcrEM', 'CPT99205'],
        formula: (EPctMcrEM : number, CPT99205 : number) => {
          return  EPctMcrEM * CPT99205
        }
      },
    ]
  },
]