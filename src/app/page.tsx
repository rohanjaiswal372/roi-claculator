'use client';
import { medicare_average_reimbursement, marcs, ASMBS_marcs } from '@/app/resource'
import PatientSurgeryVolume from '@/app/component/card/patientSurgeryVolume'
import FinancialUserInputs from '@/app/component/card/financialUserInputs'
import OptionsROIcalculations from '@/app/component/card/optionsROIcalculations'
import WhatIf from '@/app/component/card/whatIf'
import OutputROI from '@/app/component/card/outputROI'
import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState({
    PatientSurgeryVolume: true,
    FinancialUserInputs: false,
    OptionsROIcalculations: false,
    WhatIf: false,
    OutputROI: false,
  })

  const [cardData, setCardData] = useState({});
  const [patientSurgeryVolumeData, setPatientSurgeryVolumeData] = useState({});

  const onSubmitPatientSurgeryVolume = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      ENP: { value: number };
      EMS: { value: number };
    };
    //setData
    setCardData(prevState => ({
      ...prevState,
      patientSurgeryVolumeData: {
        ENP: target.ENP.value,
        EMS: target.EMS.value,
        CPTR: target.EMS.value / target.ENP.value
      }
    }))
    //setActiveFlage
    setIsActive(prevState => ({
      ...prevState,
      PatientSurgeryVolume: false,
      FinancialUserInputs: true,
    }));
  }

  const onSubmitFinancialUserInputs = (dataType: string): void => {
    switch (dataType) {
      case "medicalAvgData":
        setCardData(prevState => ({
          ...prevState,
          acturalPracticeReimbursement: (cardData as { patientSurgeryVolumeData: { EMS: number } }).patientSurgeryVolumeData.EMS * medicare_average_reimbursement.Marcs,
        }))
        break;
      case "customFinancialData":
        // setCardData(prevState => ({
        //   ...prevState,
        //   acturalPracticeReimbursement : ''
        // }))
        break;
      default:
        throw new Error(`Invalid data type: ${dataType}`);
    }
    //setActiveFlage
    setIsActive(prevState => ({
      ...prevState,
      FinancialUserInputs: false,
      OptionsROIcalculations: true
    }));
  };

  const onSubmitROIcalculations = (dataType: string): void => {
    switch (dataType) {
      case "INP":
        setCardData(prevState => ({
          ...prevState,
          acturalPracticeReimbursement: (cardData as { patientSurgeryVolumeData: { EMS: number } }).patientSurgeryVolumeData.EMS * medicare_average_reimbursement.Marcs,
        }))
        break;
      case "ISURG":
        // setCardData(prevState => ({
        //   ...prevState,
        //   acturalPracticeReimbursement : ''
        // }))
        break;
      case "IPTR":
        // setCardData(prevState => ({
        //   ...prevState,
        //   acturalPracticeReimbursement : ''
        // }))
        break;
      default:
        throw new Error(`Invalid data type: ${dataType}`);
    }
    //setActiveFlage
    setIsActive(prevState => ({
      ...prevState,
      OptionsROIcalculations: false,
      WhatIf: true
    }));
  };

  const onSubmitWhatIfCard = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      INP: { value: number };
    };
    //setData
    //(cardData as { patientSurgeryVolumeData: { EMS: number } }).patientSurgeryVolumeData.EMS * medicare_average_reimbursement.Marcs
    setCardData(prevState => ({
      ...prevState,
      INP: target.INP.value,
      VBL: (target.INP.value * medicare_average_reimbursement.Marcs) * (cardData as { patientSurgeryVolumeData: { CPTR: number } }).patientSurgeryVolumeData.CPTR
    }))
    //setActiveFlage
    setIsActive(prevState => ({
      ...prevState,
      WhatIf: false,
      OutputROI: true,  
    }));
  }


  return (
    <main className="bg-[#27413e] flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#F2F2F2] artboard artboard-horizontal phone-10 w-10/12 rounded p-8">
        {isActive.PatientSurgeryVolume && <PatientSurgeryVolume onSubmitPatientSurgeryVolume={onSubmitPatientSurgeryVolume} />}
        {isActive.FinancialUserInputs && <FinancialUserInputs cardData={cardData} onSubmitFinancialUserInputs={onSubmitFinancialUserInputs} />}
        {isActive.OptionsROIcalculations && <OptionsROIcalculations cardData={cardData} onSubmitROIcalculations={onSubmitROIcalculations}/>}
        {isActive.WhatIf && <WhatIf cardData={cardData} onSubmitWhatIfCard={onSubmitWhatIfCard}/>}
        {isActive.OutputROI && <OutputROI cardData={cardData}/>}
      </div>
    </main>
  );
}
