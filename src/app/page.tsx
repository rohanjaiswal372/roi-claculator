'use client';
import { WHATIF_INPUTS, ROI_CALCULATION_INPUTS, MARCS } from '@/app/resource'
import PatientSurgeryVolume from '@/app/component/card/patientSurgeryVolume'
import FinancialUserInputs from '@/app/component/card/financialUserInputs'
import OptionsROIcalculations from '@/app/component/card/optionsROIcalculations'
import WhatIf from '@/app/component/card/whatIf'
import OutputROI from '@/app/component/card/outputROI'
import { useState } from 'react';

interface SurgeryData {
  ENP: number | null;
  EMS: number | null;
  CPTR: number | null;
}

interface FinancialData {
  APR: number | null;
}

interface WhatIfCardData {
  APR?: number | null;
}

interface ROIOption {
  selectedROIOption: number | null;
}

interface ROIData {
  description: string | null;
  setA: { key: string | null; value: number | null}[];
  setB: { key: string | null; value: number | null }[];
  setC: { key: string | null ; value: number | null}[];
}

interface CardData {
  patientSurgeryData: SurgeryData;
  financialData: FinancialData;
  ROIOption: ROIOption;
  ROIData: ROIData;
  whatIfCardData: WhatIfCardData;
}


export default function Home() {
  const [isActive, setIsActive] = useState({
    PatientSurgeryVolume: true,
    FinancialUserInputs: false,
    OptionsROIcalculations: false,
    WhatIf: false,
    OutputROI: false,
  })

  const [cardData, setCardData] = useState<CardData>({
    patientSurgeryData: {
      ENP: null,
      EMS: null,
      CPTR: null
    },
    financialData: {
      APR: null,
    },
    ROIOption: {
      selectedROIOption: null
    },
    ROIData: {
      description: null,
      setA: [{ key: null, value: null }],
      setB: [{ key: null, value: null }],
      setC: [] 
    },
    whatIfCardData : {}
  });

  //step 1
  const onSubmitPatientSurgeryVolume = (surgeryData : SurgeryData) => {    
    //setData
    setCardData(prevState => ({
      ...prevState,
      patientSurgeryData: surgeryData
    }))
    //setActiveFlage
    setIsActive(prevState => ({
      ...prevState,
      PatientSurgeryVolume: false,
      FinancialUserInputs: true,
    }));
  }

  //step 2
  const onSubmitFinancialUserInputs = (value: number): void => {
    setCardData(prevState => ({
      ...prevState,
      financialData: {
        APR: value,
      }
    }))
    
    //setActiveFlage
    setIsActive(prevState => ({
      ...prevState,
      FinancialUserInputs: false,
      OptionsROIcalculations: true
    }));
  };

  //step 3
  const onSubmitROIOption = (key: number): void => {
    setCardData(prevState => ({
      ...prevState,
      ROIOption: {
        selectedROIOption: key
      }
    }))
    
    //setActiveFlage
    setIsActive(prevState => ({
      ...prevState,
      OptionsROIcalculations: false,
      WhatIf: true
    }));
  };

  const onSubmitWhatIfCard = (res : any, selectedOption : any) => {

    const calculationResult = selectedOption.calculate(res, cardData);

    setCardData(prevState => ({
      ...prevState,
      whatIfCardData: {...res},
      ROIData: calculationResult
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
        {isActive.FinancialUserInputs && <FinancialUserInputs marcs={MARCS} cardData={cardData} onSubmitFinancialUserInputs={onSubmitFinancialUserInputs} />}
        {isActive.OptionsROIcalculations && <OptionsROIcalculations roiOptions={ROI_CALCULATION_INPUTS} onSubmitROIOption={onSubmitROIOption} />}
        {isActive.WhatIf && <WhatIf whatIfOptions={WHATIF_INPUTS} cardData={cardData} onSubmitWhatIfCard={onSubmitWhatIfCard} />}
        {isActive.OutputROI && <OutputROI cardData={cardData} />}
      </div>
    </main>
  );
}
