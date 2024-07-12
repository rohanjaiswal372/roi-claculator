// Pre-loaded data for Medicare average  reimbursement for a completed surgery: 
export const medicare_average_reimbursement = {
  MrGBP: 1733.95,
  MrVSG: 1099.49,
  MrDS: 1955.31,
  MrAGB: 1127.78,
  MrConsult: 220.36,
  MrEGD: 136.48,
  Marcs: 1835.97
};

export const marcs: number = ((medicare_average_reimbursement.MrGBP +
  medicare_average_reimbursement.MrVSG +
  medicare_average_reimbursement.MrDS +
  medicare_average_reimbursement.MrAGB) / 4) +
  medicare_average_reimbursement.MrEGD +
  medicare_average_reimbursement.MrConsult;

export const ASMBS_marcs: number =
  (medicare_average_reimbursement.MrGBP * 0.27 +
    medicare_average_reimbursement.MrVSG * 0.69 +
    medicare_average_reimbursement.MrDS * 0.03 +
    medicare_average_reimbursement.MrAGB * 0.01) +
  medicare_average_reimbursement.MrEGD +
  medicare_average_reimbursement.MrConsult;


export const ROI_CALCULATION_OPTIONS = [
  {
    key: 1,
    description: 'based a certain number increase/mon for new patient consults (#INP)',
    whatIf: [{
      id: 'INP',
      label: 'What if you increased the number of  new patient consults per month by this amount?',
      placeholder: 'Enter Value:  #INP'
    }],
    calculate: (input: any, cartData : any) => {
      return {
        VBL: (input.INP * marcs) * cartData.patientSurgeryVolumeData.CPTR,
        ROI: (input.INP * marcs) * cartData.patientSurgeryVolumeData.CPTR,
      }
    }
  },
  {
    key: 2,
    description: 'based a certain number increase/mon of completed surgeries? (#ISurg)',
    whatIf: [{
      id: 'ISurg',
      label: 'What If you increased your number of completed surgeries per month by this amount?',
      placeholder: 'Enter Value: #ISurg'
    }],
    calculate: (input: any, cartData : any) => {
      return {
        VBL: input.ISurg * marcs,
        ROI: input.ISurg * marcs
      }
    }
  },
  {
    key: 3,
    description: 'based % increase in pull through rate (%IPTR)?',
    whatIf: [{
      id: 'IPTR',
      label: 'What If you increased your consult to surgery pull thorugh rate by this percet above your current pull through rate calcualted earlier?',
      placeholder: 'Enter Value: %IPTR'
    }],
    calculate: (input: any, cartData : any) => {
      return {
        VBL: (input.IPTR * cartData.patientSurgeryVolumeData.EMS) * marcs,
        ROI: (input.IPTR * cartData.patientSurgeryVolumeData.EMS) * marcs,
      }
    }
  },
  {
    key: 4,
    description: 'based a certain number increase/mon for new patients consults (#INP) and completed surgeries (#ISurg)?',
    whatIf: [
      {
        id: 'INP',
        label: 'What if you increased the number of  new patient consults per month by this amount?',
        placeholder: 'Enter Value:  #INP'
      },
      {
        id: 'ISurg',
        label: 'What If you increased your number of completed surgeries per month by this amount?',
        placeholder: 'Enter Value: #ISurg'
      },
    ],
    calculate: (INP : number, ISurg : number) => {
      return {
        VBL: INP * ISurg,
        ROI: INP * ISurg,
      }
    }
  },
  {
    key: 5,
    description: 'based a certain number increase/mon for new patients consults (#INP) and % increase in pull through rate (%IPTR)?',
    whatIf: [
      {
        id: 'INP',
        label: 'What if you increased the number of  new patient consults per month by this amount?',
        placeholder: 'Enter Value:  #INP'
      },
      {
        id: 'IPTR',
        label: 'What If you increased your consult to surgery pull thorugh rate by this percet above your current pull through rate calcualted earlier?',
        placeholder: 'IPTR'
      },
    ],
    calculate: (INP : number, IPTR : number) => {
      return {
        VBL: INP * IPTR,
        ROI: INP * IPTR,
      }
    }
  },
]



