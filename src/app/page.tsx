'use client';
import { medicare_average_reimbursement, marcs, ASMBS_marcs, ROI_CALCULATION_OPTIONS } from '@/app/resource'
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

  //step 1
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

  //step 2
  const onSubmitFinancialUserInputs = (dataType: string): void => {
    switch (dataType) {
      case "medicalAvgData":
        setCardData(prevState => ({
          ...prevState,
          acturalPracticeReimbursement: (cardData as { patientSurgeryVolumeData: { EMS: number } }).patientSurgeryVolumeData.EMS * medicare_average_reimbursement.Marcs,
        }))
        break;
      case "customFinancialData":
        //todo
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

  //step 3
  const onSubmitROIcalculations = (key: number): void => {
    setCardData(prevState => ({
      ...prevState,
      selectedRoi: ROI_CALCULATION_OPTIONS.find((option) => option.key === key),
    }))
    //setActiveFlage
    setIsActive(prevState => ({
      ...prevState,
      OptionsROIcalculations: false,
      WhatIf: true
    }));
  };

  const onSubmitWhatIfCard = (e: React.FormEvent) => {
    e.preventDefault();
    const keys = (cardData as { selectedRoi: any }).selectedRoi.whatIf.map( (el : any) => el.id)

    const target: { [key: string]: string } = {};
    keys.forEach((label: string) => {
        // Access input value dynamically using label (key)
        const inputValue = (e.target as any)[label].value; // Assuming each input has a 'name' attribute set to the label
        target[label] = inputValue;
    });

    setCardData(prevState => ({
      ...prevState,
      ...(cardData as { selectedRoi: any }).selectedRoi.calculate(target, cardData)
    }));
  
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
        {isActive.OptionsROIcalculations && <OptionsROIcalculations options={ROI_CALCULATION_OPTIONS} onSubmitROIcalculations={onSubmitROIcalculations}/>}
        {isActive.WhatIf && <WhatIf selectedROI={(cardData as { selectedRoi: any }).selectedRoi} 
        onSubmitWhatIfCard={onSubmitWhatIfCard}/>}
        {isActive.OutputROI && <OutputROI cardData={cardData}/>}
      </div>
    </main>
  );
}
