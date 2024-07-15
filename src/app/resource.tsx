// Pre-loaded data for Medicare average  reimbursement for a completed surgery:
export const AVERAGE_REIMBURSEMENT = {
  MrGBP: 1733.95,
  MrVSG: 1099.49,
  MrDS: 1955.31,
  MrAGB: 1127.78,
  MrConsult: 220.36,
  MrEGD: 136.48,
};

export const MARCS: number =
  (AVERAGE_REIMBURSEMENT.MrGBP +
    AVERAGE_REIMBURSEMENT.MrVSG +
    AVERAGE_REIMBURSEMENT.MrDS +
    AVERAGE_REIMBURSEMENT.MrAGB) /
  4 +
  AVERAGE_REIMBURSEMENT.MrEGD +
  AVERAGE_REIMBURSEMENT.MrConsult;

export const ASMBS_MARCS: number =
  AVERAGE_REIMBURSEMENT.MrGBP * 0.27 +
  AVERAGE_REIMBURSEMENT.MrVSG * 0.69 +
  AVERAGE_REIMBURSEMENT.MrDS * 0.03 +
  AVERAGE_REIMBURSEMENT.MrAGB * 0.01 +
  AVERAGE_REIMBURSEMENT.MrEGD +
  AVERAGE_REIMBURSEMENT.MrConsult;

export const PATIENT_SURGERY_INPUTS = [
  {
    id: 1,
    description:
      "What is your Estimated number of monthly New Patient Consults?",
    label: "Enter value:  ENP",
    key: "ENP",
  },
  {
    id: 2,
    description:
      "What is your Estimated number of monthly Completed Surgeries?",
    label: "Enter value:  EMS",
    key: "EMS",
  },
];

export const FINANCIAL_USER_INPUTS = {
  id: 1,
  description: "How would you like to Perfrom ROI Caculations?",
  label: "",
  options: [
    {
      id: 1,
      type: "button",
      description:
        "Calculate Using Medicare Averages with your caculated Pull Through Rate?",
      key: "MAPTR",
    },
    {
      id: 2,
      type: "button",
      description:
        "Calculate Using Custsom Finanical Data with your Calculated Pull Through Rate?",
      key: "CFPTR",
    },
  ],
};

export const ROI_CALCULATION_INPUTS = {
  id: 1,
  description: "How Would you like to perform your ROI Calculations?",
  label: "",
  options: [
    {
      id: 1,
      description:
        "based a certain number increase/mon for new patient consults (#INP)",
      key: "INP",
    },
    {
      id: 2,
      description:
        "based a certain number increase/mon of completed surgeries? (#ISurg)",
      key: "ISURG",
    },
    {
      id: 3,
      description: "based % increase in pull through rate (%IPTR)?",
      key: "IPTR",
    },
    {
      id: 4,
      description:
        "based a certain number increase/mon for new patients consults (#INP) and completed surgeries (#ISurg)?",
      key: "INPISG",
    },
    {
      id: 5,
      description:
        "based a certain number increase/mon for new patients consults (#INP) and % increase in pull through rate (%IPTR)?",
      key: "INPIPTR",
    },
  ],
};

