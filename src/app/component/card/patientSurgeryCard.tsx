'use client';
import React from 'react'
import { PATIENT_SURGERY_INPUTS } from '@/app/resource'

interface SurgeryData {
  ENP: number | null;
  EMS: number | null;
  CPTR: number | null;
}

type PatientSurgeryVolumeProps = {
  onSubmitPatientSurgeryVolume: (surgeryData :SurgeryData) => void;
};

const PatientSurgeryCard = ({ onSubmitPatientSurgeryVolume }: PatientSurgeryVolumeProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    
    const ENP = parseFloat(formData.get('ENP') as string);
    const EMS = parseFloat(formData.get('EMS') as string);

    const surgeryData: SurgeryData = {
        ENP,
        EMS,
        CPTR: EMS / ENP
    };

    onSubmitPatientSurgeryVolume(surgeryData);
  }

  return (
    <div >
      <h1 className="p-10 text-center font-semibold leading-7 text-gray-900">Patient and Surgery Volume User Inputs</h1>
      <form className="grid grid-rows grid-flow-col gap-4" onSubmit={handleSubmit}>
        <div className="row-span-3 col-span-2">
          <div className="space-y-12">
            <div className="border-r border-gray-900/10 pr-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                {PATIENT_SURGERY_INPUTS.map(el => (
                  <div className="col-span-full" key={el.id}>
                    <label htmlFor="ENP" className="block text-sm font-medium leading-6 text-gray-600">
                      {el.description}
                    </label>
                    <div className="mt-2">
                      <input
                        required
                        type="number"
                        name={el.key}
                        id={el.key}
                        placeholder={el.label}
                        className="bg-gray-50 block w-full rounded-md border-0 px-1 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="h-56 grid gap-4 place-content-center">
            <div>
              <button
                type="submit"
                className="rounded-full bg-[#dc5a57] px-10 py-3 text-sm font-semibold text-white shadow-sm"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PatientSurgeryCard;
