// export const data = [
//   {
//     title: 'Pull Through Rate',
//     input: [
//       {
//         name: 'Average Monthly New Patient Visits',
//         id: 'AvMNPVs',
//         type: 'number',
//       },
//       {
//         name: 'Average Monthly Bariatric Surgeries',
//         id: 'AvMBSs',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Pull Through Rate',
//         id: 'PTR',
//         arguments: ['AvMBSs', 'AvMNPVs'],
//         formula: (AvMBSs, AvMNPVs) => {
//           return AvMBSs / AvMNPVs;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Monthly New Patient Visits',
//     input: [
//       {
//         name: 'Average Monthly New Patient Visits',
//         id: 'AvMNPVs',
//         type: 'number',
//       },
//       {
//         name: 'Percentage or Number Increase in New Patient Visits',
//         id: 'PNINPV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Monthly New Patient Visits',
//         id: 'AdMNPVs',
//         arguments: ['AvMNPVs', 'PNINPV'],
//         formula: (AvMNPVs, PNINPV) => {
//           return AvMNPVs * PNINPV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Commercial Reimbursement for New Patient Visit',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Commercial Evaluation and Management Codes',
//         id: 'CPctMcrEM',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for New Patient Visit',
//         id: 'MedicareReimbursementNPV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Commercial Reimbursement',
//         id: 'CREM',
//         arguments: ['CPctMcrEM', 'MedicareReimbursementNPV'],
//         formula: (CPctMcrEM, MedicareReimbursementNPV) => {
//           return CPctMcrEM * MedicareReimbursementNPV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Exchange Reimbursement for New Patient Visit',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Exchange Evaluation and Management Codes',
//         id: 'EPctMcrEM',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for New Patient Visit',
//         id: 'MedicareReimbursementNPV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Exchange Reimbursement',
//         id: 'EREM',
//         arguments: ['EPctMcrEM', 'MedicareReimbursementNPV'],
//         formula: (EPctMcrEM, MedicareReimbursementNPV) => {
//           return EPctMcrEM * MedicareReimbursementNPV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicaid Reimbursement for New Patient Visit',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicaid Evaluation and Management Codes',
//         id: 'McdPctMcrEM',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for New Patient Visit',
//         id: 'MedicareReimbursementNPV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicaid Reimbursement',
//         id: 'McdREM',
//         arguments: ['McdPctMcrEM', 'MedicareReimbursementNPV'],
//         formula: (McdPctMcrEM, MedicareReimbursementNPV) => {
//           return McdPctMcrEM * MedicareReimbursementNPV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicare Reimbursement for New Patient Visit',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicare Evaluation and Management Codes',
//         id: 'McrPctMcrEM',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for New Patient Visit',
//         id: 'MedicareReimbursementNPV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicare Reimbursement',
//         id: 'McrREM',
//         arguments: ['McrPctMcrEM', 'MedicareReimbursementNPV'],
//         formula: (McrPctMcrEM, MedicareReimbursementNPV) => {
//           return McrPctMcrEM * MedicareReimbursementNPV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Weighted Average Reimbursement per New Patient Visit',
//     input: [
//       {
//         name: 'Commercial Reimbursement Component for New Patient Visits',
//         id: 'CRCEM',
//         type: 'number',
//       },
//       {
//         name: 'Exchange Reimbursement Component for New Patient Visits',
//         id: 'ERCEM',
//         type: 'number',
//       },
//       {
//         name: 'Medicaid Reimbursement Component for New Patient Visits',
//         id: 'McdRCEM',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement Component for New Patient Visits',
//         id: 'McrRCEM',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Weighted Average Reimbursement per New Patient Visit',
//         id: 'WAvNPVsR',
//         arguments: ['CRCEM', 'ERCEM', 'McdRCEM', 'McrRCEM'],
//         formula: (CRCEM, ERCEM, McdRCEM, McrRCEM) => {
//           return CRCEM + ERCEM + McdRCEM + McrRCEM;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Monthly New Patient Visit Revenue',
//     input: [
//       {
//         name: 'Additional Monthly New Patient Visits',
//         id: 'AdMNPVs',
//         type: 'number',
//       },
//       {
//         name: 'Weighted Average Reimbursement per New Patient Visit',
//         id: 'WAvNPVsR',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Monthly New Patient Visit Revenue',
//         id: 'AdMNPVsRv',
//         arguments: ['AdMNPVs', 'WAvNPVsR'],
//         formula: (AdMNPVs, WAvNPVsR) => {
//           return AdMNPVs * WAvNPVsR;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Annual New Patient Visit Revenue',
//     input: [
//       {
//         name: 'Additional Monthly New Patient Visit Revenue',
//         id: 'AdMNPVsRv',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Annual New Patient Visit Revenue',
//         id: 'AdANPVsRv',
//         arguments: ['AdMNPVsRv'],
//         formula: (AdMNPVsRv) => {
//           return AdMNPVsRv * 12;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Monthly Bariatric Surgeries',
//     input: [
//       {
//         name: 'Additional Monthly New Patient Visits',
//         id: 'AdMNPVs',
//         type: 'number',
//       },
//       {
//         name: 'Pull Through Rate',
//         id: 'PTR',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Monthly Bariatric Surgeries',
//         id: 'AdMBSs',
//         arguments: ['AdMNPVs', 'PTR'],
//         formula: (AdMNPVs, PTR) => {
//           return AdMNPVs * PTR;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Commercial Reimbursement for Bariatric Surgery',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Commercial Bariatric Surgery Codes',
//         id: 'CPctMcrBS',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for Vertical Sleeve Gastrectomy CPT 43775',
//         id: 'McrR43775',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Commercial Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'CR43775',
//         arguments: ['CPctMcrBS', 'McrR43775'],
//         formula: (CPctMcrBS, McrR43775) => {
//           return CPctMcrBS * McrR43775;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Exchange Reimbursement for Bariatric Surgery',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Exchange Bariatric Surgery Codes',
//         id: 'EPctMcrBS',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for Vertical Sleeve Gastrectomy CPT 43775',
//         id: 'McrR43775',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Exchange Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'ER43775',
//         arguments: ['EPctMcrBS', 'McrR43775'],
//         formula: (EPctMcrBS, McrR43775) => {
//           return EPctMcrBS * McrR43775;
//         },
//       },
//     ],
//   },


