const FeatureTable = ({ featureData }) => {
  if (!featureData || Object.keys(featureData).length === 0) {
    return <p className="text-gray-500">No features available to display.</p>;
  }

  const renderTableForCategory = (category, features) => (
    <div key={category} className="mb-8">
      <h3 className="text-xl font-semibold">{category}</h3>
      <table className="min-w-full table-auto border-collapse mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border text-left">Feature</th>
            <th className="px-4 py-2 border text-left">Values</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => {
            const featureName = Object.keys(feature)[0];
            const featureValues = feature[featureName]?.join(", ") || "N/A";

            return (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{featureName}</td>
                <td className="px-4 py-2">{featureValues}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="mt-4">
      {Object.keys(featureData).map((category) =>
        renderTableForCategory(category, featureData[category])
      )}
    </div>
  );
};

export default FeatureTable;
