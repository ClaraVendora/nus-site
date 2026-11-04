export default function Admission() {
    const steps = [
      "Understanding Admission requirements",
      "Submit application online",
      "Upload supporting documents",
      "Make application fee payment",
      "Check application status",
    ];
    return (
      <div>
        <h2>Admission</h2>
        <ul>
          {steps.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    );
  }