//   {
//     title: 'Medicaid Reimbursement for Bariatric Surgery',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicaid Bariatric Surgery Codes',
//         id: 'McdPctMcrBS',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for Vertical Sleeve Gastrectomy CPT 43775',
//         id: 'McrR43775',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicaid Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'McdR43775',
//         arguments: ['McdPctMcrBS', 'McrR43775'],
//         formula: (McdPctMcrBS, McrR43775) => {
//           return McdPctMcrBS * McrR43775;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicare Reimbursement for Bariatric Surgery',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicare Bariatric Surgery Codes',
//         id: 'McrPctMcrBS',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for Vertical Sleeve Gastrectomy CPT 43775',
//         id: 'McrR43775',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicare Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'McrR43775',
//         arguments: ['McrPctMcrBS', 'McrR43775'],
//         formula: (McrPctMcrBS, McrR43775) => {
//           return McrPctMcrBS * McrR43775;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Weighted Average Reimbursement for Vertical Sleeve Gastrectomy',
//     input: [
//       {
//         name: 'Commercial Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'CR43775',
//         type: 'number',
//       },
//       {
//         name: 'Exchange Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'ER43775',
//         type: 'number',
//       },
//       {
//         name: 'Medicaid Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'McdR43775',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'McrR43775',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Weighted Average Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'WAvBSR43775',
//         arguments: ['CR43775', 'ER43775', 'McdR43775', 'McrR43775'],
//         formula: (CR43775, ER43775, McdR43775, McrR43775) => {
//           return CR43775 + ER43775 + McdR43775 + McrR43775;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Weighted Average Total Bariatric Surgery Reimbursement',
//     input: [
//       {
//         name: 'Weighted Average Reimbursement for Vertical Sleeve Gastrectomy',
//         id: 'WAvBSR43775',
//         type: 'number',
//       },
//       {
//         name: 'Weighted Average Reimbursement for Gastric Bypass',
//         id: 'WAvBSR43644',
//         type: 'number',
//       },
//       {
//         name: 'Weighted Average Reimbursement for Duodenal Switch',
//         id: 'WAvBSR43845',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Weighted Average Total Bariatric Surgery Reimbursement',
//         id: 'WAvTBSR',
//         arguments: ['WAvBSR43775', 'WAvBSR43644', 'WAvBSR43845'],
//         formula: (WAvBSR43775, WAvBSR43644, WAvBSR43845) => {
//           return WAvBSR43775 + WAvBSR43644 + WAvBSR43845;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Annual Additional Bariatric Surgeries',
//     input: [
//       {
//         name: 'Additional Monthly Bariatric Surgeries',
//         id: 'AdMBSs',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Annual Additional Bariatric Surgeries',
//         id: 'AdABSs',
//         arguments: ['AdMBSs'],
//         formula: (AdMBSs) => {
//           return AdMBSs * 12;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Annual Bariatric Surgery Revenue',
//     input: [
//       {
//         name: 'Annual Additional Bariatric Surgeries',
//         id: 'AdABSs',
//         type: 'number',
//       },
//       {
//         name: 'Weighted Average Total Bariatric Surgery Reimbursement',
//         id: 'WAvTBSR',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Annual Bariatric Surgery Revenue',
//         id: 'AdABSRv',
//         arguments: ['AdABSs', 'WAvTBSR'],
//         formula: (AdABSs, WAvTBSR) => {
//           return AdABSs * WAvTBSR;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Average Medicare Reimbursement for Initial EGD',
//     input: [
//       {
//         name: 'Medicare Reimbursement for Endoscopic US Exam Esoph',
//         id: 'McrR43237',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for EGD US Fine Needle Biopsy/Aspir',
//         id: 'McrR43238',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Average Medicare Reimbursement for Initial EGD',
//         id: 'AvMcrRIEGD',
//         arguments: ['McrR43237', 'McrR43238'],
//         formula: (McrR43237, McrR43238) => {
//           return (McrR43237 + McrR43238) / 2;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Initial EGD Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Commercial EGD Codes',
//         id: 'CPctMcrIEGD',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for Initial EGD',
//         id: 'AvMcrRIEGD',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Commercial Initial EGD Reimbursement',
//         id: 'CRIEGD',
//         arguments: ['CPctMcrIEGD', 'AvMcrRIEGD'],
//         formula: (CPctMcrIEGD, AvMcrRIEGD) => {
//           return CPctMcrIEGD * AvMcrRIEGD;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Exchange Initial EGD Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Exchange EGD Codes',
//         id: 'EPctMcrIEGD',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for Initial EGD',
//         id: 'AvMcrRIEGD',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Exchange Initial EGD Reimbursement',
//         id: 'ERIEGD',
//         arguments: ['EPctMcrIEGD', 'AvMcrRIEGD'],
//         formula: (EPctMcrIEGD, AvMcrRIEGD) => {
//           return EPctMcrIEGD * AvMcrRIEGD;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicaid Initial EGD Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicaid EGD Codes',
//         id: 'McdPctMcrIEGD',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for Initial EGD',
//         id: 'AvMcrRIEGD',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicaid Initial EGD Reimbursement',
//         id: 'McdRIEGD',
//         arguments: ['McdPctMcrIEGD', 'AvMcrRIEGD'],
//         formula: (McdPctMcrIEGD, AvMcrRIEGD) => {
//           return McdPctMcrIEGD * AvMcrRIEGD;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicare Initial EGD Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicare EGD Codes',
//         id: 'McrPctMcrIEGD',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for Initial EGD',
//         id: 'AvMcrRIEGD',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicare Initial EGD Reimbursement',
//         id: 'McrRIEGD',


