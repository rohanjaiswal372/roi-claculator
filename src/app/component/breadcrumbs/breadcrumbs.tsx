import React, { useEffect, useState } from 'react'
import './breadcrumbs.css';

type BreadcrumbsProps = {
  setActiveState: (card: any) => void;
  activeCard: {
    PatientSurgeryVolume: boolean;
    FinancialUserInputs: boolean;
    OptionsROIcalculations: boolean;
    WhatIf: boolean;
    OutputROI: boolean;
  };
};


const breadcrumbs = ({ activeCard, setActiveState }: BreadcrumbsProps) => {
  const [activeCardIdx, setActiveCardIdx] = useState(0);

  const formatCardName = (cardName: string): string => {
    return cardName.replace(/([a-z])([A-Z])/g, '$1 $2');
  };

  const getActiveCardIndex = (activeCard: any) => {
    const keys = Object.keys(activeCard);
    for (let i = 0; i < keys.length; i++) {
      if (activeCard[keys[i]] === true) {
        return i;
      }
    }
    return -1; // Return -1 if no true value is found
  };

  useEffect(() => {
    setActiveCardIdx(getActiveCardIndex(activeCard))
  }, [activeCard])

  return (
    <div className="mx-auto text-sm breadcrumbs">
      <ul>
        {Object.keys(activeCard).map((card, idx) => {
          const isActive = idx === activeCardIdx;
          const isDisabled = idx > activeCardIdx;

          return (
            <li key={idx} id={card}>
              <button
                className={`bc-text ${isActive ? 'bc-active' : ''} ${isDisabled ? 'bc-disabled' : ''}`}
                disabled={isDisabled}
                onClick={() => setActiveState(card)}
              >
                {formatCardName(card)}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default breadcrumbs
