import FormX from '@/app/component/form/formX'
import FormA from '@/app/component/form/formA'
import FormB from '@/app/component/form/formB'
import FormC from '@/app/component/form/formC'
import FormD from '@/app/component/form/formD'
export default function Home() {
  return (
    <div>
      <main className="bg-[#27413e] flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#F2F2F2] artboard artboard-horizontal phone-10 w-10/12 rounded p-8">
          <FormA />
        </div>
      </main>
      <main className="bg-[#27413e] flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#F2F2F2] artboard artboard-horizontal phone-10 w-10/12 rounded p-8">
          <FormB />
        </div>
      </main>
      <main className="bg-[#27413e] flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#F2F2F2] artboard artboard-horizontal phone-10 w-10/12 rounded p-8">
          <FormC />
        </div>
      </main>
      <main className="bg-[#27413e] flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-[#F2F2F2] artboard artboard-horizontal phone-10 w-10/12 rounded p-8">
          <FormD />
        </div>
      </main>
    </div>
  );
}