//         arguments: ['McrPctMcrIEGD', 'AvMcrRIEGD'],
//         formula: (McrPctMcrIEGD, AvMcrRIEGD) => {
//           return McrPctMcrIEGD * AvMcrRIEGD;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Weighted Average Initial EGD Reimbursement',
//     input: [
//       {
//         name: 'Commercial Initial EGD Reimbursement',
//         id: 'CRIEGD',
//         type: 'number',
//       },
//       {
//         name: 'Exchange Initial EGD Reimbursement',
//         id: 'ERIEGD',
//         type: 'number',
//       },
//       {
//         name: 'Medicaid Initial EGD Reimbursement',
//         id: 'McdRIEGD',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Initial EGD Reimbursement',
//         id: 'McrRIEGD',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Weighted Average Initial EGD Reimbursement',
//         id: 'WAvIEGDR',
//         arguments: ['CRIEGD', 'ERIEGD', 'McdRIEGD', 'McrRIEGD'],
//         formula: (CRIEGD, ERIEGD, McdRIEGD, McrRIEGD) => {
//           return CRIEGD + ERIEGD + McdRIEGD + McrRIEGD;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Monthly Initial EGD Revenue',
//     input: [
//       {
//         name: 'Additional Monthly Bariatric Surgeries',
//         id: 'AdMBSs',
//         type: 'number',
//       },
//       {
//         name: 'Percentage of Bariatric Surgery Patients Receiving EGD',
//         id: 'PctBSPEGD',
//         type: 'number',
//       },
//       {
//         name: 'Weighted Average Initial EGD Reimbursement',
//         id: 'WAvIEGDR',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Monthly Initial EGD Revenue',
//         id: 'AdMIEGDRv',
//         arguments: ['AdMBSs', 'PctBSPEGD', 'WAvIEGDR'],
//         formula: (AdMBSs, PctBSPEGD, WAvIEGDR) => {
//           return AdMBSs * PctBSPEGD * WAvIEGDR;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Annual Initial EGD Revenue',
//     input: [
//       {
//         name: 'Additional Monthly Initial EGD Revenue',
//         id: 'AdMIEGDRv',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Annual Initial EGD Revenue',
//         id: 'AdAIEGDRv',
//         arguments: ['AdMIEGDRv'],
//         formula: (AdMIEGDRv) => {
//           return AdMIEGDRv * 12;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Average Medicare Reimbursement for Initial Healthy Visit',
//     input: [
//       {
//         name: 'Medicare Reimbursement for Initial Healthy Visit CPT 99401',
//         id: 'McrR99401',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for Initial Healthy Visit CPT 99402',
//         id: 'McrR99402',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Average Medicare Reimbursement for Initial Healthy Visit',
//         id: 'AvMcrRIHV',
//         arguments: ['McrR99401', 'McrR99402'],
//         formula: (McrR99401, McrR99402) => {
//           return (McrR99401 + McrR99402) / 2;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Initial Healthy Visit Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Commercial Healthy Visit Codes',
//         id: 'CPctMcrIHV',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for Initial Healthy Visit',
//         id: 'AvMcrRIHV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Commercial Initial Healthy Visit Reimbursement',
//         id: 'CRIHV',
//         arguments: ['CPctMcrIHV', 'AvMcrRIHV'],
//         formula: (CPctMcrIHV, AvMcrRIHV) => {
//           return CPctMcrIHV * AvMcrRIHV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Exchange Initial Healthy Visit Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Exchange Healthy Visit Codes',
//         id: 'EPctMcrIHV',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for Initial Healthy Visit',
//         id: 'AvMcrRIHV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Exchange Initial Healthy Visit Reimbursement',
//         id: 'ERIHV',
//         arguments: ['EPctMcrIHV', 'AvMcrRIHV'],
//         formula: (EPctMcrIHV, AvMcrRIHV) => {
//           return EPctMcrIHV * AvMcrRIHV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicaid Initial Healthy Visit Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicaid Healthy Visit Codes',
//         id: 'McdPctMcrIHV',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for Initial Healthy Visit',
//         id: 'AvMcrRIHV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicaid Initial Healthy Visit Reimbursement',
//         id: 'McdRIHV',
//         arguments: ['McdPctMcrIHV', 'AvMcrRIHV'],
//         formula: (McdPctMcrIHV, AvMcrRIHV) => {
//           return McdPctMcrIHV * AvMcrRIHV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicare Initial Healthy Visit Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicare Healthy Visit Codes',
//         id: 'McrPctMcrIHV',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for Initial Healthy Visit',
//         id: 'AvMcrRIHV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicare Initial Healthy Visit Reimbursement',
//         id: 'McrRIHV',
//         arguments: ['McrPctMcrIHV', 'AvMcrRIHV'],
//         formula: (McrPctMcrIHV, AvMcrRIHV) => {
//           return McrPctMcrIHV * AvMcrRIHV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Weighted Average Initial Healthy Visit Reimbursement',
//     input: [
//       {
//         name: 'Commercial Initial Healthy Visit Reimbursement',
//         id: 'CRIHV',
//         type: 'number',
//       },
//       {
//         name: 'Exchange Initial Healthy Visit Reimbursement',
//         id: 'ERIHV',
//         type: 'number',
//       },
//       {
//         name: 'Medicaid Initial Healthy Visit Reimbursement',
//         id: 'McdRIHV',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Initial Healthy Visit Reimbursement',
//         id: 'McrRIHV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Weighted Average Initial Healthy Visit Reimbursement',
//         id: 'WAvIHVR',
//         arguments: ['CRIHV', 'ERIHV', 'McdRIHV', 'McrRIHV'],
//         formula: (CRIHV, ERIHV, McdRIHV, McrRIHV) => {
//           return CRIHV + ERIHV + McdRIHV + McrRIHV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Monthly Initial Healthy Visit Revenue',
//     input: [
//       {
//         name: 'Additional Monthly Bariatric Surgeries',
//         id: 'AdMBSs',
//         type: 'number',
//       },
//       {
//         name: 'Percentage of Bariatric Surgery Patients Receiving Initial Healthy Visit',
//         id: 'PctBSPIHV',
//         type: 'number',
//       },
//       {
//         name: 'Weighted Average Initial Healthy Visit Reimbursement',
//         id: 'WAvIHVR',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Monthly Initial Healthy Visit Revenue',
//         id: 'AdMIHVRv',
//         arguments: ['AdMBSs', 'PctBSPIHV', 'WAvIHVR'],
//         formula: (AdMBSs, PctBSPIHV, WAvIHVR) => {
//           return AdMBSs * PctBSPIHV * WAvIHVR;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Annual Initial Healthy Visit Revenue',
   

