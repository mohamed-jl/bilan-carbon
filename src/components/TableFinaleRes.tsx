'use client';

import useData from '@/utils/data';

export default function EmissionsTable() {
  const { scopes , results} = useData();

  const safeSum = (arr: any[] | undefined) => {
    return Array.isArray(arr)
      ? (arr.reduce((acc, val) => acc + Number(val || 0), 0) / 1000)
      : 0;
  };

  if (!results || !results.scope1 || !results.scope2 || !results.scope3) {
    return <div className="p-5 text-3xl text-green-900">data not available</div>;
  }

  const totalTunis =
    Number(safeSum(results.scope1.data.tunis)) +
    Number(safeSum(results.scope2.data.tunis)) +
    Number(safeSum(results.scope3.data.tunis));

  const totalSfax =
    Number(safeSum(results.scope1.data.sfax)) +
    Number(safeSum(results.scope2.data.sfax)) +
    Number(safeSum(results.scope3.data.sfax));

  const totalSousse =
    Number(safeSum(results.scope1.data.sousse)) +
    Number(safeSum(results.scope2.data.sousse)) +
    Number(safeSum(results.scope3.data.sousse));

  return (
    <div className=" flex flex-row items-center gap-5 mt-12">
        <p className='text-lg p-6 text-gray-800 w-150'>Ce tableau présente la répartition des émissions de dioxyde de carbone par scope et par site. Il indique les quantités, exprimées en tonnes équivalent CO₂ (tCO₂e), générées par les différents sites de la société Technique inspection et contrôle : Tunis, Sfax et Sousse,  selon les trois scopes définis dans le cadre du bilan carbone.</p>
      <table className="table-fixed border-collapse border-2 border-green-900 w-auto font-bold bg-white/70">
        <thead>
          <tr>
            <th className="border-2 border-green-900 w-64 px-3 py-2 text-center">
              Catégories
            </th>
            <th className="border-2 border-green-900 w-48 px-3 py-2 text-center">
              Quantité d'émission en tCO₂e - Tunis
            </th>
            <th className="border-2 border-green-900 w-48 px-3 py-2 text-center">
              Quantité d'émission en tCO₂e - Sfax
            </th>
            <th className="border-2 border-green-900 w-48 px-3 py-2 text-center">
              Quantité d'émission en tCO₂e - Sousse
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              Résultat du Scope 1
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope1.data.tunis) || '0'}
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope1.data.sfax) || '0'}
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope1.data.sousse) || '0'}
            </td>
          </tr>
          <tr>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              Résultat du Scope 2
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope2.data.tunis) || '0'}
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope2.data.sfax) || '0'}
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope2.data.sousse) || '0'}
            </td>
          </tr>
          <tr>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              Résultat du Scope 3
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope3.data.tunis) || '0'}
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope3.data.sfax) || '0'}
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {safeSum(results.scope3.data.sousse) || '0'}
            </td>
          </tr>
          <tr>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              Résultat Global
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {totalTunis}
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {totalSfax}
            </td>
            <td className="border-2 border-green-900 px-3 py-2 text-center">
              {totalSousse}
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}
