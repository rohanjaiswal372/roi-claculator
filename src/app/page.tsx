'use client';
import { WHATIF_INPUTS, ROI_CALCULATION_INPUTS, MARCS } from '@/app/resource'
import Breadcrumbs from './component/breadcrumbs/breadcrumbs';
import PatientSurgeryCard from '@/app/component/card/patientSurgeryCard'
import FinancialUserCard from '@/app/component/card/financialUserCard'
import OptionsROICard from '@/app/component/card/optionsROICard'
import WhatIfCard from '@/app/component/card/whatIfCard'
import OutputROICard from '@/app/component/card/outputROICard'
import { useState } from 'react';

interface ActiveCardState {
  PatientSurgeryVolume: boolean;
  FinancialUserInputs: boolean;
  OptionsROIcalculations: boolean;
  WhatIf: boolean;
  OutputROI: boolean;
}

interface SurgeryData {
  ENP: number | null;
  EMS: number | null;
  CPTR: number | null;
}

interface FinancialData {
  APR: number | null;
  ARCS: number | null;
  customData: boolean
}

interface WhatIfCardData {
  APR?: number | null;
}

interface ROIOption {
  selectedROIOption: number | null;
}

interface ROIData {
  description: string | null;
  setA: { key: string | null; value: number | null }[];
  setB: { key: string | null; value: number | null }[];
  setC: { key: string | null; value: number | null }[];
}

interface CardData {
  patientSurgeryData: SurgeryData;
  financialData: FinancialData;
  ROIOption: ROIOption;
  ROIData: ROIData;
  whatIfCardData: WhatIfCardData;
}


export default function Home() {
  const [activeCard, setActiveCard] = useState<ActiveCardState>({
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
      ARCS: null,
      customData: false
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
    whatIfCardData: {}
  });

  const redoROI = () => {
    setCardData({
      patientSurgeryData: {
        ENP: null,
        EMS: null,
        CPTR: null
      },
      financialData: {
        APR: null,
        ARCS: null,
        customData: false
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
      whatIfCardData: {}
    })
    setActiveCard({
      PatientSurgeryVolume: true,
      FinancialUserInputs: false,
      OptionsROIcalculations: false,
      WhatIf: false,
      OutputROI: false,
    })
  }

  const setActiveState = (card: keyof ActiveCardState) => {
    setActiveCard(prevState => {
      const newState: ActiveCardState = Object.keys(prevState).reduce((acc, key) => {
        acc[key as keyof ActiveCardState] = false;
        return acc;
      }, {} as ActiveCardState);
      newState[card] = true;
      return newState;
    });
  };

  //step 1
  const onSubmitPatientSurgeryVolume = (surgeryData: SurgeryData) => {
    //setData
    setCardData(prevState => ({
      ...prevState,
      patientSurgeryData: surgeryData
    }))
    //setActiveFlage
    setActiveCard(prevState => ({
      ...prevState,
      PatientSurgeryVolume: false,
      FinancialUserInputs: true,
    }));
  }

  //step 2
  const onSubmitFinancialUserInputs = (APR: number, ARCS?: number): void => {
    setCardData(prevState => ({
      ...prevState,
      financialData: {
        "APR": APR,
        "ARCS": ARCS ? ARCS : null,
        customData: ARCS ? true : false
      }
    }))

    //setActiveFlage
    setActiveCard(prevState => ({
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
    setActiveCard(prevState => ({
      ...prevState,
      OptionsROIcalculations: false,
      WhatIf: true
    }));
  };

  const onSubmitWhatIfCard = (res: any, selectedOption: any) => {
    console.log('MARCS');
    console.log(MARCS);

    // Medicare average or custom financial data for reimbursement for a completed surgery
    const reimbursement = cardData.financialData.customData ? cardData.financialData.ARCS : MARCS;
    const calculationResult = selectedOption.calculate(res, cardData, reimbursement);

    setCardData(prevState => ({
      ...prevState,
      whatIfCardData: { ...res },
      ROIData: calculationResult
    }));

    //setActiveFlage
    setActiveCard(prevState => ({
      ...prevState,
      WhatIf: false,
      OutputROI: true,
    }));
  }

  return (
    <main className="py-12" >
      <div className="bg-[#F2F2F2] flex flex-row rounded p-8 m-1 mx-auto justify-center">
        <Breadcrumbs activeCard={activeCard} setActiveState={setActiveState} />
      </div>
      <div className="bg-[#F2F2F2] rounded p-8">
        {activeCard.PatientSurgeryVolume && <PatientSurgeryCard cardData={cardData} onSubmitPatientSurgeryVolume={onSubmitPatientSurgeryVolume} />}
        {activeCard.FinancialUserInputs && <FinancialUserCard marcs={MARCS} cardData={cardData} onSubmitFinancialUserInputs={onSubmitFinancialUserInputs} />}
        {activeCard.OptionsROIcalculations && <OptionsROICard roiOptions={ROI_CALCULATION_INPUTS} onSubmitROIOption={onSubmitROIOption} />}
        {activeCard.WhatIf && <WhatIfCard whatIfOptions={WHATIF_INPUTS} cardData={cardData} onSubmitWhatIfCard={onSubmitWhatIfCard} />}
        {activeCard.OutputROI && <OutputROICard cardData={cardData} redoROI={redoROI} />}
      </div>
    </main>
  );
}