//  input: [
//       {
//         name: 'Additional Monthly Initial Healthy Visit Revenue',
//         id: 'AdMIHVRv',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Annual Initial Healthy Visit Revenue',
//         id: 'AdAIHVRv',
//         arguments: ['AdMIHVRv'],
//         formula: (AdMIHVRv) => {
//           return AdMIHVRv * 12;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Average Medicare Reimbursement for FollowUp Visit',
//     input: [
//       {
//         name: 'Medicare Reimbursement for FollowUp Visit CPT 99403',
//         id: 'McrR99403',
//         type: 'number',
//       },
//       {
//         name: 'Medicare Reimbursement for FollowUp Visit CPT 99404',
//         id: 'McrR99404',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Average Medicare Reimbursement for FollowUp Visit',
//         id: 'AvMcrRFUV',
//         arguments: ['McrR99403', 'McrR99404'],
//         formula: (McrR99403, McrR99404) => {
//           return (McrR99403 + McrR99404) / 2;
//         },
//       },
//     ],
//   },
//   {
//     title: 'FollowUp Visit Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Commercial FollowUp Visit Codes',
//         id: 'CPctMcrFUV',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for FollowUp Visit',
//         id: 'AvMcrRFUV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Commercial FollowUp Visit Reimbursement',
//         id: 'CRFUV',
//         arguments: ['CPctMcrFUV', 'AvMcrRFUV'],
//         formula: (CPctMcrFUV, AvMcrRFUV) => {
//           return CPctMcrFUV * AvMcrRFUV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Exchange FollowUp Visit Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Exchange FollowUp Visit Codes',
//         id: 'EPctMcrFUV',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for FollowUp Visit',
//         id: 'AvMcrRFUV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Exchange FollowUp Visit Reimbursement',
//         id: 'ERFUV',
//         arguments: ['EPctMcrFUV', 'AvMcrRFUV'],
//         formula: (EPctMcrFUV, AvMcrRFUV) => {
//           return EPctMcrFUV * AvMcrRFUV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicaid FollowUp Visit Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicaid FollowUp Visit Codes',
//         id: 'McdPctMcrFUV',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for FollowUp Visit',
//         id: 'AvMcrRFUV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicaid FollowUp Visit Reimbursement',
//         id: 'McdRFUV',
//         arguments: ['McdPctMcrFUV', 'AvMcrRFUV'],
//         formula: (McdPctMcrFUV, AvMcrRFUV) => {
//           return McdPctMcrFUV * AvMcrRFUV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Medicare FollowUp Visit Reimbursement',
//     input: [
//       {
//         name: 'Percentage of Medicare Reimbursement for Medicare FollowUp Visit Codes',
//         id: 'McrPctMcrFUV',
//         type: 'number',
//       },
//       {
//         name: 'Average Medicare Reimbursement for FollowUp Visit',
//         id: 'AvMcrRFUV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Medicare FollowUp Visit Reimbursement',
//         id: 'McrRFUV',
//         arguments: ['McrPctMcrFUV', 'AvMcrRFUV'],
//         formula: (McrPctMcrFUV, AvMcrRFUV) => {
//           return McrPctMcrFUV * AvMcrRFUV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Weighted Average FollowUp Visit Reimbursement',
//     input: [
//       {
//         name: 'Commercial FollowUp Visit Reimbursement',
//         id: 'CRFUV',
//         type: 'number',
//       },
//       {
//         name: 'Exchange FollowUp Visit Reimbursement',
//         id: 'ERFUV',
//         type: 'number',
//       },
//       {
//         name: 'Medicaid FollowUp Visit Reimbursement',
//         id: 'McdRFUV',
//         type: 'number',
//       },
//       {
//         name: 'Medicare FollowUp Visit Reimbursement',
//         id: 'McrRFUV',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Weighted Average FollowUp Visit Reimbursement',
//         id: 'WAvFUVR',
//         arguments: ['CRFUV', 'ERFUV', 'McdRFUV', 'McrRFUV'],
//         formula: (CRFUV, ERFUV, McdRFUV, McrRFUV) => {
//           return CRFUV + ERFUV + McdRFUV + McrRFUV;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Monthly FollowUp Visit Revenue',
//     input: [
//       {
//         name: 'Additional Monthly Bariatric Surgeries',
//         id: 'AdMBSs',
//         type: 'number',
//       },
//       {
//         name: 'Percentage of Bariatric Surgery Patients Receiving FollowUp Visit',
//         id: 'PctBSPFUV',
//         type: 'number',
//       },
//       {
//         name: 'Weighted Average FollowUp Visit Reimbursement',
//         id: 'WAvFUVR',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Monthly FollowUp Visit Revenue',
//         id: 'AdMFUVRv',
//         arguments: ['AdMBSs', 'PctBSPFUV', 'WAvFUVR'],
//         formula: (AdMBSs, PctBSPFUV, WAvFUVR) => {
//           return AdMBSs * PctBSPFUV * WAvFUVR;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Additional Annual FollowUp Visit Revenue',
//     input: [
//       {
//         name: 'Additional Monthly FollowUp Visit Revenue',
//         id: 'AdMFUVRv',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Additional Annual FollowUp Visit Revenue',
//         id: 'AdAFUVRv',
//         arguments: ['AdMFUVRv'],
//         formula: (AdMFUVRv) => {
//           return AdMFUVRv * 12;
//         },
//       },
//     ],
//   },
//   {
//     title: 'Total Additional Annual Revenue',
//     input: [
//       {
//         name: 'Additional Annual Bariatric Surgery Revenue',
//         id: 'AdABSRv',
//         type: 'number',
//       },
//       {
//         name: 'Additional Annual Initial EGD Revenue',
//         id: 'AdAIEGDRv',
//         type: 'number',
//       },
//       {
//         name: 'Additional Annual Initial Healthy Visit Revenue',
//         id: 'AdAIHVRv',
//         type: 'number',
//       },
//       {
//         name: 'Additional Annual FollowUp Visit Revenue',
//         id: 'AdAFUVRv',
//         type: 'number',
//       },
//     ],
//     estimate: [
//       {
//         name: 'Total Additional Annual Revenue',
//         id: 'TAdARv',
//         arguments: ['AdABSRv', 'AdAIEGDRv', 'AdAIHVRv', 'AdAFUVRv'],
//         formula: (AdABSRv, AdAIEGDRv, AdAIHVRv, AdAFUVRv) => {
//           return AdABSRv + AdAIEGDRv + AdAIHVRv + AdAFUVRv;
//         },
//       },
//     ],
//   },
// ]