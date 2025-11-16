export default function ResumePreview({ data }: { data: Record<string,string>}) {
  return (
    <div className="paper">
      <h1 className="text-2xl font-bold">{data.name || "Your Name"}</h1>
      <div className="text-sm text-slate-700">{data.title || "Role / Title"}</div>
      <div className="text-xs text-slate-600">
        {data.email} {data.phone ? "• " + data.phone : ""}
      </div>

      <section className="mt-4">
        <h2 className="font-semibold">Summary</h2>
        <p className="text-sm whitespace-pre-wrap">{data.summary}</p>
      </section>

      <section className="mt-3">
        <h2 className="font-semibold">Skills</h2>
        <p className="text-sm">{data.skills}</p>
      </section>

      <section className="mt-3">
        <h2 className="font-semibold">Experience</h2>
        <p className="text-sm whitespace-pre-wrap">{data.experience}</p>
      </section>

      <section className="mt-3">
        <h2 className="font-semibold">Education</h2>
        <p className="text-sm whitespace-pre-wrap">{data.education}</p>
      </section>
    </div>
  )
}
