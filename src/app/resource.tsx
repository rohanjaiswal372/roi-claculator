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

//if we use the ASMBS national average of the 4 procedrues: the Marcs now becomes (vsg 69%, GBP 27%, AGB 1%, DS 3%

export const ASMBS_marcs: number = 
  (medicare_average_reimbursement.MrGBP * 0.27 + 
  medicare_average_reimbursement.MrVSG * 0.69 + 
  medicare_average_reimbursement.MrDS * 0.03 + 
  medicare_average_reimbursement.MrAGB * 0.01) + 
  medicare_average_reimbursement.MrEGD + 
  medicare_average_reimbursement.MrConsult;

//Marcs =  (468.17 + 758.65 + 58.66 + 11.28) + 220.36+ 136.48 = 1653.60