export const WHATIF_INPUTS = [
  {
    key: "INP",
    inputs: [
      {
        id: 1,
        key: "INP",
        description:
          "What if you increased the number of  new patient consults per month by this amount?",
        label: "Enter Value:  #INP",
      },
    ],
    calculate: (input: any, cartData: any) => {
      return {
        description:
          "Based your Input of a projected  increase in New consults per month without improving your business operations by improving consult to surgery pull-through here is your results using financial calculations based on medicare reimbursement averages:",
        setA: [
          {
            key: "VBL#",
            value: input.INP * MARCS * cartData.patientSurgeryData.CPTR,
          },
          {
            key: "VBL#x12",
            value: input.INP * MARCS * cartData.patientSurgeryData.CPTR * 12,
          },
        ],
        setB: [
          {
            key: "ROI",
            value: input.INP * MARCS * cartData.patientSurgeryData.CPTR,
          },
          {
            key: "ROI#x12",
            value: input.INP * MARCS * cartData.patientSurgeryData.CPTR * 12,
          },
        ],
        setC: [
          [
            {
              key: "#INP",
              value: input.INP,
            },
            {
              key: "#INPx12",
              value: input.INP * 12,
            },
          ],
        ],
      };
    },
  },
  {
    key: "ISURG",
    inputs: [
      {
        id: 1,
        key: "ISurg",
        description:
          "What If you increased your number of completed surgeries per month by this amount?",
        label: "Enter Value: #ISurg",
      },
    ],
    calculate: (input: any, cartData: any) => {
      return {
        description:
          "Based your Input of a projected  increase in surgeries per month without improving your business operations by improving consult to surgery pull-through here is your results using financial calculations based on medicare reimbursement averages:",
        setA: [
          {
            key: "VBL",
            value: input.ISurg * MARCS,
          },
          {
            key: "VBL#x12",
            value: input.ISurg * MARCS * 12,
          },
        ],
        setB: [
          {
            key: "ROI",
            value: input.ISurg * MARCS,
          },
          {
            key: "ROI#x12",
            value: input.ISurg * MARCS * 12,
          },
        ],
        setC: [
          [
            {
              key: "#ISurg",
              value: input.ISurg,
            },
            {
              key: "#ISurgx12",
              value: input.ISurg * 12,
            },
          ],
        ],
      };
    },
  },
  {
    key: "IPTR",
    inputs: [
      {
        id: 1,
        key: "IPTR",
        description:
          "What If you increased your consult to surgery pull thorugh rate by this percet above your current pull through rate calcualted earlier?",
        label: "Enter Value: %IPTR",
      },
    ],
    calculate: (input: any, cartData: any) => {
      return {
        description:
          "Based your Input of a projected  increase your business operations by improiving yoru consult to surgery putllthrough rate here is your results using financial calculations based on medicare reimbursement averages:",
        setA: [
          {
            key: "VBL",
            value: input.IPTR * cartData.patientSurgeryData.EMS * MARCS,
          },
          {
            key: "VBL#x12",
            value: input.IPTR * cartData.patientSurgeryData.EMS * MARCS * 12,
          },
        ],
        setB: [
          {
            key: "ROI",
            value: input.IPTR * cartData.patientSurgeryData.EMS * MARCS,
          },
          {
            key: "ROI#x12",
            value: input.IPTR * cartData.patientSurgeryData.EMS * MARCS * 12,
          },
        ],
        setC: [
          [
            {
              key: "%IPTR",
              value: input.IPTR,
            },
          ],
        ],
      };
    },
  },
  {
    key: "INPISG",
    inputs: [
      {
        id: 1,
        key: "INP",
        description:
          "What if you increased the number of  new patient consults per month by this amount?",
        label: "Enter Value:  #INP",
      },
      {
        id: 2,
        key: "ISurg",
        description:
          "What If you increased your number of completed surgeries per month by this amount?",
        label: "Enter Value: #ISurg",
      },
    ],
    calculate: (input: any, cartData: any) => {
      return {
        description:
          "Based your Input of a projected  increase in number of new consults seen and surgeries performed per month  without improving your business operations by improving consult to surgery pull-through here is your results using financial calculations based on medicare reimbursement averages:",
        setA: [
          {
            key: "VBLBN#",
            value:
              input.INP * MARCS * cartData.patientSurgeryData.CPTR +
              input.ISurg * MARCS,
          },
          {
            key: "VBLBN#x12",
            value:
              (input.INP * MARCS * cartData.patientSurgeryData.CPTR +
                input.ISurg * MARCS) *
              12,
          },
        ],
        setB: [
          {
            key: "ROIblbn#",
            value:
              input.INP * MARCS * cartData.patientSurgeryData.CPTR +
              input.ISurg * MARCS,
          },
          {
            key: "ROIblbn##x12",
            value:
              (input.INP * MARCS * cartData.patientSurgeryData.CPTR +
                input.ISurg * MARCS) *
              12,
          },
        ],
        setC: [
          [
            {
              key: "#ISurg",
              value: input.ISurg,
            },
            {
              key: "#ISurgx12",
              value: input.ISurg * 12,
            },
          ],
          [
            {
              key: "#INP",
              value: input.INP,
            },
            {
              key: "#INPx12",
              value: input.INP * 12,
            },
          ],
        ],
      };
    },
  },
  {
    key: "INPIPTR",
    inputs: [
      {
        id: 1,
        key: "INP",
        description:
          "What if you increased the number of  new patient consults per month by this amount?",
        label: "Enter Value:  #INP",
      },
      {
        id: 2,
        key: "IPTR",
        description:
          "What If you increased your consult to surgery pull thorugh rate by this percet above your current pull through rate calcualted earlier?",
        label: "Enter Value: %IPTR",
      },
    ],
    calculate: (input: any, cartData: any) => {
      return {
        description:
          "Based your Input of a projected  increase in number of new consults seen and projected  increase your business operations by improving your consult to surgery pull-through rate here is your results using financial calculations based on medicare reimbursement averages:",
        setA: [
          {
            key: "VBLBN#%",
            value:
              input.INP * MARCS * cartData.patientSurgeryData.CPTR +
              input.IPTR * cartData.patientSurgeryData.EMS * MARCS,
          },
          {
            key: "VBLBN#%x12",
            value:
              (input.INP * MARCS * cartData.patientSurgeryData.CPTR +
                input.IPTR * cartData.patientSurgeryData.EMS * MARCS) *
              12,
          },
        ],
        setB: [
          {
            key: "ROIblbn#%",
            value:
              input.INP * MARCS * cartData.patientSurgeryData.CPTR +
              input.IPTR * cartData.patientSurgeryData.EMS * MARCS,
          },
          {
            key: "ROIblbn#%x12",
            value:
              (input.INP * MARCS * cartData.patientSurgeryData.CPTR +
                input.IPTR * cartData.patientSurgeryData.EMS * MARCS) *
              12,
          },
        ],
        setC: [
          [
            {
              key: "%IPTR",
              value: input.IPTR,
            },
          ],
          [
            {
              key: "#INP",
              value: input.INP,
            },
            {
              key: "#INPx12",
              value: input.INP * 12,
            },
          ],
        ],
      };
    },
  },
];
