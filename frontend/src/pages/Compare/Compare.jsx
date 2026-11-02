import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Plus, X } from 'lucide-react';

const AVAILABLE_CAREERS = [
  'Software Engineer',
  'AI Engineer',
  'Data Scientist',
  'Data Analyst',
  'Cybersecurity Engineer',
  'Cloud Engineer',
];

export default function Compare() {
  const [selectedCareers, setSelectedCareers] = useState([]);
  const [compareData, setCompareData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAddCareer = (career) => {
    if (!selectedCareers.includes(career) && selectedCareers.length < 4) {
      setSelectedCareers([...selectedCareers, career]);
    }
  };

  const handleRemoveCareer = (career) => {
    setSelectedCareers(selectedCareers.filter((c) => c !== career));
    setCompareData(null);
  };

  const handleCompare = async () => {
    if (selectedCareers.length === 0) {
      setError('Please select at least one career to compare');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8000/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ careers: selectedCareers }),
      });

      if (!response.ok) {
        throw new Error(`Failed to compare careers: ${response.statusText}`);
      }

      const data = await response.json();
      setCompareData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getStressColor = (stress) => {
    if (stress <= 3) return 'text-[#2f6a4a]';
    if (stress <= 6) return 'text-[#8b4e2a]';
    return 'text-[#b9544f]';
  };

  const getBalanceColor = (balance) => {
    if (balance >= 7) return 'text-[#2f6a4a]';
    if (balance >= 5) return 'text-[#8b4e2a]';
    return 'text-[#b9544f]';
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] px-6 pb-20 pt-20 text-[#1f1b18]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e8d7c8] bg-[#f5ebdf] px-3 py-1 text-sm font-medium text-[#7b4d39]">
            <span className="text-lg">⚖️</span>
            Compare Careers
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#d9c9bb] bg-[#fffaf4] px-4 py-2 text-sm font-semibold text-[#2b241f] transition hover:border-[#c7774b] hover:bg-[#f6ebdf]"
          >
            <span aria-hidden="true">←</span>
            Go to Home
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold text-[#1f1b18] sm:text-6xl">Compare Careers</h1>
          <p className="max-w-4xl text-lg text-[#5d564f]">
            Select up to 4 careers to see a side-by-side comparison of salary, stress, work-life balance, and market demand.
          </p>
        </div>

        <div className="mb-12 rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]">
          <h2 className="mb-6 text-3xl font-bold text-[#1f1b18]">Select Careers to Compare</h2>

          <div className="mb-8">
            <p className="mb-4 text-[#5d564f]">Click to add careers:</p>
            <div className="flex flex-wrap gap-3">
              {AVAILABLE_CAREERS.map((career) => (
                <button
                  key={career}
                  onClick={() => handleAddCareer(career)}
                  disabled={selectedCareers.includes(career) || selectedCareers.length >= 4}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    selectedCareers.includes(career)
                      ? 'cursor-not-allowed border border-[#d7b39b] bg-[#f3d9c5] text-[#8b4e2a] opacity-70'
                      : selectedCareers.length >= 4
                        ? 'cursor-not-allowed border border-[#e7dccd] bg-[#f5efe7] text-[#7b6b60]'
                        : 'cursor-pointer border border-[#d7b39b] bg-[#f5efe7] text-[#2d241e] hover:border-[#c7774b] hover:bg-[#f3e5d8]'
                  }`}
                >
                  <Plus className="mr-2 inline" size={16} />
                  {career}
                </button>
              ))}
            </div>
          </div>

          {selectedCareers.length > 0 && (
            <div>
              <p className="mb-4 text-[#5d564f]">Selected careers ({selectedCareers.length}/4):</p>
              <div className="mb-6 flex flex-wrap gap-3">
                {selectedCareers.map((career) => (
                  <div
                    key={career}
                    className="flex items-center gap-2 rounded-full border border-[#d7b39b] bg-[#f3d9c5] px-4 py-2 text-sm font-semibold text-[#8b4e2a]"
                  >
                    {career}
                    <button
                      onClick={() => handleRemoveCareer(career)}
                      className="rounded-full p-1 transition hover:bg-[#e8c8ad]"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleCompare}
                disabled={loading}
                className="w-full rounded-2xl bg-[#2d241e] px-6 py-3 text-base font-semibold text-[#f8f1ea] transition hover:bg-[#3b2e28] disabled:opacity-60"
              >
                {loading ? 'Comparing...' : 'Compare Careers'}
              </button>
            </div>
          )}

          {selectedCareers.length === 0 && !compareData && (
            <div className="mt-6 rounded-2xl border border-[#eadcc9] bg-[#f5efe7] p-4 text-center text-[#5d564f]">
              Select careers above to start comparing
            </div>
          )}

          {error && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#f0cbd0] bg-[#fbecef] p-4 text-[#8a4650]">
              <AlertCircle className="mt-0.5 flex-shrink-0" size={20} />
              <p>{error}</p>
            </div>
          )}
        </div>

        {compareData && (
          <div className="space-y-8">
            {compareData.summary && compareData.summary.length > 0 && (
              <div className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]">
                <h3 className="mb-4 text-2xl font-bold text-[#1f1b18]">Summary</h3>
                <ul className="space-y-3">
                  {compareData.summary.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#4c443f]">
                      <span className="mt-1 text-[#8b4e2a]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {compareData.careers && compareData.careers.length > 0 && (
              <div className="overflow-hidden rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-8 shadow-[0_18px_40px_rgba(93,86,79,0.08)]">
                <h3 className="mb-6 text-2xl font-bold text-[#1f1b18]">Career Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] border-separate border-spacing-y-3">
                    <thead>
                      <tr>
                        <th className="pb-3 text-left text-sm font-semibold uppercase tracking-[0.15em] text-[#7b6b60]">Metric</th>
                        {compareData.careers.map((career) => (
                          <th key={career.career} className="pb-3 text-center text-base font-semibold text-[#1f1b18]">
                            {career.career}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="rounded-2xl bg-[#f5efe7]">
                        <td className="rounded-l-2xl px-4 py-4 text-sm font-semibold text-[#352f2a]">Starting Salary</td>
                        {compareData.careers.map((career) => (
                          <td key={career.career} className="px-4 py-4 text-center text-sm font-semibold text-[#2f6a4a]">
                            {career.salary || '—'}
                          </td>
                        ))}
                      </tr>

                      <tr className="rounded-2xl bg-[#f5efe7]">
                        <td className="rounded-l-2xl px-4 py-4 text-sm font-semibold text-[#352f2a]">Stress Level</td>
                        {compareData.careers.map((career) => (
                          <td key={career.career} className="px-4 py-4 text-center text-sm font-semibold">
                            <span className={getStressColor(career.stress)}>{career.stress ? `${career.stress}/10` : '—'}</span>
                          </td>
                        ))}
                      </tr>

                      <tr className="rounded-2xl bg-[#f5efe7]">
                        <td className="rounded-l-2xl px-4 py-4 text-sm font-semibold text-[#352f2a]">Work-Life Balance</td>
                        {compareData.careers.map((career) => (
                          <td key={career.career} className="px-4 py-4 text-center text-sm font-semibold">
                            <span className={getBalanceColor(career.balance)}>{career.balance ? `${career.balance}/10` : '—'}</span>
                          </td>
                        ))}
                      </tr>

                      <tr className="rounded-2xl bg-[#f5efe7]">
                        <td className="rounded-l-2xl px-4 py-4 text-sm font-semibold text-[#352f2a]">Market Demand</td>
                        {compareData.careers.map((career) => (
                          <td key={career.career} className="px-4 py-4 text-center text-sm font-semibold text-[#486b8c]">
                            {career.demand || '—'}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
