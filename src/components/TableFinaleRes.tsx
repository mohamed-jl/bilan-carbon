'use client';

import useData from '@/utils/data';

export default function EmissionsTable() {
    const { scopes } = useData();

    const safeSum = (arr: any[] | undefined) => {
        return Array.isArray(arr)
            ? arr.reduce((acc, val) => acc + Number(val || 0), 0)
            : 0;
    };

    if (!scopes || !scopes.scope1 || !scopes.scope2 || !scopes.scope3) {
        return <div className="p-5 text-3xl text-green-900">data not available</div>;
    }

    const totalTunis =
        safeSum(scopes.scope1.data.tunis) +
        safeSum(scopes.scope2.data.tunis) +
        safeSum(scopes.scope3.data.tunis);

    const totalSfax =
        safeSum(scopes.scope1.data.sfax) +
        safeSum(scopes.scope2.data.sfax) +
        safeSum(scopes.scope3.data.sfax);

    const totalSousse =
        safeSum(scopes.scope1.data.sousse) +
        safeSum(scopes.scope2.data.sousse) +
        safeSum(scopes.scope3.data.sousse);

    return (
        <div className="flex flex-col">
            <div className="flex">
                <div className="px-3 py-2 text-center w-64"></div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">Tunis</div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">Sfax</div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">Sousse</div>
            </div>

            {/* Scope 1 */}
            <div className="flex">
                <div className="px-3 py-2 text-center border border-green-900 w-64">Emission CO2e Scope 1</div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope1.data.tunis) || 'N/A'}
                </div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope1.data.sfax) || 'N/A'}
                </div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope1.data.sousse) || 'N/A'}
                </div>
            </div>

            {/* Scope 2 */}
            <div className="flex">
                <div className="px-3 py-2 text-center border border-green-900 w-64">Emission CO2e Scope 2</div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope2.data.tunis) || 'N/A'}
                </div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope2.data.sfax) || 'N/A'}
                </div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope2.data.sousse) || 'N/A'}
                </div>
            </div>

            {/* Scope 3 */}
            <div className="flex">
                <div className="px-3 py-2 text-center border border-green-900 w-64">Emission CO2e Scope 3</div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope3.data.tunis) || 'N/A'}
                </div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope3.data.sfax) || 'N/A'}
                </div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">
                    {safeSum(scopes.scope3.data.sousse) || 'N/A'}
                </div>
            </div>

            {/* Global Total */}
            <div className="flex">
                <div className="px-3 py-2 text-center border border-green-900 w-64">Emission Global</div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">{totalTunis}</div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">{totalSfax}</div>
                <div className="px-3 py-2 text-center border border-green-900 w-24">{totalSousse}</div>
            </div>
        </div>
    );
}
